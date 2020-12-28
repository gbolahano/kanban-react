import React, { Fragment} from 'react'
import { BreadCrumbs, Title } from './Styles';

const Index = () => {
  return (
    <Fragment>
      <BreadCrumbs>
        Projects / kanban 1.0 ok / Kanban Board
      </BreadCrumbs>
      <Title>
        <h2>Kanban Board</h2>
        <a href="https://github.com/gbolahanO/kanban-graphql" target="_blank"> <i className="fab fa-github"></i> Github Repo</a>
      </Title>
    </Fragment>

   );
}

export default Index;