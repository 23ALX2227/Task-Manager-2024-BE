import app from './app.js'
import { connectDB } from './db.js'

connectDB();
app.listen(27017)
console.log('Server on port', 27017)