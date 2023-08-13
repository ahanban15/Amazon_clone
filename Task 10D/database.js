var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '1234#Ahan', 
  database: 'testing',
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Product Database connected')
})
module.exports = connection