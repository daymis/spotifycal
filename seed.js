const { User, Event } = require('./server/db/models');
const db = require('./server/db/db');

const users = [
  {
    email: 'mario@nintendo.com',
    password: 'luigi'
  },
  {
    email: 'luigi@nintendo.com',
    password: 'mario'
  }
];

const buildUsers = () => Promise.all(users.map(user => User.create(user)));

const seed = () => {
  return buildUsers()
    .catch(error => console.error('Failed to map data', error));
};

console.log('Syncing database');

db.sync({ force: true })
  .then(() => {
    console.log('Seeding DB');
    return seed();
  })
  .then(() => 'Seeding successful')
  .catch(err => {
    console.error('Error while seeding');
    console.error(err.stack);
  })
  .finally(() => {
    db.close();
    return null;
  });