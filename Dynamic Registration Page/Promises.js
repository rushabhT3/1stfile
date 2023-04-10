const posts = [{ title: 'POST1'}, { title: 'POST2' }];

//Do not touch this function below
function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}
//Do not touch this function below
function create3rdPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST3' });
            resolve()
        }, 3000)
    })
}

function create4thPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST4' });
            resolve();
        }, 2000)
    })
}
//and removes the last element of the posts array with a 1 second delay(setTimeout)
//to remove you can use array.pop method
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}
create2ndPost().then(() => {
    
    deletePost().then((deletedPost1) => {
        console.log(deletedPost1.title);
        
        create3rPost().then(() => {
            deletePost().then((deletedPost2) => {
                console.log(deletedPost2.title);
                
                deletePost().then((deletedPost3) => {
                    console.log(deletedPost3.title);
                    deletePost().catch((msg) => console.log(msg));
                })
            })
        })
    })
})
// this is from another assignment
create3rdPost().then(() => {
    deletePost().then(() => {
        create4thPost().then(() => {
            printPost()
        })
    })
})
// OR
create3rdPost().then(deletePost).then(create4thPost).then(printPost)
