import React, {Component} from 'react';
import FormItems from '../FormItems/FormItems';



class Form extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <FormItems
          features={this.props.features}
          updateFeature={this.props.updateFeature}
          state={this.props.state}
        />
      </form>
    )
  }
}

export default Form;