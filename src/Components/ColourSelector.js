import React, { Component } from 'react';

class ColourSelector extends Component {

  onInputChange = (event) => {
    const { onColourSelectorChange } = this.props;
    onColourSelectorChange(event.target.value)
  }

  // constructor(props) {
  //   super(props);
  //   this.onInputChange = this.onInputChange.bind(this);
  // }

  render() {
    const { hex } = this.props;
    return (
      <input
        type="color"
        value={hex}
        onChange={this.onInputChange} />
        // onChange={this.onInputChange} />
        // onChange={this.onInputChange.bind(this)} />
        // onChange={event => this.onInputChange(event)} />
    )
  }
}

export default ColourSelector;