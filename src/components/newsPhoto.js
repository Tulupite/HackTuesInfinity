import { Parallax } from 'react-parallax';
import NewsPhoto from '../images/newsPhoto.jpg'
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "./NewsContext";
import News from "./News";
import "./app.css";

const NewsBackground = () => (
    <Parallax className='Background' bgImage={NewsPhoto} strength={800}>
        <NewsContextProvider>
            <News />
        </NewsContextProvider>
    </Parallax>
);

export default NewsBackground;