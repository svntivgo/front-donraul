import { FaAddressBook, FaTruckLoading,FaPlusCircle } from "react-icons/fa";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ auth, authHandle }) => {
  let navigate = useNavigate();
  return (
    <div className="home__container">
      <div
        className="home__card clientes"
        onClick={() => navigate("/clientes")}
      >
        <p>CLIENTES</p>
        <FaAddressBook />
      </div>
      <div
        className="home__card proveedores"
        onClick={() => navigate("/proveedores")}
      >
        <p>PROVEEDORES</p>
        <FaTruckLoading />
      </div>
      <div className="home__card clientes crear">
        <i class="fab fa-people-group"></i>
        <p>AGREGAR CLIENTES</p>
        <FaAddressBook />
        <FaPlusCircle />
      </div>
      <div className="home__card proveedores crear">
        <p>AGREGAR PROVEEDORES</p>
        <FaTruckLoading />
        <FaPlusCircle />
      </div>
    </div>
  );
};

export default Home;
