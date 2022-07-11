import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {EmployeeContext} from '../contexts/EmployeeContext';
import Employee from './Employee';
import AddForm from './AddForm';
import Pagination from './Pagination';
import Search from '../components/Search';
 

const EmployeeList = () => {

    const {sortedEmployees} = useContext(EmployeeContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(6);

    const [searchText , setSearchText] = useState('');


    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedEmployees])

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil((sortedEmployees.length) / employeesPerPage);


    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Algo<b>Bulls</b></h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Note</span></Button>					
            </div>
        </div>
    </div>
    <div>
        <Search handleSearchNote={setSearchText}/>
    </div>
    
    <Alert show={showAlert} variant="success">
        Notes Updated Succefully!
    </Alert>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Heading</th>
                <th>Deadline</th>
                <th>Note</th>
                <th>Time</th>
                <th>Actions</th>
            </tr>
        </thead>

       
            <tbody>

                {
                  currentEmployees.filter((val)=>{
                    if(searchText==""){
                        return val
                    }else if(val.heading.toLowerCase().includes(searchText.toLowerCase())){
                        return val
                    }
                  }).map(employee => (
                      <tr key={employee.id}>
                        <Employee employee={employee} />
                    </tr>
                  ))  
                   
               
                }
                

        </tbody>
         
 

          

         
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentEmployees ={currentEmployees}
                sortedEmployees = {sortedEmployees} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Note
            </Modal.Title>
        </Modal.Header> 
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default EmployeeList;