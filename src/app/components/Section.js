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
    backgroundImg: 'none',
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={`Section ${this.props.className}`}
           style={{ backgroundImage: (this.props.backgroundImg !=='none')?'url(' + this.props.backgroundImg + ')':this.props.backgroundImg}}
      >
        {this.props.children}
      </div>
    );
  }
}
