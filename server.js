const express = require('express');
const contentful = require('contentful');
const _ = require('lodash');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const SPACE_ID = 'tldq5s09trqi';
const ACCESS_TOKEN = '86ccb240cd1a1d71625c68a35d55ea554f6e06eb6f3d7a09fa4ec70d066c4ec5';

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

app.prepare()
.then(() => {
  const server = express();

  server.get('/about', (req, res) => {
    client.getEntries({
      content_type: "home",
    }).then((about)=> {
      return app.render(req, res, '/about', JSON.stringify(about.items[0].fields));
    });
  });

  server.get('/blog', async (req, res) => {
    client.getEntries({
      content_type: "blog",
      order: "sys.createdAt",
    }).then((entries) => {
      let blogs = entries.items.map((blog)=> {
        return Object.assign({id: blog.sys.id}, blog.fields);
      });
      return app.render(req, res, '/blog', JSON.stringify(blogs));
    });
  });

  server.get('/projects', (req, res) => {
    client.getEntries({
      content_type: "projects",
      order: "sys.createdAt",
    }).then((entries) => {
      let projects= entries.items.map((project)=> {
        return Object.assign({id: project.sys.id}, project.fields);
      });
      return app.render(req, res, '/projects', JSON.stringify(projects));
    });
  });

  server.get('/github', (req, res) => {
    client.getEntries({
      content_type: "github",
      order: "sys.createdAt",
    }).then((entries) => {
      let projects= entries.items.map((project)=> {
        return Object.assign({id: project.sys.id}, project.fields);
      });
      return app.render(req, res, '/github', JSON.stringify(projects));
    });
  });


  server.get('/blog/:id', (req, res) => {
    client.getEntries({
      'sys.id': req.params.id,
    }).then((post)=> {
      return app.render(req, res, '/posts', JSON.stringify(post.items[0].fields));
    });
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  })
});
