import React from 'react';
import { Col } from 'react-bootstrap';
// import Img1 from '../assets/images/img/img3.png';
// import Img2 from '../assets/images/icons/logo.png';
// import Img3 from '../assets/images/img/img3.png';
import Link from 'next/link';
import { CardHistoryDashboard } from './CardDetailList';
import { getProfile } from '../redux/actionAsync/profile';
// import Datadummy from '../helpers/dummydata.json';
import Cookie from 'js-cookie'
import { connect } from 'react-redux';
import { historyTransaction } from '../redux/actionAsync/transaction';
import Image from 'next/image';
import { FcSurvey } from 'react-icons/fc';

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
            <Link className='link-rm-line' href='/home/history'>
              <span className='fw-light color-text-6'>See all</span>
            </Link>
          </div>
          {/* item max 3 */}
          <div className='d-flex flex-column gap-5'>
            {this.props.history !== undefined && this.props.history?.data?.map((el)=>{
              return(
                <CardHistoryDashboard 
                imgUrl= {el?.image !== null ? <Image src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${el?.image}`} alt={el.firstName} width={50} height={50} className='rounded-3'/> : <FcSurvey size={60}/>}
                type={el.status} amount={el.amount} name={`${el.firstName} ${el.lastName}`} status={el.status} key={el.id}/>
              );
            })}
          </div>
        </div>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  history: state.transaction.results
})

const mapDispatchToProps = (dispatch) => ({
  historyTransaction: () => dispatch(historyTransaction())
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionInfoDashboard);