async function loadJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
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