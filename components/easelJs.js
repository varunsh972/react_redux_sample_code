import '../style/easel.scss';

class EaselJs {
  constructor(el, bg) {
    const canvasElement = el;
    this.loadStatus = false;
    this.spriteObjRef = {};
    this.myInterval = 0;
    canvasElement.className = 'canvas-container';
    this.stage = new createjs.Stage(canvasElement);
    this.backgroundBitmap = new createjs.Bitmap(bg);
    const ref = this;
    setTimeout(() => {
      ref.displayImage(ref.backgroundBitmap);
    }, 100);
  }

  updateCanvas(_items) {
    const items = _items;
    this.stage.removeAllChildren();
    this.displayImage(this.backgroundBitmap);
    this.stage.update();
    this.generateEaselObject(items);
  }

  generateEaselObject(_item) {
    const displayItem = _item;
    this.spriteObjRef = {};
    displayItem.map((item, i) => {
      const tempObj = {};
      if (displayItem[i].contentType === 'image') {
        // console.log('loaderQue[i].listSrc', displayItem[i].listSrc);
        const bitmap = new createjs.Bitmap(displayItem[i].listSrc);
        tempObj.contenType = displayItem[i].contentType;
        tempObj.x = displayItem[i].position.x;
        tempObj.y = displayItem[i].position.y;
        tempObj.zIndex = displayItem[i].zIndex;
        tempObj.ref = bitmap;
        this.spriteObjRef[displayItem[i].id] = tempObj;
      } else if (displayItem[i].contentType === 'sprite') {
        const spriteData = displayItem[i].animationProps.spriteSheet;
        const spriteSheet = new createjs.SpriteSheet(spriteData);
        const bmpSeq = new createjs.Sprite(spriteSheet);
        tempObj.contenType = displayItem[i].contentType;
        tempObj.x = displayItem[i].position.x;
        tempObj.y = displayItem[i].position.y;
        tempObj.ref = bmpSeq;
        tempObj.keyFrame = displayItem[i].animationProps.keyFrame;
        this.spriteObjRef[displayItem[i].id] = tempObj;
        }
    });
    this.render(this.spriteObjRef);
  /* console.log('this.spriteObjRef', this.spriteObjRef); */
   const ref = this;
      createjs.Ticker.addEventListener('tick', () => {
        ref.stage.update();
      });
  }

  playSprite(_sprite, anim) {
    const sprite = _sprite;
    this.stage.addChild(_sprite);
    sprite.currentFrame = 0;
    sprite.gotoAndPlay(anim);
    this.stage.update();
  }

  displayImage(_sprite) {
    console.log('_sprite', _sprite);
    const sprite = _sprite;
    this.stage.addChild(sprite);
    this.stage.update();
  }

  visibleElement(_sprite, abool) {
    const sprite = _sprite;
    sprite.alpha = (abool === true ? 1 : 0);
    this.stage.update();
  }

  render(_props) {
    const props = _props;
    const bitmapContainer = new createjs.Container();
    const spriteArray = [];
    Object.keys(props).map((value) => {
      const currentPropsVal = props[value];
      const currentElement = {
        reference: this.spriteObjRef[value].ref,
        xVal: currentPropsVal.x,
        yVal: currentPropsVal.y,
        currentIndex: currentPropsVal.zIndex
      };
      switch (currentPropsVal.contenType) {
        case 'image': {
        /* Generating container for Bitmap image */
          const currentBitmap = currentElement.reference;
          this.setPosition(currentBitmap, { x: currentElement.xVal, y: currentElement.yVal });
          if (currentPropsVal.zIndex !== undefined) {
            bitmapContainer.addChildAt(currentBitmap, currentElement.currentIndex);
          } else {
            bitmapContainer.addChild(currentBitmap);
          }
          break;
        }
        case 'sprite': {
        /* Generating List for Sprites */

          const currentSprite = currentElement.reference;
          this.setRegistration(currentSprite);
          this.setPosition(currentSprite, { x: currentElement.xVal, y: currentElement.yVal });
          currentSprite.currentFrame = 0;
          currentSprite.gotoAndPlay(currentPropsVal.keyFrame);
          spriteArray.push(currentSprite);
          break;
        }
        default:
          break;
      }
    });
    this.renderImages(bitmapContainer);
    this.renderSprites(spriteArray);
  }
  setRegistration(_element) {
    const currentElement = _element;
    currentElement.regX = currentElement._frameWidth / 2 | 0;
    currentElement.regY = currentElement.spriteSheet._frameHeight / 2 | 0;
  }
  renderImages(_bitmapContainer) {
    this.stage.addChild(_bitmapContainer);
  }
  renderSprites(_spriteArray) {
    _spriteArray.map((val, index) => {
      this.stage.addChild(_spriteArray[index]);
    });
    this.stage.update();
  }
  display(_imageObj, aBool) {
    const imageObj = _imageObj;
    imageObj.visible = aBool;
  }
 setPosition(_element, positionObj) {
   const element = _element;
   element.x = positionObj.x;
   element.y = positionObj.y;
 }
  setAlpha(_element, _alpha) {
    const element = _element;
    element.alpha = _alpha;
  }
}
export default EaselJs;