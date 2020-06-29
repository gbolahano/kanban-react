import React, { Fragment } from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import Board from '../board/board';

import './index.scss';

const Index = () => {
  return (
    <Fragment>
      <div className="container">
        <Navbar />
        <Sidebar />
        <Board />
      </div>
    </Fragment>
   );
}

export default Index;