class GetMultiplicationTable {
  constructor(number) {
    this.number = number;
  }

  call() {
    const result = Array.from({ length: 10 }, (_, i) => ((i + 1) * this.number));

    const table = result.map((value, index) => `${this.number} x ${index + 1} = ${value}`);

    return table;
  }
}

const getMultiplicationTable = new GetMultiplicationTable(5);

console.log(getMultiplicationTable.call());