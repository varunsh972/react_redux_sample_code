import React from 'react';
import DragArea from '../containers/drag-area.js';
import EaselCanvas from '../containers/easel-canvas.js';
import ExperimentAreaButton from '../containers/experiment-button.js';



// allow the DragArea to be positioned
// relative to this one.
const relStyle = {
  position: 'relative'
};

const Experiment = () => (
  <div className={'container'}
    style={relStyle}
  >
    <EaselCanvas
      w={1024}
      h={423}
    />
    <ExperimentAreaButton/>
    <DragArea />
  </div>
);

Experiment.propTypes = {

};

export default Experiment;