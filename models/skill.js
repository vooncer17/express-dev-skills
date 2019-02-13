const skills = [
  {skill: 'React', done: false},
  {skill: 'JavaScript', done: true},
  {skill: 'HTML', done: true}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function deleteOne(id) {
  skills.splice(id, 1);
}

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[id];
}

function create(skill) {
  skills.push(skill);
}