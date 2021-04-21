import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:3456/getemployeebyid/1";
 
class EmployeeService {

    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
   addEmployee(employee){
   return axios.post("http://localhost:3456/addemployee",employee);
   }
   getEmployeebyId(employeeId){
    return axios.put("http://localhost:3456/getemployeebyid/" + '/' + employeeId);
    
}
    getAllEmployee(employee){
    return axios.post("http://localhost:3456/getallemployees",employee);
    }
}

export default new EmployeeService()