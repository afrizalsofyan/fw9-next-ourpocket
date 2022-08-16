import React from 'react';
import { Card } from 'react-bootstrap';

export const CardHistoryDashboard = ({imgUrl, name, type, status, amount}) => {
  return (
    <div className='d-flex flex-column gap-3 gap-sm-0 flex-sm-row justify-content-between shadow-sm p-3'>
      <div className='d-flex gap-3 w-100'>
        <div>
          {imgUrl}
        </div>
        <div className='d-flex flex-column justify-content-center'>
          <span className='fw-semibold text-break'>{name}</span>
          <span className='fw-light bg-grey-light'>
            {type}
          </span>
        </div>
      </div>
      <div className='w-50 d-flex align-items-center justify-content-end'>
        <span className={`text-end fw-bold fs-6 ${status === 'failed' ? 'color-red' : 'color-green'}`}>
          {type === 'transfer' ? `- ${amount}` : `+ ${amount}`}
        </span>
      </div>
    </div>
  );
};

export const DetailCardProfile = ({ title, content, cardButton }) => {
  return (
    <>
      <div className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
        <div className='d-flex flex-column gap-2'>
          <span className='fnt-desc2'><span className='color-text-2'>{title}</span></span>
          <span className='fw-bold fs-5 color-text-6'>{content}</span>
        </div>
        {cardButton !== null ? cardButton : null}
      </div>
    </>
  );
};

function CardDetailList({ title, content }) {
  return (
    <>
      <Card className='border-0 shadow-sm'>
        <Card.Body>
          <div className='d-flex flex-column gap-2'>
            <span className='fw-normal color-text-2'>{title}</span>
            <span className='fw-bold color-text-6'>{content}</span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardDetailList;