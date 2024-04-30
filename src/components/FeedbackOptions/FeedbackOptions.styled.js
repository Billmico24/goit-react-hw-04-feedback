import styled from "@emotion/styled";

export const Wrapper = styled.div`
display: flex;
margin: 0 auto;
margin-top: 30px;
width: 70%;
justify-content: center;
`;

const switchColor = props => {
    
    switch (props.children) {        
        case 'good':
            return "#5CFF00";
        case 'neutral':
            return "#0CCDE8";
        case 'bad':
            return "#FF0D18";
        default:
            return "#F2BF5E";
    }    
};

export const Button = styled.button`
width: 300px;

padding: 10px;
font-weight: 700;
text-transform: uppercase;
border: none;
background-color: #F2BF5E;
:hover {
    background-color: rgb(45, 45, 45);
    color: ${switchColor};
}
`;