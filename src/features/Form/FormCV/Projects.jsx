import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const Projects = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="titleProject">
          <Form.Label>Title Project</Form.Label>
          <Form.Control
            type="text"
            name="titleProject"
            placeholder="Enter your title project."
            autoComplete="off"
            ref={register({
              required: 'Title project is required.',
            })}
            className={`${errors.titleProject ? 'input-error' : ''}`}
          />
          {errors.titleProject && (
            <p className="errorMsg">{errors.titleProject.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="desProject">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="desProject"
            placeholder="Add more description."
            autoComplete="off"
            ref={register({
              required: 'Project description is required.',
            })}
            className={`${errors.desProject ? 'input-error' : ''}`}
          />
          {errors.desProject && (
            <p className="errorMsg">{errors.desProject.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default Projects;