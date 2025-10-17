

let x:number  = 1  //type inference

console.log(x);


let y:number = 3


function addsum(firstname:number, lastname:number){
    return firstname + lastname    
}
console.log(addsum(2,3))



function adddsum(firstname:number, lastname:number){
    return firstname + lastname
}



function addingsums(one:number, two:number, three:number, four:number):number{
   return  adddsum(one, two) + addsum(three,four)
}





console.log(addingsums(1,2,3,4))

function greet(name:string){
    console.log("HELLO " + name)
}


greet("manu")





// writing the right age 

function rightage(age:number):boolean{
    if (age > 18){
        return true
    }
    else{
        return false
    }
}

console.log(rightage(20))