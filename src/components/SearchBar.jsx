import { Input, Form, Button, Wrapper, Icon } from "./SearchBar.styled";

export const SearchBar = ({value, onChange}) => {
    return (

        <Wrapper>
            <Form>
                <Input type="text" placeholder="Search movie" value={value} onChange={((e) => onChange(e.target.value))} />
                <Button><Icon/></Button>
                </Form>
        </Wrapper>
    )
};