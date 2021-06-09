import React from 'react';
import styled from 'styled-components';

import Filters from './Filters';
import Results from './Results';


const Services = () => {
    return (
        <Wrapper>
            <Filters />
            <Results />
        </Wrapper>
    )
}

export default Services;

const Wrapper = styled.div`

width: 90vw;
margin: 20px auto 0;
display: grid;
grid-template-columns: 12% 88%;
grid-gap: 20px;
`