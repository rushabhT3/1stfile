console.log('person1');
console.log('person2');

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
})

const getPopcorn = promiseWifeBringingTickets.then((items) => {
    return new Promise((resolve, reject) =>
        resolve(`new ${items} & popcorn`));
});

const getButter = getPopcorn.then((items) => {
    return new Promise((resolve, reject) =>
        resolve(` ${items} & butter`));
});

const getCola = getButter.then((items) => {
    return new Promise((resolve, reject) =>
        resolve(` ${items} and Pepsi`))
})
getPopcorn.then((items) => console.log(items));
getButter.then((items) => { console.log(items) });
getCola.then((items) => console.log(items));

console.log('person4');
console.log('person5');