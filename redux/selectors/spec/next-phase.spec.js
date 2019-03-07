import expect from 'expect';
import nextPhase from '../next-phase.js';
import compareArrays from '../utils/compare-arrays.js';
import { getValidItemsList } from '../all-valid-selected.js';

const dummyStateObj = {
  phase: {
    selected: 'phase1',
    byId: {
      phase1: {
        canvas: ['containers'],
        draglist: ['containers']
      }
    }
  },
  experiment: {
    items: ['containers'],
    byId: {
      containers: {
        selected: ['glassTank'],
        items: ['CardboardBox', 'glassTank'],
        byId: {
          CardboardBox: {
            id: 'CardboardBox',
            name: 'Cardboard Box',
            valid: false
          },
          glassTank: {
            id: 'glassTank',
            name: 'Glas Tank',
            valid: true
          }
        }
      }
    }
  }
}


describe('The next phase selector', () => {
  it('should check if the user can move to the nect phase', () => {
    const brokenState = dummyStateObj.experiment.byId.containers.selected = ['glassTank'];
    const actual = nextPhase(dummyStateObj);
    expect(actual).toBe(true);
  });

  it('should fail if there is an mix of incorrect/correct item selected', () => {
    const brokenState = dummyStateObj.experiment.byId.containers.selected = ['glassTank', 'CardboardBox'];
    const actual = nextPhase(dummyStateObj);
    expect(actual).toBe(false);
  });

  it('should fail if there is an incorrect item selected', () => {
    const brokenState = dummyStateObj.experiment.byId.containers.selected = ['CardboardBox'];
    const actual = nextPhase(dummyStateObj);
    expect(actual).toBe(false);
  });

});

describe('Helper functions', function() {

  const testState = {
    selected: ['glassTank', 'CardboardBox'],
    items: ['CardboardBox', 'glassTank', 'otherValid'],
    byId: {
      CardboardBox: {
        id: 'CardboardBox',
        name: 'Cardboard Box',
        valid: false
      },
      glassTank: {
        id: 'glassTank',
        name: 'Glas Tank',
        valid: true
      },
      otherValid: {
        id: 'otherValid',
        name: 'Glas Tank',
        valid: true
      }
    }
  }

  it('should extract the valid elements', () => {
    const actual = getValidItemsList(testState);
    expect(actual).toEqual(['glassTank', 'otherValid']);
  });

  it('should check if two arrays are equal', () => {
    const ary1 = ['a', 'b', 'c'];
    const ary2 = ['b', 'a', 'c'];
    const actual = compareArrays(ary1, ary2);
    expect(actual).toBe(true);

    const ary3 = ['a', 'b', 'c'];
    const ary4 = ['b', 'c'];
    expect(compareArrays(ary3, ary4)).toBe(false);

  });

});



