import React from 'react';
import { Button, Form } from 'react-bootstrap';
import ContentLayout from '../../components/ContentLayout';
import UserCardHistoryIncreaseAmount, {UserCardHistoryDecreaseAmount} from '../../components/UserCard';
import {useDispatch, useSelector} from 'react-redux';
import { historyTransaction } from '../../redux/actionAsync/transaction';
import { convertMoney } from '../../components/DetailTransferList';
import { FiSearch } from 'react-icons/fi';
import { Formik } from 'formik';
import { ButtonSubmit } from '../../components/ButtonAuth';
import Image from 'next/image';
import { FcManager } from 'react-icons/fc';
import DashboardLayout from '../../components/DashboardLayout';

function History() {
  const dispatch = useDispatch();
  const transaction = useSelector((state)=>state.transaction.results);
  const historyData = transaction?.data;
  const infoData = transaction?.pagination;
  const [limitFilter, setLimitFilter] = React.useState();
  const [filterType, setFilterType] = React.useState();
  const [page, setPage] = React.useState(1);
  const data = {page: page, limit: limitFilter == 1 ? 3 : limitFilter == 2 ? 5 : limitFilter == 3 ? 7 : limitFilter == 4 ? 10 : 3, filter: filterType == 1 ? 'WEEK': filterType == 2 ? 'MONTH' : filterType == 3 ? 'YEAR' : 'MONTH'};
  console.log(limitFilter)
  const handleLimit = (e) => {
    setLimitFilter(e.target.value);
  }

  const handleFilter = (e)=>{
    setFilterType(e.target.value)
  }
  const onResetParam = () => {
    setLimitFilter(0);
    setFilterType(0);
  };

  const onNextPage = () => {
    setPage(page+1)
  }

  const onPrevPage = () => {
    setPage(page-1)
  }

  React.useEffect(()=>{
    dispatch(historyTransaction(data));
  }, [dispatch, page, limitFilter, filterType]);
  return (
    <>
      <DashboardLayout>
        <ContentLayout
        child={
          <>
            <div className='d-flex flex-column gap-4'>
              <h1 className='fw-bold fs-4 color-text-2'>Transaction History</h1>
              <div className='d-flex flex-column gap-3 px-md-4 color-text-6'>
                
                <div className='d-flex flex-column gap-3'>
                  
                  <div className='d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-between'>
                    <div className='d-flex flex-column flex-md-row w-50 gap-3'>
                    <Form.Select name='limit' className='shadow-none' value={limitFilter} onChange={handleLimit}>
                      <option value={0}>Select Limit</option>
                      <option value={1}>3</option>
                      <option value={2}>5</option>
                      <option value={3}>7</option>
                      <option value={4}>10</option>
                    </Form.Select>
                    <Form.Select name='filter' className='shadow-none' value={filterType} onChange={handleFilter}>
                      <option value={0}>Select Filter</option>
                      <option value={1}>week</option>
                      <option value={2}>mount</option>
                      <option value={3}>year</option>
                    </Form.Select>
                    </div>
                    <Button disabled={limitFilter === undefined ? true : limitFilter === 0 ? true : limitFilter == 1 ? true : false} className='btn bg-color-1 color-text-4 border-0 shadow-none' onClick={onResetParam}>Reset</Button>
                  </div>
                </div>
                <span className='bg-grey-light fw-bold color-text-6 mt-3'>
                  {
                    filterType == null || filterType == 0 ? 'This All History' : `Filter by ${filterType == 1 ? 'Week': filterType == 2 ? 'Month' : filterType == 3 ? 'Year' : 'Month'}`
                  }
                </span>
                <div className="height-fixed-layout overflow-auto ">
                  {historyData?.map((data)=>{
                    return(
                      <>
                        <div key={data?.id}>
                        <UserCardHistoryIncreaseAmount img_path={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${data.image}`} alt={`${data.fullName}`} name={data.fullName} type_transaction={data.type} amount={`${data.type === 'send' || data.type === 'payment' ? '-' : '+'} ${convertMoney(data.amount)}`} status_transaction={data.status} time_transaction={new Date(data.createdAt).toLocaleString()} imgProfile={
                          data.image != null ? 
                          <Image className='we-3' src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${data.image}`} alt={data.fullName} width={60} height={60} /> : <FcManager size={60}/>
                        }/>  
                          {/* {data.type === 'accept' ? <UserCardHistoryDecreaseAmount img_path={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${data.image}`} alt={`${data.fullName}`} nameSender={data.sender} nameRecipient={data.recipient} type_transaction={data.type} amount={`- ${convertMoney(data.amount)}`}/> :} */}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className='d-flex justify-content-center align-items-center gap-4'>
                <Button 
                disabled={infoData?.page === 1} 
                onClick={onPrevPage}
                className='btn px-3 py-2'>Prev</Button>
                <span className='text-color-2 fs-4 text-decoration-underline'>{infoData?.page}</span>
                <Button
                disabled={infoData?.page === infoData?.totalPage} 
                onClick={onNextPage} 
                className='btn px-3 py-2'>Next</Button>
              </div>
            </div>
          </>
        }
      />
      </DashboardLayout>
    </>
  );
}

export default History;
