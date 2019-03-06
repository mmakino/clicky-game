import React, { Component } from 'react';
import "./style.css";

//
// Clickable image sources 
//
const clickyImages = [
  'https://securea.mlb.com/mlb/images/players/head_shot/429665@2x.jpg',
  'https://securea.mlb.com/mlb/images/players/head_shot/571745@2x.jpg',
  'https://securea.mlb.com/mlb/images/players/head_shot/570267@2x.jpg',
  'https://securea.mlb.com/mlb/images/players/head_shot/572122@2x.jpg',
  'https://securea.mlb.com/mlb/images/players/head_shot/543829@2x.jpg',
  'https://securea.mlb.com/mlb/images/players/head_shot/553882@2x.jpg',
  'https://securea.mlb.com/mlb/images/players/head_shot/579328@2x.jpg',
  'https://securea.mlb.com/mlb/images/players/head_shot/433587@2x.jpg',
  'https://securea.mlb.com/mlb/images/players/head_shot/594835@2x.jpg',
  'https://securea.mlb.com/mlb/images/players/head_shot/596129@2x.jpg',
  'https://securea.mlb.com/mlb/images/players/head_shot/664238@2x.jpg',
  'https://securea.mlb.com/mlb/images/players/head_shot/571679@2x.jpg'
];

function ClickyItem(props) {
  return (
    <img
      src={props.item.img}
      alt="unavailable"
      className="rounded float-left m-2 clicky-item"
      onClick={props.onClick}
    />
  );
}

//
// Container for the clickable items
//
// PARAMS:
// * props = React props
// * srcImages = array of image source URL's
//
class ClickyItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.initItems(clickyImages),
      indices: this.shuffle(clickyImages.length),
      score: 0,
      topScore: 0,
    };
  }
 
  //
  // Initialized array of clickable objects
  //
  initItems(srcImages) {
    return srcImages.map((img) => {
      return {
        img: img,
        isClicked: false,
      }
    });
  }
  
  //
  // Handle an item click event
  //
  handleClick(i) {
    const items = this.state.items.slice();
    let score = this.state.score + 1;

    // Reset if the same item is clicked
    if (items[i].isClicked) {
      const items = this.initItems(clickyImages);
      let topScore = this.state.topScore;
      score = 0;
      
      if (this.state.score > this.state.topScore) {
        topScore = this.state.score * 1;
      }
      
      this.setState({
        items: items,
        indices: this.shuffle(items.length),
        score: score,
        topScore: topScore, 
      });
      
      return;
    }
    
    // shuffle and increment the score
    items[i].isClicked = true;
    this.setState({
      items: items,
      indices: this.shuffle(items.length),
      score: this.state.score + 1,
    });
  }

  //
  // Render clickable items
  //
  renderItems() {
    return (
      <div className="container">
        {
          this.state.indices.map(i => (
            <div key={i.toString()}>
              <ClickyItem
                item={this.state.items[i]}
                onClick={() => this.handleClick(i)}
              />
            </div>
          ))
        }
      </div>
    );
  }
  
  //
  // Shuffled array indices
  //
  // PARAMS:
  // * arrSize: size of an existing array
  //
  // RETURN:
  // * randomized array indices for the existing array
  // 
  shuffle(arrSize) {
    let iniArray = [];
    let resArray = [];
    
    for (let i = 0; i < arrSize; i++) {
      iniArray.push(i);
    }
    
    for (let i = 0; i < arrSize; i++)  {
      const ndx = Math.floor(Math.random() * (arrSize - i));
      resArray[i] = iniArray.splice(ndx, 1)[0];
    }
    
    return resArray;
  }
  
  //
  // Render the component
  // 
  render() {
    return (
      <div>
        <h4 style={{color: '#2255cc', textAlign: 'center'}}>
          Score: {this.state.score} 
          | Top Score: {this.state.topScore}
        </h4>
        {this.renderItems()}
      </div>
    );
  }
}

// Export the Main class
export default ClickyItemContainer;

