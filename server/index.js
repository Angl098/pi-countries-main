
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const uploadingData = require("./src/utils/uploadingData.js")

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  uploadingData()
  console.log('Datos cargados con exito!');
})
}).catch(error => console.error(error))

