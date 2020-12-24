import React, { Fragment, useState, useEffect} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Container } from './Styles';
import List from './List';

const ISSUES = gql`
  query Issues{
    Issues{
      id
      title
      type
      status
      priority
      description
      reporter{
        id
      }
      comments{
        body
        user{
          name
          avatarUri
        }
      }
      assignees{
        id
        name
        avatarUri
        createdAt
      }
    }
  }
`;

const Index = () => {
  const columns = ['backlog'];
  const { loading, error, data } = useQuery(ISSUES);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if(data) {
      let backlog = data.Issues.filter(issue => issue.status === 'backlog');
      setFilteredData(backlog);
    }
  }, [data]);

  if (loading) return 'Loading...';
  if (error) return 'Error!!';
  // console.log(data.Issues);

  // let backlog = data.Issues.filter(issue => issue.status === 'backlog');

  const onDragEnd = result => {
    console.log(result);
    const  { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newBacklog = Array.from(filteredData);
    const issue = newBacklog[source.index];
    newBacklog.splice(source.index, 1)
    newBacklog.splice(destination.index, 0, issue);
    setFilteredData(newBacklog);

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>

      <Container>
        {
          columns.map((column, index) => {
            return (
              <List
                key={index}
                column={column}
                status={column}
                issues={filteredData} />
            )
          })
        }
      </Container>
    </DragDropContext>
   );
}

export default Index;


