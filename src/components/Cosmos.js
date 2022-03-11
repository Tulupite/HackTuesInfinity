import { Parallax } from 'react-parallax';
import CosmosImage from '../images/cosmos.jpg'
import React from 'react';
import Galaxy from "./galaxy.js";

const Cosmos = () => (
    <Parallax className='Background' bgImage={CosmosImage} strength={800}>
        <Galaxy></Galaxy>
    </Parallax>
);

export default Cosmos;