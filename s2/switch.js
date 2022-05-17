// Opcion 1 (1-4) - Opcion 2 (5-7) - Opcion 3 ( 8-10) - Def 
let opcion=11;

switch(opcion){

    case 1: case 2: case 3: case 4:
        console.log("\n\t Soy la opcion 1");
        break;
    case 5: case 6: case 7:
        console.log("\n\t Soy la opcion 2");
        break;
    case 8: case 9: case 10: 
        console.log("\n\t Soy la opcion 3");
        break;
    default:
        console.log("\n\t Opción no contemplada");

}

