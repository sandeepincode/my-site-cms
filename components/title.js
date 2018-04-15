import react, { Component } from 'react';
export default class title extends  Component {
  render() {
    return (
      <div>
        <h1 className="title">
          <span className="line-through">Sandeepin</span>
          <span className="highlight">code</span>.
        </h1>
        <style jsx>{`
     .line-through {
        text-decoration: line-through;
      }
      ::-moz-selection {
        background: ${this.props.color};
      }
      ::selection {
        background: ${this.props.color};
      }
      .highlight {
        background-color: ${this.props.color};
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title, .description {
        text-align: center;
      }`
        }</style>
      </div>
    );
  }
}