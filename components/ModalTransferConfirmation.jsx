import { Formik } from 'formik';
import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { InputPin } from './InputField';
import { ButtonSubmit } from './ButtonAuth';
import { useDispatch, useSelector } from 'react-redux';
import { checkPin } from '../redux/actionAsync/profile';
import { useRouter } from 'next/router';
import { transferTransaction } from '../redux/actionAsync/transaction';

const ChangePinForm = ({ errors, handleChange, handleSubmit, show, hide }) => {
  return (

    <Modal
      show={show}
      onHide={hide}
      backdrop='static'
      keyboard={false}
      centered
    >
      <Form noValidate onSubmit={handleSubmit} onChange={handleChange}>
        <Modal.Header closeButton className='border-0 cstm-btn-modal'>
          <Modal.Title className='modal-title fw-bold'>
            <span className='color-text-2'>Enter PIN to Transfer</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='w-75'>
            <span className='fnt-desc color-text-2'>
                            Enter your 6 digits PIN for confirmation to continue
                            transferring money.
            </span>
          </div>
          <div className='pt-5 pb-4'>
            <div className='d-flex flex-row pin-wrapper gap-2 gap-md-2 gap-lg-4 justify-content-center'>
              <InputPin
                name={`pin[${0}]`}
                type='text'
                // isInvalid={!!errors.pin}
              />
              <InputPin
                name={`pin[${1}]`}
                type='text'
                // isInvalid={!!errors.pin}
              />
              <InputPin
                name={`pin[${2}]`}
                type='text'
                // isInvalid={!!errors.pin}
              />
              <InputPin
                name={`pin[${3}]`}
                type='text'
                // isInvalid={!!errors.pin}
              />
              <InputPin
                name={`pin[${4}]`}
                type='text'
                // isInvalid={!!errors.pin}
              />
              <InputPin
                name={`pin[${5}]`}
                type='text'
                // isInvalid={!!errors.pin}
              />
            </div>
          </div>
          <span className='fs-6 py-5 text-danger'>{errors.pin}</span>
        </Modal.Body>
        <Modal.Footer className='border-0 modal-footer-position'>

          <div className='d-flex flex-column justify-content-center flex-sm-row gap-3'>
            <ButtonSubmit textButton='Continue' />
          </div>
        </Modal.Footer>
      </Form>
    </Modal >
  );
};

function ModalTransferConfirmation({ show, onHide, id }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const errorMsg = useSelector((state)=>state.profile.errorMsgPin);
  const successMsg = useSelector((state)=>state.profile.successMsgPin);
  const errorTransferMsg = useSelector((state)=>state.transaction.errorMsg);
  const [errorPin, setErrorPin] = React.useState();
  const transferData = useSelector((state)=> state.transaction.dataTransfer);
  const data = {recipient: router.query.idUser, amount: transferData.amount, notes: transferData.notes};

  const onSubmitPin = (val) => {
    if(val.pin[0] === '' || val.pin[1] === '' || val.pin[2] === '' || val.pin[3] === '' || val.pin[4] === '' || val.pin[5] === ''){
      window.alert('Value is required');
    } else {
      if (isNaN(parseInt(val.pin[0])) === false && isNaN(parseInt(val.pin[1])) === false && isNaN(parseInt(val.pin[2])) === false && isNaN(parseInt(val.pin[3])) === false && isNaN(parseInt(val.pin[4])) === false && isNaN(parseInt(val.pin[5])) === false){
        const finalPin = val.pin.join('');
        dispatch(checkPin(finalPin));
        if (errorMsg){
          setErrorPin(false);
        } else {
          setErrorPin(true);
        }
      } else {
        window.alert('Please input with only number !!!');
      }
    }
  };

  React.useEffect(()=> {
    console.log(errorMsg);
    console.log(successMsg);
    if(errorMsg != null && successMsg == null) {
      router.push('/dashboard/failed-transfer');
    } else if(errorMsg == null && successMsg != null) {
      // console.log('a')
      dispatch(transferTransaction(data));
      router.push('/dashboard/success-transfer');
    }
  }, [errorMsg, successMsg]);
  
  return (
    <Formik
      onSubmit={onSubmitPin}
      initialValues={{
        pin: [''],
      }}
      // validationSchema={changePinSchema}
    >
      {(props) => <ChangePinForm {...props} show={show} hide={onHide} />}
    </Formik>
  );
}

export default ModalTransferConfirmation;
