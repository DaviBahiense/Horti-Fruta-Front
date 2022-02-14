import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Header from "../Header";
import ScrollButton from "../../components/ScrollButton";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { BASE_URL } from "../../services/api";
import { Container, Top, Icons, Img } from "../Home/homeStyle";

export default function UserPage() {
  return (
    <Container>
      <Header></Header>
    </Container>
  );
}
