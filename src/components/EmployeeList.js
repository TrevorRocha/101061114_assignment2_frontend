import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

export default function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const columns = [
        {
            name: "Employee First Name",
            selector: (row) => row.firstName,
            sortable: true,
        },
        {
            name: "Employee Last Name",
            selector: (row) => row.lastName,
            sortable: true,
        },
        {
            name: "Employee Email Id",
            selector: (row) => row.emailId,
            sortable: true,
        },
        {
            name: "Update",
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            cell: (row) => (
                <Link className="btn btn-sm btn-primary" to={"/add-employee/" + row._id}>
                    Update
                </Link>
            ),
        },
        {
            name: "Delete",
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            cell: (row) => (
                <Link className="btn btn-sm btn-danger" to={"/delete-employee/" + row._id}>
                    Delete
                </Link>
            ),
        },
        {
            name: "View",
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            cell: (row) => (
                <Link className="btn btn-sm btn-primary" to={"/view-employee/" + row._id}>
                    View
                </Link>
            ),
        },
    ];

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await axios("http://localhost:8000/api/v1/employees/");
            const employeesData = await response.data;
            employeesData.forEach((employee, index) => {
                employee.id = index + 1;
            });
            setEmployees(employeesData);
        };
        fetchEmployees();
    }, []);
    return (
        <Card className="shadow">
            <Card.Body>
                <Card.Title className="fw-bold">
                    <h1 align="center">
                        Employees List
                    </h1>
                    <Link className="btn btn-primary" to="/add-employee">
                        Add Employee
                    </Link>
                </Card.Title>
                    <DataTable className="mt-5" columns={columns} data={employees} />
            </Card.Body>
        </Card>
    );
}