import Head from 'next/head';
import Image from 'next/image';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import Link from 'next/link';
import ImagePhone1 from '../public/assets/img/png-phone.png';
import ImagePhone2 from '../public/assets/img/png-phone2.png';
import Icon4 from '../public/assets/img/img1.png';
import Icon5 from '../public/assets/img/img2.png';
import Icon6 from '../public/assets/img/img3.png';
import Logo1 from '../public/assets/icons/company_logo1.svg';
import Logo2 from '../public/assets/icons/company_logo2.svg';
import Logo3 from '../public/assets/icons/company_logo3.svg';
import Logo4 from '../public/assets/icons/company_logo4.svg';
import Logo5 from '../public/assets/icons/company_logo5.svg';
import Logo6 from '../public/assets/icons/company_logo6.svg';
import { FiDownload, FiLock, FiPhone } from 'react-icons/fi';
import React from "react";

export class CardLandingPage extends React.Component {
  state = {
    Image: this.props.Image,
    icon: this.props.icon,
    title: this.props.title,
    content: this.props.content,
  };
  render() {
    return (
      <div className='card-1'>
        <div className='flx-row mar-x-auto wd-100 jstfy-center'>
          {this.state.Image == null ? <span className='bg-rounded-icon pad-25 rad-100 mar-b-20'>
            {this.state.icon}
          </span> : 
            <div className='width-25 flx-row mar-x-auto'>
              {this.state.Image}
            </div>
          }
        </div>
        <p className='txt-ctr fnt-paragraph mar-t-30'>
          <span className='color-text-4'>{this.state.title}</span>
        </p>
        <p className='txt-ctr fnt-desc'>
          <span className='color-text-4'>{this.state.content}</span>
        </p>
      </div>
    );
  }
}

export class Card2LandingPage extends React.Component {
  state = {
    number: this.props.number,
    title: this.props.title,
    content: this.props.content
  };
  render() {
    return (
      <div className='card-1 pad-25'>
        <span className='fnt-paragraph fnt-bold'>
          <span className='color-text-1'>{this.state.number}</span><span className='color-text-4'>{this.state.title}</span>
        </span>
        <br />
        <span className='fnt-desc'>
          {this.state.content}
        </span>
      </div>
    );
  }
}


