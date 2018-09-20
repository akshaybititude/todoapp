const User = require('./todo.model');

exports.getAll = getAll;
exports.getOne = findOne;
exports.create = create;
exports.delete = deleteOne;
exports.deleteAll = deleteAll;
exports.update = updateOnes;


function getAll(req, res) {
  User.fetchAll({}).then(function (users) {
    users = users.toJSON();
    res.send(users);
  })
}

function findOne(req, res) {
  User.where('todo_id', req.params.id).fetch().then(function (users) {
    console.log(users.toJSON());
    users = users.toJSON();
    res.send(users);
  });
}

function create(req, res) {
  new User({ todo_id: req.body.todo_id, title: req.body.title, description: req.body.description, status: req.body.status, created_date: req.body.created_date, last_update_date: req.body.last_update_date }).save(null, { method: 'insert' }).then(function (model) {
    model = model.toJSON();
    res.send(model);
  });
}

function updateOnes(req, res) {
  new User({ todo_id: req.params.id })
    .save({
      title: req.body.title ? req.body.title : undefined,
      description: req.body.description ? req.body.description : undefined,
      status: req.body.status ? req.body.status : undefined,
      last_update_date: req.body.last_update_date ? req.body.last_update_date : undefined,
    }, { patch: true, method: 'update' })
    .then(users => users.toJSON())
    .then(users => res.json(users));
}

function deleteOne(req, res) {
  new User({ todo_id: req.params.id }).destroy().then(function (users) {
    users = users.toJSON();
    res.send(users);
  })
}

function deleteAll(req, res) {
  new User().where({ status: req.params.id }).destroy().then(function (users) {
    users = users.toJSON();
    res.send(users);
  })
}