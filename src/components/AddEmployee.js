import axios from "axios";
import React, { useState } from "react";
import { Card, Form, Row, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmployee() {
    let navigate = useNavigate();
    const [isError, setIsError] = useState(false);
    const onFormSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/v1/employees/", {
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                emailId: e.target.emailId.value,
            })
            .then((response) => {
                if (response.status === 201) {
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
                            Add Employee
                        </h1>
                    <Form onSubmit={onFormSubmit}>
                        <Row className="mt-5">  
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" name="firstName" required></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" name="lastName" required></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email Id</Form.Label>
                                <Form.Control type="email" placeholder="Email Address" name="emailId" required></Form.Control>
                            </Form.Group>
                            <Button className="mt-3" type="submit" class="btn btn-dark">
                                Submit
                            </Button>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}