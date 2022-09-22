import React from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import ContentLayout from '../../../components/ContentLayout';
import { UserCard } from '../../../components/UserCard';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../../../components/DashboardLayout';
import { getAllUser } from '../../../redux/actionAsync/user';
import Image from 'next/image';
import { FcDown, FcManager, FcUp } from 'react-icons/fc';
import Link from 'next/link';
import cookies from 'next-cookies';
import { http3 } from '../../../helpers/http3';
import { useRouter } from 'next/router';

function Transfer(props) {
  const router = useRouter();
  const [limitFilter, setLimitFilter] = React.useState();
  const [sortNameFilter, setSortNameFilter] = React.useState('firstName ASC');
  const [sortPhoneFilter, setSortPhoneFilter] = React.useState('noTelp DESC');
  const [sortValue, setSortValue] = React.useState();
  const [pages, setPages] = React.useState(1);
  const [keyword, setKeyword] = React.useState();

  const handleLimit = (e) => {
    setLimitFilter(e.target.value);
    router.push(`/dashboard/transfer/all-users?page=1&limit=${e.target.value}&search=&sort=firstName%20ASC`);
  };

  const handleSortName = () => {
    if (sortNameFilter === 'firstName ASC') {
      setSortNameFilter('firstName DESC');
      setSortValue(sortNameFilter);
      router.push(`/dashboard/transfer/all-users?page=1&limit=${limitFilter??1000}&search=&sort=firstName DESC`);
    } else if (sortNameFilter === 'firstName DESC') {
      setSortNameFilter('firstName ASC');
      setSortValue(sortNameFilter);
      router.push(`/dashboard/transfer/all-users?page=1&limit=${limitFilter??1000}&search=&sort=firstName ASC`);
    };
    
  };

  const handleSortPhone = () => {
    if (sortPhoneFilter === 'noTelp ASC') {
      setSortPhoneFilter('noTelp DESC');
      setSortValue(sortPhoneFilter);
      router.push(`/dashboard/transfer/all-users?page=1&limit=${limitFilter??1000}&search=&sort=noTelp DESC`);
    } else if (sortPhoneFilter === 'noTelp DESC') {
      setSortPhoneFilter('noTelp ASC');
      setSortValue(sortPhoneFilter);
      router.push(`/dashboard/transfer/all-users?page=1&limit=${limitFilter??1000}&search=&sort=noTelp ASC`);
    }
    // router.push(`/dashboard/transfer/all-users?page=1&limit=${limitFilter??1000}&search=&sort=${sortValue??sortPhoneFilter}`);
  };

  // React.useEffect(() => {
  //   dispatch(getAllUser(data));
  // }, [dispatch, limitFilter, sortValue, pages, keyword]);

  const onNextPage = () => {
    setPages(pages + 1);
    router.push(`/dashboard/transfer/all-users?page=${+router.query.page+1}&limit=${router.query.limit}&search=&sort=${router.query.sort}`);
  };
  const onPrevPage = () => {
    setPages(pages - 1);
    router.push(`/dashboard/transfer/all-users?page=${+router.query.page-1}&limit=${router.query.limit}&search=&sort=${router.query.sort}`);
  };
  const handleSearch = (e) => {
    setKeyword(e.target.value);
    router.push(`/dashboard/transfer/all-users?page=1&limit=1000&search=${e.target.value}&sort=firstName ASC`);
  };
  return (
    <>
      <DashboardLayout>
        <ContentLayout
          child={
            <>
              <div className='d-flex flex-row justify-content-between'>
                <span className='fw-bold fs-5 color-text-2'>
                  Search Receiver
                </span>
              </div>
              <InputGroup className='search-input my-4 '>
                <span className='icon-input'>
                  <FiSearch size={24} />
                </span>
                <Form.Control
                  type='text'
                  className='ps-5 border-1 bg-grey-input rounded-3 py-3 color-text-6 search-focus-input'
                  placeholder='Search by name or phone number'
                  onChange={handleSearch}
                />
              </InputGroup>
              {/* img_path={Img1} */}
              <div className='d-flex flex-column gap-3 mb-4'>
                <div className='d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-between'>
                  <div className='d-flex flex-column flex-md-row w-25 gap-3'>
                    <Form.Select
                      name='limit'
                      className='shadow-none'
                      value={limitFilter}
                      onChange={handleLimit}
                    >
                      <option value={0}>Select Limit</option>
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                    </Form.Select>
                    {/* <Form.Select
                      name="filter"
                      className="shadow-none"
                      // value={filterType} onChange={handleFilter}
                    >
                      <option value={0}>Select Filter</option>
                      <option value={1}>First Name | ASC</option>
                      <option value={2}>First Name | DESC</option>
                      <option value={3}>Phone Number | ASC</option>
                      <option value={3}>Phone Number | DESC</option>
                    </Form.Select> */}
                  </div>
                </div>
              </div>
              <div className='height-fixed-layout'>
                <div className='d-flex flex-column gap-5 py-4 h-100 overflow-auto'>
                  <Table responsive>
                    <thead>
                      <tr className='d-flex'>
                        <th className='w-50 d-flex'>
                          <Button
                            onClick={handleSortName}
                            className='btn bg-transparent color-text-6 border-0 shadow-none'
                          >
                            <span>Name</span>
                            {sortNameFilter === 'firstName ASC' ? (
                              <FcUp size={20} />
                            ) : (
                              <FcDown size={20} />
                            )}
                          </Button>
                        </th>
                        <th className='w-50 d-flex '>
                          <Button
                            onClick={handleSortPhone}
                            className='btn bg-transparent color-text-6 border-0 shadow-none'
                          >
                            <span>Phone</span>
                            {sortPhoneFilter === 'noTelp ASC' ? (
                              <FcUp size={20} />
                            ) : (
                              <FcDown size={20} />
                            )}
                          </Button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {props &&
                        props?.data?.map((el) => {
                          return (
                            <>
                              <tr key={el.id} className='d-flex '>
                                <Link href={'/dashboard/transfer/'+el.id+'/transfer-amount'}>
                                  <a className='w-100 d-flex gap-4 text-decoration-none align-items-center'>
                                    <td className='w-50 d-flex '>
                                      <div className='d-flex flex-column align-items-center flex-sm-row justify-content-between'>
                                        <div className='d-flex flex-column flex-sm-row align-items-center gap-3'>
                                          {el.image ? (
                                            <Image
                                              className='we-3'
                                              src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${el?.image}`}
                                              alt=''
                                              width={50}
                                              height={50}
                                            />
                                          ) : (
                                            <FcManager size={60} />
                                          )}
                                          <span className='fw-semibold color-text-6'>{`${el.firstName} ${el.lastName}`}</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className='w-50 d-flex '>
                                      {el.noTelp ? el.noTelp : '-'}
                                    </td>
                                  </a>
                                </Link>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>
                  </Table>
                </div>
              </div>

              <div className='d-flex justify-content-center align-items-center gap-4 mt-5'>
                <Button
                  disabled={props.pagination.page === 1}
                  onClick={onPrevPage}
                  className='btn px-3 py-2'
                >
                  Prev
                </Button>
                <span className='text-color-2 fs-4 text-decoration-underline'>
                  {props.pagination.page}
                </span>
                <Button
                  disabled={props.pagination.page === props.pagination.totalPage}
                  onClick={onNextPage}
                  className='btn px-3 py-2'
                >
                  Next
                </Button>
              </div>
            </>
          }
        />
      </DashboardLayout>
    </>
  );
}

//SSR

export const getServerSideProps = async (context) => {
  // console.log(context.query)
  const cookiesData = cookies(context);
  // console.log(cookiesData.token)
  const {data} = await http3().get(`/user?page=${context.query.page}&limit=${context.query.limit}&search=${context.query.search}&sort=${context.query.sort}`, {
    headers: {
      Authorization: `Bearer ${cookiesData.token}`
    }
  });
  // console.log(data);
  return {
    props: {
      data: data.data,
      pagination: data.pagination
    }
  };
};

export default Transfer;
