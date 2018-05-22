/**
 * @class Widget
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.css';

class Widget extends Component {
  calculateStyle() {
    const { width, height } = this.props;

    return {
      gridColumn: `span ${width}`,
      gridRow: `span ${height}`,
    };
  }

  render() {
    const { ...props } = this.props;
    return <div className={styles.widget} style={this.calculateStyle()} {...props} />;
  }
}

Widget.defaultProps = {
  width: 3,
  height: 3,
};

Widget.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Widget;
