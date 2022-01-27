class GetMultiplicationTable {
  constructor() {}

  call(number) {
    const result = Array.from({ length: 10 }, (_, i) => ((i + 1) * number));

    const table = result.map((value, index) => `${number} x ${index + 1} = ${value}`);

    return table;
  }
}

function init() {
  const usecase = new GetMultiplicationTable();

  const completeMultiplicationTable = Array.from({length: 10}, (_, i) => usecase.call(i + 1));

  console.log(completeMultiplicationTable);
}

init();