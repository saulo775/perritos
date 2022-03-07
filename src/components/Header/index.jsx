import React from "react";
import { Link } from "react-router-dom";

import {
    Container 
} from './style';

export function Header() {
    return (
        <Container>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login / Criar</Link>
            </nav>
        </Container>
    )
}