import React from "react";
import Pikachu from "../components/Pikachu";
import styled from "styled-components/native";
import { DangerZone } from "expo";
import { Text } from "react-native";
import { Spring } from "react-spring";

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
        this.slow();
    }

    componentWillUnmount() {
        this.unsubscribeDeviceMotion();
    }

    slow = () => {
        DeviceMotion.setUpdateInterval(200);
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
        const { x, y, z } = this.state.motionData.accelerationIncludingGravity;

        const toX = round(x * 2 + 9.35);
        let toY = round(y * -10);

        return (
            <Spring from={{ x: 0, y: 0, z: 0 }} to={{ x: toX, y: toY, z: 0 }}>
                {props => {
                    return <PikachuRotated {...props} />;
                }}
            </Spring>
        );
    }
}

function round(n) {
    if (!n) {
        return 0;
    }

    return Math.floor(n * 100) / 100;
}
