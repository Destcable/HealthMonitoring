import React, { useState } from "react";
import Header from "../components/Common/Header";
import Battery from "../components/Dashboard/Battery";

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
                <h1>Tracking your heart</h1>
            </div>

            <Battery
                percentage={percentage}
                chargeActive={chargeActive}
            />
        </>
    )
};

export default HelloPage;