import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider  = (props) => {

    const [employees, setEmployees] = useState([
        {id:uuidv4(), heading: 'English', deadline: '2022-07-07', note: 'Complete the assignments',time: '06:00'},
        {id:uuidv4(), heading: 'Hindi', deadline: '2022-07-07', note: 'Homework-2 pages', time: '06:00'},
        {id:uuidv4(), heading: 'Korean', deadline:  '2022-07-07', note: 'Revise the Alphabets', time: '06:00'},
        {id:uuidv4(), heading: 'Hindi', deadline: '2022-07-07', note: 'Homework-2 pages', time: '06:00'},
        {id:uuidv4(), heading: 'Electronics', deadline:  '2022-07-07', note: 'Study for test', time: '06:00'},
        {id:uuidv4(), heading: 'Project', deadline:  '2022-07-07', note: 'complete the stage two, that is the backend part', time: '06:00'},
        {id:uuidv4(), heading: 'Hindi', deadline: '2022-07-07', note: 'Homework-2 pages', time: '06:00'},
        {id:uuidv4(), heading: 'Project', deadline:  '2022-07-07', note: 'complete the stage two, that is the backend part', time: '06:00'},
        {id:uuidv4(), heading: 'Akana', deadline: '2022-07-07', note: 'Homework-2 pages', time: '06:00'},
        {id:uuidv4(), heading: 'Project', deadline:  '2022-07-07', note: 'complete the stage two, that is the backend part', time: '06:00'},
        {id:uuidv4(), heading: 'Project', deadline:  '2022-07-07', note: 'complete the stage two, that is the backend part', time: '06:00'},
        {id:uuidv4(), heading: 'Bemba', deadline: '2022-07-07', note: 'Homework-2 pages', time: '06:00'},
])

useEffect(()=> {
    setEmployees(JSON.parse(localStorage.getItem('employees')))
},[])

useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
})



const sortedEmployees = employees.sort((a,b)=>(a.date < b.date ? -1 : 1));



const addEmployee = (heading, deadline, note, time) => {
    setEmployees([...employees , {id:uuidv4(), heading, deadline, note, time}])
}

const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
}

const updateEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
}

    return (
        <EmployeeContext.Provider value={{sortedEmployees, addEmployee, deleteEmployee, updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;