import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap"
import { Link } from "react-router-dom"
import Image from '../../assets/images/avatar.png'

function Stu_Registration() {
  document.title = "Student Attendance | Dashboard Template"

  // State variables for form fields
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [fullname, setFullname] = useState("")
  const [religion, setReligion] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")
  const [nationality, setNationality] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [cnic, setCnic] = useState("")
  const [dob, setDob] = useState("")
  const [gender, setGender] = useState("")
  const [image, setImage] = useState()

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    // You can handle form submission logic here
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    // You can handle the file upload logic here
    setImage(file)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}

          <Row>
            <Col xs="12">
              {/* Render Email SideBar */}
              <Card>
                <CardBody>
                  <h3 className="card-title text-center text-danger">
                    Student Hostal Pre-Enrollment Form
                  </h3>
                  <div className="text-center mb-4">
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <label htmlFor="upload-image">
                        <img
                          src={Image}
                          alt="Student Image"
                          className="rounded-circle"
                          style={{
                            width: "100px",
                            height: "100px",
                            cursor: "pointer",
                          }}
                        />
                        <input
                          id="upload-image"
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="username">Username <span style={{ color: "red" }}>*</span></Label>
                          <Input
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="email">Email <span style={{ color: "red" }}>*</span></Label>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="fullname">Full Name <span style={{ color: "red" }}>*</span></Label>
                          <Input
                            type="text"
                            name="fullname"
                            id="fullname"
                            value={fullname}
                            onChange={e => setFullname(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="religion">Religion <span style={{ color: "red" }}>*</span></Label>
                          <Input
                            type="text"
                            name="religion"
                            id="religion"
                            value={religion}
                            onChange={e => setReligion(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="address">Home Address <span style={{ color: "red" }}>*</span></Label>
                          <Input
                            type="text"
                            name="address"
                            id="address"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="phone">Phone Number <span style={{ color: "red" }}>*</span></Label>
                          <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="maritalStatus">Marital Status <span style={{ color: "red" }}>*</span></Label>
                          <Input
                            type="select"
                            name="maritalStatus"
                            id="maritalStatus"
                            value={maritalStatus}
                            onChange={e => setMaritalStatus(e.target.value)}
                            required
                          >
                            <option value="">Select</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="nationality">Nationality <span style={{ color: "red" }}>*</span></Label>
                          <Input
                            type="text"
                            name="nationality"
                            id="nationality"
                            value={nationality}
                            onChange={e => setNationality(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="state">State <span style={{ color: "red" }}>*</span></Label>
                          <Input
                            type="text"
                            name="state"
                            id="state"
                            value={state}
                            onChange={e => setState(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="city">City <span style={{ color: "red" }}>*</span></Label>
                          <Input
                            type="text"
                            name="city"
                            id="city"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="cnic">CNIC <span style={{ color: "red" }}>*</span></Label>
                          <Input
                            type="text"
                            name="cnic"
                            id="cnic"
                            value={cnic}
                            onChange={e => setCnic(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="dob">Date of Birth <span style={{ color: "red" }}>*</span></Label>
                          <Input
                            type="date"
                            name="dob"
                            id="dob"
                            value={dob}
                            onChange={e => setDob(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
    <Col md={6}>
        <FormGroup tag="fieldset">
            <h4 style={{ display: "inline-block", marginRight: "10px" }}>Gender</h4>
            <FormGroup check inline>
                <Label check>
                    <Input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                    />{' '}
                    Male
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                    />{' '}
                    Female
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                    <Input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={gender === "other"}
                        onChange={(e) => setGender(e.target.value)}
                    />{' '}
                    Other
                </Label>
            </FormGroup>
        </FormGroup>
    </Col>
</Row>

                    <div className="text-center">
                      <Button color="danger" type="submit">
                        Enroll Now
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Stu_Registration
