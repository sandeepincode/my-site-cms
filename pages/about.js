import React, {Component} from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import Title from '../components/title';
import _ from "lodash";

export default class about extends Component {
  static getInitialProps(blog) {
    let props = {};
    if (!_.isEmpty(blog.query)) {
      const query = blog.query ? JSON.parse(blog.query) : null;
      return {...props, query};
    }
    return props;
  }

  render() {
    const about = [];
    if (!_.isEmpty(this.props.query)) {
      about.push((
        <div
          style={{
            textDecoration: 'none',
            maxWidth: 880,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
          <div style={{
            background: 'yellow',
            margin: '3rem 6rem 0 6rem',
            padding: '2rem 1rem',
            width: '100%',
            fontFamily: 'inherit',
            fontWeight: '800',
            textDecoration: 'none',
            color: 'black',
            border: 'none'
          }}>
            <div style={{margin: '2rem'}}>
              <div>
                <div style={{fontSize: '3.5rem'}}>
                  About.
                </div>
              </div>
              <div>
                <div style={{fontSize: '1.5rem'}}>
                  {this.props.query.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
    }
    return (
      <div>
        <Head title="Sandeepincode | About"/>
        <Nav/>
        <div className="hero">

          <Title color="yellow"/>

          {about}

          <div className="row">
            <a href="/" style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Home.</h3>
              </div>
            </a>
            <a href="/blog" style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Blog.</h3>
              </div>
            </a>
            <a href="/projects" style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Projects.</h3>
              </div>
            </a>
            <a href="/github" style={{width: '100%', textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Github.</h3>
              </div>
            </a>
          </div>
          <div className="content">
          </div>
        </div>
        <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .card-xl {
        background: black;
        margin: 0.5rem 6rem;
        padding: 40px 50px;
        text-align: left;
        text-decoration: none;
        color: white;
        border: none;
      }
      .card-xl:hover {
        border-color: none;
        box-shadow: none;
        background-color: yellow;
      }
      .card-xl h3 {
        margin: 0;
        color: white;
        font-size: 18px;
      }
      .card-xl:hover h3 {
        color: black;
      }
      .row {
        max-width: 880px;
        margin: 10px auto 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}</style>
      </div>
    )
  }
}
