
import React from "react";
import { Link } from "react-router-dom";

export function LoginForm(){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

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
                <input 
                    type="text" 
                    value={username}
                    onChange={(event)=>setUsername(event.target.value)}
                /> 
                <input 
                    type="text" 
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                /> 
                <button type="submit">enviar</button>
            </form>
            <Link to="/login/create">Cadastro</Link>
        </section>
    )
}