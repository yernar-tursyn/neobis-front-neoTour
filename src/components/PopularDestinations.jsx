import { mockData } from "../data/data";
import { useRef } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import DestinationCard from "./DestinationCard";
import { ArrowButtons } from "./ArrowButtons";
import discover_img from '../assets/images/discover.png';
import '../styles/popular-destinations.css'
import Tabs from "./Tabs";


const PopularDestinations = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <>
      <nav className="discover">
        
        {/* <ul>
          <li>Popular</li>
          <li>Featured</li>
          <li>Most Visited</li>
          <li>Europe</li>
          <li>Asia</li>
        </ul> */}
        <Tabs/>
      </nav>
      {/* <SwiperComponent
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        spaceBetween={24}
        slidesPerView={3}
      >
        {mockData.map((destination, index) => (
          <SwiperSlide key={index}>
            <DestinationCard
              image={destination.image}
              title={destination.title}
            />
          </SwiperSlide>
        ))}
      </SwiperComponent> */}
    </>
  );
};

export default PopularDestinations;
