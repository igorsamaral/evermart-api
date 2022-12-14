import xl from 'excel4node'
import fs from 'fs'

export default class XlsGeneratorService {
    run(worksheetName: string, columns: string[], rows: object[]) {
        const storageDir = 'storage'
        const timestamp = new Date().getTime()

        const wb = new xl.Workbook()
        const ws = wb.addWorksheet(worksheetName)

        let headingColumnIndex = 1
        let rowIndex = 2

        columns.forEach(heading => {
            ws.cell(1, headingColumnIndex++).string(heading)
        });

        rows.forEach(record => {
            let columnIndex = 1

            Object.keys(record['_doc']).forEach(columnName => {
                ws.cell(rowIndex, columnIndex++).string(JSON.stringify(record[columnName]))
            })

            rowIndex++
        });

        if (!fs.existsSync(storageDir)) {
            fs.mkdirSync(storageDir);
        }

        wb.write(`${storageDir}/${timestamp}.xlsx`)
    }
}