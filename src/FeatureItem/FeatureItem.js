import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureItem extends React.Component {

  render() {
  
    let options = this.props.features[this.props.feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
      return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(this.props.feature)}
              checked={item.name === this.props.state.selected[this.props.feature].name}
              onChange={(e) => this.props.updateFeature(this.props.feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
      );
    })
    
    
    return (
      <>
        {options}
      </>
    )
  }
}

export default FeatureItem;