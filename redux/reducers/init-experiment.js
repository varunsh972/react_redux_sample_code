import cardboardBox from '../../media/images/box_big.png';
import plasticBottle from '../../media/images/bottle_big.png';
import glassTank from '../../media/images/glasstank_big1.png';
import lamp from '../../media/images/lamp@2x.png';
import teddyBear from '../../media/images/teddy_bear@2x.png';
import pileOfSoil from '../../media/images/soil@2x.png';
import toyBridge from '../../media/images/toy_bridge_big@2x.png';
import paper from '../../media/images/paper@2x.png';
import deadLeaves from '../../media/images/dead_leaves@2x.png';
import tubOfPaint from '../../media/images/paint@2x.png';
import plant1 from '../../media/images/plants_1@2x.png';
import plant2 from '../../media/images/plants_2@2x.png';
import plant3 from '../../media/images/plants_3@2x.png';
import worm from '../../media/images/earthwarm_bowl@2x.png';
import watercan1 from '../../media/images/watercan@2x.png';
import watercan2 from '../../media/images/watercan@2x.png';
import watercan3 from '../../media/images/watercan@2x.png';

const initExperimentState = {
  items: ['containers', 'elements', 'plants', 'worms', 'water'],
  byId: {
    containers: {
      selected: [],
      items: ['CardboardBox', 'plasticBottle', 'glassTank'],
      byId: {
        CardboardBox: {
          id: 'CardboardBox',
          name: 'Cardboard Box',
          listSrc: cardboardBox,
          valid: false,
          contentType: 'image',
          position: {
            x: 320,
            y: 120
          }
        },
        plasticBottle: {
          id: 'plasticBottle',
          name: 'Plastic Bottle',
          listSrc: plasticBottle,
          valid: false,
          contentType: 'image',
          position: {
            x: 460,
            y: 20
          }
        },
        glassTank: {
          id: 'glassTank',
          name: 'Glass Tank',
          listSrc: glassTank,
          valid: true,
          contentType: 'image',
          position: {
            x: 350,
            y: 100
          }
        }
      }
    },
    elements: {
      selected: [],
      items: ['lamp', 'teddyBear', 'pileOfSoil', 'toyBridge', 'paper', 'deadLeaves', 'tubOfPaint'],
      byId: {
        lamp: {
          id: 'lamp',
          name: 'Lamp',
          valid: true,
          listSrc: lamp,
          animate: false,
          contentType: 'image',
          position: {
            x: 440,
            y: 240
          }
        },
        teddyBear: {
          id: 'teddyBear',
          name: 'Teddy Bear',
          valid: false,
          listSrc: teddyBear,
          contentType: 'image',
          position: {
            x: 440,
            y: 240
          }
        },
        pileOfSoil: {
          id: 'pileOfSoil',
          name: 'Dirt',
          valid: true,
          listSrc: pileOfSoil,
          contentType: 'image',
          position: {
            x: 440,
            y: 240
          }
        },
        toyBridge: {
          id: 'toyBridge',
          name: 'Toy Bridge',
          valid: false,
          listSrc: toyBridge,
          contentType: 'image',
          position: {
            x: 440,
            y: 240
          }
        },
        paper: {
          id: 'paper',
          name: 'Paper',
          valid: false,
          listSrc: paper,
          contentType: 'image',
          position: {
            x: 440,
            y: 240
          }
        },
        deadLeaves: {
          id: 'deadLeaves',
          name: 'Dead Leaves',
          valid: true,
          listSrc: deadLeaves,
          contentType: 'image',
          position: {
            x: 440,
            y: 240
          }
        },
        tubOfPaint: {
          id: 'tubOfPaint',
          name: 'Paint',
          valid: false,
          listSrc: tubOfPaint,
          contentType: 'image',
          position: {
            x: 440,
            y: 240
          }
        }
      }
    },
    plants: {
      selected: [],
      items: ['plant1', 'plant2', 'plant3'],
      byId: {
        plant1: {
          id: 'plant1',
          name: 'Plant 1',
          valid: true,
          listSrc: plant1,
          contentType: 'image',
          position: {
            x: 440,
            y: 240
          }
        },
        plant2: {
          id: 'plant2',
          name: 'Plants 2',
          valid: true,
          listSrc: plant2,
          animate: false,
          contentType: 'image',
          position: {
            x: 440,
            y: 240
          }
        },
        plant3: {
          id: 'plant3',
          name: ' ',
          valid: true,
          listSrc: plant3,
          animate: false,
          contentType: 'image',
          position: {
            x: 440,
            y: 240
          }
        }
      }
    },
    worms: {
      selected: [],
      items: ['worm'],
      byId: {
        worm: {
          id: 'worm',
          name: 'Worms',
          valid: true,
          listSrc: worm,
          animate: true,
          contentType: 'sprite',
          position: {
            x: 440,
            y: 240
          },
          animationProps: {
            keyFrame: 'wormAnim',
            spriteSheet: {
              images: [worm],
              frames: { width: 200, height: 100, count: 100 },
              animations: {
                wormAnim: [0, 100, 'wormAnim']
              }
            }
          }
        }
      }
    },
    water: {
      selected: [],
      type: 'single',
      daysButton: true,
      items: ['watercan1', 'watercan2', 'watercan3'],
      byId: {
        watercan1: {
          id: 'watercan1',
          name: '2Times/Day',
          valid: true,
          listSrc: watercan1,
          can2DaysBtn: true,
          can5DaysBtn: true,
          can10DaysBtn: true,
          contentType: 'sprite',
          position: {
            x: 440,
            y: 240
          },
          animationProps: {
            keyFrame: 'grow',
            spriteSheet: {
              images: [worm],
              frames: { width: 200, height: 100, count: 100 },
              animations: {
                grow: [0, 100, 'grow']
              }
            }
          }
        },
        watercan2: {
          id: 'watercan2',
          name: '1Time/Day',
          valid: true,
          listSrc: watercan2,
          can2DaysBtn: true,
          can5DaysBtn: true,
          can10DaysBtn: true,
          contentType: 'sprite',
          position: {
            x: 440,
            y: 240
          },
          animationProps: {
            keyFrame: 'grow',
            spriteSheet: {
              images: [worm],
              frames: { width: 200, height: 100, count: 100 },
              animations: {
                grow: [0, 100, 'grow']
              }
            }
          }
        },
        watercan3: {
          id: 'watercan3',
          name: '2Times/Week',
          valid: true,
          listSrc: watercan3,
          can2DaysBtn: true,
          can5DaysBtn: true,
          can10DaysBtn: true,
          contentType: 'sprite',
          position: {
            x: 440,
            y: 240
          },
          animationProps: {
            keyFrame: 'grow',
            spriteSheet: {
              images: [worm],
              frames: { width: 200, height: 100, count: 100 },
              animations: {
                grow: [0, 100, 'grow']
              }
            }
          }
        }
      }
    }
  }
};

export default initExperimentState;