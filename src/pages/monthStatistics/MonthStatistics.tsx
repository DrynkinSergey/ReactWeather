import React from 'react';
import  s from './home.module.scss'
interface Props{

}

export const Home = (props:Props) => {
    return (
        <div className={s.home}>
            Home
        </div>
    );
};

export default Home;
