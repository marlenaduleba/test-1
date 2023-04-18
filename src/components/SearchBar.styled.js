import styled from "styled-components";
import {HiSearch} from "react-icons/hi"

export const Wrapper = styled.div`
display: flex;
justify-content: center;
padding: 10px 0 20px 0;
`;

export const Form = styled.form`
position: relative;
`;

export const Input = styled.input`
padding: 8px 40px 8px 8px;
background-color: white;
border-radius: 4px;
font: inherit;

`;

export const Button = styled.button`
position: absolute;
top: 50%;
transform: translateY(-50%);
right: 1px;
height: 100%;
background-color: transparent;
border: none;


:hover {
    cursor: pointer;
}


`;

export const Icon = styled(HiSearch)`
width: 25px;
height: 25px;
`;

