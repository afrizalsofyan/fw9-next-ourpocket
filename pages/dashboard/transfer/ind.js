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

function Transfer() {
  const users = useSelector((state) => state.profile.results);
  const infoData = useSelector((state) => state.profile.results.pagination);
  const [limitFilter, setLimitFilter] = React.useState();
  const [sortNameFilter, setSortNameFilter] = React.useState('firstName ASC');
  const [sortPhoneFilter, setSortPhoneFilter] = React.useState('noTelp DESC');
  const [sortValue, setSortValue] = React.useState();
  const [pages, setPages] = React.useState(1);
  const [keyword, setKeyword] = React.useState();
  const dispatch = useDispatch();
  const data = {
    page: pages ?? 1,
    limit: limitFilter ?? 5,
    keywords: keyword ?? '',
    sort: sortValue ?? 'firstName ASC',
  };

  const handleLimit = (e) => {
    setLimitFilter(e.target.value);
  };

  const handleSortName = () => {
    if (sortNameFilter === 'firstName ASC') {
      setSortNameFilter('firstName DESC');
      setSortValue(sortNameFilter);
    } else if (sortNameFilter === 'firstName DESC') {
      setSortNameFilter('firstName ASC');
      setSortValue(sortNameFilter);
    }
  };

  const handleSortPhone = () => {
    if (sortPhoneFilter === 'noTelp ASC') {
      setSortPhoneFilter('noTelp DESC');
      setSortValue(sortPhoneFilter);
    } else if (sortPhoneFilter === 'noTelp DESC') {
      setSortPhoneFilter('noTelp ASC');
      setSortValue(sortPhoneFilter);
    }
  };

  React.useEffect(() => {
    dispatch(getAllUser(data));
  }, [dispatch, limitFilter, sortValue, pages, keyword]);

  const onNextPage = () => {
    setPages(pages + 1);
  };
  const onPrevPage = () => {
    setPages(pages - 1);
  };
  const handleSearch = (e) => {
    setKeyword(e.target.value);
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
                  className='ps-5 border-0 bg-grey-input rounded-3 py-3 color-text-6'
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
                      {users &&
                        users?.data?.map((el) => {
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
                              {/* {el.noTelp ? (
                            
                          ) : null} */}
                            </>
                          );
                        })}
                    </tbody>
                  </Table>
                </div>
              </div>

              <div className='d-flex justify-content-center align-items-center gap-4 mt-5'>
                <Button
                  disabled={infoData?.page === 1}
                  onClick={onPrevPage}
                  className='btn px-3 py-2'
                >
                  Prev
                </Button>
                <span className='text-color-2 fs-4 text-decoration-underline'>
                  {infoData?.page}
                </span>
                <Button
                  disabled={infoData?.page === infoData?.totalPage}
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

export default Transfer;
