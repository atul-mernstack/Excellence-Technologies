let arr = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
let count = 0;
let result = 0;
let n = arr.length;
for (let i = 0; i < n; i++)
{
    if (arr[i] == false)
        count = 0;
    else {
        count++;
        result = Math.max(result, count);
    }
}
console.log(result);