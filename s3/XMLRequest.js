
function peticion(){
    const ajax = new XMLHttpRequest;
    ajax.onload = function(){
        document.getElementById("contenedor").innerHTML=
        this.responseText;
    }
    ajax.open("GET","info.txt");
    ajax.send();
}