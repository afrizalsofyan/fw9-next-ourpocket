import React from 'react';
import NavbarDashboard from '../../components/NavbarDashboard';
import { Container, Row, Button, DropdownButton, ButtonGroup, Dropdown, Form } from 'react-bootstrap';
import SideBarMenu from '../../components/SideBarMenu';
import FooterDashboard from '../../components/FooterDashboard';
import ContentLayout from '../../components/ContentLayout';
import UserCardHistoryIncreaseAmount, {UserCardHistoryDecreaseAmount} from '../../components/UserCard';
// import DummyImage1 from '../../assets/images/img/img3.png';
// import DummyImage2 from '../../assets/images/icons/logo.png';
import {useDispatch, useSelector} from 'react-redux';
import { historyTransaction } from '../../redux/actionAsync/transaction';
import { convertMoney } from '../../components/DetailTransferList';
import { FiSearch } from 'react-icons/fi';
import { Formik } from 'formik';
import { ButtonSubmit } from '../../components/ButtonAuth';

function History() {
  const dispatch = useDispatch();
  const token = useSelector((state)=>state.auth.token);
  const transaction = useSelector((state)=>state.transaction.result);
  const historyData = transaction?.result;
  const infoData = transaction?.info;
  const [keyword, setKeyword] = React.useState('');
  const [searchBy, setSearchBy] = React.useState(0);
  const [sortBy, setSortBy] = React.useState(0);
  const [sortType, setSortType] = React.useState(0);
  const param = {token: token, page: 1};
  // let param = {token: token, page: page};
  const onNextPage = ()=>{
    let searchByKeyword = '';
    let sortByKeyword = '';
    let sortTypeKeyword;
    if(searchBy === 1 ){
      searchByKeyword = 'amount';
    } else if(searchBy === 2 ){
      searchByKeyword = 'recipient';
    } else {
      searchByKeyword = 'sender';
    }
    if(sortBy === 1 ){
      sortByKeyword = 'amount';
    } else {
      sortByKeyword = 'time';
    }
    if(sortType === 1) {
      sortTypeKeyword = 0;
    } else {
      sortTypeKeyword=1;
    }
    const param = {token: token, page: transaction.info.nextPage, search: keyword, searchBy: searchByKeyword, sortBy: sortByKeyword, sortType: sortTypeKeyword};
    dispatch(historyTransaction(param));
  };
  const onPrevPage = ()=>{
    let searchByKeyword = '';
    let sortByKeyword = '';
    let sortTypeKeyword;
    if(searchBy === 1 ){
      searchByKeyword = 'amount';
    } else if(searchBy === 2 ){
      searchByKeyword = 'recipient';
    } else {
      searchByKeyword = 'sender';
    }
    if(sortBy === 1 ){
      sortByKeyword = 'amount';
    } else {
      sortByKeyword = 'time';
    }
    if(sortType === 1) {
      sortTypeKeyword = 0;
    } else {
      sortTypeKeyword=1;
    }
    const param = {token: token, page: transaction.info.prevPage, search: keyword, searchBy: searchByKeyword, sortBy: sortByKeyword, sortType: sortTypeKeyword};
    dispatch(historyTransaction(param));
  };
  
  const onSearchHistory = () =>{
    let searchByKeyword = '';
    let sortByKeyword = '';
    let sortTypeKeyword;
    if(searchBy === 1 ){
      searchByKeyword = 'amount';
    } else if(searchBy === 2 ){
      searchByKeyword = 'recipient';
    } else {
      searchByKeyword = 'sender';
    }
    if(sortBy === 1 ){
      sortByKeyword = 'amount';
    } else {
      sortByKeyword = 'time';
    }
    if(sortType === 1) {
      sortTypeKeyword = 0;
    } else {
      sortTypeKeyword=1;
    }
    const param = {token: token, page: transaction.info.currentPage, search: keyword, searchBy: searchByKeyword, sortBy: sortByKeyword, sortType: sortTypeKeyword};
    // , sortBy: sortByKeyword, sortType: sortType
    dispatch(historyTransaction(param));
    console.log(searchByKeyword);
    console.log(sortByKeyword);
    console.log(typeof searchBy);
  };
  const onResetParam = () => {
    const param = {token: token, page: 1, search: undefined, searchBy: undefined, sortBy: undefined, sortType: undefined};
    dispatch(historyTransaction(param));
  };
  React.useEffect(()=>{
    dispatch(historyTransaction(param));
  }, []);
  return (
    <>
      <NavbarDashboard titlePage='OPo - History'/>
      {/* SIDEBAR */}
      <Container as='section' className='g-0'>
        <Row className='pt-5 gx-0 gx-md-3'>
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className='d-flex flex-column gap-4'>
                  <h1 className='fw-bold fs-4 color-text-2'>Transaction History</h1>
                  <div className='d-flex flex-column gap-3 overflow-auto px-md-4 color-text-6'>
                    {/* <span className='bg-grey-light fw-bold color-text-6'>This Week</span> */}
                    <div className='d-flex flex-column gap-3'>
                      <div className='d-flex'>
                        <Form.Control
                          name='search'
                          className='cstm-border2 text-center rounded-0 color-text-6'
                          type='text'
                          value={keyword}
                          onChange={(e)=>setKeyword(e.target.value)}
                          disabled={searchBy===0}
                          placeholder='Search history'
                        />
                        <div>
                          <Button className='bg-color-1 border-0 d-flex flex-column align-items-center py-3 px-3' onClick={onSearchHistory}><FiSearch/></Button>
                        </div>
                      </div>
                      <div className='d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-between'>
                        <div className='d-flex flex-column flex-md-row gap-3'>
                          <DropdownButton
                            as={ButtonGroup}
                            size='sm'
                            variant={'info py-2 bg-color-1 color-text-4'}
                            title={'Search By'}
                            onSelect={(eventKey)=>{
                              setSearchBy(parseInt(eventKey));
                            // console.log(typeof eventKey);
                            }}
                          >
                            <Dropdown.Item eventKey='1' active={searchBy===1? true : false}>amount</Dropdown.Item>
                            <Dropdown.Item eventKey='2' active={searchBy===2? true : false}>recipient</Dropdown.Item>
                            <Dropdown.Item eventKey='3' active={searchBy===3? true : false}>sender</Dropdown.Item>
                          </DropdownButton>
                          <DropdownButton
                            as={ButtonGroup}
                            size='sm'
                            variant={'info py-2 bg-color-1 color-text-4'}
                            title={'Sort By'}
                            onSelect={(eventKey)=>{
                              setSortBy(parseInt(eventKey));
                            // console.log(typeof eventKey);
                            }}
                          >
                            <Dropdown.Item eventKey='1' active={sortBy===1? true : false}>amount</Dropdown.Item>
                            <Dropdown.Item eventKey='2' active={sortBy===2? true : false}>time</Dropdown.Item>
                          </DropdownButton>
                          <DropdownButton
                            as={ButtonGroup}
                            size='sm'
                            variant={'info py-2 bg-color-1 color-text-4'}
                            title={'Sort Type'}
                            onSelect={(eventKey)=>{
                              setSortType(parseInt(eventKey));
                            // console.log(typeof eventKey);
                            }}
                          >
                            <Dropdown.Item eventKey='1' active={sortType===1? true : false}>asc</Dropdown.Item>
                            <Dropdown.Item eventKey='2' active={sortType===2? true : false}>desc</Dropdown.Item>
                          </DropdownButton>
                        </div>
                        <Button className='btn bg-color-1 color-text-4 border-0' onClick={onResetParam}>Reset</Button>
                      </div>
                    </div>
                    {historyData?.map((data)=>{
                      return(
                        <>
                          <div key={data?.id}>
                            {data.type === 'payment' ? <UserCardHistoryDecreaseAmount img_path={DummyImage2} alt='imgDummy2' nameSender={data.sender}  nameRecipient={data.recipient} type_transaction={data.type} amount={`- ${convertMoney(data.amount)}`}/> : <UserCardHistoryIncreaseAmount img_path={DummyImage1} alt='imgDummy1' name={data.recipient} type_transaction={data.type} amount={`+ ${convertMoney(data.amount)}`}/>}  
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className='d-flex justify-content-center align-items-center gap-4'>
                    <Button disabled={infoData?.prevPage === null} onClick={onPrevPage} className='btn px-3 py-2'>Prev</Button>
                    <span className='text-color-2 fs-4 text-decoration-underline'>{infoData?.currentPage}</span>
                    <Button disabled={infoData?.nextPage === null} onClick={onNextPage} className='btn px-3 py-2'>Next</Button>
                  </div>
                </div>
              </>
            }
          />
        </Row>
      </Container>
      <FooterDashboard />
    </>
  );
}

export default History;
