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
            margin: '4rem auto 0 auto',
            padding: '5rem 1rem',
            width: '90%',
            fontFamily: 'inherit',
            fontWeight: '800',
            textDecoration: 'none',
            color: 'black',
            border: 'none'
          }}>
            <div style={{margin: '5rem'}}>
              <div>
                <div style={{fontSize: '5rem'}}>
                  About.
                </div>
              </div>
              <div>
                <div style={{fontSize: '3rem'}}>
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
            <a href="/">
              <div className="card">
                <h3>Home.</h3>
              </div>
            </a>
            <a href="/blog">
              <div className="card">
                <h3>Blog.</h3>
              </div>
            </a>
            <a href="/projects">
              <div className="card">
                <h3>Projects.</h3>
              </div>
            </a>
            <a href="/github" style={{width: '100%'}}>
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
        margin: 1rem auto;
        padding: 80px 18px;
        width: 220px;
        text-align: center;
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
        margin: 80px auto 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .card {
        margin: 0 1rem;
        padding: 80px 18px;
        width: 220px;
        text-align: center;
        text-decoration: none;
        color: white;
        background: black;
        border: none;
      }
      .card:hover {
        border-color: none;
        box-shadow: none;
        background-color: yellow;
        color: black;
      }
      .card:hover h3 {
        color: black;
      }
      .card h3 {
        margin: 0;
        color: white;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
      }
    `}</style>
      </div>
    )
  }
}
