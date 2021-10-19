import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Shared/Header/Header';
import "./Home.css";
import Service from '../Service/ServicePart/Service';
import Counter from '../Counter/Counter';
import Footer from '../Shared/Footer/Footer';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Service></Service>
            <Counter></Counter>
            <Footer></Footer>
        </div>
    );
};

export default Home;