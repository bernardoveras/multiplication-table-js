class GetMultiplicationTable {
  constructor() { }

  call(number) {
    const result = Array.from({ length: 11 }, (_, index) => (index * number));

    const table = result.map((value, index) => `${index} x ${number} = ${value}`);

    return table;
  }
}

function init() {
  const multiplicationTable = createMultiplicationTable(5);

  const tableComponent = document.querySelector('.table');

  createTable(tableComponent, multiplicationTable);
}

function createMultiplicationTable(number) {
  const usecase = new GetMultiplicationTable();

  const completeMultiplicationTable = usecase.call(number);

  return completeMultiplicationTable;
}

function createTable(tableComponent, multiplicationTable) {
  if (!tableComponent) return;

  multiplicationTable.forEach((value) => tableComponent.appendChild(createItem(value)));
}

function createItem(value) {
  const item = document.createElement('h1');
  item.innerText = value;

  return item;
}

init();