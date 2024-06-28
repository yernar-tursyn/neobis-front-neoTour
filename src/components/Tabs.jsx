// src/components/Tabs.jsx
import React, { useRef, useState, useEffect } from 'react';
import '../styles/tabs.css';
import DestinationCard from './DestinationCard';
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import discover_img from '../assets/images/discover.png';
import { ArrowButtons } from './ArrowButtons';

const Tabs = () => {
    const swiperRef = useRef(null);
    const [activeTab, setActiveTab] = useState('Popular');
    const [popularData, setPopularData] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);
    const [mostVisitedData, setMostVisitedData] = useState([]);

    useEffect(() => {
        if (activeTab === 'Popular') {
            fetchPopularData();
        } else if (activeTab === 'Featured') {
            fetchFeaturedData();
        } else if (activeTab === 'Most Visited') {
            fetchMostVisitedData();
        }
    }, [activeTab]);

    const fetchPopularData = async () => {
        try {
            const response = await fetch('https://muha-backender.org.kg/category-tour/popular/');
            const data = await response.json();
            setPopularData(data);
        } catch (error) {
            console.error('Error fetching popular data:', error);
        }
    };

    const fetchFeaturedData = async () => {
        try {
            const response = await fetch('https://muha-backender.org.kg/category-tour/featured/');
            const data = await response.json();
            setFeaturedData(data);
        } catch (error) {
            console.error('Error fetching featured data:', error);
        }
    };

    const fetchMostVisitedData = async () => {
        try {
            const response = await fetch('https://muha-backender.org.kg/category-tour/most_visited/');
            const data = await response.json();
            setMostVisitedData(data);
        } catch (error) {
            console.error('Error fetching most visited data:', error);
        }
    };

    const handleTabClick = (tab) => setActiveTab(tab);
    const handlePrevClick = () => swiperRef.current?.slidePrev();
    const handleNextClick = () => swiperRef.current?.slideNext();

    const renderSwiper = (data) => (
        <SwiperComponent
            onBeforeInit={(swiper) => swiperRef.current = swiper}
            loop={true}
            spaceBetween={24}
            slidesPerView={3}
        >
            {data.map((destination, index) => (
                <SwiperSlide key={index}>
                    <DestinationCard
                        image={destination.thumbnail}
                        title={destination.name}
                        destinationPath={`/destination/${destination.id}`}
                    />
                </SwiperSlide>
            ))}
        </SwiperComponent>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'Popular':
                return renderSwiper(popularData);
            case 'Featured':
                return renderSwiper(featuredData);
            case 'Most Visited':
                return renderSwiper(mostVisitedData);
            case 'Europe':
                return <div>Content for Europe</div>;
            case 'Asia':
                return <div>Content for Asia</div>;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="discover-slider">
                <img src={discover_img} alt="Discover" />
                <ArrowButtons onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
            </div>
            <div className="tabs">
                {['Popular', 'Featured', 'Most Visited', 'Europe', 'Asia'].map((tab) => (
                    <div
                        key={tab}
                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                        {activeTab === tab && <span className="dot"></span>}
                    </div>
                ))}
            </div>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Tabs;
