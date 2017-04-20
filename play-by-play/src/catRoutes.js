import _ from 'lodash';
import Cat from './catModel';

// simple CRUD with no DB
// export default function(app) {
//   let cats = [];
//
//   /* Create */
//   app.post('/cat', (req, res) => {
//     cats.push(req.body);
//     res.json({ info: 'cat created successfully' });
//   });
//
//   /* Read */
//   app.get('/cat', (req, res) => {
//     res.send(cats)
//   });
//
//   app.get('/cat/:id', (req, res) => {
//     res.send(
//       _.find(cats, { name: req.params.id })
//     );
//   });
//
//   /* Update */
//   app.put('/cat/:id', (req, res) => {
//     const index = _.findIndex(cats, { name: req.params.id });
//     _.merge(cats[index], req.body);
//     res.json({ info: 'cat updated successfully' });
//   });
//
//   /* Delete */
//   app.delete('/cat/:id', (req, res) => {
//     _.remove(cats, (cat) => cat.name === req.params.id);
//     res.json({ info: 'cat removed successfully' });
//   });
// }

// simple CRUD with MongoDB
export default function(app) {
  let cats = [];

  /* Create */
  app.post('/cat', (req, res) => {
    const newCat = new Cat(req.body);
    newCat.save((err) => {
      err && res.json({ info: 'error during cat create', error: err });
      res.json({ info: 'cat created successfully' });
    });
  });

  /* Read */
  app.get('/cat', (req, res) => {
    Cat.find((err, cats) => {
      err && res.json({ info: 'error during find cats', error: err });
      res.json({ info: 'cats found successfully', data: cats });
    });
  });

  app.get('/cat/:id', (req, res) => {
    Cat.findById(req.params.id, (err, cat) => {
      err && res.json({ info: 'error during find cat', error: err });
      cat ? res.json({ info: 'cat found successfully', data: cat })
          : res.json({ info: 'cat not found' });
    });
  });

  /* Update */
  app.put('/cat/:id', (req, res) => {
    Cat.findById(req.params.id, (err, cat) => {
      err && res.json({ info: 'error during find cat', error: err });
      if (cat) {
        _.merge(cat, req.body);
        cat.save((err) => {
          err && res.json({ info: 'error during cat update', error: err });
          res.json({ info: 'cat updated successfully' });
        });
      } else {
        res.json({ info: 'cat not found' });
      }
    });
  });

  /* Delete */
  app.delete('/cat/:id', (req, res) => {
    Cat.findByIdAndRemove(req.params.id, (err) => {
      err && res.json({ info: 'error during remove cat', error: err });
      res.json({ info: 'cat removed successfully' });
    });
  });
}
