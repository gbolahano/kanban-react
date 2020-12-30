import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Container } from './Styles';
import List from './List';

const UPDATE_STATUS = gql`
  mutation UPDATE_STATUS($issueId: Int, $status: IssueStatus) {
    updateIssue(issueId: $issueId, data: {
      status: $status
      }) {
        id
        status
      }
  }
`;

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
  const columns = ['backlog', 'development'];
  const params = useParams();
  const { loading, error, data } = useQuery(ISSUES);
  const [filteredData, setFilteredData] = useState({});

  const [updateStatus] = useMutation(UPDATE_STATUS);

  useEffect(() => {
    if(data) {
      let backlog = data.Issues.filter(issue => issue.status === 'backlog');
      let development = data.Issues.filter(issue => issue.status === 'development');
      let progress = data.Issues.filter(issue => issue.status === 'progress');
      let done = data.Issues.filter(issue => issue.status === 'done');
      setFilteredData({
        'backlog': backlog,
        'development': development,
        'progress': progress,
        'done': done
      });
    }
  }, [data]);

  if (loading) return 'Loading...';
  if (error) return 'Error!!';
  // console.log(data.Issues);

  // let backlog = data.Issues.filter(issue => issue.status === 'backlog');

  const onDragEnd = async (result) => {
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

    if (destination.droppableId === source.droppableId) {
      const newBacklog = Array.from(filteredData[source.droppableId]);
      const issue = newBacklog[source.index];
      newBacklog.splice(source.index, 1)
      newBacklog.splice(destination.index, 0, issue);
      setFilteredData({
        ...filteredData,
        [source.droppableId]: newBacklog
      });
      return;
    }

    const startData = Array.from(filteredData[source.droppableId]);
    const remIssue = startData[source.index];
    startData.splice(source.index, 1);

    const destinationData = Array.from(filteredData[destination.droppableId]);
    destinationData.splice(destination.index, 0, remIssue);

    setFilteredData({
      ...filteredData,
      [source.droppableId]: startData,
      [destination.droppableId]: destinationData
    });

    await updateStatus({
      variables: {
        issueId: remIssue.id,
        status: destination.droppableId
      },
      update: (cache, {data: {updateIssue}}) => {
        // read query data from cache
        let d = cache.readQuery({ query: ISSUES });
        // find the data to be updated from the cached data
        let issueIndex = d.Issues.find(i => i.id == updateIssue.id);
        // update the data accordingly
        issueIndex.status = updateIssue.status;
        // write the data back to the cache
        cache.writeQuery({ query: ISSUES, data: d });
      }
    });

  }

  const getData = (status) => {
    return data.Issues.filter(issue => issue.status === status);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>

      <Container>
        {
          Object.keys(filteredData).map((column, index) => {
            return (
              <List
                key={index}
                column={column}
                status={column}
                issues={filteredData[column]} />
            )
          })
        }
      </Container>
    </DragDropContext>
   );
}

export default Index;
export { ISSUES };
