export class Book {
    public constructor(
        public readonly id: number,
        public readonly title: string,
        public readonly author = 'unknown',
        public readonly pageNumbers = 0,
    ) {
    }
}