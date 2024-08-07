import { loadCSV } from "./loader"
import { createHeader } from "./table/header"
import { createBody } from "./table/body"

const table1 = document.getElementById("table-1")
const table2 = document.getElementById("table-2")

async function main() {
    // Table 1
    const { headers: t1Headers, rows: t1Rows } = await loadCSV("/Table_Input.csv")

    const t1HeaderEl = createHeader(t1Headers)
    const t1BodyEl = createBody(t1Rows)
    table1.append(t1HeaderEl, t1BodyEl)

    // Table 2
    const t2Headers = ["Category", "Value"]

    const getTableOneIntValue = (index) => {
        const row = t1Rows.find(row => row["Index #"] === index)
        if (row) {
            return parseInt(row["Value"])
        }
        return null
    }
    
    const t2Rows = [
        {
            "Category": "Alpha",
            "Value": getTableOneIntValue("A5") + getTableOneIntValue("A20")
        }, 
        {
            "Category": "Beta",
            "Value": getTableOneIntValue("A15") / getTableOneIntValue("A7")
        }, 
        {
            "Category": "Charlie",
            "Value": getTableOneIntValue("A13") * getTableOneIntValue("A12")
        }
    ]

    const t2HeaderEl = createHeader(t2Headers)
    const t2BodyEl = createBody(t2Rows)

    table2.append(t2HeaderEl, t2BodyEl)
}

main()