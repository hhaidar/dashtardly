/**
 * @class Grid
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import styles from '../styles.css';

class Grid extends Component {
  componentDidMount() {}

  render() {
    const { ethereal } = this.props;

    return (
      <div
        className={classnames(styles.grid, { [styles['grid-ethereal']]: ethereal })}
        {...this.props}
      />
    );
  }
}

Grid.defaultProps = {
  ethereal: false,
};

Grid.propTypes = {
  ethereal: PropTypes.bool,
};

export default Grid;
