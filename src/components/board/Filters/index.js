import React, { Fragment} from 'react'
import { Filters } from './Styles';
import as from '../../../assets/1.jpg';

const Index = () => {
  return (
    <Fragment>
      <Filters>
        <div>
          <figure>
            <img src={as} alt=""/>
          </figure>
          <figure>
            <img src={as} alt=""/>
          </figure>
          <figure>
            <img src={as} alt=""/>
          </figure>
        </div>
        <button>Only My Issues</button>
      </Filters>
    </Fragment>
   );
}

export default Index;
