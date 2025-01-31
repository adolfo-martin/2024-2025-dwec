export class Cientifico {
    constructor(
        public readonly id: string,
        public readonly nombre: string,
        public readonly areaEstudio: string,
        public readonly nacionalidad: string,
    ) {}
}

export class Cientificos {
    private static cientificos = [
        new Cientifico('mc', 'Marie Curie', 'Física', 'polaca'),
        new Cientifico('if', 'Ian Fleming', 'Biología', 'inglesa'),
        new Cientifico('ae', 'Albert Einstein', 'Física', 'alemana'),
        new Cientifico('gg', 'Galileo Galilei', 'Física', 'italiana'),
        new Cientifico('in', 'Isaac Newton', 'Física', 'inglesa'),
        new Cientifico('lp', 'Louis Pasteur', 'Biología', 'francesa'),
        new Cientifico('al', 'Ada Lovelace', 'Matemática', 'inglesa'),
        new Cientifico('sr', 'Santiago Ramón y Cajal', 'Biología', 'española'),
        new Cientifico('cd', 'Charles Darwin', 'Biología', 'inglesa'),
        new Cientifico('nt', 'Nicola Tesla', 'Física', 'italiana'),
    ];

    public static recuperarCientificos(): Array<Cientifico> {
        return Cientificos.cientificos;
    }

    public static recuperarCientifico(id: string): Cientifico | undefined {
        return Cientificos.cientificos.find(cientifico => cientifico.id === id);
    }
}