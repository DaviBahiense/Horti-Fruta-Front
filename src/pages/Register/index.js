import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../validation/formValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
} from "../../components/FormComponents";
import api from "../../services/api";
import Logo from "../../assets/Logo.png";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const navigate = useNavigate();

  async function handleRegister(body) {
    if (body.password !== body.samePass) {
      alert("As senhas não conferem");
      return;
    } else {
      delete body.samePass;
    }

    try {
      await api.registerUser(body);
      navigate("/login");
    } catch (error) {
      alert("Erro, tente novamente");
    }
  }

  return (
    <Container>
      <img alt="logo" src={Logo} />

      <Form onSubmit={handleSubmit((body) => handleRegister(body))}>
        <Input
          {...register("name")}
          type="text"
          placeholder="Nome"
          name="name"
        />
        <p>{errors.name?.message}</p>
        <Input
          {...register("email")}
          type="text"
          placeholder="E-mail"
          name="email"
        />
        <p>{errors.email?.message}</p>
        <Input
          {...register("password")}
          type="password"
          placeholder="Senha"
          name="password"
        />
        <p>{errors.password?.message}</p>
        <Input
          {...register("samePass")}
          type="password"
          placeholder="Confirme a Senha"
          name="samePass"
        />
        <p>{errors.samePass?.message}</p>
        <Input
          {...register("address")}
          type="text"
          placeholder="Endereço"
          name="address"
        />
        <p>{errors.address?.message}</p>
        <Button>Cadastrar</Button>
      </Form>
      <StyledLink to="/login">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}
