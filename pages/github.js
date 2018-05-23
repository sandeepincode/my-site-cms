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
                <div style={{fontSize: '2.5rem'}}>
                    {project.name}
                  </div>
                </div>
                <div style={{marginLeft: 'auto', display: 'flex'}}>
                  <div style={{fontSize: '1.5rem'}}>
                    {moment(project.date).format('ddd Do MMM YY')}
                  </div>
                </div>
                <div style={{fontSize: '1rem', marginTop: '1rem'}}>
                  {project.description}
                </div>
                <div style={{fontSize: '1rem', marginTop: '1rem'}}>
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
                    Github.
                  </div>
                </div>
                <div>
                  <div style={{fontSize: '1.5rem'}}>
                    Some examples of My Work.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {projects}

          <div className="row">
            <a href="/about"  style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>About.</h3>
              </div>
            </a>
            <a href="/blog"  style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Blog.</h3>
              </div>
            </a>
            <a href="/projects"  style={{width: '100%',  textDecoration: 'none'}}>
              <div className="card-xl">
                <h3>Projects.</h3>
              </div>
            </a>
            <a href="/"  style={{width: '100%',  textDecoration: 'none'}}>
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
