class GetMultiplicationTable {
  constructor() { }

  call(number) {
    const result = Array.from({ length: 11 }, (_, index) => (index * number));

    const table = result.map((value, index) => `${index} x ${number} = ${value}`);

    return table;
  }
}

function init() {
  const tableComponent = document.querySelector('.table');

  for (let i = 0; i < 10; i ++){
    const multiplicationTable = createMultiplicationTable(i + 1);
    createTable(tableComponent, multiplicationTable);
  }
}

function createMultiplicationTable(number) {
  const usecase = new GetMultiplicationTable();

  const completeMultiplicationTable = usecase.call(number);

  return completeMultiplicationTable;
}

function createTable(tableComponent, multiplicationTable) {
  if (!tableComponent) return;

  const div = document.createElement('div');
  div.className = 'table-value';


  multiplicationTable.forEach((value) => div.appendChild(createItem(value)));

  tableComponent.appendChild(div);
}

function createItem(value) {
  const item = document.createElement('h1');
  item.innerText = value;

  return item;
}

init();