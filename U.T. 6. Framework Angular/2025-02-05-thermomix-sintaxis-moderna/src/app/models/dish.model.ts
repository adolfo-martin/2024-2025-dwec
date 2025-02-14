export class Dish {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly image : string,
        public recipe: string = '',
    ) {}
}