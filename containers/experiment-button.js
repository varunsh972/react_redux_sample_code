import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../components/button-component.js';
import { selectPhase } from '../redux/actions/phase-actions';
import { resetAllItems } from '../redux/actions/experiment-actions';
import nextPhase from '../redux/selectors/next-phase.js';

const ExperimentAreaButton = ({ buttonState, selectPhaseAction, resetAllItemsAction }) => (
  <div className="btnCss">
    <div className="btnWrapper">
      <Button
        className="customBtn"
        name="Reset"
        onClick={resetAllItemsAction}
      />
      <Button
        className="customBtn"
        name="Done"
        disabled={!buttonState}
        onClick={() => selectPhaseAction()}
      />
    </div>
  </div>
);


function mapStateToProps(state) {
  return {
    buttonState: nextPhase(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectPhaseAction: selectPhase,
    resetAllItemsAction: resetAllItems
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperimentAreaButton);
