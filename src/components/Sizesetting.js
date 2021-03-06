import React,{ Component} from 'react';

class Sizesetting extends Component {
  constructor(props) {
    super(props);
    this.changeSize = this.changeSize.bind(this);
  }
  changeSize = (value) => {
   this.props.onChangeSize1(value);

  }
  render() {
  return (
    <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
            </div>
            <div className="panel-body">  
                <button type="button" className="btn btn-success" onClick={() => this.changeSize(-2)}>Giam</button>&nbsp;
                <button type="button" className="btn btn-success" onClick={() => this.changeSize(2)}>Tang</button>
            </div>
    </div>
  )
}
}

export default Sizesetting;
