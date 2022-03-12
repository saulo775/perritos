import React from "react";

const API_URL = "https://dogsapi.origamid.dev/dev/json";

export function TOKEN_POST(body) {
    return { 
        url: API_URL + '/jwt-auth/v1/token',
        options: {
            method: 'POST',
            Headers: {
                'Content-Type': 'aplication/json',
            },
            body: JSON.stringify(body)
        }
    };
}

export function USER_GET(token) {
    return { 
        url: API_URL + '/api/user',
        options: {
            method: 'GET',
            Headers: {
                Autorization: 'Bearer ' + token,
            },
        }
    };
}
