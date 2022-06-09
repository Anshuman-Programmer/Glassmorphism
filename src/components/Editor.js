
import React, { useState } from 'react'
import styled from 'styled-components';
import { SketchPicker } from 'react-color';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Editor = () => {

    const [blur, setBlur] = useState(1.5)
    const [transparency, setTransparency] = useState(0.15)
    const [outline, setOutline] = useState(0.2)
    const [color, setColor] = useState({
        rgb: {
            r: 255,
            g: 255,
            b: 255,
        }
    })
    const [open, setOpen] = useState(false)

    

const textValue = `
background: rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${transparency} );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( ${blur}px );
-webkit-backdrop-filter: blur( ${blur}px );
border-radius: 10px;
${outline > 0 ? (`border: 1px solid rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${outline} );`) : " "}
`

    const Container = styled.div`
        background: linear-gradient( #2B65C1, #5095E4, #2B65C1);
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        padding-bottom: 300px;
        @media (max-width: 850px) {
            padding-bottom: 30px;
        }
    `;
    const ContainerTop = styled.div`
        margin: 100px 0 70px;
        /* transform: rotate(33deg); */
    `;
    const ContainerGlass = styled.div`
        position: relative;
        width: 385px;
        height: 260px;
        transform: rotate(-15deg);
    `;
    const Glass1 = styled.div`
        position: relative;
        width: 385px;
        height: 260px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        border-radius: 20px;

        background: rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${transparency} );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( ${blur}px );
        -webkit-backdrop-filter: blur( ${blur}px );
        border: 1px solid rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${outline} );

        z-index: 10;
        font-size: 100px;
    `;
    const Glass2 = styled.div`
        position: absolute;
        right: -70px;
        top: 120px;

        width: 110px;
        height: 110px;
        
        z-index: 20;
        border-radius: 20px;

        background: rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${transparency} );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( ${blur}px );
        -webkit-backdrop-filter: blur( ${blur}px );
        border: 1px solid rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${outline} );

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 44px;
    `;
    const Glass3 = styled.div`
        position: absolute;
        top: -18px;
        left: -172px;

        width: 75px;
        height: 75px;

        font-size: 38px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background: rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${transparency} );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( ${blur}px );
        -webkit-backdrop-filter: blur( ${blur}px );
        border: 1px solid rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${outline} );
        border-radius: 10px;
    `;
    const Glass4 = styled.div`
        position: absolute;
        top: 60px;
        left: -70px;
        width: 120px;
        height: 120px;
        font-size: 54px;
        z-index: 5;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background: rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${transparency} );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( ${blur}px );
        -webkit-backdrop-filter: blur( ${blur}px );
        border: 1px solid rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${outline} );
        border-radius: 20px;
    `;
    const Glass5 = styled.div`
        position: absolute;
        bottom: -30px;
        right: -166px;
        width: 65px;
        height: 65px;
        font-size: 32px;
        z-index: -1;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background: rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${transparency} );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( ${blur}px );
        -webkit-backdrop-filter: blur( ${blur}px );
        border: 1px solid rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${outline} );
        border-radius: 10px;
    `;
    const Pic1 = styled.img`
        position: absolute;
        top: -65px;
        right: -70px;
        width: 130px;
        height: 130px;
        font-size: 54px;
        z-index: 1;
    `
    const Pic2 = styled.img`
        position: absolute;
        top: -45px;
        left: 60px;
        width: 80px;
        height: 80px;
        font-size: 54px;
        z-index: 20;
    `
    const Pic3 = styled.img`
        position: absolute;
        bottom: -45px;
        left: -50px;
        width: 100px;
        height: 100px;
        font-size: 54px;
        z-index: 5;
    `
    const Pic4 = styled.img`
        position: absolute;
        bottom: -65px;
        right: 50px;
        width: 150px;
        height: 150px;
        font-size: 54px;
        z-index: 25;
    `
    const ContainerBottom = styled.div`
        display: flex;
        background-color: #213A5A;
        padding: 20px;
        width: 100%;
        max-width: 840px;
        border-radius: 5px;
        z-index: 30;
        margin: 0 10px;
        @media (max-width: 850px) {
            flex-direction: column;
        }
    `;

    const ContainerBottomLeft = styled.div`
        width: 50%;
        padding-right: 60px;

        @media (max-width: 850px) {
            width: 100%;
            padding-right: 0;
        }
    `;
    const ContainerBottomRight = styled.div`
        width: 50%;

        @media (max-width: 850px) {
            width: 100%;
            padding-top: 20px;
        }
    `;
    const Heading1 = styled.h3`
        font-size: 16px;
        font-weight: 900;
    `;
    const ValueDiv = styled.div`
        display: flex;
        justify-content: space-between;
    `;
    const Name = styled.h5`

    `;
    const Input1 = styled.input`
        width: 200px;
        margin-bottom: 20px;
    `;
    const ColorDiv = styled.div`
        width: 20px;
        height: 20px;
        background-color: ${color?.hex || "#fff"};
        position: relative;
        border-radius: 5px;

        &::after{
            content: "Color";
            margin-left: 30px;
        }

        .sketch-picker{

            position: absolute;
            left: 0;
            top: 30px;
            z-index: 50;
        }
    `;
    const CssWrapper = styled.div`
        background-color: #0D1723;
        padding: 10px 15px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        margin-top: 5px;
        span{
            margin-bottom: 2px;
        }
    `
    const CssBtn = styled.button`
        padding: 5px 15px;
        margin-top: 10px;
        color: black;
        font-weight: 900;
        border-radius: 7px;
        outline: none;
        border: none;
        cursor: pointer;
        
        &:hover{
            background-color: lightgray;
        }
    `

  return (
    <section className='editor'>
        <Container>
            <ContainerTop>
                <ContainerGlass>
                    <Glass1>🤩</Glass1>
                    <Glass2>😄</Glass2>
                    <Glass3>🔥</Glass3>
                    <Glass4>✌️</Glass4>
                    <Glass5>💀</Glass5>
                    <Pic1 src="./circle.svg" alt="circle" />
                    <Pic2 src="./circle.svg" alt="circle"/>
                    <Pic3 src="./circle.svg" alt="circle"/>
                    <Pic4 src="./circle.svg" alt="circle"/>
                </ContainerGlass>
            </ContainerTop>
            <ContainerBottom>
                <ContainerBottomLeft>
                    <Heading1>SETTINGS</Heading1>
                    <ValueDiv>
                        <Name>Blur value</Name>
                        <Name>{blur}</Name>
                    </ValueDiv>
                    <Input1 onChange={ e => setBlur(e.target.value)}  value={blur} type="range" name="blurValueRangeInput" id="blurValue" min="0" max="20" step="0.5"></Input1>
                    <ValueDiv>
                        <Name>Transparency</Name>
                        <Name>{transparency}</Name>
                    </ValueDiv>
                    <Input1 onChange={ e => setTransparency(e.target.value)}  value={transparency} type="range" name="transparencyValueRangeInput" id="transparencyValue" min="0" max="1" step="0.05"></Input1>
                    <ValueDiv>
                        <Name>Outline</Name>
                        <Name>{outline}</Name>
                    </ValueDiv>
                    <Input1 onInput={ e => setOutline(e.target.value)}  value={outline} type="range" name="outlineValueRangeInput" id="outlineValue" min="0" max="1" step="0.01"></Input1>
                    <ColorDiv onClick={() => setOpen(!open)}>
                        {open && <SketchPicker onChangeComplete={ color => {setColor(color)}} color={color}/>}
                    </ColorDiv>
                </ContainerBottomLeft>
                <ContainerBottomRight>
                    <Heading1>CSS</Heading1>
                    <CssWrapper>
                        <span>background: rgba( {color.rgb.r}, {color.rgb.g}, {color.rgb.b}, {transparency} );</span>
                        <span>box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );</span>
                        <span>backdrop-filter: blur( {blur}px );</span>
                        <span>-webkit-backdrop-filter: blur( {blur}px );</span>
                        <span>border-radius: 10px;</span>
                        <span>{outline > 0 ? (`border: 1px solid rgba( ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b},, ${outline} );`) : " "}</span>
                    </CssWrapper>
                    <CopyToClipboard text={textValue}>
                        <CssBtn>
                            COPY CSS
                        </CssBtn>
                    </CopyToClipboard>
                </ContainerBottomRight>
            </ContainerBottom>
        </Container>
    </section>
  )
}

export default Editor