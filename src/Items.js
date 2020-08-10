import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';


export default class Items extends Component {


  render() {

    return (

        <div className="carousel-center">
      <Carousel
        arrows
        // arrowLeft={<Icon className="icon-example" name="arrow-left" />}
        animationSpeed={1500}
        autoPlay={2000}
        offset={0}
        infinite
        arrowLeft={<FaChevronLeft className="icon-example" name="arrow-left" />}
      arrowRight={<FaChevronRight className="icon-example" name="arrow-right" />}
      addArrowClickHandler

    //    responsive below
    breakpoints={{
       
        500: {
            slidesPerPage: 3,
            slidesPerScroll: 1,
            width:100
          },
       
       
        1000: { // these props will be applied when screen width is less than 1000px
            slidesPerPage: 3,
            slidesPerScroll: 1,
            
           
        },
        1400: { // these props will be applied when screen width is less than 1000px
            slidesPerPage: 4,
            slidesPerScroll: 1,
            
           
        },
     
      }}
        
      
      >
         
             
          <div className="single-img-item">
          <img src="https://www.justina.gr/wp-content/uploads/2015/12/cms12438.jpg" />
          </div>
          <div className="single-img-item">
          <img src="https://www.justina.gr/wp-content/uploads/2015/12/cms12438.jpg" />
          </div>
          <div className="single-img-item">
          <img src="https://www.justina.gr/wp-content/uploads/2015/12/cms12438.jpg" />
          </div>
       
       
      </Carousel>
     
       </div>
    );
  }
}
