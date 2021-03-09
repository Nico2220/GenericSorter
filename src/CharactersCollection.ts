import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rigthIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rigthIndex].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number, rigthIndex: number): void {
    const characters = this.data.split("");
    [characters[leftIndex], characters[rigthIndex]] = [
      characters[rigthIndex],
      characters[leftIndex],
    ];

    this.data = characters.join("");
  }
}
