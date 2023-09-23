import styled from "@emotion/styled";

interface BatteryProps { 
    percentage: number
}

const BatteryBlock = styled.div`
    background-color: #D0E9BC;
`

const Battery= (props: BatteryProps) => { 
    return( 
        <BatteryBlock>
            
            <span>{props.percentage + "%"}</span>
            <br />
            <span>battery</span>
            
        </BatteryBlock>
    )
};

export default Battery;