import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';

export default () => (
  <div>
    <Head title="Sandeepincode"/>
    <Nav/>
    <div className="hero">
      <h1 className="title">
        <span className="line-through">Sandeepin</span>
        <span className="highlight">code</span>.
      </h1>
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
          background: 'none',
          border: 'solid',
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
              <div style={{fontSize: '3.5rem'}}>
                Hello World.
              </div>
            </div>
            <div>
              <div style={{fontSize: '1.5rem'}}>
                Here Lies The 4 Doors To Perspective.
              </div>
            </div>
            <div>
              <div style={{fontSize: '3rem'}}>
                ⊙﹏⊙
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <a href="/about"  style={{width: '100%'}}>
          <div className="card-about">
            <h3>About.</h3>
          </div>
        </a>
        <a href="/blog"  style={{width: '100%'}}>
          <div className="card-blog">
            <h3>Blog.</h3>
          </div>
        </a>
        <a href="/projects"  style={{width: '100%'}}>
          <div className="card-projects">
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
      .sm-title {
         background: none;
         width: fit-content;
         padding: 0 5px;
         margin: 5px auto;
        }
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
      .row span {
       line-height: 1.15;
       font-family: inherit;
       font-weight: 800;
       }
      .card-about {
        background: black;
        margin: 0.5rem 6rem;
        padding: 40px 50px;
        text-align: left;
        text-decoration: none;
        color: white;
        border: none;
      }
      .card-about:hover {
        border-color: none;
        box-shadow: none;
        background-color: yellow;
        color: black;
      }
      .card-about:hover h3 {
        color: black;
      }
      .card-about h3 {
        margin: 0;
        color: white;
        font-size: 18px;
      }
      .card-blog {
        background: black;
        margin: 0.5rem 6rem;
        padding: 40px 50px;
        text-align: left;
        text-decoration: none;
        color: white;
        border: none;
      }
      .card-blog:hover {
        border-color: none;
        box-shadow: none;
        background-color: springgreen;
        color: black;
      }
      .card-blog :hover h3 {
        color: black;
      }
      .card-blog h3 {
        margin: 0;
        color: white;
        font-size: 18px;
      }
      .card-projects {
        background: black;
        margin: 0.5rem 6rem;
        padding: 40px 50px;
        text-align: left;
        text-decoration: none;
        color: white;
      }
      .card-projects:hover {
        border-color: none;
        box-shadow: none;
        background-color: hotpink;
        color: black;
      }
      .card-projects:hover h3 {
        color: black;
      }
      .card-projects h3 {
        margin: 0;
        color: white;
        font-size: 18px;
      }
      .line-through {
        text-decoration: line-through;
      }
      .highlight {
        color: black;
        border: solid;
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
      }
    `}</style>
  </div>

)
