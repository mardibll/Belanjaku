import React from "react";
import { Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import "./layout.css";
export default function Layout() {
  return (
    <div>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          // bg="red"
          expand={expand}
          id={`offcanvasNavbar-expand-${expand}`}
          style={{
            backgroundColor: "#801e8c",
            height: 70,
          }}
        >
          <Container fluid style={{ alignItems: "center" }}>
            <Navbar.Brand
              href="#"
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbKqpodzogzE0hJL4-CfTfWCyl33ZSd_LDg&usqp=CAU"
                alt="error"
                style={{ height: 50, width: 50, borderRadius: 100 }}
              />
              <h5 style={{ paddingLeft: 20,color:"white" }}>Mardi Migrasi</h5>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton style={{ backgroundColor: "blue" }}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}` }>
                 <h3 > Mardi Migrasi</h3>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{}}>
                <Nav className=" flex-grow-1">
                  <Nav.Link href="/">
                    <h5 id="link">Home</h5>
                  </Nav.Link>
                  <Nav.Link href="/About">
                    <h5 id="link">About</h5>
                  </Nav.Link>
                  <Nav.Link href="/Layanan">
                    <h5 id="link">Layanan</h5>
                  </Nav.Link>
                  <Nav.Link href="/Portofolio">
                    <h5 id="link">Portofolio</h5>
                  </Nav.Link>
                  <Nav.Link href="/Kontak">
                    <h5 id="link">Kontak</h5>
                  </Nav.Link>
                  <Nav.Link href="/Blog">
                    <h5 id="link">Blog</h5>
                  </Nav.Link>
                </Nav>
                <Form className="d-flex" style={{ alignItems: "center" }}>
                  <Nav>
                    <Nav.Link href="/Login">
                      <h5 id="link">Login</h5>
                    </Nav.Link>
                    <Nav.Link href="/Regist">
                      <h5 id="link">Regist</h5>
                    </Nav.Link>
                  </Nav>
                  <Form.Control
                    style={{ height: 30 }}
                    type="search"
                    placeholder="Search"
                    className="me-3"
                    aria-label="Search"
                  />

                  <button
                    variant="outline-success"
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Search
                  </button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />
    </div>
  );
}
