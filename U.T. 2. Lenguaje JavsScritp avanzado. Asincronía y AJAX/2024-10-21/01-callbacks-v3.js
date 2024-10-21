function generateRandom(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}


function retrievePerson(personId, callback) {
    const miliseconds = generateRandom(1000, 5000);

    setTimeout(()=>{
        console.log(`OK (200) Person with id ${personId} retrieved.`, miliseconds);
        callback();
    }, miliseconds);
}


retrievePerson(1, () => retrievePerson(2, () => retrievePerson(3, () => {})));
console.log('🏁');