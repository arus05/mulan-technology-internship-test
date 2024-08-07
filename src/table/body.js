function createBody(rows) {
    const tableBodyEl = document.createElement("tbody")

    for (const row of rows) {
        tableBodyEl.append(createBodyRow(row))
    }

    return tableBodyEl
}

function createBodyRow(row) {
    const bodyRowEl = document.createElement("tr")
    
    for (const property in row) {
        const entry = document.createElement("td")
        entry.textContent = row[property]

        bodyRowEl.append(entry)
    }

    return bodyRowEl
}

export { createBody }