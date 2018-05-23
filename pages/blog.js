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
              margin: '1rem 6rem 0 6rem',
              padding: '2rem 1rem',
              width: '100%',
              fontFamily: 'inherit',
              fontWeight: '800',
              textDecoration: 'none',
              color: 'black',
              border: 'none'
            }}>
              <div style={{margin: '2rem'}}>
                <div style={{display: 'flex'}}>
                  <div style={{fontSize: '3.5rem'}}>
                    {blog.title}
                  </div>
                </div>
                <div style={{marginLeft: 'auto', display: 'flex'}}>
                  <div style={{fontSize: '1.5rem'}}>
                    {moment(blog.date).format('ddd Do MMM YY')}
                  </div>
                </div>
                <div style={{fontSize: '1rem'}}>
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
              margin: '10px 6rem 0 6rem',
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
                    Blogs.
                  </div>
                </div>
                <div>
                  <div style={{fontSize: '1.5rem'}}>
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
            <a href="/about"  style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>About.</h3>
              </div>
            </a>
            <a href="/"  style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Home.</h3>
              </div>
            </a>
            <a href="/projects"  style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Projects.</h3>
              </div>
            </a>
            <a href="/github"  style={{width: '100%',  textDecoration: 'none'}}>
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
    `}</style>
      </div>
    )
  }
}
