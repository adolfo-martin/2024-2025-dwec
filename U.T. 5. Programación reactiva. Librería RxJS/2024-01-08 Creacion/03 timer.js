import { timer } from 'rxjs';

const timer$ = timer(10, 1000);

timer$.subscribe(console.log);