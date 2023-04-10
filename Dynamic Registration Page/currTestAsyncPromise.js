console.log('person1');
console.log('person2');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('ticket');
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

    let ticket;
    try{
        ticket = await promiseWifeBringingTicks;
    }catch(e){
        ticket = 'sad face';
    }
    let [popcorn, candy, pepsi]= await Promise.all([getPopcorn, getCandy, getColdDrinks])
    console.log(`${popcorn}, ${candy}, ${pepsi}`);
    
    return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4');
console.log('person5');