import React, { useState } from "react";
import Header from "../components/Common/Header";
import Battery from "../components/Dashboard/Battery";

const HelloPage: React.FC = () => {
    const [percentage, setPercentage] = useState(86);

    return (
        <>
            <Header
                name='Artem'
                notification={false}
            />
            <div>
                <h1>Tracking your heart</h1>
            </div>

            <Battery 
                percentage={percentage}
            />
        </>
    )
};

export default HelloPage;