export class Person {

    constructor(
        public id: number,
        public name: string
    ) { }

    public get isValid(): boolean {
        return this.id >= 0 && this.name.length > 0
    }
}
