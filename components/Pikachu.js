import React from "react";
import styled from "styled-components/native";

const Face = styled.View`
    background-color: ${props => props.theme.background};
    width: 100%;
    height: auto;
    margin: auto;
`;

const Cheek = styled.View`
    background-color: ${props => props.theme.cheek};
    border-radius: 50%;
`;

export default class Pikachu extends React.Component {
    render() {
        return (
            <Face>
                <Cheek />
            </Face>
        );
    }
}
