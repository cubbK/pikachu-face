import React from "react";
import Pikachu from "./components/Pikachu";
import styled from "styled-components/native";

const theme = {
    background: "#f4dc26",
    eye: "#232222",
    iris: "#fff",
    cheek: "#e92929",
    nose: "#232222",
    mouth: "#232222"
};

const Main = styled.View`
    background-color: ${props => props.theme.background};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Main>
                    <Pikachu />
                </Main>
            </ThemeProvider>
        );
    }
}
