import { MongoClient } from 'mongodb'
import {env} from '*/config/environment' 
const uri= env.MONGODB_URI
console.log(uri)
const client = new MongoClient(uri,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})

export const connectDB = async () => { 
    try {
        await client.connect()
        //List dâtbases
        await listDatabases(client)
        console.log('Kết nối dữ liệu thành công !')
    } finally{
        await client.close()
    }
 }
 const listDatabases = async (client) => { 
    const databasesList = await client.db().admin().listDatabases()
    console.log(databasesList)
    console.log("Your databases")
    databasesList.databases.forEach(db => console.log(`- ${db.name}`));
  }