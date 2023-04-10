const posts = [
    { title: 'POST1' },
    { title: 'POST2' },
];

async function createPost(post) {
    return new Promise((resolve, reject) => {
        posts.push(post);
        resolve(post);
    });
}

async function deletePost() {
    return new Promise((resolve, reject) => {
        if (posts.length > 0) {
            const poppedElement = posts.pop();
            resolve(poppedElement);
        } else {
            reject('ERROR');
        }
    });
}

async function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const myTime = new Date();
            resolve(myTime);
        }, 1000);
    });
}

function printPost() {
    posts.forEach((post) => {
        console.log(post.title);
    });
}

async function main() {
    try {
        const [newPost, lastActivityTime] = await Promise.all([createPost({ title: 'newPOST' }), updateLastUserActivityTime()]);
        console.log(`the new post is created @ ${lastActivityTime}`);
        printPost();
        const deletedPost = await deletePost();
        console.log(`note that the ${deletedPost.title} is deleted`);
        printPost();
        await deletePost();
        await deletePost();
        await deletePost();
    } catch (error) {
        console.log(error);
    }
}

main();