import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const UserCard = ({url, imgProfile, name, phone }) => {
  return (
    <Link href={url} className='link-rm-line color-text-primary'>
      <div className='d-flex flex-column align-items-center flex-sm-row justify-content-between'>
        <div className='d-flex flex-column flex-sm-row align-items-center gap-3'>
          <div>
            {imgProfile}
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center align-items-md-start'>
            <span className='fw-semibold color-text-6'>{name}</span>
            <span className='fw-light bg-grey-light'>{phone}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const UserCardHistoryDecreaseAmount = ({ img_path, alt, nameRecipient, nameSender, time_transaction, type_transaction, amount }) => {
  return (
    <div className='d-flex flex-column gap-3 gap-sm-0 flex-sm-row justify-content-between shadow-sm p-3'>
      <div className='d-flex gap-3 flex-column flex-sm-row align-items-center'>
        <div>
          <Image className='we-3' src={img_path} alt={alt} width={60} height={60}  />
        </div>
        <div className='d-flex flex-column justify-content-center text-center'>
          <span className='fw-semibold'>{`${nameSender} `} <span className='color-red fw-light'>to</span> {` ${nameRecipient}`}</span>
          <span className='fw-light bg-grey-light'>{type_transaction}</span>
          <span className='fw-light bg-grey-light'>{time_transaction}</span>
        </div>
      </div>
      <div>
        <span className='fw-bold fs-5 color-red'>{amount}</span>
      </div>
    </div>
  );
};

function UserCardHistoryIncreaseAmount({ imgProfile, alt, name, type_transaction, amount, status_transaction, time_transaction }) {
  return (
    <div className='d-flex flex-column gap-3 gap-sm-0 flex-sm-row justify-content-between shadow-sm p-3'>
      <div className='d-flex gap-3'>
        <div>
          {imgProfile}
          {/* <Image className='we-3' src={img_path} alt={alt} width={60} height={60}  /> */}
        </div>
        <div className='d-flex flex-column justify-content-center'>
          <span className='fw-semibold'>{name}</span>
          <div className='d-flex gap-1 align-items-center justify-content-center'>
            <span className='fw-light bg-grey-light'>{type_transaction}</span>
            <span className='fw-light bg-grey-light'>•</span>
            <span className='fw-light fs-6 bg-grey-light'>{time_transaction}</span>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column'>
        <span className={`fw-bold fs-5 ${(status_transaction === 'success'&&type_transaction ==='accept') ? 'color-green' : status_transaction === 'pending' ? 'text-warning' : 'color-red'}`}>{amount}</span>
        <span className={`fw-light text-end ${(status_transaction === 'success'&&type_transaction ==='accept') || (status_transaction === 'success'&&type_transaction ==='topup') ? 'text-success' : status_transaction === 'pending' ? 'text-warning' : 'text-danger'}`}>{`${status_transaction}`}</span>

      </div>
    </div>
  );
}

export default UserCardHistoryIncreaseAmount;