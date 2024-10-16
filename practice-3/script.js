async function loadJSON(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json()
}

function insertTable(data){
    const tableBody = document.querySelector('#table tbody')
    tableBody.innerHTML = ''

    data.forEach(item => {
        let row = document.createElement('tr')
        row.innerHTML = `
            <td>${item.userId}</td>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
        `;
        tableBody.appendChild(row)
    })
}

async function start() {
    try {
        const data = await loadJSON('https://jsonplaceholder.typicode.com/posts')

        insertTable(data)
    } catch (error) {
        console.error(error)
    }
}

start()

const tableHeaders = document.getElementsByTagName('th')
const arrayHeaders = Array.from(tableHeaders)
arrayHeaders.forEach((item, index) => {
    item.addEventListener('click', () => {
        sortTable(index)
    })
})

function sortTable(n) {
    console.log(n)
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0
    table = document.querySelector('#table')
    switching = true

    dir = "asc"

    while (switching) {
      switching = false
      rows = table.rows

      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false

        x = rows[i].getElementsByTagName("td")[n]
        y = rows[i + 1].getElementsByTagName("td")[n]

        const xValue = isNaN(x.innerHTML) ? x.innerHTML.toLowerCase() : parseFloat(x.innerHTML)
        const yValue = isNaN(y.innerHTML) ? y.innerHTML.toLowerCase() : parseFloat(y.innerHTML)

        if (dir == "asc") {
          if (xValue > yValue) {
            shouldSwitch = true
            break
          }
        } else if (dir == "desc") {
          if (xValue < yValue) {
            shouldSwitch = true
            break
          }
        }
      }

      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
        switching = true
        switchcount ++
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc"
          switching = true
        }
      }
    }
  }

function filterTable() {
    const input = document.querySelector('#search')
    const filter = input.value.toLowerCase()
    const table = document.querySelector('#table')
    const rows = table.getElementsByTagName('tr')

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td')
        let rowContainsSearch = false

        for (let j = 0; j < cells.length; j++) {
            const cellValue = cells[j].textContent.toLowerCase()
            if (cellValue.includes(filter)) {
                rowContainsSearch = true
                break
            }
        }
        if (filter.length >= 3) {
            if (rowContainsSearch) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        } else {
            rows[i].style.display = '';
        }
    }
}