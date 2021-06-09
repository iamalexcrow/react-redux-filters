import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Wrapper>
            <h1>Барбершоп</h1>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 100vw;
height: 150px;
background: darkgrey;
`