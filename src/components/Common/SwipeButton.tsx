import styled from "@emotion/styled";
import { SmartWatchIcon } from "../../icon";

const ButtonWrapper = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    background-color: #FBE285;
    border: none;
    border-radius: 50px;
    padding: 5px;
`

const Draggable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #F6F6F6;

`

const SlideButton = ({onClick}) => { 
    return( 
        <ButtonWrapper onClick={onClick}>
            <Draggable>
                <SmartWatchIcon />
            </Draggable>
            <span>Connect {">>>"}</span>
            <Draggable> 
                <SmartWatchIcon
                    fill="#BABABA"
                />
            </Draggable>
        </ButtonWrapper>
    )
};

export default SlideButton;