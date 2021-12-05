import axios from "axios";
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function DeleteEmployee() {
    const { employeeId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = () => {
            axios
                .delete("http://localhost:8000/api/v1/employees/" + employeeId)
                .then((response) => {
                    navigate("/");
                })
                .catch((err) => {
                    navigate("/");
                });
        };
        fetchEmployee();
    }, [employeeId, navigate]);

    return <></>;
}