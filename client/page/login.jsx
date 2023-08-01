import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap"
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { loginUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } = useContext(AuthContext)
    return (
        <>
        <Form onSubmit={loginUser}>
            <Row style={{
                height: "100%",
                justifyContent: "center",
                paddingTop: "10%",
            }}>
                <Col xs={6}>
                    <Stack gap={3}>
                        <h2 style={{ color: "white" }}>Login</h2>
                        <Form.Control type="email" placeholder="Enter your email ..." onChange={(e) =>
                            updateLoginInfo({ ...loginInfo, email: e.target.value })
                        }>
                        </Form.Control>
                        <Form.Control type="password" placeholder="Enter your password ..." onChange={(e) =>
                            updateLoginInfo({ ...loginInfo, password: e.target.value })
                        }>
                        </Form.Control>
                        <Button variant="primary" type="submit">
                                 {isLoginLoading? "Getting you in" : "Login"}
                            </Button>
                        {loginError?.error && (
                                <Alert variant="danger">
                                    <p>{loginError?.message}</p>
                                </Alert>
                            )}
                    </Stack>
                </Col>
            </Row>
            </Form>
        </>
    );
}

export default Login;