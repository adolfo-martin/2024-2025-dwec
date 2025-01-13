import { ajax } from 'rxjs/ajax';
import { mergeMap, map, concatMap } from 'rxjs';
import XMLHttpRequest from 'xhr2';

const url = 'https://swapi.dev/api/people/1';

const films$ = ajax({
    url,
    createXHR: () => new XMLHttpRequest(),
}).pipe(
    map(({ response }) => response),
    map(({ films }) => films),
    mergeMap(films => films),
    concatMap(url =>
        ajax({
            url,
            createXHR: () => new XMLHttpRequest(),
        }).pipe(
            map(({ response }) => response),
            map(({ title }) => title)
        )
    )
);


const subscription = films$.subscribe(console.log);

