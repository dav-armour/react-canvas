import React, { Component } from 'react';
import ColourSelector from './ColourSelector';
import ThicknessSelector from './ThicknessSelector';

class Canvas extends Component {
  state = {
    hex: this.props.hex,
    thickness: this.props.thickness,
    width: 400,
    height: 400,
    coords: null
  }

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.context = null;
  }

  componentDidUpdate() {
    this.setContext();
  }

  setContext() {
    this.context = this.canvasRef.current.getContext("2d");
    this.context.strokeStyle = this.state.hex;
    this.context.lineJoin = "round";
    this.context.lineWidth = this.state.thickness;
  }

  componentDidMount() {
    console.log(this.canvasRef);
  }

  onColourSelectorChange = (hex) => {
    this.setState({ hex: hex});
    // console.log(hex);
  }

  onCanvasMouseMove = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    const { coords, height, width } = this.state;

    if (x > 0 && y > 0 && x < width && y < height) {
      if (coords) {
        this.context.beginPath();
        this.context.moveTo(coords[0], coords[1]);
        this.context.lineTo(x, y);
        this.context.closePath();
        this.context.stroke();
        this.setState({ coords: [x, y]})
      }
    } else {
      this.setState({ coords: null });
    }
  }

  onCanvasMouseDown = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    this.setState({ coords: [x, y] })
  }

  onCanvasMouseUp = (event) => {
    this.setState({ coords: null})
  }

  onClearButtonClick = (event) => {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }

  onThicknessSelectorChange = (thickness) => {
    this.setState({ thickness: thickness });
  }

  render() {
    const { hex, width, height, thickness } = this.state;
    return (
      <div>
        <div>
          <ColourSelector hex={hex} onColourSelectorChange={this.onColourSelectorChange} />
          <ThicknessSelector thickness={thickness} onThicknessSelectorChange={this.onThicknessSelectorChange} />
          <button onClick={this.onClearButtonClick}>Clear</button>
        </div>
        <canvas
          ref={this.canvasRef}
          width={width}
          height={height}
          style={{ border: "6px solid black" }}
          onMouseMove={this.onCanvasMouseMove}
          onMouseDown={this.onCanvasMouseDown}
          onMouseUp={this.onCanvasMouseUp}
        />
      </div>
    )
  }
}

Canvas.defaultProps = {
  hex: "#44ff2b",
  thickness: 3
}

export default Canvas;