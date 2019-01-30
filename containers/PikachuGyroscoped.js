import React from "react";
import Pikachu from "../components/Pikachu";
import styled from "styled-components/native";
import { DangerZone } from "expo";
import { Text } from "react-native";

const { DeviceMotion } = DangerZone;

const PikachuRotated = styled(Pikachu)`
    transform: ${props => `rotateX(${props.x}deg)`}
        ${props => `rotateY(${props.y}deg)`}
        ${props => `rotateZ(${props.z}deg)`};
`;

export default class PikachuGyroscoped extends React.Component {
    constructor() {
        super();
        this.state = {
            motionData: {
              accelerationIncludingGravity: {
                x: 0,
                y: 0,
                z: 0
              }
            }
        };
    }

    componentDidMount() {
        this.subscribeDeviceMotion();
        this.fast();
    }

    componentWillUnmount() {
        this.unsubscribeDeviceMotion();
    }

    slow = () => {
        DeviceMotion.setUpdateInterval(3000);
    };

    fast = () => {
        DeviceMotion.setUpdateInterval(500);
    };

    subscribeDeviceMotion = () => {
        this._subscriptionDeviceMotion = DeviceMotion.addListener(
            motionData => {
                this.setState({ motionData });
            }
        );
    };

    unsubscribeDeviceMotion = () => {
        this._subscriptionDeviceMotion &&
            this._subscriptionDeviceMotion.remove();
        this._subscriptionDeviceMotion = null;
    };

    render() {
        const {x, y, z} = this.state.motionData.accelerationIncludingGravity;

        console.log(y);
        
        return <PikachuRotated x={0} y={y * 10} z={0} />;
    }
}

function round(n) {
    if (!n) {
        return 0;
    }

    return Math.floor(n * 100) / 100;
}
