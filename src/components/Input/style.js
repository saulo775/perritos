import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-bottom: 1rem;
    
    input {
        border: 1px solid #eee;
        display: block;
        width: 100%;
        font-size: 1rem;
        padding: 0.8rem;
        border-radius: 0.5rem;
        background-color: #eee;
        transition: 200ms;

        :focus,
        :hover{
            outline: none;
            border-color: var(--primary);
            background-color: white;
            box-shadow: 0 0 2px 1px var(--primary-clean);
        }
    }

    label {
        display: block;
        font-size: 1rem;
        line-height: 1;
        padding-bottom: 0.5rem;
        font-size: 0.8rem;
    }
    
    p {
        color: var(--error);
        margin-top: 0.25rem;
    }
`;