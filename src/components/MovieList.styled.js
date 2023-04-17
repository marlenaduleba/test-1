import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
display: grid;
justify-content: center;
grid-template-columns: repeat(auto-fit, 200px );
gap: 15px;
`;

export const PosterTitle = styled.h3`
margin: 0;
padding: 8px 4px;
text-align: center;

`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: black;
`;