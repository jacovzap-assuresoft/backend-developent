import mongodb from 'mongodb'

class Database {
    private static client: mongodb.MongoClient;

    private static getInstance () {
        this.client = new mongodb.MongoClient(process.env.MONGO_URI)
    }
}
