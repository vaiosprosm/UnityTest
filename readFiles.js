const fs = require("fs")
const path = require("path")

const files = fs.readdirSync('./routes', {withFileTypes: true})
.filter(item => !item.isDirectory())
.map(item => item.name)

//console.log(files)


fs.readdir(path.join(__dirname,'node_modules'),function(err,files){
    if (err) {
        console.log("error")
        return
    }
    else{
        console.log(files)
    }
})

fs.readdir(__dirname,function(err,files){
    if (err) {
        console.log("error")
        return
    }
    else{
        console.log(files)
    }
})