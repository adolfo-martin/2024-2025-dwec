import { ajax } from 'rxjs/ajax';
import { map, pluck } from 'rxjs';
import XMLHttpRequest from 'xhr2';


getPeople$().subscribe(console.log);


function getPeople$() {
    const url = 'https://swapi.dev/api/people';
    const people$ = ajax({
        url,
        createXHR: () => new XMLHttpRequest(),
        // method: 'get',
        // responseType: 'json',
        // crossDomain: true,
        // withCredentials: false,
    }).pipe(
        pluck('response'),
        pluck('results'),
        map(people => people.map(person => person.name))
    );

    return people$;
}