import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import ContentLayout from '../../../../../components/ContentLayout';
import { FiEdit2 } from 'react-icons/fi';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ButtonSubmit } from '../../../../../components/ButtonAuth';
import { useDispatch, useSelector } from 'react-redux';
import { convertMoney } from '../../../../../components/DetailTransferList';
import DashboardLayout from '../../../../../components/DashboardLayout';
import { useRouter } from 'next/router';
import { getProfileOtherUser } from '../../../../../redux/actionAsync/user';
import { FcManager } from 'react-icons/fc';
import Image from 'next/image';
import { addIdRecipient, addTransfer } from '../../../../../redux/reducers/transaction';
import { ThreeCircles } from 'react-loader-spinner';

const amountSchema = Yup.object().shape({
  amount: Yup.number().typeError('Field must number!!!').min(10000).required(),
  notes: Yup.string(),
});

export const AmountForm = ({ errors, handleSubmit, handleChange }) => {
  const profile = useSelector((state)=>state.user.results);
  return (
    <Form
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
      className='d-flex flex-column align-items-center'
    >
      <Form.Group className='form-group d-flex flex-column align-items-center gap-4 w-75'>
        <InputGroup className='input-group'>
          <Form.Control
            name='amount'
            type='number'
            placeholder='0.00'
            isInvalid={!!errors.amount}
            className='form-control border-0 text-center fs-1 amount-input bg-transparent fw-bold'
          />
          <Form.Control.Feedback type='invalid'>
            {errors.amount}
          </Form.Control.Feedback>
        </InputGroup>
        <div className='d-flex flex-column flex-sm-row align-items-center color-text-6'>
          <span className='fs-6 fw-bold'>{`${convertMoney(profile?.balance)} Available`}</span>
        </div>
        <InputGroup className='search-input'>
          <span className='icon-input'>
            <FiEdit2 size={24} className='color-text-6' />
          </span>
          <Form.Control
            name='notes'
            type='text'
            className='ps-5 py-3 notes-custom color-text-6'
            placeholder='Add some notes'
          />
        </InputGroup>
      </Form.Group>
      <div className='ms-auto mt-5 '>
        <ButtonSubmit textButton={'Continue'} />
      </div>
    </Form>
  );
};

function TransferAmount() {
  const router = useRouter();
  console.log(router.query);
  const dispatch = useDispatch();
  const recipient = useSelector((state) => state.profile.resultsOtherUser.data);
  const profile = useSelector((state)=>state.user.results);
  const user = useSelector((state)=> state.auth.results);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    dispatch(getProfileOtherUser(router.query.idUser));
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [dispatch,isLoading, router.query.idUser]);

  const onSubmitAmountNote = (val) => {
    if(val.amount > profile.balance) {
      if(confirm('Your balance is lower than your input amount, do you want topup first?')==true){
        router.push('/dashboard/top-up');
      } else {
        router.push(`/dashboard/transfer/${router.query.idUser}/transfer-amount`);
      }
    } else {
      if (val.notes === '') {
        val.notes = '-';
        dispatch(addTransfer(val));
        // dispatch(addIdRecipient(router.query.idUser));
        // dispatch(getProfileOtherUser(router.query.idUser));
        router.push('/dashboard/transfer/'+router.query.idUser+'/transfer-amount/transfer-confirmation');
      } else {
        dispatch(addTransfer(val));
        // dispatch(addIdRecipient(router.query.idUser));
        // dispatch(getProfileOtherUser(router.query.idUser));
        router.push('/dashboard/transfer/'+router.query.idUser+'/transfer-amount/transfer-confirmation');
      }
    }
   
  };
  return (
    <>
      <DashboardLayout>
        {isLoading == true ? <ThreeCircles height='100' width='100' color='#4fa94d' visible={true} /> : <ContentLayout
          child={
            <>
              <div className='d-flex flex-column gap-4'>
                <div className='d-flex flex-row justify-content-between'>
                  <span className='fw-bold fs-5 color-text-2'>
                    Transfer Money
                  </span>
                </div>
                <div className='d-flex flex-column align-items-center flex-sm-row justify-content-between'>
                  <div className='d-flex flex-column flex-sm-row align-items-center gap-3'>
                    {recipient?.image ? (
                      <Image
                        className='we-3'
                        src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${recipient?.image}`}
                        alt=''
                        width={50}
                        height={50}
                      />
                    ) : (
                      <FcManager size={60} />
                    )}
                    <div className='d-flex flex-column'>
                      <span className='fw-semibold color-text-6'>{`${recipient?.firstName} ${recipient?.lastName}`}</span>
                      <span className='fw-light color-text-6'>{recipient?.noTelp ?? '-'}</span>
                    </div>
                  </div>
                </div>
                <div className='text-desc-layout'>
                  <span className='color-text-2'>
                    Type the amount you want to transfer and then press continue
                    to the next steps.
                  </span>
                </div>
                <div className='d-flex flex-row justify-content-center'>
                  <div className='w-100'>
                    <Formik
                      onSubmit={onSubmitAmountNote}
                      initialValues={{ amount: '', notes: '' }}
                      validationSchema={amountSchema}
                    >
                      {(props) => <AmountForm {...props} />}
                    </Formik>
                  </div>
                </div>
              </div>
            </>
          }
        />}
        
      </DashboardLayout>
    </>
  );
}

export default TransferAmount;
