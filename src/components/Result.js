import React,{ Component} from 'react';


class Result extends Component {
  // constructor(props) {
  //   super(props);
  //   this.setStyle = this.setStyle.bind(this)
  // }
  setStyle = () => {
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontSize
    };
  };
  render() {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p style ={this.setStyle()}>Color: {this.props.color} - Fontsize : {this.props.fontSize}px</p>
        <div id="content" style={this.setStyle()}>
          Noi dung setting
        </div>
      </div>  
  )
}
}

export default Result;
