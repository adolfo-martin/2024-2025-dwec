import { ajax } from 'rxjs/ajax';
import { mergeMap, map, concatMap } from 'rxjs';
import XMLHttpRequest from 'xhr2';


const subscription = getPersonById$(1)
    .pipe(
        map(({ films }) => films),
        mergeMap(films => films),
        concatMap(url => getFilmByUrl$(url))
    )
    .subscribe(console.log);


function getPersonById$(personId) {
    const url = `https://swapi.dev/api/people/${personId}`;

    return ajax({
        url,
        createXHR: () => new XMLHttpRequest(),
    }).pipe(
        map(({ response }) => response),
    );
}


function getFilmByUrl$(url) {
    return ajax({
        url,
        createXHR: () => new XMLHttpRequest(),
    }).pipe(
        map(({ response }) => response),
        map(({ title }) => title)
    )
}







