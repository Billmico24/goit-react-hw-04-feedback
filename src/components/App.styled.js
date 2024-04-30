import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: white;
    margin: 0 auto;
    margin-top: 25vh;
    margin-bottom: 30px;
    width: 700px;
    max-width: 85vw;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: ${props => props.theme.filters.shadow};
`;

