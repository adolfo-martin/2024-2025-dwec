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


// console.clear();

try {
    const message1 = await retrievePerson(1);
    console.log(message1);
    const message2 = await retrievePerson(2);
    console.log(message2);
    const message3 = await retrievePerson(3);
    console.log(message3);
} catch(error) {
    console.error(error);
} finally {
    console.log('🏁');
}
