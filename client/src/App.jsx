import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "../page/chat";
import Register from "../page/register";
import Login from "../page/login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function App() {
  const { user } = useContext(AuthContext); // Destructure user from the context

  return (
    <>
      <NavBar />
      <Container className="text-secondary">
        <Routes>
          {/* Redirect to /chat if the user is logged in */}
          {user ? <Route path="/" element={<Navigate to="/chat" />} /> : null}

          {/* Show the Login component if the user is not logged in */}
          {!user && <Route path="/login" element={<Login />} />}

          {/* Show the Register component if the user is not logged in */}
          {!user && <Route path="/register" element={<Register />} />}

          {/* Show the Chat component if the user is logged in */}
          {user && <Route path="/chat" element={<Chat />} />}

          {/* Redirect to /chat if the user tries to access any unknown route */}
          <Route path="*" element={<Navigate to="/chat" />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
