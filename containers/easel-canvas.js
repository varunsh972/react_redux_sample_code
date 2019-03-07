import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import EaselJs from '../components/easelJs';
import bg from '../media/images/bg.png';

import getCanvasItems from '../redux/selectors/get-canvas-items.js';

class EaselCanvas extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.easelObj = new EaselJs(this._canvas, bg);
  }
renderItems(_items) {
  if (this.easelObj) {
    this.easelObj.updateCanvas(_items);
  }
}
  render() {
    this.renderItems(this.props.canvasItems);
    return (
      <canvas
        ref={el => this._canvas = el}
        width={this.props.w}
        height={this.props.h}
      />
    );
  }
}

// Connect to Redux ------------------------------------

function mapStateToProps(state) {
  return {
    canvasItems: getCanvasItems(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

EaselCanvas.propTypes = {
  canvasItems: React.PropTypes.array,
  w: React.PropTypes.number,
  h: React.PropTypes.number
};
export default connect(mapStateToProps, mapDispatchToProps)(EaselCanvas);