import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { createEntry } from '../../redux/entryActions'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function NewEntryForm() {
    
    const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm({
        defaultValues: {
            title: "",
            body: "",
            createdby: ""
        }
    })

    const dispatch = useDispatch()
    

    const onSubmit = (data) => {
        dispatch(createEntry({title: data.title, body: data.body, createdby: data.createdby}));
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                title: "",
                body: "",
                createdby: ""
            });
            
        } 
    }, [formState, reset]);
    


    return (
        <div className="d-flex justify-content-center align-items-center form-container">
            <div className="row row-cols-lg-auto g-3 align-items-center">
                <Form onSubmit={handleSubmit(onSubmit)}><br></br>
                    <Form.Group>
                        <div className="col-12">
                            <Form.Label htmlFor="inputTitle" className="col-form-label">Entry Name</Form.Label>
                            <Form.Control className="title-input" id="inputTitle" {...register("title", {
                                    required: {
                                    value: true,
                                    message: "Title is required"
                                    }
                                })} 
                                name="title"
                                placeholder="Enter entry title here" 
                                />
                                <br></br>
                        </div>
                        <div className="col-12">
                            <Form.Label htmlFor="inputBody" className="col-form-label">Body</Form.Label>
                            <Form.Control className="body-input" type="textarea" {...register("body", {
                                    required: {
                                    value: true,
                                    message: "Body is required"
                                    }
                                })} 
                                name="body"
                                placeholder="Start journal entry here"
                                />
                                <br></br>
                        </div>
                        <div className="col-12">
                            <Form.Label htmlFor="inputCreatedby" className="col-form-label">Body</Form.Label>
                            <Form.Control className="createdby-input" type="text" {...register("createdby", {
                                    required: {
                                    value: true,
                                    message: "Creator name is required"
                                    }
                                })} 
                                name="createdby"
                                placeholder="Created by"
                                />
                                <br></br>
                        </div>
                        {/* {errors.body && <p>Batter ID must be 5 numbers or greater</p>} */}
                        {isSubmitSuccessful}
                        <Button className="submit-button" value="submit" type="submit">Submit</Button>
                        <br></br>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}
