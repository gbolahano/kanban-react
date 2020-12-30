import React, { Fragment } from 'react'
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import { client } from '../../../App';

import { Filters } from './Styles';
import pic1 from '../../../assets/1.jpg';
import pic2 from '../../../assets/2.jpg';
import pic3 from '../../../assets/3.jpg';

const Index = () => {
  return (
    <Fragment>
      <Filters>
        <div>
          <figure>
            <img src={pic1} alt=""/>
          </figure>
          <figure>
            <img src={pic2} alt=""/>
          </figure>
          <figure>
            <img src={pic3} alt=""/>
          </figure>
        </div>
        <button>Only My Issues</button>
      </Filters>
    </Fragment>
   );
}

export default Index;
