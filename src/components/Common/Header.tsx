import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
`;

const LogoUser = styled.div`
    img { 
        border-radius: 50%;
    }
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <div>
                <LogoUser>
                    <img />
                </LogoUser>
            </div>
            <div>
                TEST2
            </div>
        </HeaderContainer>
    )
};

export default Header;