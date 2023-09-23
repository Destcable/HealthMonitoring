import styled from "@emotion/styled";

const BlockImage = styled.div`
    img { 
        width: 190px;
        border-radius: 20px;
    }
`

const ImageReport = () => { 
    return ( 
        <BlockImage>
            <img src="/images/HelloPage/handSmartWatch.jpg"/>
        </BlockImage>
    )
};

export default ImageReport;