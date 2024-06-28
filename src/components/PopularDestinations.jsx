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

  return (
    <>
      <nav className="discover">
        <Tabs/>
      </nav>
      
    </>
  );
};

export default PopularDestinations;
