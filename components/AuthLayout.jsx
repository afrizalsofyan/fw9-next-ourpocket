import React from 'react'
import { Row } from 'react-bootstrap'
import AuthBanner from './AuthBanner'

function AuthLayout(props) {
  return (
    <>
        <Row className='gx-0'>
          <AuthBanner />
          {props.children}
        </Row>
      </>
  )
}

export default AuthLayout