import React from 'react';
import { Dropdown } from 'react-bootstrap';

export const NotificationCardHeader = ({title}) => {
  return(
    <>
      <Dropdown.Header>{title}</Dropdown.Header>
    </>
  );
};

export const NotificationCardItem = ({eventKey, icon, descTransction, amount}) => {
  return (
    <>
      <Dropdown.Item eventKey={eventKey}>
        <div className='card border-0 shadow-sm cstm-card'>
          <div className='card-body'>
            <div className='d-flex flex-row gap-3'>
              <div>
                {icon}
              </div>
              <div className='d-flex flex-column gap-2'>
                <span className='fnt-desc2'>
                  {descTransction}
                </span>
                <span className='fw-bold'>Rp{amount}</span>
              </div>
            </div>
          </div>
        </div>
      </Dropdown.Item>
    </>
  );
};

// export default NotificationCard