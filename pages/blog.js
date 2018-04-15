import React, {Component} from 'react';
import moment from 'moment';
import Head from '../components/head';
import Nav from '../components/nav';
import Title from '../components/title';
import _ from "lodash";

export default class blog extends Component {

  static getInitialProps(entries) {
    let props = {};
    if (!_.isEmpty(entries.query)) {
      const query = entries.query ? JSON.parse(entries.query) : null;
      return {...props, blogs: query};
    }
    return props;
  }

  render() {

    const blogs = [];
    if (!_.isEmpty(this.props.blogs)) {

      this.props.blogs.map((blog) => {
        blogs.push((
          <a
            href={`/blog/${blog.id}`}
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
              margin: '2rem auto 0 auto',
              padding: '5rem 1rem',
              width: '90%',
              fontFamily: 'inherit',
              fontWeight: '800',
              textDecoration: 'none',
              color: 'black',
              border: 'none'
            }}>
              <div style={{margin: '5rem'}}>
                <div style={{display: 'flex'}}>
                  <div style={{fontSize: '4rem'}}>
                    {blog.title}
                  </div>
                </div>
                <div style={{marginLeft: 'auto', display: 'flex'}}>
                  <div style={{fontSize: '3rem'}}>
                    {moment(blog.date).format('ddd Do MMM YY')}
                  </div>
                </div>
                <div style={{fontSize: '2rem'}}>
                  {blog.description}
                </div>
              </div>
            </div>
          </a>
        ));
      });
    }

    return (

      <div>
        <Head title="Sandeepincode | Blog"/>
        <Nav/>
        <div className="hero">

          <Title color="springgreen"/>
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
                    Blogs.
                  </div>
                </div>
                <div>
                  <div style={{fontSize: '3rem'}}>
                    My Journey and Outlook.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            {blogs}
          </div>

          <div className="row">
            <a href="/about">
              <div className="card">
                <h3>About.</h3>
              </div>
            </a>
            <a href="/">
              <div className="card">
                <h3>Home.</h3>
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
        margin: 80px auto 0;
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
