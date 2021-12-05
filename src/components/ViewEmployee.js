import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployees() {
    const { employeeId } = useParams();
    const [employee, setEmployee] = useState({ firstName: "", lastName: "", emailId: "" });

    useEffect(() => {
        const fetchEmployee = async () => {
            const response = await axios("http://localhost:8000/api/v1/employees/" + employeeId);
            const employeeData = await response.data;
            setEmployee(employeeData);
        };
        fetchEmployee();
    }, [employeeId]);

    return (
        <Card className="shadow">
            <Card.Body>
                <Card.Title className="fw-bold">
                    <Link to="/" >
                    <Button className="mt-3" type="submit" class="btn btn-primary">
                        Back 
                    </Button>
                    </Link>{" "}
                </Card.Title>
                <h1 align="center">View Employee Details</h1>
                <Col className="mt-5" align="center">
                    <Row>
                        <p><b>Employee First Name:</b> {employee.firstName}</p>
                    </Row>
                    <Row>
                        <p><b>Employee Last Name:</b> {employee.lastName}</p>
                    </Row>
                    <Row>
                        <p><b>Employee Email Id:</b> {employee.emailId}</p>
                    </Row>
                </Col>
            </Card.Body>
        </Card>
    );
}