const mysql = require('mysql')

module.exports = {
  connect: (sql, callback) => {
    const connection = mysql.createConnection({
    })

    connection.connect()

    connection.query(sql, (err, result) => {
      if (err) {
        callback(err, result)
        return
      }

      callback(null, result)
    })

    connection.end()
  }
}
