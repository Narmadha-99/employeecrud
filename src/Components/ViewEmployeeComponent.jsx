import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
    //componentWillMount(){}
    componentDidMount(){
        EmployeeService.getEmployee(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee Name: </label>
                            <div> { this.state.employee.empName }</div>
                        </div>
                        <div className = "row">
                            <label> Department Name: </label>
                            <div> { this.state.employee.deptName }</div>
                        </div>
                        <div className = "row">
                            <label> Location: </label>
                            <div> { this.state.employee.location }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
