function generateRandom(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}


function retrievePerson(personId) {

    function task(resolve, reject) {
        const miliseconds = generateRandom(1000, 5000);
    
        setTimeout(()=>{
            if (Math.random() < 0.5)
                resolve(`OK (200) Person with id ${personId} retrieved.`);
            else
                reject(`OK (404) Person with id ${personId} not exists.`);
        }, miliseconds);
    }

    const promise = new Promise(task);
    return promise;
}


retrievePerson(1)
    .then(message => console.log(message))
    .then(() => retrievePerson(2))
    .then(message => console.log(message))
    .then(() => retrievePerson(3))
    .then(message => console.log(message))
    .catch(error => console.error(error));

console.log('🏁');