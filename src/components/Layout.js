import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <span>Employee Management App</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container className="mt-5">
                <Outlet />
            </Container>
        </div>
    );
}