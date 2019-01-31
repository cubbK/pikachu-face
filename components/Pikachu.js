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
    transform: translate(-230px, 60px);
`;

const CheekRight = styled(Cheek)`
    transform: translate(230px, 60px);
`;

const Mouth = styled.View`
    width: 150px;
    height: 60px;
    transform: translate(0, 100px);
    border-bottom-left-radius: 100;
    border-bottom-right-radius: 100;
    z-index: 100;
    position: absolute;
    background: ${props => props.theme.mouth};
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

const Iris = styled.View`
    width: 40px;
    height: 40px;
    background-color: ${props => props.theme.iris};
    border-radius: 50;
    transform: translate(10px, 10px);
`;

export default class Pikachu extends React.Component {
    render() {
        return (
            <Face {...this.props}>
                <EyeLeft>
                    <Iris />
                </EyeLeft>
                <EyeRight>
                    <Iris />
                </EyeRight>
                <Nose />
                <CheekLeft />
                <CheekRight />
                <Mouth />
            </Face>
        );
    }
}
