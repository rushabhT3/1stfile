const name = (arr) => {
    let i = 0;

    const innerFunc = () => {
        console.log(`Hello ${arr[i]}`);
        i = (i + 1) % arr.length;
    }

    return innerFunc;
}

let fun = name(["Ram", "Shyam"]);

fun(); // Prints "Hello Ram"
fun(); // Prints "Hello Shyam"
