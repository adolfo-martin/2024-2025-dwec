export class Pokemon {
    public constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly height: number,
        public readonly weight: number,
        public readonly frontImage: string,
        public readonly backImage: string, 
    ) {}
}
