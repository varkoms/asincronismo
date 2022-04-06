// Implementando Promesas
// Usaremos ES6 

const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('We did it!');
    } else {
      reject('Whoops :( | Something bad happen');
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('We did it too!');
      }, 2000);
    } else {
      const error = new Error('Whoops :( | Something bad happen too'); // Permite una mejor traza y debug del codigo
      reject(error);
    }
  });
}

somethingWillHappen2()
  .then(response => console.log(response))
  // .then(() => console.log(`Holiwi`))
  .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => console.log('Array of results', response))
  .catch(err => console.error(err));