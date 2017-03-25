import React,{Component} from 'react';

class ShelterContainer extends Component{
  render(){
    return(
      <div>{this.props.children}</div>
    )
  }
}

export default ShelterContainer;