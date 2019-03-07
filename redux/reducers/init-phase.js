const initPhaseState = {
  selected: 'phase1',
  items: ['phase1', 'phase2', 'phase3a', 'phase3b', 'phase4'],
  byId: {
    phase1: {
      canvas: ['containers'],
      draglist: ['containers']
    },
    phase2: {
      canvas: ['containers', 'elements'],
      draglist: ['elements']
    },
    phase3a: {
      canvas: ['containers', 'elements', 'plants'],
      draglist: ['plants', 'worms']
    },
    phase3b: {
      canvas: ['containers', 'elements', 'plants', 'worms'],
      draglist: ['worms', 'plants']
    },
    phase4: {
      canvas: ['containers', 'elements', 'plants', 'worms', 'watering'],
      draglist: ['watering']
    }
  }
};

export default initPhaseState;