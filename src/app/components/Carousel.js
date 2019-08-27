import React, { Component } from "react";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <img src={'assets/img/right_arrow.svg'}/>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <img src={'assets/img/left_arrow.svg'}/>
    </div>
  );
}

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesData: [
        {imgUrl: 'assets/img/img1-plastic.png', imgTitle: 'image01'},
        {imgUrl: 'assets/img/img3-plastic.png', imgTitle: 'image02'},
        {imgUrl: 'assets/img/carousel_img_2.png', imgTitle: 'image04'},
        {imgUrl: 'assets/img/img3-plastic.png', imgTitle: 'image02'},

      ],
      settings: {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

      }
    };
  }

  render() {
    const {
      imagesData,
      settings
    } = this.state;

    return (
      <div className={'container'} >
        <Slider {...settings} >
          { imagesData.map((imgList,index) => {
            return <div className={'slideWrapper'} key={index}>
              <img
                className={'slideImage'}
                src={imgList.imgUrl}
                title={imgList.imgTitle}
              />
            </div>
          }) }
        </Slider>
      </div>
    );
  }
}
