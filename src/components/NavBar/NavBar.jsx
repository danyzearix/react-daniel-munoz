import React from 'react'
import logo from "../../assets/RaidenLogo.png"
import CartWidget  from "../CartWidget/CartWidget.jsx";
//import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={logo}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Consolas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ipad</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Smartwatch</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Laptops</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contácto</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-1" type="search" placeholder="Buscar..." aria-label="Search"/>
      <button class="btn btn-outline-light me-4" type="submit">Buscar</button>
      </form>
      <CartWidget/>
    </div>
  </div>
</nav>
  )
}
