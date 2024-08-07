async function loadCSV(path) {
    const rawCSV = await readCSV(path)
    const processedCSV = parseCSV(rawCSV)

    return processedCSV
}

async function readCSV(path) {
    const res = await fetch(path)
    const data = await res.text()
    return data
}

// reads csv in text format and returns an array of row objects
function parseCSV(csv) {
    const rows = csv.split("\r\n")
    const headers = rows[0].split(",")

    const processedRows = []

    for (let i=1; i<rows.length; i++) {
        const row = rows[i].split(",")
        const rowObj = {}

        for (let j=0; j<headers.length; j++) {
            rowObj[headers[j]] = row[j]
        }

        processedRows.push(rowObj)
    }

    return {
        headers,
        rows: processedRows
    }
}

export { loadCSV }