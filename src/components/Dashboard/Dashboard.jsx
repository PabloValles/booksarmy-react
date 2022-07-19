import React from "react";
import "./dashboard.css";
import Card from "react-bootstrap/Card";
import Sidebar from "../Sidebar";
import Counter from "../Counter";

const Dashboard = () => {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Booksarmy
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#">
              DigitalHouse
            </a>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h3 className="pt-5">Dashboard</h3>
            <hr />

            <div className="row">
              <div className="col-md-3">
                <Card style={{ width: "18rem" }} border={"primary"}>
                  <Card.Body>
                    <Card.Title>Cantidad de libros</Card.Title>
                    <Counter tabla="products" />
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3">
                <Card style={{ width: "18rem" }} bg={"primary"} text={"light"}>
                  <Card.Body>
                    <Card.Title>Cantidad de Usuarios</Card.Title>
                    <Counter tabla="users" />
                  </Card.Body>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
