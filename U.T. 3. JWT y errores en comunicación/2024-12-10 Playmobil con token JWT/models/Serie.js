export default class Serie {
    #id;
    #name;
    
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    set name(newValue) {
        this.#name = newValue;
    }
}