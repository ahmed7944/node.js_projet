const fs = require ('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents){
    if (err) {
        return contentsnsole.log(err)
    }
    const lines =contents.toString().split('\n').length -1
    console.log(lines)
})