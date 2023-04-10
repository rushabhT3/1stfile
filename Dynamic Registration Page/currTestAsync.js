console.log('person1');
console.log('person2');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000)
    })
    const getPopcorn = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('popcorn');
        }, 5000)
    })
    const getCandy = new Promise((resolve, reject) => resolve('candy'));
    const getColdDrinks = new Promise((resolve, reject) => resolve('Pepsi'));
    console.log('line await k niche nahi hain direct run hogi');

    let ticket = await promiseWifeBringingTicks;
    console.log('story of the Person3: husband and the wife');
    console.log(`wife: i have ${ticket}`);
    console.log('husband: lets go');
    console.log('wife: No Hungry');

    let popcorn = await getPopcorn;
    console.log(`husband: i got the ${popcorn}`);
    console.log('husband: come on now');
    console.log('wife: I need the butter');

    let butter = await getCandy;
    console.log(`husband: i got the ${butter} on popcorn`);

    let coldDrinks = await getColdDrinks;
    console.log(`wife: i got ${coldDrinks}`);

    return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4');
console.log('person5');