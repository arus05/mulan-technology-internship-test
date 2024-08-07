function createHeader(headers) {
    const tableHeaderEl = document.createElement("thead")
    const tableHeaderRowEl = document.createElement("tr")

    for (const header of headers) {
        const headerEl = document.createElement("th")
        headerEl.textContent = header

        tableHeaderRowEl.append(headerEl)
    }

    tableHeaderEl.append(tableHeaderRowEl)

    return tableHeaderEl
}

export { createHeader }