import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";

import {
    Container 
} from './style';

export function Header() {
    return (
        <Container>
            <nav className="container">
                <Link to="/" aria-label="Dogs - Home">
                    <Dogs/>    
                </Link>
                <Link to="/login">Login / Criar</Link>
            </nav>
        </Container>
    )
}