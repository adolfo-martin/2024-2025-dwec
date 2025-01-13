import { from } from 'rxjs';

const numbers$ = from([4, 1, 4, 5]);

numbers$.subscribe(console.log);

numbers$.subscribe(number => console.log(number * 2));

// const person = {
//     firstname: 'Pepe',
//     lastname: 'Lopez',
//     age: 34
// }

// from(person).subscribe(console.log);