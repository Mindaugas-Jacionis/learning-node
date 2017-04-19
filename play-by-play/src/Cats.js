import _ from 'lodash';

export default function(app) {
  let cats = [];

  /* Create */
  app.post('/cat', (req, res) => {
    cats.push(req.body);
    res.json({ info: 'cat created successfully' });
  });

  /* Read */
  app.get('/cat', (req, res) => {
    res.send(cats)
  });

  app.get('/cat/:id', (req, res) => {
    res.send(
      _.find(cats, { name: req.params.id })
    );
  });

  /* Update */
  app.put('/cat/:id', (req, res) => {
    const index = _.findIndex(cats, { name: req.params.id });
    _.merge(cats[index], req.body);
    res.json({ info: 'cat updated successfully' });
  });

  /* Delete */
  app.delete('/cat/:id', (req, res) => {
    _.remove(cats, (cat) => cat.name === req.params.id);
    res.json({ info: 'cat removed successfully' });
  });
}
