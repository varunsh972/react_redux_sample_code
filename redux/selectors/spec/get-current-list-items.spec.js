import 'babel-polyfill';
import expect from 'expect';
import getCurrentlistItem from '../get-current-list-item.js';
import dummyStateObj from './dummyState.js';

describe('The get current list items', () => {
  it('should handle simgle lists', () => {
    const state = dummyStateObj;
    state.phase.selected = 'phase1';
    const expected = {
      items: [{ id: 'CardboardBox', name: 'Cardboard Box', 'selected': true, 'valid': false },
               { id: 'glassTank', name: 'Glas Tank', 'selected': true, 'valid': true }],
      disabledItems: [],
      type: 'containers'
    };
    const actual = getCurrentlistItem(state);
    expect(actual).toEqual(expected);
  });

  it('should handle multiple lists phase3a', () => {
    const state = dummyStateObj;
    state.phase.selected = 'phase3a';
    const expected = {
      items: [{ id: 'plant1', name: 'Plant One', 'selected': false },
              { id: 'plant2', name: 'plant Two', 'selected': false }],
      disabledItems: [{ id: 'worm', name: 'My Worms', 'selected': false }],
      type: 'plants'
    };
    const actual = getCurrentlistItem(state);
    expect(actual).toEqual(expected);
  });

  it('should handle multiple lists phase3b', () => {
    const state = dummyStateObj;
    state.phase.selected = 'phase3b';
    const expected = {
      items: [{ id: 'worm', name: 'My Worms', 'selected': false }],
      disabledItems: [ { id: 'plant1', name: 'Plant One', 'selected': false },
              { id: 'plant2', name: 'plant Two', 'selected': false }],
      type: 'worms'
    };
    const actual = getCurrentlistItem(state);
    expect(actual).toEqual(expected);
  });
});