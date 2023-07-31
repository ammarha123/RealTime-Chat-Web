import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap"
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    const { registerInfo, updateRegisterInfo } = useContext(AuthContext);
    return (
        <>
            <Row style={{
                height: "100%",
                justifyContent: "center",
                paddingTop: "10%",
            }}>
                <Col xs={6}>
                    <Stack gap={3}>
                        <h2 style={{ color: "white" }}>Register</h2>
                        <Form.Control type="text" placeholder="Enter your name ..." required onChange={(e) =>
                            updateRegisterInfo({  ...registerInfo, name: e.target.value })
                        }>
                        </Form.Control>
                        <Form.Control type="email" placeholder="Enter your email ..." required onChange={(e) =>
                            updateRegisterInfo({  ...registerInfo, email: e.target.value })
                        }>    
                        </Form.Control>
                        <Form.Control type="password" placeholder="Enter your password ..." required onChange={(e) =>
                            updateRegisterInfo({  ...registerInfo, password: e.target.value })
                        }>
                        </Form.Control>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>

                        <Alert variant="danger">
                            <p>An error occured</p>
                        </Alert>
                    </Stack>
                </Col>
            </Row>
        </>
    );
}

export default Register;