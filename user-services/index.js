
//closuer
function out(){
    console.log("hir");
    function intter(){
        console.log("hi");
    }
    intter();
    return intter;
}

let gh = out();
gh();

//call  , apply , bind , 

function grettening ( gret , name ) {
    console.log(gret  + " " + name  );

}


const person = {name : "jui"};
//passest argumnet indivulay
grettening.call(person , "hello", person.name);
//using passes argument as a array
grettening.apply([person] , ['Hi' ,person.name]);
//create a funtion and return a fixed this 
 const hello =grettening.bind(person , "Hey");

 hello("Jui");

 function jui(){
    console.log("jui");
 }


const jui= ()=>{
    console.log()
}


const jui = function(){

}





//closuer 

// function outerfun(){
//     console.log("Hiee");

//     function innerfun(){
//         console.log("Jui JUI Jui");
//     }
 
//     innerfun();
//     return innerfun;
// }

// const funi = outerfun();
// funi();

// function outerfun(){
//     let name = "Jui";   

//     function innerfun(){
//         console.log(name); 
//     }

//     return innerfun;
// }

// const funi = outerfun();
// funi();



function outrfun(){
    let val = "Jui";

    function innerfun(){
        console.log(val);
    }

    return innerfun;
}

const ff = outrfun();
ff();

//this / call / bind  

function fff(greet){
    console.log(greet + " hi " + this.name);
}

let ping = { name: "Jui" };

fff.call(ping, "Hello");
fff.apply(ping, ["hie" ]);
const value =  fff.bind(ping , "hello");

value();

// Simple Promise

const myfuntion = Promise((res , rej) =>{
    let sucess = true;
    if(sucess){
     res("done hogeya ");
    }else{
        rej("rejevt hogeya");
    }

})
//api promisess

function getDAta (){
    return new Promise((reslove , reject) =>{
        setTimeout(() =>{
            reslove("user data");
        } , 2000);
    });
}

getDAta().then(data =>{
    console.log("data");
})

//Simple Promise banao

function getData(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            console.log("Data received");
            resolve("done")
        } , 2000);
    })
}

getData().then(data =>{
    console.log(data)
})

//Reject case

function getUser(){
    return new Promise((reslove , reject)=>{
        setTimeout(() =>{
            console.log("User not found");
            reject("nehi huha");
        }, 2000);
    })
}

getUser().then(data =>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})

//Q3 — Chain banao

function getUser(){

}

//Simple Promise

function jui(){
    return new Promise((res, rej) =>{
        console.log("hir");
        let succ = true;
        if(succ){
            res(data);
        }else{
            rej("not done");
        }
    })
}

jui().then(data=>{
    console.log("done");
}).catch(err=>{
    console.log(err);
})

//Promise Chaining

function get1(){
    return new Promise(( res , rej)=>{
        let sucee = true;
        if(sucee){
            res(data);
        }else{
            rej(err);
        }

    })
}

function get2(){
    return new Promise(( res , rej)=>{
        let sucee = true;
        if(sucee){
            res(data);
        }else{
            rej(err);
        }

    })
}


function get3(){
    return new Promise(( res , rej)=>{
        let sucee = true;
        if(sucee){
            res(data);
        }else{
            rej(err);
        }

    })
}
