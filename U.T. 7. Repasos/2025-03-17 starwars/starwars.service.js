export async function retrievePeople() {
    let url = `https://swapi.dev/api/people`;
    const allPeople = [];
    
    while (url !== null) {
        const response = await fetch(url);
        const data = await response.json();
        const tenPeople = data.results.map(person => parseInt(person.url.split('/')[5]));
        allPeople.push(...tenPeople); /* ... es el operador rest */
        url = data.next;
        break;
    }
    
    return allPeople;
}

export async function retrievePersonById(personId) {
    const url = `https://swapi.dev/api/people/${personId}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
        name: data.name,
        height: data.height,
        weight: data.mass,
    };
}

export async function retrieveTenNames() {
    const url = `https://swapi.dev/api/people`;
    const response = await fetch(url);
    const data = await response.json();
    const tenPeople = data.results.map(person => parseInt(person.url.split('/')[5]));
    console.log(tenPeople)

    // for (const personId of tenPeople) {
    //     const url = `https://swapi.dev/api/people/${personId}`;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(personId, data.name);
    // }

    // tenPeople.forEach(async personId => {
    //     const url = `https://swapi.dev/api/people/${personId}`;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(personId, data.name);
    // });

    // const promises = tenPeople.map(personId => (async function(){
    //     const url = `https://swapi.dev/api/people/${personId}`;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     // console.log(personId, data.name);
    //     return { id: personId, name: data.name };
    // })());

    const promises = tenPeople.map(retrievePersonById);
    const people = await Promise.all(promises);
    return people;
}