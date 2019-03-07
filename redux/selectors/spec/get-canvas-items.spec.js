import expect from 'expect';
import getCanvasItems from '../get-canvas-items.js';

const dummyStateObj = {
  phase: {
    selected: 'phase1',
    byId: {
      phase1: {
        canvas: ['containers']
      }
    }
  },
  experiment: {
    items: ['containers'],
    byId: {
      containers: {
        selected: ['glassTank', 'CardboardBox'],
        items: ['CardboardBox', 'glassTank'],
        byId: {
          CardboardBox: {
            id: 'CardboardBox',
            name: 'Cardboard Box'
          },
          glassTank: {
            id: 'glassTank',
            name: 'Glas Tank'
          }
        }
      }
    }
  }
}

describe('get canvas items selector', () => {
  it('should return a set of items for the canvas to render', () => {
    const actual = getCanvasItems(dummyStateObj);
    const expected = [
      { id: 'glassTank', name: 'Glas Tank' },
      { id: 'CardboardBox', name: 'Cardboard Box' }
    ];
    expect(expected).toEqual(actual);
  });
});