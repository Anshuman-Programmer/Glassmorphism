import React from 'react'
import styled from 'styled-components';

const Footer = () => {

  const Footer = styled.footer`
    padding: 30px 0;

    p{
      color: darkgray;
      text-align: center;

      a{
        color: #2B65C1;
        font-weight: 700;
        cursor: pointer;
        text-decoration: none;
      }
    }
  `;
  return (
    <Footer>
      <p>Brought to you with ❤️ by <a href="mailto:anshumantalukdar02@gmail.com">ANSHUMAN</a></p>
    </Footer>
  )
}

export default Footer