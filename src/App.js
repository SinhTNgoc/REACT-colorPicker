import React,{ Component} from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Sizesetting from './components/Sizesetting';
import Reset from './components/Reset';
import Result from './components/Result'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    };
  }
  onSetColor = (params) => {
    // console.log(params)
    this.setState({
      color: params  
    })
  }
  onChangeSize = (value) => {
      // console.log(value)
      //  8 <= size <= 36
      // if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
        this.setState({
          fontSize: this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36? this.state.fontSize + value : this.state.fontSize
        })

      // }
  }
  onSettingDefault =(value) => {
    // console.log(value)
    // if(value) {
      this.setState({
        color: 'red',
        fontSize: 12
      })
    // }
    
  }
  render() {
  return (
    <div className="container mt-50">
      <div className="row">
        <ColorPicker color={this.state.color} onReciveColor = {this.onSetColor}/>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> 
          <div className="panel panel-warning">
            <Sizesetting fontSize={this.state.fontSize} onChangeSize1 = {this.onChangeSize}/>
              </div>
                  <Reset onSettingDefault1 = {this.onSettingDefault}/>
              </div>
          </div>  
    </div> 
  )
}
}

export default App;
