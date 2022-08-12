import React from 'react';
import { ProfileLayout } from '../../components/ContentLayout';
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import InputField from '../../components/InputField';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actionAsync/profile';

const changePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().min(4).required(),
  newPassword: Yup.string().min(4).required(),
  repeatPassword: Yup.string().min(4).required(),
});

export const ChangePasswordForm = ({ errors, handleSubmit, handleChange }) => {
  const [showPass, setShowPass] = React.useState(false);
  const [showNewPass, setShowNewPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange}>
      <div className='d-flex flex-row justify-content-center py-2'>
        <div className='d-flex flex-column justify-content-center gap-4 w-75'>
          <InputField
            name='currentPassword'
            icon={<FiLock size={24} className='color-text-6' />}
            type={showPass ? 'text' : 'password'}
            placeholder={'Current password'}
            suffixIcon={
              showPass ? (
                <FiEyeOff
                  size={24}
                  className='bg-grey-light'
                  onClick={() => setShowPass(!showPass)}
                />
              ) : (
                <FiEye
                  size={24}
                  className='bg-grey-light'
                  onClick={() => setShowPass(!showPass)}
                />
              )
            }
            isInvalid={!!errors.currentPass}
            validation={
              <Form.Control.Feedback type='invalid'>
                {errors.currentPass}
              </Form.Control.Feedback>
            }
          />
          <InputField
            name='newPassword'
            icon={<FiLock size={24} className='color-text-6' />}
            type={showNewPass ? 'text' : 'password'}
            placeholder={'New password'}
            suffixIcon={
              showNewPass ? (
                <FiEyeOff
                  size={24}
                  className='bg-grey-light'
                  onClick={() => setShowNewPass(!showNewPass)}
                />
              ) : (
                <FiEye
                  size={24}
                  className='bg-grey-light'
                  onClick={() => setShowNewPass(!showNewPass)}
                />
              )
            }
            isInvalid={!!errors.newPass}
            validation={
              <Form.Control.Feedback type='invalid'>
                {errors.newPass}
              </Form.Control.Feedback>
            }
          />
          <InputField
            name='repeatPassword'
            icon={<FiLock size={24} className='color-text-6' />}
            type={showConfirmPass ? 'text' : 'password'}
            placeholder={'Repeat new password'}
            suffixIcon={
              showConfirmPass ? (
                <FiEyeOff
                  size={24}
                  className='bg-grey-light'
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                />
              ) : (
                <FiEye
                  size={24}
                  className='bg-grey-light'
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                />
              )
            }
            isInvalid={!!errors.confirmPass}
            validation={
              <Form.Control.Feedback type='invalid'>
                {errors.confirmPass}
              </Form.Control.Feedback>
            }
          />
        </div>
      </div>
      <div className='d-grid px-5 my-5'>
        <ButtonSubmit textButton='Change Password' buttonType={'sm'} />
      </div>
      {/* <div className="d-grid px-5 my-5">
        <Link to="../details" className="btn border-0 px-4 py-2 btn-prim-1">
          <span>Change Password</span>
        </Link>
      </div> */}
    </Form>
  );
};

function ChangePassword() {
  const dispatch = useDispatch();
  const token = useSelector((state)=>state.auth.token);
  const onSubmitPassword = (val) => {
    if (val.newPassword !== val.repeatPassword) {
      window.alert('Repeat password is incorrect');
    } else {
      const data = {token: token, currentPassword: val.currentPassword, newPassword: val.newPassword, repeatPassword: val.repeatPassword};
      // dispatch(changePassword(data));
      // redirect('/home/profile/details');
    }
  };
  return (
    <>
      <ProfileLayout
        headerText='Change Password'
        subtitleText='You must enter your current password and then type your new password twice.'
        child={
          <>
            <Formik
              onSubmit={onSubmitPassword}
              initialValues={{ currentPassword: '', newPassword: '', repeatPassword: '' }}
              validationSchema={changePasswordSchema}
            >
              {(props) => <ChangePasswordForm {...props} />}
            </Formik>
          </>
        }
      />
    </>
  );
}

export default ChangePassword;
