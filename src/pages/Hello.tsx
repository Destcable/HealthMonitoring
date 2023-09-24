import React, {useState} from "react";
import styled from "@emotion/styled";
import Header from "../components/Common/Header";
import Battery from "../components/Dashboard/Battery";
import ImageReport from "../components/Dashboard/ImageReport";
import BlockCustomDevice from "../components/Dashboard/BlockCustomDevice"
import SwipeButton from "../components/Common/SwipeButton";

const TwoBlock = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
`

const HelloPage: React.FC = () => {
    const [isNotification, setNotification] = useState(false);
    const [percentage, setPercentage] = useState(86);
    const [chargeActive, setChargeActive] = useState(true);

    const useConnectBluetooth = async () => {
        const device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: ['battery_service'] 
          });

        const server = await device.gatt;

        console.log(server);
    }

    return (
        <>
            <Header
                name='Artem'
                notification={isNotification}
            />
            <div>
                <span className="h1"><strong>Tracking your heart</strong></span>
            </div>
            <TwoBlock>
                <Battery
                    percentage={percentage}
                    chargeActive={chargeActive}
                />
                <ImageReport />
            </TwoBlock>
            <BlockCustomDevice />
            <SwipeButton  
                onClick={useConnectBluetooth}
            />
        </>
    )
};

export default HelloPage;