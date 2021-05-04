let arr=[0,1,2,3,4,5,6,7,7,8,9,9,10,11,12,13,14,15,16,17,18,19,20];
let n=arr.length;

        for (let i = 0; i < n-1; i++)
        {           
            if (arr[i] == arr[i+1])
                console.log(arr[i] + " ");
            
        }