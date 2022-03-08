import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { LoginCreate } from './LoginCreate';
import { LoginPasswordLost } from './LoginPasswordLost';
import { LoginPasswordReset } from './LoginPasswordReset';

export function Login() {
    return(
        <section>
            <Routes>
                <Route path="/" element={<LoginForm/>}/>
                <Route path="create" element={<LoginCreate/>}/>
                <Route path="lost" element={<LoginPasswordLost/>}/>
                <Route path="reset" element={<LoginPasswordReset/>}/>
            </Routes>
        </section>
    )
}