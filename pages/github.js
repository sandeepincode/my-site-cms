import React, {Component} from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import Title from '../components/title';
import moment from 'moment';
import _ from "lodash";

export default class github extends Component {
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
              background: 'cyan',
              margin: '2rem auto 0 auto',
              padding: '5rem 1rem',
              width: '90%',
              fontFamily: 'inherit',
              fontWeight: '800',
              textDecoration: 'none',
              color: 'black',
              border: 'none'
            }}>
              <div style={{margin: '2rem 5rem'}}>
                <div style={{display: 'flex'}}>
                  <div style={{fontSize: '4rem'}}>
                    {project.name}
                  </div>
                </div>
                <div style={{marginLeft: 'auto', display: 'flex'}}>
                  <div style={{fontSize: '3rem'}}>
                    {moment(project.date).format('ddd Do MMM YY')}
                  </div>
                </div>
                <div style={{fontSize: '2rem', marginTop: '2rem'}}>
                  {project.description}
                </div>
                <div style={{fontSize: '2rem', marginTop: '2rem'}}>
                  <a href={project.url}>Click Here To See.</a>
                </div>
              </div>
            </div>
          </div>
        ));
      });
    }

    return (
      <div>
        <Head title="Sandeepincode | Github"/>
        <Nav/>
        <div className="hero">

          <Title color="cyan"/>

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
              background: 'cyan',
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
                    Github.
                  </div>
                </div>
                <div>
                  <div style={{fontSize: '3rem'}}>
                    Examples of My Work.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {projects}

          <div className="row">
            <a href="/about">
              <div className="card">
                <h3>About.</h3>
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
            <a href="/" style={{width: '100%'}}>
              <div className="card-xl">
                <h3>Home.</h3>
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
        background-color: cyan;
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
        background-color: cyan;
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
