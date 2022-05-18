
$.ajax("https://randomuser.me/api?results=20",{

    success(json){
        $("table").hide() //Escondemos la tabla.
        
        for(let user of json.results){
            $("#tbody").append(
                $("<tr></tr>").html(`
                    <td>${user.name.title}</td>
                    <td>${user.name.first}</td>
                    <td>${user.email}</td>
                    <td><img src="${user.picture.thumbnail}" alt="user"></td>
                    <td>${user.phone}</td>
                `)
            )
        }
        $("table").fadeIn(2500) //Va apareciendo la tabla lentamente.
    },
    error(error){
        alert("Error en la consulta.");
    }

})









                