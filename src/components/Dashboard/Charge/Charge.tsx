import styled from "@emotion/styled";
import ChargeController from "./ChargeController";
import { ChargeIcon } from "../../../icon";

interface ChargeProps {
    percentage: number,
    chargeActive: boolean,
}

const ChargeWrapper = styled.div`
    border-radius: 30px;
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 15px;
`

const ChargeActive = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
`
const LinesChargeWrapper = styled.div`
`

const ChargeBlock = (props: ChargeProps) => {

    const chargeData = ChargeController(props.percentage);

    const LineCharge = styled.div`
       margin-bottom: 5px;
        width: 50px;
        height: 6px;
        background-color: #${chargeData.colorLine};
        border-radius: 10px;
    `

    return (
        <ChargeWrapper>
            {props.chargeActive &&
                <ChargeActive>
                    <ChargeIcon />
                </ChargeActive>
            }
            <LinesChargeWrapper>
                <LineCharge />
                <LineCharge />
                <LineCharge />
                <LineCharge />
            </LinesChargeWrapper>
        </ChargeWrapper>
    )
};

export default ChargeBlock;