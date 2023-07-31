import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap"

const Login = () => {
    return (
        <>
        <Row style={{ 
            height:"100%",
            justifyContent:"center",
            paddingTop:"10%",
         }}>
            <Col xs={6}>
                <Stack gap={3}>
                    <h2 style={{ color:"white" }}>Login</h2>
                    <Form.Control type="text" placeholder="Enter your email ..." required></Form.Control>
                    <Form.Control type="text" placeholder="Enter your password ..." required></Form.Control>
                    <Button variant="primary" type="submit">
                        Login
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
 
export default Login;