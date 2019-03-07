const dummyStateObj = {
  phase: {
    selected: 'phase1',
    byId: {
      phase1: {
        canvas: ['containers'],
        draglist: ['containers']
      },
      phase3a: {
        canvas: ['containers'],
        draglist: ['plants','worms']
      },
      phase3b: {
        canvas: ['containers'],
        draglist: ['worms','plants']
      }
    }
  },
  experiment: {
    items: ['containers','plants','worms'],
    byId: {
      containers: {
        selected: ['glassTank', 'CardboardBox'],
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
      },
      plants: {
        selected: [],
        items: ['plant1', 'plant2'],
        byId: {
          plant1: {
            id: 'plant1',
            name: 'Plant One'
          },
          plant2: {
            id: 'plant2',
            name: 'plant Two'
          }
        }
      },
      worms: {
        selected: [],
        items: ['worm'],
        byId: {
          worm: {
            id: 'worm',
            name: 'My Worms'
          }
        }
      }
    }
  }
};

export default dummyStateObj;