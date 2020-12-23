import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { BrowserRouter as Router } from 'react-router-dom';
import { getToken } from './utils/utils';
import Routes from './Routes';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  request: operation => {
    const { token } = getToken('jira_token') || '';
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
});

function App() {
  return (
      <ApolloProvider client={client}>
        <Router>
          <Routes/>
        </Router>
      </ApolloProvider>
  );
}

export default App;
