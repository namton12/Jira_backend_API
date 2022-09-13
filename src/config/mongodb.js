import { MongoClient } from 'mongodb'
import {env} from '*/config/environment' 

let dbInstance = null
export const connectDB = async () => { 
    const client = new MongoClient(env.MONGODB_URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    await client.connect()
    dbInstance = client.db(env.DATABASE_NAME)
 }
export const getDB = () => { 
    if(!dbInstance) throw new Error('Phải kết nối cơ sở dữ liệu trước')
    return dbInstance
 }