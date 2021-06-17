import React,{ Component} from 'react';


class Reset extends Component {
  onResetDefault = () => {
    // this.props.onSettingDefault(true);
    this.props.onSettingDefault1();
  }
  render() {
  return (
    <button type="button" className="btn btn-primary" onClick={this.onResetDefault}>Reset</button>  
  )
}
}

export default Reset;
