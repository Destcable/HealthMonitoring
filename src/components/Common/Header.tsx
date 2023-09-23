import React from "react";
import styled from "@emotion/styled";
import { NotificationIcon } from "../../icon";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
`;

const LogoUser = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    img { 
        width: 64px;
        height: 64px;
    }
`;

const NotificationBlock = styled.div`
    width: 64px;
    height: 64px;
    background-color: #F6F6F6;
    border-radius: 50%;
`;

const NotificationWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const NotificationStatusWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: right;
`

const NotificationStatus = styled.div`
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #FD8E6B;
    margin-top: 5px;
    margin-right: 5px;
`

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <LogoUser>
                <img src="/images/users/man.png" />
                <span>Hello, Jacob!</span>
            </LogoUser>
            <NotificationBlock>
                <NotificationStatusWrapper>
                    <NotificationStatus />
                </NotificationStatusWrapper>
                <NotificationWrapper>
                    <NotificationIcon />
                </NotificationWrapper>
            </NotificationBlock>
        </HeaderContainer>
    )
};

export default Header;