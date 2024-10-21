function generateRandom(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}


function retrievePerson(personId) {

    function task(resolve, reject) {
        const miliseconds = generateRandom(1000, 5000);
    
        setTimeout(()=>{
            console.log(personId);
            resolve(`OK (200) Person with id ${personId} retrieved.`);
        }, miliseconds);
    }

    const promise = new Promise(task);
    return promise;
}


console.log('1)', retrievePerson(1));
console.log('2)', retrievePerson(2));
console.log('3)', retrievePerson(3));

console.log('🏁');