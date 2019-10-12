/* eslint-disable import/no-duplicates */
import express from 'express'
import path from 'path'
import fs from 'fs'

import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import faker from 'faker'
import cookieParser from 'cookie-parser'
import Html from '../client/html'
import Variables from '../client/variables'


let connections = [];
const clientVariables = Object.keys(process.env)
  .filter(key => key.indexOf('CLIENT') === 0)
  .reduce((res, key) => (Object.assign({}, res, { [key]: process.env[key] })), {});


const port = process.env.PORT || 3000;
const server = express();

server.use(cors());
// middleware
server.use(express.static(path.resolve(__dirname, '../dist/assets')));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
server.use(bodyParser.json({ limit: '50mb', extended: true }))

server.use(cookieParser());

// server.use('/api/', (req, res) => {
//   res.status(404);
//   res.end();
// });

const echo = sockjs.createServer();
echo.on('connection', (conn) => {
  connections.push(conn);
  conn.on('data', async () => {});

  conn.on('close', () => {
    connections = connections.filter(c => c.readyState !== 3)
  });
});


server.get('/js/variables.js', (req, res) => {
  console.log('I am here')
  res.send(
    Variables({
      clientVariables
    })
  );
});

const getFakeUser = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    company: faker.company.companyName(),
    salary: faker.finance.amount(),
    age: (faker.random.number() % 30) + 18
  }
}

// add faker
// comment /api/ route
// add new route /api/users
// return 10 users, each has 8 fields


server.get('/api/users', (req, res) => {
  const fileName = `${__dirname}/tmp/data.json`;
  fs.readFile(
    fileName,
    (err, data) => {
      if (!err) {
        return res.json(
          JSON.parse(data)
        )
      }
      const dataGenerated = new Array(100).fill(null).map(getFakeUser);
      return fs.writeFile(
        fileName,
        JSON.stringify(dataGenerated),
        () => {
          res.json(
            dataGenerated
          )
        }
      )
    }
  )
})

server.get('/', (req, res) => {
  // const body = renderToString(<Root />);
  const title = 'Server side Rendering';
  res.send(
    Html({
      body: '',
      title,
      clientVariables
    })
  );
});

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState,
      clientVariables
    })
  );
});


const app = server.listen(port);

echo.installHandlers(app, { prefix: '/ws' });

// eslint-disable-next-line no-console
console.log(`Serving at http://localhost:${port}`);
