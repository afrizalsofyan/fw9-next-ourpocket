import Link from 'next/link';
import React from 'react';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

export const ButtonMenuProfile = ({menuName, suffixIcon, to}) => {
  return (
    <Link
      href={to}
      className='btn bg-btn-profile px-4 py-3'
    >
      <div className='d-flex flex-row justify-content-between'>
        <span className='color-btn-text-profile fw-semibold fs-6'>
          {menuName}
        </span>
        {suffixIcon !== null ? suffixIcon : null}
      </div>
    </Link>
  );
};

export const ButtonSubmit = ({textButton, buttonType, disable}) => {
  return(
    <div className='d-grid'>
      <Button disabled={disable ?? false} className={`${buttonType === 'sm' || buttonType !== null ? 'btn border-0 px-4 py-2 btn-prim-1' : 'btn btn-lg fw-bold btn-prim-1'}`} type='submit'>{textButton}</Button>
    </div>
  );
};

function ButtonAuth({ textButton, link, type }) {
  return (
    <div className='d-grid'>
      <Link href={link} className='btn btn-lg fw-bold btn-prim-1' type={type}>{textButton}</Link>
    </div>
  );
}

export default ButtonAuth;