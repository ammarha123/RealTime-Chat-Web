import { Routes, Route, Navigate } from "react-router-dom"
import Chat from "../page/chat";
import Register from "../page/register";
import Login from "../page/login";
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import NavBar from "../components/Navbar"

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Container className="text-secondary">
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Container>
    </>
  );
}

export default App
