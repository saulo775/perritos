import React from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useForm } from "../../hooks/useForm";


export function LoginForm(){
    const username = useForm('email');
    const password = useForm();
    console.log(username.error)

    function handleSubmit(event) {
        //Cancela a ação padrão
        event.preventDefault();
        //faz requisição do tipo post para a api
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            Headers: {
                'Content-Type': 'aplication/json',
            },
            body: JSON.stringify({ username, password }),
        }).then((response)=>{
            console.log(response);
            return response.json();
        })
        .then((json)=>{
            console.log(json);
        })
    }

    return(
        <section>
            <form action="" onSubmit={handleSubmit}>   
                <Input label="Usuário" type="text" name="username" {...username}/>
                <Input label="Senha" type="password" name="password" {...password}/>
                <Button>Enviar</Button>
            </form>
            <Link to="/login/create">Cadastro</Link>
        </section>
    )
}