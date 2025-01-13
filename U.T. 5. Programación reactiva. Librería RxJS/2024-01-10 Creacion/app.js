import { from, map, filter } from 'rxjs';

const numbers$ = from([56, 23, 76, 36, 39]).pipe(
    map(number => number * -1),
    map(number => number / 10),
    filter(number => number > -5),
);

// numbers$.subscribe(number => console.log(number));

numbers$.subscribe({
    next: number => console.log(number),
    error: error => console.error(error),
    complete: () => console.log('Ya se han terminado los números.'),
});
