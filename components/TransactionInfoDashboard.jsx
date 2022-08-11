import React from 'react';
import { Col } from 'react-bootstrap';
// import Img1 from '../assets/images/img/img3.png';
// import Img2 from '../assets/images/icons/logo.png';
// import Img3 from '../assets/images/img/img3.png';
import { Link } from 'next/link';
import { CardHistoryDashboard } from './CardDetailList';
// import Datadummy from '../helpers/dummydata.json';

export default class TransactionInfoDashboard extends React.Component {
  state = {
    data: Datadummy.result
  };    
  render() {
    const img = [Img1, Img2, Img3];
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
            {this.state.data!== undefined && this.state.data.map((el, index)=>{
              return(
                <CardHistoryDashboard imgUrl={img[index]} type={el.type_name} amount={el.amount} name={el.recipient_name} key={el.id}/>
              );
            })}
          </div>
        </div>
      </Col>
    );
  }
}


// function TransactionInfoDashboard() {
// const img = [Img1, Img2, Img3];
    
// const [data, setData] = React.useState();
    
// React.useEffect(()=>{
// setData(Datadummy.result)
// }, [])
    
// return (
// <Col sm={12} md={6} className="ps-md-3">
// <div className="d-flex flex-column bg-white p-4 gap-4 rounded-5 h-100 color-text-6">
// <div className="d-flex flex-row justify-content-between">
//     <span className="fw-bold fs-6">Transaction History</span>
//     <Link className="link-rm-line" to="/home/history">
//         <span className="fw-light color-text-6">See all</span>
//     </Link>
// </div>
// {/* item max 3 */}
// <div className="d-flex flex-column gap-5">
//     {data!== undefined && data.map((el, index)=>{
//         return(
//             <CardHistoryDashboard imgUrl={img[index]} type={el.type_name} amount={el.amount} name={el.recipient_name} key={index}/>
//         )
//     })}
// </div>
// </div>
// </Col>
// )
// }

// export default TransactionInfoDashboard