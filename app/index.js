// md version
<script src="CsvToTable.js"></script>

const path = require('path');
const fs = require('fs');


const DS_RESULT = 'result.csv';
const MARKDOWN = 'index.html';



fs.readFile(path.resolve(DS_RESULT), {encoding: 'utf-8'}, (error, data) => {
    if (error) throw error.message;

    csv2md.convert(data).then((res) => {
        fs.writeFile(path.join(__dirname, MARKDOWN), res, (err) => {
            if (err) throw err.message;
            console.log('The file has been saved!');
          });    
    })
});



