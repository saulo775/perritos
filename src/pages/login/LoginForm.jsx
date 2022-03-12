import React from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useForm } from "../../hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";


export function LoginForm(){
    const username = useForm();
    const password = useForm();

    React.useEffect(()=>{
        const token = window.localStorage.getItem('token');

        if (token) {
            getUser();
        }
    },[])

    async function getUser(token) {
        const {url, options} = USER_GET(token)
        const response = await fetch(url, options);
        const json = await response.json;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (username.validate() && password.validate()) {
            const { url, options }= TOKEN_POST({
                username: username.value,
                password: password.value
            })
            const response = await fetch(url, options );
            const json = await response.json();

            window.localStorage.setItem('token', json.token);
            getUser(json.token);
        }
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