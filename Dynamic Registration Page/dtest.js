const posts = {
    username : 'yash',
    lastActivityTime : '9/11'
}
function create3rdPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST3' });
            resolve()
        }, 3000)
    })
}
function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.lastActivityTime = new Date().getTime();
            resolve(user.lastActivityTime);
        }, 1000)
    })
}
userUpdatePost(){
    Promise.all([create3rdPost, updateLastUserActivityTime]).then()
}
// Sure! Here's an example that uses `Promise.all` without using an `async` function:


const posts = [
  { username: 'yash', title: 'POST1', lastActivityTime: '9/11' },
  { username: 'yash', title: 'POST2', lastActivityTime: '9/12' }
];

function createPost(title) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push({ username: 'yash', title });
      resolve();
    }, 3000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentTime = new Date().getTime();
      posts.forEach((post) => (post.lastActivityTime = currentTime));
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 1000);
  });
}

function userUpdatePost() {
  Promise.all([createPost('POST3'), updateLastUserActivityTime()]).then(() => {
    console.log(posts);
    deleteLastPost().then(() => console.log(posts));
  });
}
userUpdatePost();


// This code is similar to the previous example, but instead of using an `async` function and the `await` keyword, it uses `Promise.all` and the `then` method to wait for the promises to resolve before executing the next steps. Is this more in line with what you were looking for?