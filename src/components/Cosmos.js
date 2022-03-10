import { Parallax } from 'react-parallax';
import CosmosImage from '../images/cosmos.jpg'
import React from 'react';

const Cosmos = () => (
    <Parallax className='Background' bgImage={CosmosImage} strength={800}>
    </Parallax>
);

export default Cosmos;