import React, {Component} from 'react';

class ThicknessSelector extends Component {
  onSelectChange = (event) => {
    const { onThicknessSelectorChange } = this.props;
    onThicknessSelectorChange(event.target.value)
  }

  render() {
    const { thickness } = this.props;
    return (
      <select value={thickness} onChange={this.onSelectChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    )
  }
}

export default ThicknessSelector;