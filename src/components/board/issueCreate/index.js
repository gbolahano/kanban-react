import React, {useState} from 'react';
import ReactQuill from 'react-quill';

import { Container, Title, Editor, FormGroup, FormTitle, StyledLink, StyledInput, FormCaption, Buttons, Button, PrimaryButton } from './Styles';
import CustomSelect from '../select';

const Index = () => {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState(null);
  const handleStatusChange = (e) => {
    // console.log(e.map(a => a.value));
    setStatus(e);
  }

  return (
    <Container>
      <Title>Create Issue</Title>
      <FormGroup>
        <FormTitle>Issue Type</FormTitle>
        <CustomSelect
          isMulti={false}
          data={[
            {
              value: 'bug',
              label:'Bug'
            },
            {
              value: 'task',
              label:'Task'
            },
            {
              value: 'story',
              label:'Story'
            }
          ]}
          selected={status}
          handleChange={handleStatusChange}
        />
      </FormGroup>
      <FormGroup>
        <FormTitle>Short Summary</FormTitle>
        <StyledInput placeholder="kol" />
        <FormCaption>Concisely summarize the issue in one or two sentences.</FormCaption>
      </FormGroup>
      <FormGroup>
        <FormTitle>Description</FormTitle>
        <Editor>
          <ReactQuill theme="snow" value={value} onChange={setValue}/>
        </Editor>
        <FormCaption>Describe the issue in as much detail as you'd like.</FormCaption>
      </FormGroup>
      <FormGroup>
        <FormTitle>Reporter</FormTitle>
        <CustomSelect
          isMulti={false}
          data={[
            {
              value: 1,
              label:'John Doe'
            },
            {
              value: 2,
              label:'Baby Yoda'
            },
            {
              value: 3,
              label:'Avery Spencer'
            }
          ]}
          // selected={status}
          // handleChange={handleStatusChange}
        />
      </FormGroup>
      <FormGroup>
        <FormTitle>Assignees</FormTitle>
        <CustomSelect
          isMulti={true}
          data={[
            {
              value: 1,
              label:'John Doe'
            },
            {
              value: 2,
              label:'Baby Yoda'
            },
            {
              value: 3,
              label:'Avery Spencer'
            }
          ]}
          // selected={status}
          // handleChange={handleStatusChange}
        />
      </FormGroup>
      <FormGroup>
        <FormTitle>Priority</FormTitle>
        <CustomSelect
          isMulti={false}
          data={[
            {
              value: 'highest',
              label:'Highest'
            },
            {
              value: 'high',
              label:'High'
            },
            {
              value: 'medium',
              label:'Medium'
            },
            {
              value: 'low',
              label:'Low'
            },
            {
              value: 'lowest',
              label:'Lowest'
            }
          ]}
          // selected={status}
          // handleChange={handleStatusChange}
        />
      </FormGroup>
      <Buttons>
        <PrimaryButton>Create Issue</PrimaryButton>
        <StyledLink to="/project">Cancel</StyledLink>
      </Buttons>
    </Container>
  )
};

export default Index;