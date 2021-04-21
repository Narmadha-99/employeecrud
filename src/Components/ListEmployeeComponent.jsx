import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

       this.state= {
           employees: {}
       }
       this.addEmployee = this.addEmployee.bind(this);
       this.updateEmployee= this.updateEmployee.bind(this);
       this.deleteEmployee= this.deleteEmployee.bind(this);
       this.viewEmployee= this.viewEmployee.bind(this);
    }
    updateEmployee(id){
        this.props.history.push('/updateemployee/${id}');
    }
    deleteEmployee(id){
        //restapi
    }
    viewEmployee(id){
        this.props.history.push('/getallemployees');
    }

    componentDidMount(){
EmployeeService.getEmployee().then((res) => {
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
                            
                                        <tr key = {this.state.employees.id}>
                                             <td> { this.state.employees.empName} </td>   
                                             <td> {this.state.employees.deptName}</td>
                                             <td> {this.state.employees.location}</td>
                                             <button onClick={ () => this.updateEmployee(this.state.employees.id)} className="btn btn-info">Update </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(this.state.employees.id)} className="btn btn-danger">Delete </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(this.state.employees.id)} className="btn btn-warning">View </button>
                                        </tr>
                                   
                            </tbody>
                        </table>
                        </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;