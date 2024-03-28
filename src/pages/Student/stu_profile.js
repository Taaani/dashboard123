import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Image from "../../assets/images/pofileImage.jpg"

function UserProfile() {
  document.title = 'Student Attendance | Dashboard Template';

  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <Col xs="12">
            <Card>
              <CardBody>
                <Row>
                  <Col md="3" xs="12">
                    {/* Profile Picture */}
                    <div className="text-center">
                      <div className="cubic-image">
                        <img
                          src={Image} // Replace with actual image URL
                          alt="Student"
                          className="img-fluid"
                          width={"90px"}
                          height={"90px"}
                        />
                      </div>
                      <h5 className="mt-3">Amelia</h5>
                    </div>
                  </Col>
                  <Col md="9" xs="12">
                    {/* Student Information */}
                    <h5>Personal Information</h5>
                    <ul className="list-unstyled">
                      <li><strong><i className="fas fa-tty"></i> Phone:</strong> (0345) 0575140</li>
                      <li><strong><i className="fas fa-envelope-open  "></i> Email:</strong> TAHIRSIDDIQUE535@GMAIL.COM</li>
                      <li><strong><i className="fas fa-address-card"></i> CNIC:</strong> 33205-0351987-1</li>
                      <li><strong><i className="fas fa-calendar"></i> Date of Birth:</strong> 08-03-2002</li>
                      <li><strong><i className="fas fa-address-card"></i> Gender:</strong> FEMALE</li>
                      <li>
                        <strong><i className="fas fa-home"></i> Permanent Address:</strong> KASHMIR COLONY NO.3 CHAK 10/1THALL,
                        TEHSIL 18 HAZARI, DISTRICT JHANG
                      </li>
                      
                    </ul>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            {/* Hostel Information */}
            <Card>
              <CardBody>
                <h5> <i className="fas fa-h-square"></i> Hostel Information</h5>
                <Row>
                  <Col md="6" xs="12">
                    <ul className="list-unstyled">
                      <li><strong>Hostel Name:</strong> XYZ Hostel</li>
                      <li><strong>Room Number:</strong> 101</li>
                      <li><strong>Mess Attendance:</strong> 90%</li>
                    </ul>
                  </Col>
                  <Col md="6" xs="12">
                    <ul className="list-unstyled">
                      <li><strong>Hostel Fee:</strong> Paid</li>
                      <li><strong>Mess Fee:</strong> Unpaid</li>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
