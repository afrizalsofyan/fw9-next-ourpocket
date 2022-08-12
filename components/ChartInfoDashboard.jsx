import Image from 'next/image';
import React from 'react';
import { Col } from 'react-bootstrap';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import DummyChart from '../public/assets/img/graphic.png';

function ChartInfoDashboard() {
  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js" async/>
      <Col sm={12} md={6} className='mb-md-0'>
        <div className='d-flex flex-column justify-content-between bg-white p-5 gap-4 rounded-5 h-100'>
          <div className='d-flex flex-column gap-3 gap-sm-0 flex-sm-row justify-content-between align-items-center text-center text-sm-start color-text-primary'>
            <div className='d-flex fex-row gap-3 gap-sm-0 flex-sm-column color-text-6'>
              <FiArrowDown
                size={24}
                className='color-green mx-auto mx-sm-0'
              />
              <span className='fs-6'>Income</span>
              <span className='fs-6'>Rp2.120.000</span>
            </div>
            <div className='d-flex flex-row gap-3 gap-sm-0 flex-sm-column color-text-6'>
              <FiArrowUp size={24} className='color-red mx-auto mx-sm-0' />
              <span className='fs-6'>Expense</span>
              <span className='fs-6'>Rp1.560.000</span>
            </div>
          </div>
          <div className='row gx-0'>
            <div className='col col-md-12 d-flex flex-row justify-content-center'>
              <Image
                src={DummyChart}
                alt='chartdummy'
                className='img-fluid'
              />
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default ChartInfoDashboard;