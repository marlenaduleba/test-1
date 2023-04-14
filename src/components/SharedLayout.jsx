import { Outlet } from "react-router-dom";
import { Container, Header, Nav, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Nav>
                    <Link to="/" end>Home</Link>
                    <Link to="/movies">Movies</Link>
                </Nav>
            </Header>
            <Outlet/>
        </Container>
    )
};