import React from "react";
import styled from "styled-components/native";

const Face = styled.View`
    background-color: ${props => props.theme.background};
    position: relative;
    /* background: white; */
    width: 610px;
    height: 300;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Cheek = styled.View`
    background-color: ${props => props.theme.cheek};
    border-radius: 50;
    width: 100px;
    height: 100px;
    position: absolute;
    opacity: 0.5;
`;

const CheekLeft = styled(Cheek)`
    transform: translate(-240px, 60px);
`;

const CheekRight = styled(Cheek)`
    transform: translate(240px, 60px);
`;

const Mouth = styled.View`
    width: 170px;
    height: 20px;
    background-color: ${props => props.theme.mouth};
    transform: translate(0, 100px);
`;

const Nose = styled.View`
    width: 30px;
    height: 20px;
    border-radius: 40;
    background-color: ${props => props.theme.nose};
    position: absolute;
    margin: auto;
`;

const Eye = styled.View`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50;
    background-color: ${props => props.theme.eye};
`;

const EyeLeft = styled(Eye)`
    transform: translate(-140px, -65px);
`;

const EyeRight = styled(Eye)`
    transform: translate(140px, -65px);
`;

export default class Pikachu extends React.Component {
    render() {
        return (
            <Face>
                <EyeLeft />
                <EyeRight />
                <Nose />
                <CheekLeft />
                <CheekRight />
                <Mouth />
            </Face>
        );
    }
}
