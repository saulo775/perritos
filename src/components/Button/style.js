import styled from "styled-components";

export const Container = styled.button`
    font-family: var(--font-first);
    background-color: var(--primary);
    color: var(--primary-dark);
    font-size: 1rem;
    font-weight: 700;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 0.5rem;
    transition: 300ms;
    min-width: 8rem;

    :hover,
    :focus{
        outline: none;
        box-shadow:0 0 0 2px var(--primary-clean),  0  0 0 3px var(--primary);
    }

    :disabled{
        opacity: 0.5;
    }
`;