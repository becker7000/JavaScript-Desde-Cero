
$.ajax("https://randomuser.me/api?results=30",{

    success(json){

        for(let user of json.results){

            //Primero ocultamos la tabla:
            $("table").hide();

            $("#tbody").append(
                $("<tr></tr>").html(
                    `
                        <td>${user.name.title}</td>
                        <td>${user.name.first}</td>
                        <td>${user.phone}</td>
                        <td>${user.dob.age}</td>
                        <td><img src="${user.picture.thumbnail}" alt="user"></td>
                 
                    `
                )
            )

        }
        //Va apareciendo lentamente según el tiempo dado en milisegundos:
        $("table").fadeIn(2400);


    },
    error(error){
        alert("Error en la consulta");
    }

})