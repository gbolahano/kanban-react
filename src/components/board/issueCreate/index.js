import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {useFormik} from 'formik';


import { Container, Title, Editor, FormGroup, FormError, FormTitle, StyledLink, StyledInput, FormCaption, Buttons, Button, PrimaryButton } from './Styles';
import CustomSelect from '../select';
import {type, assignees, priority, reporter} from '../../shared/constants/selectData';

const CREATE_ISSUE = gql`
  mutation CREATE_ISSUE(
    $title: String,
    $type: IssueType,
    $priority: Priority,
    $description: String,
    $reporter: Int,
    $assignee: [Int]
  ) {
    createIssue(data: {
      title: $title,
      type: $type,
      priority: $priority,
      description: $description,
      reporter: $reporter,
      assignee: $assignee
      }) {
      id
      title
      type
      status
      listPosition
      assignees{
        name
      }
    }
  }
`;

const Index = () => {

  const [createIssue, { loading, data, error }] = useMutation(CREATE_ISSUE);

  const validate = (values) => {
    let errors = {};

    if (!values.title) {
      errors.title = 'Title is required';
    } else if (values.title.length > 200) {
      errors.title = 'Must be at most 200 characters'
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      type: 'task',
      title: '',
      description: '',
      reporter: 1,
      assignee: [],
      priority: 'high'
    },
    validate,
    onSubmit: async (value) => {
      let assigneeValue = value.assignee;
      let assigneeIds = assigneeValue.map(a => a.value);
      let data = {
        ...value,
        assignee: assigneeIds
      }
      // console.log(data);
      const response = await createIssue({
        variables: data
      });

      console.log(response);
    }
  })

  return (
    <Container>
      <Title>Create Issue</Title>
      <form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <FormTitle>Issue Type</FormTitle>
          <CustomSelect
            isMulti={false}
            isSearchable
            onChange={e => formik.setFieldValue('type', e.value)}
            value={formik.values.type}
            data={type}
          />
        </FormGroup>
        <FormGroup>
          <FormTitle>Short Summary</FormTitle>
          <StyledInput
            placeholder="kol"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            />
          <FormCaption>Concisely summarize the issue in one or two sentences.</FormCaption>
          <FormError>{formik.errors.title ? formik.errors.title : ''}</FormError>
        </FormGroup>
        <FormGroup>
          <FormTitle>Description</FormTitle>
          <Editor>
            <ReactQuill
              theme="snow"
              value={formik.values.description}
              onChange={e => formik.setFieldValue('description', e)} />
          </Editor>
          <FormCaption>Describe the issue in as much detail as you'd like.</FormCaption>
        </FormGroup>
        <FormGroup>
          <FormTitle>Reporter</FormTitle>
          <CustomSelect
            isMulti={false}
            data={reporter}
            value={formik.values.reporter}
            onChange={e => formik.setFieldValue('reporter', e.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormTitle>Assignees</FormTitle>
          <CustomSelect
            isMulti={true}
            data={assignees}
            value={formik.values.assignee}
            onChange={e => formik.setFieldValue('assignee', e)}
          />
        </FormGroup>
        <FormGroup>
          <FormTitle>Priority</FormTitle>
          <CustomSelect
            isMulti={false}
            data={priority}
            value={formik.values.priority}
            onChange={e => formik.setFieldValue('priority', e.value)}
          />
        </FormGroup>
        <Buttons>
          <PrimaryButton type="submit">Create Issue {loading ? 'saving' : ''} </PrimaryButton>
          <StyledLink to="/project">Cancel</StyledLink>
        </Buttons>
      </form>
    </Container>
  )
};

export default Index;