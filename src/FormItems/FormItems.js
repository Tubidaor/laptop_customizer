import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';


class FormItems extends Component {
  
 
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
            <FeatureItem
              features={this.props.features}
              feature={feature}
              state={this.props.state}
              updateFeature={this.props.updateFeature}
            />
        </fieldset>

      );
    })

    return (
      <>
        {features}
      </>
    )
  }
}

export default FormItems;
