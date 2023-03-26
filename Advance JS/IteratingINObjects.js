// 1. Using a `for...in` loop:
function findAverage(obj) {
    let total = 0;
    let count = 0;
    for (const key in obj) {
        total += obj[key];
        count++;
    }
    return total / count;
}

// 2. Using the `forEach` method:
    Object.values(obj).forEach(value => {
        total += value;
        count++;
    });
    // OR
    Object.values(obj).forEach(function(value) {
        total += value;
        count++;
    });
    
// 3. Using a `for...of` loop:
    for (const value of Object.values(obj)) {
        total += value;
        count++;
    }

// for accesing both the key-value pair in the obj
for (const [name, val] of Object.entries(obj)) {}

