const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Mosby',
      animal: 'Dog',
      breed: 'Dalmation',
    }),
    React.createElement(Pet, {
      name: 'Gunner',
      animal: 'Dog',
      breed: 'Lab',
    }),
    React.createElement(Pet, {
      name: 'Siris',
      animal: 'Snake',
      breed: 'Python',
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
