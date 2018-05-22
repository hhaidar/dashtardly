/**
 * @class Board
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.css';
import Grid from './Grid';

class Board extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentDidUpdate() {
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { width: pWidth, height: pHeight, orientation } = this.props;

    let width = pWidth;
    let height = pHeight;

    if (orientation === 'portrait') {
      height = pWidth;
      width = pHeight;
    }

    const { node } = this;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const heightScale = Math.min(windowHeight / height);
    const widthScale = Math.min(windowWidth / width);

    const scale = heightScale < widthScale ? heightScale : widthScale;

    node.style.width = width;
    node.style.height = height;
    node.style.transform = `scale(${scale}) translate(-50%, -50%)`;
  };

  render() {
    const {
      debug, columns, rows, width, height, children,
    } = this.props;

    return (
      <div
        className={styles.board}
        style={{
          width,
          height,
        }}
        ref={(node) => {
          this.node = node;
        }}
      >
        <Grid>{children}</Grid>

        {debug && (
          <Grid ethereal>
            {Array.from({ length: columns * rows }, (_, i) => <span>{`c${i}`}</span>)}
          </Grid>
        )}
      </div>
    );
  }
}

Board.defaultProps = {
  width: 1920,
  height: 1080,
  columns: 16,
  rows: 9,
  children: null,
  orientation: 'landscape',
  debug: false,
};

Board.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  columns: PropTypes.number,
  rows: PropTypes.number,
  children: PropTypes.node,
  orientation: PropTypes.oneOf(['landscape', 'portrait']),
  debug: PropTypes.bool,
};

export default Board;
