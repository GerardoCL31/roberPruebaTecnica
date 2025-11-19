


function moverRover(x,y,dir,instrucciones){
for (let i = 0; i < instrucciones.length; i++) {
    const inst = instrucciones[i]

    if(inst==="L"){
        if(dir==="N")dir = "W"
        else if(dir ==="W") dir ="S"
        else if (dir==="S") dir ="E"
        else if (dir === "E") dir ="N"
    }

    if(inst==="R"){
        if (dir==="N")dir="E"
        else if(dir==="E")dir="S"
        else if(dir==="S")dir="W"
        else if (dir==="W")dir="N"
    }

    if(inst==="M"){
        if(dir==="N")y++
        if(dir==="S")y--
        if(dir==="W")x--
        if(dir==="E")x++
    }


}
console.log("La direccion final de rober es: "+x,y,dir)
}
moverRover(1,2,"N","LMLMLMLMM")
moverRover(3,3,"E","MMRMMRMRRM")
