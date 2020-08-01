import React, {Component} from 'react';
import { Carousel } from 'antd';
import carouselImg1 from '../image/carousel_1.jpg';
import carouselImg2 from '../image/carousel_2.jpg';
import carouselImg3 from '../image/carousel_3.jpg';
import '../style/home.css'

class Home extends Component{
    render(){
        return(
            <div>
                <Carousel autoplay>
                    <div>
                        <img src={carouselImg1} className="carousel-img"/>
                    </div>
                    <div>
                        <img src={carouselImg2} className="carousel-img"/>
                    </div>
                    <div>
                        <img src={carouselImg3} className="carousel-img"/>
                    </div>
                </Carousel>
            </div>
        );
    }
}   

export default Home;