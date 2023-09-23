import styled from "@emotion/styled";
import { OnlineIcon, SettingsIcon } from "../../icon";

const BlockCustom = styled.div`
    width: 100%;
    display: flex;
    height: 170px;
    border-radius: 35px;
    background-color: #BCE7F0;
    padding-top: 15px;
    padding-left: 30px;
`

const ImageWrapper = styled.div`
    width: 300px;
    height: 155px;
    overflow: hidden;
    
    img { 
        -o-object-fit: cover;
        object-fit: cover;
        width: 150px;
    }
`

const RightWrapper = styled.div`
    display: inline-flex;
    width: 100%;
    flex-direction: column;
`

const ButtonsWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: end;
    justify-content: end;
    padding-bottom: 10px;
    padding-right: 10px;
    gap: 7px;
`

const WrapperOnlineButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    border: 1px solid black;
`

const WrapperSettingsButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F6F6F6;
    border-radius: 50%;
    width: 55px;
    height: 55px;
`

const BlockCustomDevice = () => {
    return (
        <BlockCustom>
            <ImageWrapper>
                <img src="/images/HelloPage/watch.png" />
            </ImageWrapper>

            <RightWrapper>
            <span><strong>Customize <br /> your device</strong></span>
                <ButtonsWrapper>
                    <WrapperOnlineButton>
                        <OnlineIcon />
                    </WrapperOnlineButton>
                    <WrapperSettingsButton>
                        <SettingsIcon />
                    </WrapperSettingsButton>
                </ButtonsWrapper>
            </RightWrapper>

        </BlockCustom>
    )
};

export default BlockCustomDevice;