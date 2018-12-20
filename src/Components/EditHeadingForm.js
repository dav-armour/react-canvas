import React, { Component } from 'react';

class EditHeadingForm extends Component {
  render() {
    return (
      <form>
        <input type="text" defaultValue={title}/>
        <input type="submit" />
      </form>
    )
  }
}

export default EditHeadingForm;