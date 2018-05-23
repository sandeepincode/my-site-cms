import React, {Component} from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import moment from 'moment';
import Title from '../components/title';
import _ from "lodash";

export default class projects extends Component {
  static getInitialProps(entries) {
    let props = {};
    if (!_.isEmpty(entries.query)) {
      const query = entries.query ? JSON.parse(entries.query) : null;
      return {...props, projects: query};
    }
    return props;
  }

  render() {
    const projects = [];
    if (!_.isEmpty(this.props.projects)) {

      this.props.projects.map((project) => {
        projects.push((
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
              background: 'hotpink',
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
                    {project.name}
                  </div>
                </div>
                <div style={{marginLeft: 'auto', display: 'flex'}}>
                  <div style={{fontSize: '1.5rem'}}>
                    {moment(project.started).format('ddd Do MMM YY')}
                  </div>
                </div>
                <div style={{fontSize: '1rem', marginTop: '1rem'}}>
                  {project.description}
                </div>
                <div style={{fontSize: '1rem', marginTop: '1rem'}}>
                  <a href={project.url}>Click Here To Visit.</a>
                </div>
              </div>
            </div>
          </div>
        ));
      });
    }

    return (
      <div>
        <Head title="Sandeepincode | Projects"/>
        <Nav/>
        <div className="hero">

          <Title color="hotpink"/>

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
              background: 'hotpink',
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
                <div>
                  <div style={{fontSize: '3.5rem'}}>
                    Projects.
                  </div>
                </div>
                <div>
                  <div style={{fontSize: '1.5rem'}}>
                    Other Things I Do.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {projects}

          <div className="row">
            <a href="/about" style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>About.</h3>
              </div>
            </a>
            <a href="/blog" style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Blog.</h3>
              </div>
            </a>
            <a href="/" style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Home.</h3>
              </div>
            </a>
            <a href="/github"  style={{width: '100%',  textDecoration: 'none'}}>
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
        background-color: hotpink;
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
        background-color: hotpink;
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
