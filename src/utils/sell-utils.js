const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 30) {
    errors.name = 'Must be 30 characters or less';
  }

  if (!values.category) {
    errors.category = 'Required';
  }

  if (!values.price) {
    errors.price = 'Required';
  }

  if (!values.description) {
    errors.description = 'Required';
  }

  return errors;
};

export default validate;