import { Parallax } from 'react-parallax';
import NewsPhoto from '../images/newsPhoto.jpg'
import React from 'react';

const News = () => (
    <Parallax className='Background' bgImage={NewsPhoto} strength={800}>
    </Parallax>
);

export default News;