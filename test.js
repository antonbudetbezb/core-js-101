function chainPromises(array, action) {
  const one = new Promise((resolve, reject) => {
    const results = [];
    array.forEach((prom) => prom.then((res) => results.push(res)));
    resolve(results);
    reject(results);
  }).then((results) => results.reduce(action));
  return one;
}

const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
const p = chainPromises(promises, (a, b) => a + b);
p.then((res) => {
  console.log(res);
});
