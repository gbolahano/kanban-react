import React, {Fragment} from 'react';

import {TitleTextArea} from './Styles';

const Index = () => {
  return (
    <Fragment>
      <TitleTextArea rows={1} defaultValue={'Try dragging issues to different columns status.'} />
    </Fragment>
   );
}

export default Index;