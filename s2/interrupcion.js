

for(let i=1; i<=10; i++){
    document.write("<br> "+i);
    if(i==4)
        break; //El ciclo finalizará si i=7.
}

document.write("<br> El ciclo terminó <br> <br>");


for(let i=1; i<=20; i++){

    if(i==13)
        continue;

    document.write("<br> Boleto #"+i);
    
}

document.write("<br> El ciclo terminó <br> <br>");
