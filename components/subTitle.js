import react, { Component } from 'react';
export default class subTitle extends Component{
  render(){
    return(
      <div style={{marginTop:30}}>
        <h3 className="sm-title">{this.props.content}</h3>
        <style jsx>{`
        .sm-title {
         background: ${this.props.color};
         width: fit-content;
         padding: 0 5px;
         margin: 5px auto;
        }
      `
        }</style>
      </div>
    );
  }
}