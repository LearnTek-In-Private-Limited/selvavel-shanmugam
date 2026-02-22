import React, { useContext } from "react";
import { Row, Col, Card, Typography } from "antd";
import { themeContext } from "../../Context";
import vamsi from "../../img/profile3.png";
import ram from "../../img/profile4.png";
import selva from "../../img/profile1.jpg";
import "./Testimonial.css";

const { Title, Paragraph } = Typography;

const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const testimonials = [
    {
      name: "Vamsi Krishna I",
      feedback: "I am incredibly happy with the work.",
      image: vamsi,
    },
    {
      name: "Ramkumar R",
      feedback: "Fantastic experience!",
      image: ram,
    },
    {
      name: "Selvavel Shanmugam",
      feedback: "I saw a significant improvement.",
      image: selva,
    },
  ];

  return (
    <div
      className="testimonials"
      style={{
        backgroundColor: darkMode ? "#121212" : "#f9f9f9",
        color: darkMode ? "#fff" : "#000",
        padding: "60px 0",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div className="container-fluid" id="testimonials">
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: darkMode ? "#fff" : "#000",
            fontWeight: "bold",
          }}
        >
          What Our Clients Say
        </Title>

        <Row
          gutter={[24, 24]}
          justify="center"
          align="stretch"
          style={{ paddingLeft: "30px" }}
        >
          {testimonials.map((testimonial, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                bordered={false}
                className="testimonial-card"
                style={{
                  borderRadius: "15px",
                  textAlign: "center",
                  backgroundColor: darkMode ? "#333" : "#fff",
                  color: darkMode ? "#fff" : "#000",
                  boxShadow: darkMode
                    ? "0px 8px 25px rgba(255, 255, 255, 0.1)"
                    : "0px 8px 25px rgba(0, 0, 0, 0.1)",
                  paddingTop: "60px",
                  height: "100%", // make cards equal height
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Profile Image */}
                <div className="profile-image-container">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="test-image"
                    style={{
                      border: darkMode ? "4px solid #333" : "4px solid #fff",
                    }}
                  />
                </div>

                {/* Feedback */}
                <Paragraph
                  className="testimonial-feedback"
                  style={{
                    fontStyle: "italic",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    margin: "30px 0",
                    color: darkMode ? "#ccc" : "#444",
                    flexGrow: 1, // helps equal height
                  }}
                >
                  “{testimonial.feedback}”
                </Paragraph>

                {/* Name */}
                <Title
                  level={3}
                  style={{
                    fontWeight: "bold",
                    position: "relative",
                    top: "-25px",
                    color: darkMode ? "#fff" : "#000",
                  }}
                >
                  {testimonial.name}
                </Title>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Testimonials;
