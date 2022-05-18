
$.ajax("https://randomuser.me/api?results=10",{

    success(json){
        for(let user of json.results){
            console.log("\n\t %s",user.name.title);
            console.log("\n\t Name: %s",user.name.first);
            console.log("\n\t Phone: %s",user.phone);
            console.log("\n\t Age: %d",user.dob.age);
            console.log("\n\t-----------------------");
        }
    },
    error(error){
        alert("Error en la consulta");
    }

})
