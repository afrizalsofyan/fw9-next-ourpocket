import React from 'react';
import CardDetailList from './CardDetailList';
import {useSelector} from 'react-redux';

export const convertMoney = (amount) => 
  new Intl.NumberFormat('id-IN',{
    style: 'currency',
    currency: 'IDR'
  }).format(amount);


function DetailTransferList() {
  const amountData = useSelector((state)=> state.inputAmount.amount);
  const noteData = useSelector((state)=> state.inputAmount.note);
  const time = useSelector((state)=>state.inputAmount.time);
    
  const amountToMoney = convertMoney(amountData);
  return (
    <div className='d-flex flex-column gap-3'>
      <CardDetailList title={'Amount'} content={amountToMoney}/>
      <CardDetailList title={'Balance Left'} content={'Rp20.000'}/>
      <CardDetailList title={'Date & Time'} content={time}/>
      <CardDetailList title={'Notes'} content={noteData}/>
    </div>
  );
}

export default DetailTransferList;