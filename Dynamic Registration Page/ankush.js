const posts = [
    { name: "post one" },
    { name: "post two" },
    { name: "post three" }
]
function createPost(post) {
    return new Promise((resolve, reject) => {
        posts.push(post)
        resolve(post);
    })
}
function updateUserActivity() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let lastActivity = new Date()
            console.log(`Last seen : ${lastActivity}`)
            resolve()
        }, 1000)
    })
}
function printPost() {
    posts.forEach((post) => {
        console.log(post.name)
    })
}
function deletePost() {
    return new Promise((resolve, reject) => {
        if (posts.length > 0) {
            const del = posts.pop()
            resolve(del)
        }
        else {
            reject("ERROR")
        }
    })
}
Promise.all([createPost({ name: "post five" }), updateUserActivity()])