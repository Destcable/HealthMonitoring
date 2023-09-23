import styled from "@emotion/styled";
import Charge from "./Charge/Charge";

interface BatteryProps {
    percentage: number,
    chargeActive: boolean,
}

const BatteryBlock = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    background-color: #D0E9BC;
    border-radius: 35px;
    text-align: center;
    padding-top: 20px;
    padding-left: 7px;
    padding-right: 7px;
    padding-bottom: 7px;
`

const InfoBattery = styled.div`
    margin-bottom: 10px;
`

const Battery = (props: BatteryProps) => {
    return (
        <BatteryBlock>
            <InfoBattery>
                <span>{props.percentage + "%"}</span>
                <br />
                <span>battery</span>
            </InfoBattery>
            <Charge 
                chargeActive={props.chargeActive}
                percentage={props.percentage}
            />
        </BatteryBlock>
    )
};

export default Battery;