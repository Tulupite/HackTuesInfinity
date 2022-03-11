import { Parallax } from 'react-parallax';
import NewsPhoto from '../images/newsPhoto.jpg'
import NewsBox from './newsBox';
import React from 'react';

const News = () => (
    <Parallax className='Background' bgImage={NewsPhoto} strength={800}>
        <NewsBox ></NewsBox>
    </Parallax>
);

export default News;