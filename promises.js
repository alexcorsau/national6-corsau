console.log("Course20 - Promises");

function firstStep(number){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("End of first step");
            resolve(number+1);
        }, 2000);
    });
}

function secondStep(param) {
    return new Promise((resolve,reject) => {
       
        setTimeout(()=>{
            console.log("End of second step");
            if(param%2===1){
                reject("We want even parameters")
            } else resolve(param/2);
        },1000);
    }
    )
}


function thirdStep(finalValue){
    setTimeout(()=>{
        console.log("End of third step");
        console.log("Final Value",finalValue);
    },500);
}

firstStep(1)
    .then(secondStep)
    .then(thirdStep)
    .catch((error) => {
        alert(`Promis chain has the following error: ${error}`);
    });

fetch(`https://imple-json-server-scit.herokuapp.com/posts`)
    .then((response)=> {return response.json()})
    .then((json)=> {console.log(json)})
    .catch((error)=> {
        console.log(error);
    });