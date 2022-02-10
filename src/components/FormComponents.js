import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;

`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0px 0 20px;

  p{
    color: grey;
  }
`

const Input = styled.input`
  width: 326px;
  height: 58px;
  margin: 6px 0px 6px;
  padding: 15px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  
  color: black;
  font-size: 20px;
  line-height: 23px;

  
`

const Button = styled.button`
  width: 326px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  margin-top: 6px;
  
  cursor: pointer;
  
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
  text-align: center;
  
  background: #DE4E4E;
  color: #FFF;
`

const StyledLink = styled(Link)`
  margin-top: 22px;
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
  color: #73D28F;
`


export {
    Container,
    Form,
    Input,
    Button,
    StyledLink
}