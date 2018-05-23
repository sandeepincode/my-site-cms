import React, {Component} from 'react';
import moment from 'moment';
import Head from '../components/head';
import Nav from '../components/nav';
import Title from '../components/title';
import SubTitle from '../components/subTitle';
import _ from "lodash";

export default class blog extends Component {

  static getInitialProps(blog) {
    let props = {};
    if (!_.isEmpty(blog.query)) {
      const query = blog.query ? JSON.parse(blog.query) : null;
      return {...props, query};
    }
    return props;
  }

  render() {
    const blogs = [];
    if (!_.isEmpty(this.props.query)) {

      blogs.push((
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
            background: 'springgreen',
            border: 'none',
            margin: '3rem 6rem 0 6rem',
            padding: '2rem 1rem',
            width: '100%',
            fontFamily: 'inherit',
            fontWeight: '800',
            textDecoration: 'none',
            color: 'black',
          }}>
            <div style={{margin: '2rem'}}>
              <div>
                <div style={{fontSize: '3.5rem', textAlign: 'left'}}>
                  {this.props.query.title}
                </div>
              </div>
              <div>
                <div style={{fontSize: '1.5rem'}}>
                  {moment(this.props.query.date).format('ddd Do MMM YY')}
                </div>
              </div>
              <div style={{fontSize: '1rem'}}>
                {this.props.query.description}
              </div>

              <div style={{marginTop: '2rem', fontSize: '1rem'}}>
                {this.props.query.content}
              </div>

            </div>
          </div>
        </div>
      ));
    }

    return (
      <div>
        <Head title="Sandeepincode | Blog"/>
        <Nav/>
        <div className="hero">

          <Title color="springgreen"/>
          <SubTitle content="Blog Post By Me." color="springgreen"/>

          {blogs}

          <div className="row">
            <a href="/about"  style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>About.</h3>
              </div>
            </a>
            <a href="/blog" style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Back.</h3>
              </div>
            </a>
            <a href="/projects" style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Projects.</h3>
              </div>
            </a>
            <a href="/github" style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Github.</h3>
              </div>
            </a>
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
        background-color: springgreen;
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
      .card {
        margin: 1rem;
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
        background-color: springgreen;
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
