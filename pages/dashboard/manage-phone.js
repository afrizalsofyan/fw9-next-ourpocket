import React from 'react';
import { ProfileLayout } from '../../components/ContentLayout';
import Link from 'next/link';
import { FiEdit2, FiTrash } from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ManagePhone() {
  const profile = useSelector((state) => state.user?.results);
  return (
    <>
      <ProfileLayout
        headerText='Manage Phone Number'
        subtitleText='You can only delete the phone number and then you must add another phone number.'
        child={
          <>
            <div className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
              <div className='d-flex flex-column gap-2'>
                <span className='fnt-desc2'>
                  <span className='color-text-2'>Phone Number</span>
                </span>
                <span className='fw-bold fs-5 color-text-6'>
                  {profile?.noTelp == null ? '-' : profile?.noTelp}
                </span>
              </div>
              
            </div>
            <div className='d-grid px-5 my-5'>
              <Link href='/dashboard/profile/edit-phone'>
                <a className='btn border-0 px-4 py-2 btn-prim-1'>{profile?.noTelp == null ? 'Add new phone' : 'Edit phone number'}</a>
              </Link>
            </div>
          </>
        }
      />
    </>
  );
}

export default ManagePhone;
