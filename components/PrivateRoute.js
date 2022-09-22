import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
// export const PrivateAuthRoute = ({children}) => {
//   const token = useSelector((state)=>state.auth.token);
//   if(token){
//     return children;
//   }
//   return <Navigate to='/home/dashboard' replace state={{errorMsg: 'You are loggin now!!! Please logout first'}}/>;
// };

const PrivateRoute = ({children}) => {
  const route = useRouter();
  const token = useSelector((state)=>state.auth.token);
  if(token){
    return children;
  }
  return route.push('/auth/login') ;
  // <Link href='/auth/login' />;
};

export default PrivateRoute;