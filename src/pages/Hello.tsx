import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "../components/Common/Header";
import Battery from "../components/Dashboard/Battery";
import ImageReport from "../components/Dashboard/ImageReport";

const TwoBlock = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
`

const HelloPage: React.FC = () => {
    const [isNotification, setNotification] = useState(false);
    const [percentage, setPercentage] = useState(18);
    const [chargeActive, setChargeActive] = useState(true);

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
        </>
    )
};

export default HelloPage;