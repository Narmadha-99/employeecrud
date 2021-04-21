import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
    
    this.state = {
        empName: '',
        deptName: '',
        location: '',
        password: ''
         }
    
    
     this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
    this.changeDepartmentNameHandler = this.changeDepartmentNameHandler.bind(this);
    this.changeLocationHandler = this.changeLocationHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }   
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {empName: this.state.empName, deptName: this.state.deptName, location: this.state.location, password: this.state.password};
        console.log('employee => ' + JSON.stringify(employee));
    
        EmployeeService.addEmployee(employee).then(res =>{
            this.props.history.push('/getemployeesbyid/');
            })
    }
    changeEmployeeNameHandler= (event) => {
        this.setState({empName: event.target.value});
    }
    changeDepartmentNameHandler= (event) => {
        this.setState({deptName: event.target.value});
    }

    changeLocationHandler= (event) => {
        this.setState({location: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    
    }
    cancel(){
        this.props.history.push('/employees');
    }
     render(){
        return (
            <div>
              <div className= "container">
                  <div className = "row">
                  <div className = "card col-md-6 offset-md-3 offset-md-3"> 
                  <h3 className="text-center">Add Employee</h3>
                  <div className= "card-body">
                    <form>
                        <div className = "form-gorup">
                            <label>Name: </label>
                            <input placeholder="Employee Name" name="empName" className="form-control" 
                             value={this.state.empName} onChange={this.changeEmployeeNameHandler}/>
                             </div>
                            <div className = "form-group">
                             <label> Department Name: </label>
                             <input placeholder="Department Name" name="deptName" className="form-control" 
                            value={this.state.deptName} onChange={this.changeDepartmentNameHandler}/>
                              </div>
                             <div className = "form-group">
                             <label> Location: </label>
                             <input placeholder="Location" name="location" className="form-control" 
                            value={this.state.location} onChange={this.changeLocationHandler}/>
                              </div>
                              <div className = "form-group">
                                <label> Password: </label>
                              <input placeholder="Password" name="password" className="form-control" 
                              value={this.state.password} onChange={this.changePasswordHandler}/>
                             </div>
                             <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                             <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                        
                    </form>

                  </div>
                  </div>
                  </div>
              </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;