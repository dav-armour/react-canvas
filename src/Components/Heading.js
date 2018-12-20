import React, { Component } from 'react';
import Button from './Button';

class Heading extends Component {
  state = {
    title: this.props.title,
    showEditBox: false,
    buttonText: "Edit Title"
  }

  constructor(props) {
    super(props);
    this.HeadingRef = React.createRef();
  }

  onEditTitleClick = (event) => {
    // event.stopPropagation();
    this.setState({
      showEditBox: !this.state.showEditBox,
      buttonText: !this.state.showEditBox ? "Save Changes" : "Edit Title"
    })
    // console.log("title edited")
  }

  onChangeTitleText = (event) => {
    const title = event.target.value;
    this.setState({ title: title });
  }

  render() {
    const { title, showEditBox, buttonText } = this.state;
    return (
      <header>
        {
          showEditBox ?
          <input type="text" defaultValue={title} onChange={this.onChangeTitleText}/>
          :
          <h1>{title}</h1>
        }
      <Button text={buttonText} onClick={this.onEditTitleClick} />
        {/* <a href="#" onClick={this.onEditTitleClick}>Edit Title</a> */}
      </header>
    )
  }
}

Heading.defaultProps = {
  title: "Welcome To Your Drawing Pad"
}

export default Heading;