import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Section extends Component {

  static propTypes = {
    show: PropTypes.bool,
    className: PropTypes.string,
    backgroundImg: PropTypes.string,
  };

  static defaultProps = {
    show: true,
    className: '',
    backgroundImg: null,
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={`Section ${this.props.className}`}
           style={{ backgroundImage: (this.props.backgroundImg !==null)?'url(' + this.props.backgroundImg + ')':'none'}}
      >
        {this.props.children}
      </div>
    );
  }
}
