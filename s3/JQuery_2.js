
$.ajax("https://randomuser.me/api?results=10",{

    success(json){
        for(let user of json.results){
            // console.log("\n\t %s",user.name.title);
            // console.log("\n\t Name: %s",user.name.first);
            // console.log("\n\t Phone: %s",user.phone);
            // console.log("\n\t Age: %d",user.dob.age);
            // console.log("\n\t-----------------------");
            
            $("#usuarios").append(
                $("<li></li>").html(`
                    <div>
                        <img src="${user.picture.thumbnail}" alt="user">
                        <br>
                        <span>${user.name.title}</span><br>
                        <span>Name:${user.name.first}</span><br>
                        <span>Phone:${user.phone}</span><br>
                        <span>Age:${user.dob.age} </span>
                    </div>
                `)
            )

        }
    },
    error(error){
        alert("Error en la consulta");
    }

})
