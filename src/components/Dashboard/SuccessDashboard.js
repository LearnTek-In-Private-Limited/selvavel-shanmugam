import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap styles

const SuccessDashboard = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="success-dashboard container-fluid "
      id="success"
      style={{
        backgroundColor: darkMode ? "#121212" : "#f9f9f9",
        color: darkMode ? "#fff" : "#000",
        padding: "30px 0",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div className="container-fluid">
        <h2 className={`text-center ${darkMode ? "text-light" : "text-dark"}`}>
          Success Dashboard
        </h2>
        <Row className="mt-4"
          style={{paddingLeft:"30px"}}
        >
          <Col sm={12} md={6} lg={3}>
            <Card
              className="text-center"
              style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "#000",
                border: darkMode ? "1px solid #444" : "1px solid #ddd",
                 margin:"20px"
              }}
            >
              <Card.Body>
                <h3>1,500</h3>
                <p>Total Users</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card
              className="text-center"
              style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "#000",
                border: darkMode ? "1px solid #444" : "1px solid #ddd",
                 margin:"20px"
              }}
            >
              <Card.Body>
                <h3>100+</h3>
                <p>Happy Customers</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card
              className="text-center"
              style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "#000",
                border: darkMode ? "1px solid #444" : "1px solid #ddd",
                 margin:"20px"
              }}
            >
              <Card.Body>
                <h3>100+</h3>
                <p>Completed Projects</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card
              className="text-center"
              style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "#000",
                border: darkMode ? "1px solid #444" : "1px solid #ddd",
                 margin:"20px"
              }}
            >
              <Card.Body>
                <h3>10+</h3>
                <p>Active Projects</p>
              </Card.Body>
              
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card
              className="text-center"
              style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "#000",
                border: darkMode ? "1px solid #444" : "1px solid #ddd",
                margin:"20px"
              }}
            >
              <Card.Body>
                <h3>100+</h3>
                <p>Professional Certificates</p>
              </Card.Body>
              
            </Card>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <Card
              className="text-center"
              style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "#000",
                border: darkMode ? "1px solid #444" : "1px solid #ddd",
                margin:"20px"
              }}
            >
              <Card.Body>
                <h3>2+</h3>
                <p>Licenses</p>
              </Card.Body>
              
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>
  );
};

export default SuccessDashboard;
