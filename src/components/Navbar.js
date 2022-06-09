
import React from 'react'
import styled from 'styled-components';
import COLORS from '../contants/colors';

const Navbar = () => {

    const Logo = styled.h1`
        font-size: 30px;
        color: #2B65C1;
        font-weight: 900;
    `;

    const Link = styled.li`
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        color: black;
    `;

    const Links = styled.ul`
        list-style: none;
    `;

    const Container = styled.nav`
        height: 80px;
        background-color: ${COLORS.white};
        padding: 0 20px;
    `;

    const Wrapper = styled.div`
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        height: 100%;
    `;

    return (
        <Container className='navbar'>
            <Wrapper>
                <Logo>Glassmorphism</Logo>
                {/* <Links className='navbar__links'>
                    <Link className='navbar__link'>Say Hi</Link>
                </Links> */}
            </Wrapper>
            
        </Container>
    )
}

export default Navbar