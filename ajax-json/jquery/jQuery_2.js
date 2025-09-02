
$.ajax("https://randomuser.me/api?results=15",{

    success(json){
        for(let user of json.results){
            // console.log("Title: %s",user.name.title);
            // console.log("Name: %s",user.name.first);
            // console.log("Phone: %s",user.phone);
            // console.log("Age: %d",user.dob.age); 

            $("#usuarios").append(
                $("<li></li>").html(
                    `
                    <div>
                        <img src="${user.picture.thumbnail}" alt="user">
                        <br>
                        <span>Title: ${user.name.title}</span>
                        <br>
                        <span>Name: ${user.name.first}</span>
                        <br>
                        <span>Phone: ${user.phone}</span>
                        <br>
                        <span>Age: ${user.dob.age}</span>
                    </div>

                    `
                )
            )

        }
        
    },
    error(error){
        alert("Error en el consumo de la API");
    }
    
});

/*
    jQuery es una librería para JavaScript que nos facilita la consulta 
    y manupulación de elementos del DOM mediante selectores y métodos.

    JSON significa JavaScript Object Notation.

    AJAX significa: Asynchrous JavaScript and XML.

*/
