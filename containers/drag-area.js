import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import Draggable from 'react-draggable';

import isInRectBounds from '../components/utils/is-in-rect-bounds.js';
import { selectItem } from '../redux/actions/experiment-actions.js';

import getCurrentlistItem from '../redux/selectors/get-current-list-item.js';
import getListItemState from '../redux/selectors/get-list-item-state.js';

class DragArea extends Component {

  static propTypes = {
    list: React.PropTypes.object,
    selectItem: React.PropTypes.func,
    listState: React.PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = { dropMessage: '' };
    this.handleStop = this.handleStop.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleStop(e, item, type) {
    document.ontouchmove = null;
    if (isInRectBounds(e.target, this._dropArea)) {
      this.setState({ dropMessage: `trigger ACTION to update REDUX state with ${item.name}` });
      this.props.selectItem(item, type);
    } else {
      this.setState({ dropMessage: `You missed!` });
    }
  }

  handleStart() {
    this.setState({ dropMessage: 'Dragging' });
    document.ontouchmove = (event) => event.preventDefault();
  }

  render() {
    const { items, type } = this.props.list;

    const dragStyle = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };

    const dropAreaStyle = {
      height: 450,
      padding: 100
    };

    const boxStyle = {
      display: 'inline-block',
      width: `${100 / items.length}%`
    };

    return (
      <div style={dragStyle}>
        <div ref={el => this._dropArea = el}
          style={dropAreaStyle}
        >{this.state.dropMessage}</div>

        <ul className="list-unstyled"
          ref={el => this._list = el}
        >
          { items.map(item =>
            <Draggable key={item.id}
              position={{ x: 0, y: 0 }}
              onStart={this.handleStart}
              disabled={item.selected || !this.props.listState}
              onStop={(e) => this.handleStop(e, item, type)}
            >
              <li style={boxStyle} >
                <p>{`list state: ${this.props.listState}`}</p>
                <img
                  className="img-responsive"
                  draggable="false"
                  align="middle"
                  style={{
                    margin: '0 auto',
                    opacity: item.selected ? 0.5: 1
                  }}
                  src={item.listSrc}
                />

              </li>
            </Draggable>
          )}
        </ul>

      </div>);
  }
}

// Connect to Redux ------------------------------------

function mapStateToProps(state) {
  return {
    list: getCurrentlistItem(state),
    listState: getListItemState(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectItem
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DragArea);
