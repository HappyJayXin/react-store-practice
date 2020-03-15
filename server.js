const path = require('path');
const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

const getUserDB = () => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'user.json'), 'UTF-8'));
};

const isAuthenticated = ({ email, password }) => {
  return (
    getUserDB().users.findIndex(user => user.email === email && user.password === password) !== -1
  );
};

const SECRET = '13212312dsf2123sdf211sdf';
const expiresIn = '1h';
const createToken = payload => jwt.sign(payload, SECRET, { expiresIn });

server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (isAuthenticated({ email, password })) {
    const user = getUserDB().users.find(user => user.email === email && user.password === password);
    const { nickname, type } = user;

    // jwt
    const jwToken = createToken({ nickname, type, email });
    return res.status(200).json(jwToken);
  } else {
    const status = 401;
    const message = 'Incorrect mail or password';
    return res.status(status).json({ status, message });
  }
});

// Register New User
server.post('/auth/register', (req, res) => {
  const { email, password, nickname, type } = req.body;

  // ----- 1 step
  if (isAuthenticated({ email, password })) {
    const status = 401;
    const message = 'Email and Password already exist';
    return res.status(status).json({ status, message });
  }

  // ----- 2 step
  fs.readFile(path.join(__dirname, 'user.json'), (err, _data) => {
    if (err) {
      const status = 401;
      const message = err;
      return res.status(status).json({ status, message });
    }
    // Get current users data
    const data = JSON.parse(_data.toString());
    // Get the id of last user
    const last_item_id = data.users[data.users.length - 1].id;
    //Add new user
    data.users.push({ id: last_item_id + 1, email, password, nickname, type }); //add some data
    fs.writeFile(path.join(__dirname, 'user.json'), JSON.stringify(data), (err, result) => {
      // WRITE
      if (err) {
        const status = 401;
        const message = err;
        res.status(status).json({ status, message });
        return;
      }
    });
  });

  // Create token for new user
  const jwToken = createToken({ nickname, type, email });
  res.status(200).json(jwToken);
});

server.use(router);
server.listen(3003, () => {
  console.log('JSON Server is running');
});
