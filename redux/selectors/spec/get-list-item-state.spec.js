import expect from 'expect';
import getListItemState from '../get-list-item-state.js';
import state from './dummyState.js';

describe(`A selector that figures out the state that the list
  item should have enabled/disabled`, () => {
  it('should disable when an invalid item is selected', () => {
    const testState = { ...state };
    testState.phase.selected = 'phase1';
    const { containers } = testState.experiment.byId;
    containers.selected = ['glassTank'];
    expect(getListItemState(state)).toBe(true);
    containers.selected = ['glassTank', 'CardboardBox'];
    expect(getListItemState(state)).toBe(false);
  });

  it('should disable when all valid items are selected');

  it('should disable when audio is playing');

});