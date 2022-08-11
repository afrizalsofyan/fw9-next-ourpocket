import React from 'react';
import { FiArrowUp, FiPlus } from 'react-icons/fi';
import { Link } from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
// import { getProfile } from '../redux/actionAsync/profile';
import { convertMoney } from './DetailTransferList';

function DashboardBalanceInfo() {
  // const dispatch = useDispatch();
  // const token = useSelector((state)=> state.auth.token);
  // const profile = useSelector((state)=> state.profile.result);
  // React.useEffect(()=>{
  //   dispatch(getProfile(token));
  // }, [dispatch, token]);

  return (
    <div className='d-flex flex-column justify-content-between'>
      <div className='d-flex flex-column flex-sm-row justify-content-between bg-blue rounded-5 shadow-sm pb-4 pb-sm-0'>
        <div className='d-flex flex-row justify-content-center'>
          <div className='d-flex flex-column gap-3 p-4 text-center text-sm-start'>
            <span className='color-text-4 fw-light'>Balance</span>
            <span className='color-text-4 fs-3 fw-bold'>{convertMoney(profile?.balance)}</span>
            <span className='color-text-4 fw-lighter'>
              {profile?.phone_number}
            </span>
          </div>
        </div>
        <div className='d-flex flex-row flex-sm-column justify-content-center gap-4 px-4'>
          <div className='wd-bx-3 bg-color-1 border border-light rounded-3 text-center py-2'>
            <div className=''>
              <Link
                href='/home/transfer'
                className='link-rm-line d-flex flex-column flex-sm-row justify-content-between px-3 align-items-center'
              >
                <FiArrowUp size={24} className='color-text-4' />
                <span className='color-text-4 fw-bold'>Transfer</span>
              </Link>
            </div>
          </div>
          <div className='wd-bx-3 bg-color-1 border border-light rounded-3 text-center py-2'>
            <Link
              href='/home/topup'
              className='link-rm-line d-flex flex-column flex-sm-row justify-content-between px-3 align-items-center'
            >
              <FiPlus size={24} className='color-text-4' />
              <span className='color-text-4 fw-bold'>Top Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardBalanceInfo;