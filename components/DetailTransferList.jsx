import React from 'react';
import CardDetailList from './CardDetailList';
import {useSelector} from 'react-redux';

export const convertMoney = (amount) => 
  new Intl.NumberFormat('id-IN',{
    style: 'currency',
    currency: 'IDR'
  }).format(amount);


function DetailTransferList() {
  const profile = useSelector((state)=>state.user.results);
  const transferData = useSelector((state)=> state.transaction.dataTransfer);
  const amountToMoney = convertMoney(transferData.amount);
  return (
    <div className='d-flex flex-column gap-3'>
      <CardDetailList title={'Amount'} content={amountToMoney}/>
      <CardDetailList title={'Balance Left'} content={convertMoney(profile?.balance)}/>
      <CardDetailList title={'Date & Time'} content={new Date().toLocaleString()}/>
      <CardDetailList title={'Notes'} content={transferData.notes}/>
    </div>
  );
}

export default DetailTransferList;