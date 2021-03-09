import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rigthIndex: number): boolean {
    return this.data[leftIndex] > this.data[rigthIndex];
  }

  swap(leftIndex: number, rigthIndex: number): void {
    [this.data[leftIndex], this.data[rigthIndex]] = [
      this.data[rigthIndex],
      this.data[leftIndex],
    ];
  }
}
