import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    box-shadow: 0 2px 1px rgba(0, 0, 0, .1);
    color: var(--dark-grey);

    padding: 1rem 0;

    nav {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;