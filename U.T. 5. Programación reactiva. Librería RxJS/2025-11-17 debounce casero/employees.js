document.addEventListener('DOMContentLoaded', setup);

import EmployeesServiceMock from '/EmployeesServiceMock.js';

let lastFilter = undefined;

function setup(_) {
    setupFilter();

    const service = new EmployeesServiceMock();
    const employees = service.retrieveEmployees();
    renderEmployees(employees);
}


function setupFilter() {
    const nFilter = document.querySelector('#tTxtNameFilter');
    nFilter.addEventListener('keyup', filterTable);
}


function renderEmployees(employees) {
    const nTbody = document.querySelector('#tTabEmployees>tbody');
    nTbody.innerHTML = '';

    employees.forEach(({ nombre: firstname, apellido: lastname }) => {
        const nTr = nTbody.appendChild(document.createElement('tr'));

        const nTd = nTr.appendChild(document.createElement('td'));
        nTd.textContent = `${lastname}, ${firstname}`;
    })
}


function filterTable(e) {
    
    const timeoutId = lastFilter = setTimeout(()=>{
        if (lastFilter !== timeoutId) return;

        const textForFiltering = e.target.value.toLowerCase();
        const service = new EmployeesServiceMock();
        const employees = service.retrieveEmployees();
        const filteredEmployees = employees
            .filter(({ nombre: firstname, apellido: lastname }) => 
                `${lastname}, ${firstname}`.toLowerCase().includes(textForFiltering)
            );
        renderEmployees(filteredEmployees);
    }, 1000);

    lastFilter = timeoutId;
}