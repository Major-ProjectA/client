import React from 'react';
import { useFormik } from 'formik';

const Educations = (props) => {
    const { data } = props;

    const formik = useFormik({
        initialValues: {
            collegeName: '',
            collegeMajor: '',
            collegeQualification: ''
        },
    });
    return (
        <>
            <div class="col-md-4 col-sm-6">
                <label>College</label>
                <div class="input-group">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="College name"
                        name="collegeName"
                        defaultValue={formik.collegeName}
                        onChange={props.handlerchange}
                    />
                </div>
            </div>

            <div class="col-md-4 col-sm-6">
                <label>Major</label>
                <div class="input-group">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="College Major"
                        name="collegeMajor"
                        defaultValue={formik.collegeMajor}
                        onChange={props.handlerchange}
                    />
                </div>
            </div>

            <div class="col-md-4 col-sm-6">
                <label>Qualification</label>
                <div class="input-group">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="College Qualification"
                        name="collegeQualification"
                        defaultValue={formik.collegeQualification}
                        onChange={props.handlerchange}
                    />
                </div>
            </div>
        </>
    );
};

export default Educations;