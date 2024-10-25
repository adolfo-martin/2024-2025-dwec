function generateRandom(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}


function retrievePerson1(personId, callback) {
    const miliseconds = generateRandom(1000, 5000);

    setTimeout(()=>{
        console.log(`OK (200) Person with id ${personId} retrieved.`, miliseconds);
        retrievePerson2(2);
    }, miliseconds);
}

function retrievePerson2(personId, callback) {
    const miliseconds = generateRandom(1000, 5000);

    setTimeout(()=>{
        console.log(`OK (200) Person with id ${personId} retrieved.`, miliseconds);
        retrievePerson3(3);
    }, miliseconds);
}

function retrievePerson3(personId, callback) {
    const miliseconds = generateRandom(1000, 5000);

    setTimeout(()=>{
        console.log(`OK (200) Person with id ${personId} retrieved.`, miliseconds);
    }, miliseconds);
}


retrievePerson1(1);
console.log('🏁');