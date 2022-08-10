import React from 'react';
import {Container} from 'react-bootstrap';
function TitleAuthForm({title, subtitle}) {
  return (
    <Container className='p-0 m-0'>
      <h1 className='fnt-header2 fs-1'>{title}</h1>
      <span className='fnt-desc2 pt-4'>{subtitle}</span>
    </Container>
  );
}

export default TitleAuthForm;