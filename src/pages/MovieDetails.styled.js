import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
display: flex;
gap: 20px;
padding: 8px 0 28px 0;
border-bottom: 1px solid black;
`;

export const List = styled.ul`
display: flex;
gap: 10px;
list-style: none;

`;

export const Item = styled.li`

`;

export const Subtitle = styled.h2`
text-align: center;
`;

export const StyledLink = styled(NavLink)`
padding: 8px 16px;
border-radius: 4px;
color: black;
text-decoration: none;
font-weight: 500;
border: 1px solid orange;
`;

export const LinkList = styled.ul`
display: flex;
justify-content: center;
gap: 15px;

.active {
    background-color: orange;
}

`;