import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';


const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
    
    this.state = {
        empName: '',
        deptName: '',
        location: '',
        password: '',
        formErrors :
        {
        empName:"",
        deptName:"",
        location:"",
        password:""

        }
         }
    
    
     this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
    this.changeDepartmentNameHandler = this.changeDepartmentNameHandler.bind(this);
    this.changeLocationHandler = this.changeLocationHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }   
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        if( formValid (this.state)) {

        

        
        
        let employee = {empName: this.state.empName, deptName: this.state.deptName, location: this.state.location, password: this.state.password};
        console.log('employee => ' + JSON.stringify(employee));
    
        EmployeeService.addEmployee(employee).then(res =>{
            this.props.history.push('/getemployeesbyid');
            alert("You are submitting " + this.state.empName + "'s info");
            })
    } else{
        alert("Form is invalid");
    }
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
    formValChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        switch (name) {
          case "empName":
            formErrors.empName = value.length < 3 ? "Atleast 3 characters required" : "";
            break;
          case "deptName":
            formErrors.deptName = value.length < 2 ? "Atleast 2 characters required" : "";
            break;
          case "location":
            formErrors.location = value.length < 5 ? "Atleast 5 characters required" : "";
            break;
    
          case "password":
            formErrors.password =
              value.length < 7 ? "Atleast 7 characters required" : "";
            break;
    
          default:
            break;
        }
        this.setState(
          {
            formErrors,
            [name]: value,
            disabled: false,
          },
          () => console.log(this.state)
        );
      };
    cancel(){
        this.props.history.push('/employees');
    }
     render(){
        const { formErrors } = this.state;
        return (
            <div>
              <div className= "container">
                  <div className = "row">
                  <div className = "card col-md-6 offset-md-3 offset-md-3"> 
                  <h3 className="text-center">Add Employee</h3>
                  <div className= "card-body">
                    <form>
                        <div className = "form-group">
                            <label>Name: </label>
                            <input placeholder="Employee Name" name="empName" 
                            className={
                      formErrors.empName.length > 0
                        ? "is-invalid form-control"
                        : "form-control"
                    } 
                             value={this.state.empName} onChange={this.changeEmployeeNameHandler, this.formValChange}/>
                            {formErrors.empName.length > 0 && (
                    <span className="invalid-feedback">{formErrors.empName}</span>
                  )}
                             </div>
                            <div className = "form-group">
                             <label> Department Name: </label>
                             <input placeholder="Department Name" name="deptName" 
                             className={
                      formErrors.deptName.length > 0
                        ? "is-invalid form-control"
                        : "form-control"
                    }  
                            value={this.state.deptName} onChange={this.changeDepartmentNameHandler,  this.formValChange}/>
                             {formErrors.deptName.length > 0 && (
                    <span className="invalid-feedback">{formErrors.deptName}</span>
                  )}
                              </div>
                              
                             <div className = "form-group">
                             <label> Location: </label>
                             <input placeholder="Location" name="location" className={
                      formErrors.location.length > 0
                        ? "is-invalid form-control"
                        : "form-control"
                    } 

                            value={this.state.location} onChange={this.changeLocationHandler,  this.formValChange}/>
                             
                             {formErrors.location.length > 0 && (
                    <span className="invalid-feedback">{formErrors.location}</span>
                  )} </div>
                              <div className = "form-group">
                                <label> Password: </label>
                              <input placeholder="Password" name="password" 
                              className={
                      formErrors.password.length > 0
                        ? "is-invalid form-control"
                        : "form-control"
                    } 
                              value={this.state.password} onChange={this.changePasswordHandler,  this.formValChange}/>
                            
                            {formErrors.password.length > 0 && (
                    <span className="invalid-feedback">{formErrors.password}</span>
                  )} </div>
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
