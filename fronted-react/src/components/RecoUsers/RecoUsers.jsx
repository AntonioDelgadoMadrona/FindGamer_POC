import React, { Component } from "react";
import axios from 'axios';

import { Col, Row } from "react-bootstrap";

import './RecoUsers.css';

import foto1 from "../../img/foto-perfil1.jpg";
import foto2 from "../../img/foto-perfil2.jpg";
import foto3 from "../../img/foto-perfil3.jpg";

class RecoUsers extends Component {

  render() {

    // const array = this.state.data.

    // function media(array) {
    //   let suma = 0;
    //   for (let i = 0; i < array.length; i++) {
    //     suma = suma + array[i];
    //   }
    //   let media = suma / array.length;
    //   return media;
    // }

    // const rounded_mean = Math.round(media(this.state.data));

    // const starsRender = [];

    // for (let i = 0; i < 5; i++) {
    //   starsRender.push(
    //     <FontAwesomeIcon
    //       key={i}
    //       icon={faStar}
    //       className={`text-${i < rounded_mean ? "warning" : "light"} fa-lg`}
    //     />
    //   );
    // }
    return (
      <Col xs={12} lg={4}>
        <Row>
          <Col>
            <h4 className="titulo-h4">JUGADORES RECOMENDADOS</h4>
          </Col>
        </Row>
        <div id="lista-vertical">
          <Row className="pb-3 jugador-recomendacion">
            <div className="d-flex justify-content-around">
              <img
                src={foto1}
                className="float-left img-fluid rounded-circle imagen-usuario"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <a href="/">
                    <strong className="text-white">Nombre de Jugador</strong>
                  </a>
                </p>
                <p>
                  <span className="verde">Puntuacion</span>
                </p>
                <p className="text-muted">Fecha de registro</p>
              </div>
            </div>
          </Row>
          <Row className="pb-3 jugador-recomendacion">
            <div className="d-flex justify-content-around">
              <img
                src={foto2}
                className="float-left img-fluid rounded-circle imagen-usuario"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <a href="/">
                    <strong className="text-white">Nombre de Jugador</strong>
                  </a>
                </p>
                <p>
                  <span className="verde">Puntuacion</span>
                </p>
                <p className="text-muted">Fecha de registro</p>
              </div>
            </div>
          </Row>
          <Row className="pb-3 jugador-recomendacion">
            <div className="d-flex justify-content-around">
              <img
                src={foto3}
                className="float-left img-fluid rounded-circle imagen-usuario"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <a href="/">
                    <strong className="text-white">Nombre de Jugador</strong>
                  </a>
                </p>
                <p>
                  <span className="verde">Puntuacion</span>
                </p>
                <p className="text-muted">Fecha de registro</p>
              </div>
            </div>
          </Row>
          <Row className="pb-3 jugador-recomendacion">
            <div className="d-flex justify-content-around">
              <img
                src={foto1}
                className="float-left img-fluid rounded-circle imagen-usuario"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <a href="/">
                    <strong className="text-white">Nombre de Jugador</strong>
                  </a>
                </p>
                <p>
                  <span className="verde">Puntuacion</span>
                </p>
                <p className="text-muted">Fecha de registro</p>
              </div>
            </div>
          </Row>
          <Row className="pb-3 jugador-recomendacion">
            <div className="d-flex justify-content-around">
              <img
                src={foto2}
                className="float-left img-fluid rounded-circle imagen-usuario"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <a href="/">
                    <strong className="text-white">Nombre de Jugador</strong>
                  </a>
                </p>
                <p>
                  <span className="verde">Puntuacion</span>
                </p>
                <p className="text-muted">Fecha de registro</p>
              </div>
            </div>
          </Row>
          <Row className="pb-3 jugador-recomendacion">
            <div className="d-flex justify-content-around">
              <img
                src={foto3}
                className="float-left img-fluid rounded-circle imagen-usuario"
                alt=""
              />
              <div className="float-right ml-3">
                <p>
                  <a href="/">
                    <strong className="text-white">Nombre de Jugador</strong>
                  </a>
                </p>
                <p>
                  <span className="verde">Puntuacion</span>
                </p>
                <p className="text-muted">Fecha de registro</p>
              </div>
            </div>
          </Row>
        </div>
      </Col>
    );
  }
}

export default RecoUsers;
