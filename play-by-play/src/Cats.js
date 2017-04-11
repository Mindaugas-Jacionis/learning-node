import _ from 'lodash';

class Cats {
  const cats = [];
  constructor(app) {
    this.app = app;
  }

  // Create
  post() {
    app.post('/cat', (req, res) => {
      cats.push(req.body);
      res.json({ info: 'cat created successfully' });
    });
  }

  // Read
  get() {
    app.get('/cat', (req, res) => {
      res.send(cats)
    });
  }

  // Update
  //...
}

export default Cats;
