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
import { http3 } from '../../helpers/http3';
import cookies from 'next-cookies';
import { useRouter } from 'next/router';


function History(props) {
  const router = useRouter();
  console.log(router.query);
  const [data, setData] = React.useState(props.data);
  const [infoData, setInfoData] = React.useState(props.pagination);
  const [limitFilter, setLimitFilter] = React.useState();
  const [filterType, setFilterType] = React.useState();
  const [page, setPage] = React.useState(infoData.page);

  const handleLimit = (e) => {
    setLimitFilter(e.target.value);
    router.push(`/dashboard/history?page=${parseInt(router.query.page, 10)}&limit=${e.target.value??5}&filter=${router.query.filter??'MONTH'}`);
  };

  const handleFilter = (e)=>{
    setFilterType(e.target.value);
    router.push(`/dashboard/history?page=${parseInt(router.query.page, 10)}&limit=${router.query.limit??5}&filter=${e.target.value??'MONTH'}`);
  };
  const onResetParam = () => {
    // setLimitFilter(0);
    // setFilterType(0);
    router.push('/dashboard/history?page=1&limit=5&filter=MONTH');
  };

  const onNextPage = () => {
    // setData(props.data)
    // setInfoData(props.pagination)
    router.push(`/dashboard/history?page=${parseInt(router.query.page, 10)+1}&limit=${router.query.limit??5}&filter=${router.query.filter??'MONTH'}`);
  };

  const onPrevPage = () => {
    // setPage(page-1)
    
    router.push(`/dashboard/history?page=${parseInt(router.query.page, 10)-1}&limit=${router.query.limit??5}&filter=${router.query.filter??'MONTH'}`);
  };

  // React.useEffect(()=>{
  //   setData(props.data)
  //   setInfoData(props.pagination)
    
  //   // dispatch(historyTransaction(data));
  //   // setData(props.data);
  //   // setInfoData(props.pagination);
  //   router.push(`/dashboard/history?page=${router.query.page}&limit=${limitFilter??5}&filter=${filterType??'MONTH'}`)
  // }, [limitFilter, filterType, router.query.page, infoData, data]);
  return (
    <>
      <DashboardLayout>
        <ContentLayout
          child={
            <>
              <div className='d-flex flex-column gap-4'>
                <h1 className='fw-bold fs-4 color-text-2'>Transaction History</h1>
                <div className='d-flex flex-column gap-3 color-text-6'>
                
                  <div className='d-flex flex-column gap-3'>
                  
                    <div className='d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-between'>
                      <div className='d-flex flex-column flex-md-row w-50 gap-3'>
                        <Form.Select name='limit' className='shadow-none' value={limitFilter} onChange={handleLimit}>
                          <option value={100}>Select Limit</option>
                          <option value={5}>5</option>
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                        </Form.Select>
                        <Form.Select name='filter' className='shadow-none' value={filterType} onChange={handleFilter}>
                          <option value={0}>Select Filter</option>
                          <option value={'WEEK'}>week</option>
                          <option value={'MONTH'}>mount</option>
                          <option value={'YEAR'}>year</option>
                        </Form.Select>
                      </div>
                      <Button disabled={limitFilter === undefined ? true : limitFilter === 0 ? true : limitFilter == 1 ? true : false} className='btn bg-color-1 color-text-4 border-0 shadow-none' onClick={onResetParam}>Reset</Button>
                    </div>
                  </div>
                  {/* <span className='bg-grey-light fw-bold color-text-6 mt-3'>
                  {
                    filterType == null || filterType == 0 ? 'This All History' : `Filter by ${filterType == 1 ? 'Week': filterType == 2 ? 'Month' : filterType == 3 ? 'Year' : 'Month'}`
                  }
                </span> */}
                  <div className='height-fixed-layout overflow-auto px-md-2'>
                    {props.data.map((data)=>{
                      return(
                        <>
                          <div key={data.id} className='py-4 px-2'>
                            <UserCardHistoryIncreaseAmount img_path={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${data.image}`} alt={`${data.fullName}`} name={data.fullName} type_transaction={data.type} amount={`${data.type === 'send' || data.type === 'payment' ? '-' : '+'} ${convertMoney(data.amount)}`} status_transaction={data.status} time_transaction={new Date(data.createdAt).toLocaleString()} imgProfile={
                              data.image != null ? 
                                <Image className='we-3' src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${data.image}`} alt={data.fullName} width={55} height={60} /> : <FcManager size={60}/>
                            }/>  
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-4'>
                  <Button 
                    disabled={props.pagination.page === 1} 
                    onClick={onPrevPage}
                    className='btn px-3 py-2'>Prev</Button>
                  <span className='text-color-2 fs-4 text-decoration-underline'>{props.pagination.page}</span>
                  <Button
                    disabled={props.pagination.page == props.pagination.totalPage} 
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


//SSR
export async function getServerSideProps(context) {
  // console.log(context.query)
  const cookieData = cookies(context);
  const {data} = await http3().get(`/transaction/history?page=${context.query.page}&limit=${context.query.limit}&filter=${context.query.filter}`, {
    headers: {
      Authorization: `Bearer ${cookieData.token}`
    }
  });
  // console.log(data)
  return {
    props: {
      data: data.data,
      pagination: data.pagination
    }, // will be passed to the page component as props
  };
}

export default History;
