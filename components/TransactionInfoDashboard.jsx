import React from 'react';
import { Col } from 'react-bootstrap';
// import Img1 from '../assets/images/img/img3.png';
// import Img2 from '../assets/images/icons/logo.png';
// import Img3 from '../assets/images/img/img3.png';
import Link from 'next/link';
import { CardHistoryDashboard } from './CardDetailList';
import { getProfile } from '../redux/actionAsync/profile';
// import Datadummy from '../helpers/dummydata.json';
import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import Image from 'next/image';
import { FcSurvey } from 'react-icons/fc';
import { historyTransaction } from '../redux/actionAsync/transaction';
class TransactionInfoDashboard extends React.Component {
  // state = {
  //   data: Datadummy.result
  // };    
  componentDidMount() {
    this.props.historyTransaction();
  }
  render() {
    return (
      <Col sm={12} md={6} className='ps-md-3'>
        <div className='d-flex flex-column bg-white p-4 gap-4 rounded-5 h-100 color-text-6'>
          <div className='d-flex flex-row justify-content-between'>
            <span className='fw-bold fs-6'>Transaction History</span>
            <Link href='/dashboard/history?page=1&limit=100&filter=MONTH'>
              <a className='link-rm-line' >
                <span className='fw-light color-text-6'>See all</span>
              </a>
            </Link>
          </div>
          {/* item max 3 */}
          <div className='d-flex flex-column gap-3'>
            {this.props.history !== undefined ? this.props.history?.data?.map((el)=>{
              return(
                <CardHistoryDashboard 
                  imgUrl= {el?.image !== null ? <Image src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${el?.image}`} alt={el.firstName} width={50} height={50} objectFit='cover' className='rounded-3'/> : <FcSurvey size={60}/>}
                  type={el.type} amount={el.amount} name={`${el.firstName} ${el.lastName}`} status={el.status} key={el.id}/>
              );
            }):<div className='d-flex flex-column align-items-center justify-content-center text-center'><p className=''>No Transction</p></div>}
          </div>
        </div>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  history: state.transaction.results
});

const mapDispatchToProps = (dispatch) => ({
  historyTransaction: () => {
    const data = {page: 1, limit: 3, filter: 'MONTH'};
    dispatch(historyTransaction(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionInfoDashboard);