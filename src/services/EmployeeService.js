import axios from "axios"
export class EmployeeService{

    constructor(){

    }

    async getAllEmployees(){
        try {
            return await axios.get('/employees')
        } catch (error) {
            console.log(error)
        }
    }

    async addEmployee({id, name, salary}){
        try {
            await axios.get(`/employees/create/${id}/${name}/${salary}`)
        } catch (error) {
            console.log(error)
        }
    }

    async updateEmployee({id, name, salary}){
        try {
            await axios.patch(`/employees/update/${id}/${name}/${salary}`)
        } catch (error) {
            console.log(error)
        }
    }

    
    async deleteEmployee({id}){
        try {
            console.log(id)
            await axios.delete(`/employees/delete/${id}`)
        } catch (error) {
            console.log(error)
        }
    }
}

const employeeService = new EmployeeService
export default employeeService