import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import LazyImage from "./LazyImage";
import {asset} from "../core/utils";

const NextArrow = props => (
  <div
    className={props.className}
    style={{...props.style}}
    onClick={props.onClick}
  >
    <LazyImage src={'assets/img/carousel_arrow.svg'}/>
  </div>
);

const PrevArrow = props => (
  <div
    className={props.className}
    style={{...props.style}}
    onClick={props.onClick}
  >
    <LazyImage src={'assets/img/carousel_arrow.svg'}/>
  </div>
);

export default class Carousel extends React.Component {
  static propTypes = {
    imagesData: PropTypes.arrayOf(PropTypes.shape({
      imgUrl: PropTypes.string,
      imgTitle: PropTypes.string,
      content: PropTypes.element,
    })),
  };

  static defaultProps = {
    imagesData: [
      {imgUrl: asset('assets/img/img1-plastic.jpg'), imgTitle: 'image01'},
      {imgUrl: asset('assets/img/img3-plastic.jpg'), imgTitle: 'image02'},
      {imgUrl: asset('assets/img/carousel_img_2.png'), imgTitle: 'image03'},
      {imgUrl: asset('assets/img/img3-plastic.jpg'), imgTitle: 'image04'},
    ],
  };

  state = {
    activeIndex: 0,
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

  #handleBeforeChange = (oldIndex, newIndex) => {
    this.setState({activeIndex: newIndex});
  };

  render() {
    return (
      <div className="container">
        <Slider {...this.state.settings} beforeChange={this.#handleBeforeChange}>
          {this.props.imagesData.map((imgList, index) => (
            <div className="slideWrapper" key={index}>
              <LazyImage className="slideImage" src={imgList.imgUrl} title={imgList.imgTitle}/>
            </div>
          ))}
        </Slider>

        <div className="carouse-content">
          {this.props.imagesData[this.state.activeIndex].content && this.props.imagesData[this.state.activeIndex].content}
        </div>
      </div>
    );
  }
}
