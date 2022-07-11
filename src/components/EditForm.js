import { Form, Button } from "react-bootstrap"

import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';

const EditForm = ({theEmployee}) =>{

    const id = theEmployee.id;

    const [heading, setheading] = useState(theEmployee.heading);
    const [deadline, setdeadline] = useState(theEmployee.deadline);
    const [note, setnote] = useState(theEmployee.note);
    const [time, settime] = useState(theEmployee.time);


    const {updateEmployee} = useContext(EmployeeContext);

    const updatedEmployee = {id, heading, deadline, note, time}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="heading *"
                    heading="heading"
                    value={heading}
                    onChange={(e)=> setheading(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="date"
                    placeholder="deadline *"
                    heading="deadline"
                    value={deadline}
                    onChange={(e)=> setdeadline(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="note"
                    rows={3}
                    heading="note"
                    value={note}
                    onChange={(e)=> setnote(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="time"
                    placeholder="time"
                    heading="time"
                    value={time}
                    onChange={(e)=> settime(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Note
            </Button>
        </Form>

     )
}

export default EditForm;