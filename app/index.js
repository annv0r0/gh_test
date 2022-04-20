// md version
{/* <script src="CsvToTable.js"></script> */}

const path = require('path');
const fs = require('fs');
const { Csv2md } = require('csv2md');


const DS_RESULT = 'result.csv';
// const MARKDOWN = 'index.html';
const MARKDOWN = 'index.md';

let csv2md = new Csv2md({
    pretty: true
  })

  
fs.readFile(path.resolve(DS_RESULT), {encoding: 'utf-8'}, (error, data) => {
    if (error) throw error.message;

    csv2md.convert(data).then((res) => {
        fs.writeFile(path.join('docs', MARKDOWN), res, (err) => {
            if (err) throw err.message;
            console.log('The md file has been saved!');
          });    
    })
});



