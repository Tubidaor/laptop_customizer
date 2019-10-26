import React, {Component} from 'react';
import FormItems from '../FormItems/FormItems';




class Form extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
            <FormItems
              features={this.props.features}
              state={this.props.state}
              updateFeature={this.props.updateFeature}
            />
      </form>
    )
  }
}

export default Form;