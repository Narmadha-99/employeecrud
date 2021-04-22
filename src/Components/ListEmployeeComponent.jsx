import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

       this.state= {
           employees: []
       }
       this.addEmployee = this.addEmployee.bind(this);
      
       this.viewEmployee= this.viewEmployee.bind(this);
    }
    
    viewEmployee(id){
        this.props.history.push(`/getemployeebyid/${id}`);
    }

    componentDidMount(){
EmployeeService.getAllEmployee().then((res) => {
    console.log(res.data)
    this.setState({employees: res.data});
});

    }
    addEmployee(){
        this.props.history.push('/addemployee');
    }
    


    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className = "row">
                <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                </div>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee Name</th>
                                    <th> Employee Department Name</th>
                                    <th> Location</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    this.state.employees.map(
                                        employee => 
                                
                            
                                        <tr key = {employee.empId}>
                                             <td> {employee.empName} </td>   
                                             <td> {employee.deptName}</td>
                                             <td> {employee.location}</td>
                                    <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.empId)} className="btn btn-warning">View </button>
                                      </td>
                                        </tr>
                                     
                                    )
    }
                            </tbody>
                        </table>
                        </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
