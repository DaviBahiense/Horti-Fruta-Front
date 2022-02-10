import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema } from '../../validation/formValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { Container, Form, Input, Button, StyledLink } from "../../components/FormComponents";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Logo from '../../assets/logo.png'

export default function Login() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(loginSchema)
    }) 

    const navigate = useNavigate()
    const { login } = useAuth()

    async function handleLogin(body) {
        try {
            const { data } = await api.login(body)
            
            login(data)
            navigate('/')
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <img alt="logo" src={Logo} />
    
            <Form onSubmit={handleSubmit((body) => handleLogin(body))} >
                <Input
                    {...register ('email')}
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    />
                    <p>{errors.email?.message}</p>
                <Input
                    {...register ('password')}
                    type="password"
                    placeholder="Senha"
                    name="password"
                    />
                    <p>{errors.password?.message}</p>
                
                <Button>
                    Entrar
                </Button>
            </Form>
            
            <StyledLink to="/register">
                Primeira vez? Cadastre-se!
            </StyledLink>
        </Container>
    )
}