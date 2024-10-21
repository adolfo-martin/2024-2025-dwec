async function retrievePerson(personId) {
    for (let i=0; i<4000000000; i++) {}

    if (Math.random() < 0.5)
        return `OK (200) Person with id ${personId} retrieved.`;
    else
        throw new Error(`OK (404) Person with id ${personId} not exists.`);
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
    console.error(error.message);
} finally {
    console.log('🏁');
}
