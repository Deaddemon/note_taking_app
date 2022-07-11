import { Form, Button } from "react-bootstrap"

import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addEmployee} = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState({
        heading:"", deadline:"", note:"", time:""
    });

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee,[e.target.name]: e.target.value})
    }

    const {heading, deadline, note, time} = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(heading, deadline, note, time);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="heading *"
                    name="heading"
                    value={heading}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="date"
                    placeholder="date *"
                    name="deadline"
                    value={deadline}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="note"
                    rows="3"
                    column="3"
                    maxlength="1000"
                    name="note"
                    value={note}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="time"
                    placeholder="time"
                    name="time"
                    value={time}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Note
            </Button>
        </Form>

     )
}

export default AddForm;