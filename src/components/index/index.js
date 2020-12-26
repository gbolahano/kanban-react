import React, { Fragment } from 'react';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import Board from '../board';

import { Container } from './Styles';

const Index = () => {
  return (
    <Fragment>
      <Container>
        <Navbar />
        <Sidebar />
        <Board />
      </Container>
    </Fragment>
   );
}

export default Index;