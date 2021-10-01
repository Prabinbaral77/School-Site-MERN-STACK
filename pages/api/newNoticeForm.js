/* mongodb+srv://<username>:<password>@cluster0.aptdm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority */
import {MongoClient} from 'mongodb'

const Handler = async(req, res) => {
    if(req.method === 'POST'){
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://PrabinBaral:2y1FDf1ZgdxBJCcF@cluster0.aptdm.mongodb.net/school?retryWrites=true&w=majority');
        const db = client.db()
        const noticeCollection = db.collection('notices');
        const result = await noticeCollection.insertOne(data)
        client.close()
        res.status(200).json({message: 'Notice added successfully'})
    }
}

export default Handler