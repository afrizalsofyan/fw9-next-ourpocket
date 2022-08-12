import React, { useState } from 'react';
import NavbarDashboard from '../../../../../components/NavbarDashboard';
import { Container, Form, Row, InputGroup } from 'react-bootstrap';
import SideBarMenu from '../../../../../components/SideBarMenu';
import FooterDashboard from '../../../../../components/FooterDashboard';
import ContentLayout from '../../../../../components/ContentLayout';
import { UserCard } from '../../../../../components/UserCard';
import { FiEdit2 } from 'react-icons/fi';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ButtonSubmit } from '../../../../../components/ButtonAuth';
import { useDispatch, useSelector } from 'react-redux';
// import { addAmount, addNote, addTime, addTypeTransaction } from '../../redux/reducers/input';
// import { getProfile } from '../../../../redux/actionAsync/profile';
import { convertMoney } from '../../../../../components/DetailTransferList';
// import { getUser } from '../../redux/actionAsync/user';


const amountSchema = Yup.object().shape({
  amount: Yup.number().typeError('Field must number!!!').min(10000).required(),
  notes: Yup.string()
});

export const AmountForm = ({ errors, handleSubmit, handleChange }) => {
  // const dispatch = useDispatch();
  // const token = useSelector((state)=>state.auth.token);
  // const profile = useSelector((state)=>state.profile.result);
  
  // React.useEffect(()=>{
  //   dispatch(getProfile(token));
  // }, [dispatch, token]);

  // console.log(profile);
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='d-flex flex-column align-items-center'>
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
          {/* <span className='fs-6 fw-bold'>{`${convertMoney(profile?.balance)} Available`}</span> */}
        </div>
        <InputGroup className='search-input'>
          <span className='icon-input'>
            <FiEdit2 size={24} className='color-text-6' />
          </span>
          <Form.Control
            name='note'
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
  // const { id } = useParams();
  // const redirect = useNavigate();
  // const dispatch = useDispatch();
  // const token = useSelector((state)=>state.auth.token);
  // const recipient = useSelector((state)=>state.user.dataUser);
  // const data = {id: id, token: token};
  // React.useEffect(()=>{
  //   dispatch(getUser(data));
  // }, [dispatch, token]);

  const onSubmitAmountNote = (val) => {
    const time = new Date().toLocaleString();
    const typeTransaction = 'transfer';
    if(typeTransaction==='transfer'){
      // dispatch(addTypeTransaction(17));
    }
    if(val.note === ''){
      val.note = '-';
      // dispatch(addAmount(val.amount));
      // dispatch(addTime(time));
      // redirect(`/home/transfer/${id}/transfer-confirmation`);
    } else {
      // dispatch(addNote(val.note));
      // redirect(`/home/transfer/${id}/transfer-confirmation`);
    }
  };
  // console.log(recipient);
  return (
    <>
      <NavbarDashboard />
      <Container as='section' className='g-0'>
        <Row className='pt-5 gx-0 gx-md-3'>
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className='d-flex flex-column gap-4'>
                  <div className='d-flex flex-row justify-content-between'>
                    <span className='fw-bold fs-5 color-text-2'>
                      Transfer Money
                    </span>
                  </div>
                  {/* <UserCard
                    url={'/home/transfer/3'}
                    img_path={Img3}
                    name={`${recipient?.first_name} ${recipient?.last_name}`}
                    phone={recipient?.phone_number[0]}
                  /> */}
                  <div className='text-desc-layout'>
                    <span className='color-text-2'>
                      Type the amount you want to transfer and then press
                      continue to the next steps.
                    </span>
                  </div>
                  <div className='d-flex flex-row justify-content-center'>
                    <div className='w-100'>
                      <Formik
                        onSubmit={onSubmitAmountNote}
                        initialValues={{ amount: '', note: '' }}
                        validationSchema={amountSchema}
                      >
                        {(props) => <AmountForm {...props} />}
                      </Formik>
                    </div>
                  </div>
                  {/* <Form>
                    
                    <div className="d-flex flex-row justify-content-end mt-5 me-5">
                      <Link
                        to={`/home/transfer/${id}/tranferConfirmation`}
                        className="btn px-4 py-2 btn-md btn-prim-1"
                      >
                        Continue
                      </Link>
                    </div>
                  </Form> */}
                </div>
              </>
            }
          />
        </Row>
      </Container>
      <FooterDashboard />
    </>
  );
}

export default TransferAmount;
