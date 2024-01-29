let reinasColocadas = 0;
let reinasRestantes = 8;
function carga(){
    document.getElementById("col").innerText=reinasColocadas;
    document.getElementById("res").innerText=reinasRestantes;
}
function colocarReina(id) {
    let cords = id.split("*");
    let x=+(cords[0]);
    let y=+(cords[1]);
    //console.log(`${cords[0]} ${cords[1]}`);
    //console.log(`${document.getElementById(id).className} ${document.getElementById(id).className.includes('occupied')}`);
    if (!(document.getElementById(id).className.includes('occupied'))) {
        //console.log(`${cords[0]} ${cords[1]}`);
        if (reinasColocadas != 8) {
            for (let index = 0; index < 8; index++) {
                let otherClasses;
                otherClasses = document.getElementById(`${x}*${index}`).className;
                otherClasses = otherClasses.replace(/^/, `x-${x}${y} `);
                document.getElementById(`${x}*${index}`).setAttribute("class", otherClasses);
                otherClasses = document.getElementById(`${index}*${y}`).className;
                otherClasses = otherClasses.replace(/^/, `y-${x}${y} `);
                document.getElementById(`${index}*${y}`).setAttribute("class", otherClasses);
                if(((y-x+index)>-1 && (y-x+index)<8)&&((y-x+index)!=y)){
                    otherClasses = document.getElementById(`${index}*${y-x+index}`).className;
                    otherClasses = otherClasses.replace(/^/, `xy-${x}${y} `);
                    document.getElementById(`${index}*${(y-x)+index}`).setAttribute("class", otherClasses);
                }
                //console.log(cords[1]-cords[0]+index);
                //console.log(cords[1]+cords[0]-index);
                if(((y+x-index)>-1 && (y+x-index)<8)&&((y-x+index)!=y)){
                    otherClasses = document.getElementById(`${index}*${y+x-index}`).className;
                    otherClasses = otherClasses.replace(/^/, `xy-${x}${y} `);
                    document.getElementById(`${index}*${(y+x)-index}`).setAttribute("class", otherClasses);
                }
            }
            colocar();
            //console.log(`${reinasColocadas} ${reinasRestantes}`);
            let oldClass = document.getElementById(id).className;
            oldClass = oldClass.replace(`x-${x}${y} `, "");
            oldClass = oldClass.replace(`y-${x}${y} `, "");
            oldClass = oldClass.replace(`xy-${x}${y} `, "");
            oldClass = oldClass.concat("occupied ");
            document.getElementById(id).setAttribute("class", oldClass);
            console.log(document.getElementById(id).className);
        }
    }
    else {
        
            for (let index = 0; index < 8; index++) {
                let otherClasses = document.getElementById(`${x}*${index}`).className;
                otherClasses = otherClasses.replace(`x-${x}${y} `, "");
                document.getElementById(`${x}*${index}`).setAttribute("class", otherClasses);
                otherClasses = document.getElementById(`${index}*${y}`).className;
                otherClasses = otherClasses.replace(`y-${x}${y} `, "");
                document.getElementById(`${index}*${y}`).setAttribute("class", otherClasses);
                if((y-x+index)>-1 && (y-x+index)<8){
                    otherClasses = document.getElementById(`${index}*${y-x+index}`).className;
                    otherClasses = otherClasses.replace(`xy-${x}${y} `,"");
                    document.getElementById(`${index}*${y-x+index}`).setAttribute("class", otherClasses);
                }
                if((y+x-index)>-1 && (y+x-index)<8){
                    otherClasses = document.getElementById(`${index}*${y+x-index}`).className;
                    otherClasses = otherClasses.replace(`xy-${x}${y} `,"");
                    document.getElementById(`${index}*${y+x-index}`).setAttribute("class", otherClasses);
                }
            }
            retirar();
            let oldClass = document.getElementById(id).className;
            oldClass = oldClass.replace("occupied ", "");
            // oldClass=oldClass.replace(`x-${cords[0]}${cords[1]} `,"");
            // oldClass=oldClass.replace(`y-${cords[0]}${cords[1]} `,"");
            // oldClass=oldClass.replace(`xy-${cords[0]}${cords[1]} `,"");
            document.getElementById(id).setAttribute("class", oldClass);
            console.log(document.getElementById(id).className);
        
    }
}
function colocar() {
    reinasColocadas++;
    document.getElementById("col").innerText=reinasColocadas;
    reinasRestantes--;
    document.getElementById("res").innerText=reinasRestantes;
}
function retirar() {
    reinasColocadas--;
    document.getElementById("col").innerText=reinasColocadas;
    reinasRestantes++;
    document.getElementById("res").innerText=reinasRestantes;
}
function reinicio(){
    for (let index = 0; index < 8; index++){
        for (let jndex = 0; jndex < 8; jndex++){
            document.getElementById(`${index}*${jndex}`).setAttribute("class","");
        }
    }
    reinasColocadas=0;
    document.getElementById("col").innerText=reinasColocadas;
    reinasRestantes=8;
    document.getElementById("res").innerText=reinasRestantes;
}