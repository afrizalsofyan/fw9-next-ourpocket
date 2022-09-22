import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';

function TopupRedirect() {
  const router = useRouter();
  const redirectUrl = useSelector(
    (state) => state.transaction.results.redirectUrl
  );
  // console.log(redirectUrl);
  //   const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    if (redirectUrl) {
      window.open(redirectUrl);
      setTimeout(()=>{
        router.push('/dashboard');
      }, 200);
    } else {
      console.log('empty url');
    }
  }, [redirectUrl, router]);
  return (
    <>
      <div className='min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center gap-5'>
        <div className='h3 font-bold'>WAITING FOR REDIRECTED</div>
        <ThreeCircles height='100' width='100' color='#4fa94d' visible={true} />
      </div>
    </>
  );
}

export default TopupRedirect;
