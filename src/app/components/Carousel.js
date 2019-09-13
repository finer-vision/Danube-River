import React from "react";
import Slider from "react-slick";
import LazyImage from "./LazyImage";
import {asset} from "../core/utils";

const NextArrow = props => (
  <div
    className={props.className}
    style={{...props.style, display: "block", background: "red"}}
    onClick={props.onClick}
  >
    <LazyImage src={'assets/img/right_arrow.svg'}/>
  </div>
);

const PrevArrow = props => (
  <div
    className={props.className}
    style={{...props.style, display: "block", background: "green"}}
    onClick={props.onClick}
  >
    <LazyImage src={'assets/img/left_arrow.svg'}/>
  </div>
);

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesData: [
        {imgUrl: asset('assets/img/img1-plastic.jpg'), imgTitle: 'image01'},
        {imgUrl: asset('assets/img/img3-plastic.jpg'), imgTitle: 'image02'},
        {imgUrl: asset('assets/img/carousel_img_2.png'), imgTitle: 'image04'},
        {imgUrl: asset('assets/img/img3-plastic.jpg'), imgTitle: 'image02'},
      ],
      settings: {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        adaptiveHeight: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      },
    };
  }

  render() {
    const {imagesData, settings} = this.state;
    return (
      <div className="container">
        <Slider {...settings}>
          {imagesData.map((imgList, index) => (
            <div className="slideWrapper" key={index}>
              <LazyImage className="slideImage" src={imgList.imgUrl} title={imgList.imgTitle}/>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