export default function Home() {
  const [isShowMenu, setShowMenu] = React.useState(false);
  return (
    <>
      <Head>
        <title>OPo</title>
      </Head>
      <header className='pad-t-60 bg-header-1'>
        <div className='container-box'>
          <div className='btn-collapse-position'>
            <div>
              <span className='logo-txt-blue'>
                <span className='color-text-1'>OurPocket</span>
              </span>
            </div>
            <div onClick={() => setShowMenu(!isShowMenu)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='35'
                viewBox='0 0 35 35'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-menu'
              >
                <line x1='3' y1='12' x2='21' y2='12'></line>
                <line x1='3' y1='6' x2='21' y2='6'></line>
                <line x1='3' y1='18' x2='21' y2='18'></line>
              </svg>
            </div>
          </div>
          {isShowMenu ? (
            <nav className='banner-position-1 mar-t-50'>
              <div>
                <Link
                  href='/login'
                 
                >
                  <a className='btn-custom-white mar-r-20 link-rm-line'>Login</a>
                </Link>
                <Link
                  href='/register'
                  
                >
                  <a className='btn-custom-blue link-rm-line'>Sign Up</a>
                </Link>
              </div>
            </nav>
          ) : null}
          <nav className='banner-position-1 nav-menu'>
            <div>
              <span className='logo-txt-blue'>
                <span className='color-text-1'>OurPocket</span>
              </span>
            </div>
            <div>
              <Link
                href='/login'
                
                >
                <a className='btn-custom-white mar-r-20 link-rm-line'>Login</a>
              </Link>
              <Link
                href='/register'
                
              >
                <a className='btn-custom-blue link-rm-line'>Sign Up</a>
              </Link>
            </div>
          </nav>
          <div className='content-position-v1'>
            <div className='text-content-banner'>
              <div className='width-100'>
                <span className='fnt-header color-text-1'>
                  Awesome App For Saving{' '}
                  <span className='color-text-1'>Time.</span>
                </span>
                <p className='fnt-paragraph'>
                  We bring you a mobile app for banking problems that oftenly
                  wasting much of your times.
                </p>
              </div>
              <Link href='/register'>
                <a className='btn-try-blue link-rm-line'>Try It Free</a>
              </Link>
            </div>
            <div className='bg-Image-1 mx-auto'>
              <Image
                className='width-Image-banner-1'
                src={ImagePhone1}
                alt='Imagephone1'
                width={340}
                height={660}
              />
            </div>
          </div>
        </div>
      </header>
      <section className='bg-scnd'>
        <div className='container-box'>
          <main className='pad-y-80'>
            <div className='mar-b-70'>
              <h1 className='fnt-header txt-ctr'>
                <span className='color-text-5'>About</span> the Application.
              </h1>
              <p className='fnt-paragraph txt-ctr width-50 mar-x-auto'>
                We have some great features from the application and it’s
                totally free to use by all users around the world.
              </p>
            </div>
            <div className='about-section-v1'>
              <CardLandingPage
                icon={<FiPhone size={30} />}
                title='24/7 Support'
                content='We have 24/7 contact support so you can contact us whenever you want and we will respond it.'
              />
              <CardLandingPage
                icon={<FiLock size={30} />}
                title='Data Privacy'
                content='We make sure your data is safe in our database and we will encrypt any data you submitted to us.'
              />
              <CardLandingPage
                icon={<FiDownload size={30} />}
                title='Easy Download'
                content='Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.'
              />
            </div>
          </main>
        </div>
      </section>
      <section>
        <div className='container-box'>
          <main className='partner-section-v1 pad-y-80'>
            <div className='flx-column'>
              <h1 className='fnt-header'>
                100+ <span className='color-text-1'>Trusted</span> Partners.
              </h1>
              <p className='fnt-paragraph'>
                We have reached global level and have 100+
                <br />
                brand partners around the globe.
              </p>
            </div>
            <div className='flx-col jstfy-center'>
              <div className='partner-section-v1'>
                <Image src={Logo1} alt='partnerlogo'/>
                <Image src={Logo2} alt='partnerlogo'/>
                <Image src={Logo3} alt='partnerlogo'/>
              </div>
              <div className='partner-section-v1'>
                <Image src={Logo6} alt='partnerlogo'/>
                <Image src={Logo4} alt='partnerlogo'/>
                <Image src={Logo5} alt='partnerlogo'/>
              </div>
            </div>
          </main>
        </div>
      </section>
      <section className='bg-scnd'>
        <div className='container-box'>
          <div className='content-great pad-y-80'>
            <div className='align-center-item bg-Image-1'>
              <Image
                className='width-Image-great-1'
                src={ImagePhone2}
                alt='Imagephone2'
                
                width={340}
                height={660}
              />
            </div>
            <main className='text-content-banner gap-20'>
              <h2 className='fnt-header'>
                All The <span className='color-text-5'>Great</span> <br />{' '}
                Zwallet Features.
              </h2>
              <Card2LandingPage number={1} title='. Small Fee' content='We only charge 5% of every success transaction done in Zwallet app.' />
              <Card2LandingPage number={2} title='. Data Secured' content="All your data is secured properly in our system and it's encrypted." />
              <Card2LandingPage number={3} title='. User Friendly' content='Zwallet come up with modern and sleek design and not complicated.' />
            </main>
          </div>
        </div>
      </section>
      <section>
        <div className='container-box'>
          <div className='pad-y-80'>
            <div className='mar-b-70'>
              <h2 className='fnt-header txt-ctr'>
                What Users are <span className='color-text-1'>Saying.</span>
              </h2>
              <p className='fnt-paragraph txt-ctr width-50 mar-x-auto'>
                We have some great features from the application and it&pos;s
                totally free to use by all users around the world.
              </p>
            </div>
            <main className='about-section-v1'>
              <CardLandingPage Image={<Image src={Icon4} alt='icon4.png' width='100%' height='100%' />} title='Sherina Chaw' content="“I use this app since 2 years ago and this is the best app that I've ever use in my entire life”"/>
              <CardLandingPage Image={<Image src={Icon5} alt='icon5.png' width='100%' height='100%' />} title='Jessica Mera' content="“I use Zwallet to manage all financial needs. It's super easy to use and it's 100% free app”"/>
              <CardLandingPage Image={<Image src={Icon6} alt='icon6.png' width='100%' height='100%' />} title='Robert Chandler' content="“Since I'm using this app, I'm not going to move to another similar app. Thank you Zwallet!”"/>
            </main>
          </div>
        </div>
      </section>
      <footer className='bg-scnd'>
        <div className='container-box'>
          <div className='pad-y-80'>
            <span className='logo-txt-white '><span className='color-text-2'>OurPocket</span></span>
            <div className='width-25 mar-t-30'>
              <div className='wd-100'>
                <p className='fnt-footer'>
                  <span className='color-text-2'> Simplify financial needs and saving much time in banking needs
                  with one single app.</span>
                </p>
              </div>
            </div>
            <hr className='mar-t-50 mar-b-30 border-new-color' />
            <div className='footer-copyright copyrigth-text'>
              <span className='color-text-2'>2020 OurPocket. All right reserved.</span>
              <div className='footer-copyright gap-20'>
                <span className='color-text-2'>+62 5637 8882 9901</span>
                <span className='mar-r-40 color-text-2'>contact@OurPocket.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
