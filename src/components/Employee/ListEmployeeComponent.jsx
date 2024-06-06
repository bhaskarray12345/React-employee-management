import React, { useEffect, useState } from 'react'
import employeeService from '../../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const navigate = useNavigate()
    const [employees, setEmployees] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        employeeService.getAllEmployees().then(response => {
            console.log(response.data)
            console.log(response.data.length)
            setEmployees(response.data)
            setCount(response.data.length)
        }).then(error => console.log(error))

    }, [count])
    return (
        <>
            <div class="grid h-screen place-items-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => navigate('/create/employee')}>
                    Add Employee</button>
                <table class="table-auto border">
                    <thead>
                        <tr>
                            <th class="font-bold p-2 border-b border-l text-left">EmployeeId</th>
                            <th class="font-bold p-2 border-b border-l text-left">EmployeeName</th>
                            <th class="font-bold py-2 px-4 border-b border-l text-left">EmployeeSalary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) =>
                            <tr key={employee.id}>
                                <td class="p-2 border-b border-l text-left">{employee.id}</td>
                                <td class="p-2 border-b border-l text-left">{employee.name}</td>
                                <td class="py-2 px-4 border-b border-l text-left">{employee.salary}</td>
                                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={(e) => {
                                        employeeService.deleteEmployee({
                                            id: employee.id
                                        }).then(() => {
                                            console.log('employee deleted')
                                            setCount(count - 1)
                                        })
                                            .then(error => console.log(error))
                                    }}>Delete</button>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListEmployeeComponent
