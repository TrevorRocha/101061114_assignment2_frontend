import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import ViewEmployee from "./components/ViewEmployee";
import DeleteEmployee from "./components/DeleteEmployee";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<EmployeeList />}></Route>
                <Route path="/add-employee/" element={<AddEmployee />}></Route>
                <Route path="/add-employee/:employeeId" element={<UpdateEmployee />}></Route>
                <Route path="/view-employee/:employeeId" element={<ViewEmployee />}></Route>
                <Route path="/delete-employee/:employeeId" element={<DeleteEmployee />}></Route>
            </Route>
        </Routes>
    );
}


export default App;
