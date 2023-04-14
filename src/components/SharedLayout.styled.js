import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
max-width: 960px;
margin: 0 auto;
padding: 20px 0;

`;

export const Header = styled.header`
display: flex;
justify-content: center;
padding: 8px 0;
margin-bottom: 20px;
border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
display: inline-flex;
gap: 15px;
`;

export const Link = styled(NavLink)`
padding: 8px 16px;
border-radius: 4px;
color: black;
text-decoration: none;
font-weight: 500;

&.active {
    background-color: orange;
}

`;