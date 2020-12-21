import React, { Component } from 'react'
import { withRouter, useParams } from 'react-router-dom';

import Type from './Type';
import Title from './Title';
import Description from './Description';
import Comments from './Comments';
import Status from './Status';
import Assignees from './Assignees';
import Reporter from './Reporter';
import Priority from './Priority';

import { Container, Action, Content, ActionRight, Left, Right } from  './Styles';

const IssueDetails = (props) => {
  const params = useParams();
    return (
      <Container>
        <Action>
          <Type />
          <ActionRight><button onClick={() => props.history.push('/project')}>X</button></ActionRight>
        </Action>
        <Content>
          <Left>
            <Title />
            <Description />
            <Comments />
          </Left>
          <Right>
            <Status />
            <Assignees />
            <Reporter />
            <Priority />
          </Right>
        </Content>
      </Container>
     );
}

export default withRouter(IssueDetails);