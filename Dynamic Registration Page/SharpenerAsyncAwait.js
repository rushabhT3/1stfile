const posts = [
    { title: 'POST1' },
    { title: 'POST2' },
]
function createPost(post) {
    return new Promise((resolve, reject) => {
        posts.push(post);
        resolve(post);
    })
}
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject('ERROR')
            }
        }, 5000)
    })
}
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const myTime = new Date();
            resolve(myTime);
        }, 1000)
    })
}
function printPost() {
    posts.forEach((post) => {
        console.log(post.title);
    })
}
async function main(){
    try{
        const [newPOST, lastActivityTime] = await Promise.all([createPost({title: 'littleONE'}), updateLastUserActivityTime()]);
        console.log(`the new post is created @ ${lastActivityTime}`);
        printPost();

        let deletedPost = await deletePost();
        console.log(`note that the post ${deletedPost.title} is deleted after 5 sec`);

        // await nahi matlab normal k jaisa behave
        deletePost();
        deletePost();

        // awiat hain toh ye wala 5 sec rukhega fir execute
        deletedPost = await deletePost();

    } catch(error){
        console.log(error);
    }
}
main();
