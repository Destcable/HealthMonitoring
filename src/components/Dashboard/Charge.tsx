import styled from "@emotion/styled";

interface ChargeProps { 
    chargeActive: boolean,
}

const ChargeBlock = styled.div`
    width: 83px;
    height: 126px;
    border-radius: 30px;
    background-color: white;
`

const Charge = (props: ChargeProps) => { 
    return( 
        <ChargeBlock>
            {props.chargeActive && 
                1
            }
        </ChargeBlock>
    )
};

export default Charge;