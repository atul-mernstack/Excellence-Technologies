
fetch("www.example.com/api/get/1",{
    method:"GET",
    headers:{
        //Api key
        "Content-Type":"application/json"
    },
    credentials:"include"
})
.then(res=>res.json())
.then(res=>console.log(res))
.catch(err=>console.log(err));