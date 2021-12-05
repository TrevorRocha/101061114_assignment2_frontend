import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Form, Row, Button, Alert } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function UpdateEmployee() {
    const { employeeId } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({ firstName: "", lastName: "", emailId: "" });
    const [isError, setIsError] = useState(false);

    const onFormSubmit = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/v1/employees/" + employeeId, {
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                emailId: e.target.emailId.value,
            })
            .then((response) => {
                if (response.status === 200) {
                    navigate("/");
                } else {
                    setIsError(true);
                }
            })
            .catch((err) => {
                console.log("Err " + err);
                setIsError(true);
            });
    };

    useEffect(() => {
        const fetchEmployee = () => {
            axios("http://localhost:8000/api/v1/employees/" + employeeId)
                .then((response) => {
                    if (response.data) {
                        setEmployee(response.data);
                    } else {
                        navigate("/");
                    }
                })
                .catch((err) => {
                    navigate("/");
                });
        };
        fetchEmployee();
    }, [employeeId, navigate]);

    return (
        <>
            {isError ? (
                <Alert variant="danger" onClick={() => setIsError(false)} dismissible>
                    <p>ERROR</p>
                </Alert>
            ) : (
                <></>
            )}
            <Card className="shadow">
                <Card.Body>
                    <Card.Title className="fw-bold">
                        <Link to="/">
                            <Button className="mt-3" type="submit" class="btn btn-dark">
                                 Back 
                            </Button>
                        </Link>{" "}
                    </Card.Title>
                        <h1 align="center">
                            Update Employee
                        </h1>
                    <Form onSubmit={onFormSubmit}>
                        <Row className="mt-5">
                            <Form.Group className="mb-3">
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="text" placeholder="First Name" name="firstName" defaultValue={employee.firstName} required></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name:</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" name="lastName" defaultValue={employee.lastName} required></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email Id:</Form.Label>
                                <Form.Control type="email" placeholder="Email Address" name="emailId" defaultValue={employee.emailId} required></Form.Control>
                            </Form.Group>
                            <Button className="mt-3" type="submit">
                                Submit
                            </Button>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}