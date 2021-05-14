import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const Educations = (props) => {
    const { user } = props;
    const { register, handleSubmit, errors } = useForm({
      defaultValues: {
        schoolName: user.schoolName,
        qualification: user.qualification
      }
    });

  const onSubmit = (data) => {
    console.log(data);
    props.updateUser(data);
    props.history.push('/createcv-project');
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="schoolName">
          <Form.Label>School</Form.Label>
          <Form.Control
            type="text"
            name="schoolName"
            placeholder="Enter your school name."
            autoComplete="off"
            ref={register({
              required: 'School name is required.',
            })}
            className={`${errors.schoolName ? 'input-error' : ''}`}
          />
          {errors.schoolName && (
            <p className="errorMsg">{errors.schoolName.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="qualification">
          <Form.Label>Qualification</Form.Label>
          <Form.Control
            type="text"
            name="qualification"
            placeholder="Enter your qualification."
            autoComplete="off"
            ref={register({
              required: 'Qualification is required.',
            })}
            className={`${errors.qualification ? 'input-error' : ''}`}
          />
          {errors.qualification && (
            <p className="errorMsg">{errors.qualification.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default Educations;