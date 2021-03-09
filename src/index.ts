import { NumbersCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList, Node } from "./LinkedList";

import { Sorter } from "./Sorter";

const numbers = new NumbersCollection([10, -5, 0, 3, 0, -1, -1, 152, 2]);
numbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection("Xaaa");
characters.sort();
console.log(characters.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(-1);
linkedList.add(0);
linkedList.sort();
linkedList.print();
