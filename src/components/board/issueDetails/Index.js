import React, { Component } from 'react'
import { withRouter, useParams } from 'react-router-dom';
import{ gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

import Type from './Type';
import Title from './Title';
import Description from './Description';
import Comments from './Comments';
import Status from './Status';
import Assignees from './Assignees';
import Reporter from './Reporter';
import Priority from './Priority';

import { Container, Action, Content, ActionRight, Left, Right } from  './Styles';

const GET_ISSUE_BY_ID = gql`
  query GET_ISSUE_BY_ID($issueId: Int) {
    Issue(issueId: $issueId) {
      title
      type
      status
      priority
      description
      reporter {
        id
        name
      }
      listPosition
      assignees{
        id
        name
      }
      comments {
        body
        user{
          name
        }
      }
    }
  }
`;

const IssueDetails = (props) => {
  const params = useParams();
  const {loading, data, error} = useQuery(GET_ISSUE_BY_ID, {
    variables: {issueId: parseInt(params.issueId)},
    // fetchPolicy: 'no-cache'
  });

  if (error) return <Container>ERROR!!!</Container>;

  if (loading) return <Container>Loading!!!</Container>;

  // console.log(data.Issue.title);

    return (
      <Container>
        <Action>
          <Type issue={data.Issue} />
          <ActionRight><button onClick={() => props.history.push('/project')}>X</button></ActionRight>
        </Action>
        <Content>
          <Left>
            <Title issue={data.Issue} />
            <Description issue={data.Issue} />
            <Comments issue={data.Issue} />
          </Left>
          <Right>
            <Status issue={data.Issue} />
            <Assignees issue={data.Issue} />
            <Reporter issue={data.Issue} />
            <Priority issue={data.Issue} />
          </Right>
        </Content>
      </Container>
     );
}

export default withRouter(IssueDetails);
export { GET_ISSUE_BY_ID };