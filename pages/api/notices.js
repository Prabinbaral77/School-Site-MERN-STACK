import {MongoClient} from 'mongodb'

const Handler = async(req, res) => {
    if(req.method === 'GET'){

        const client = await MongoClient.connect('mongodb+srv://PrabinBaral:2y1FDf1ZgdxBJCcF@cluster0.aptdm.mongodb.net/school?retryWrites=true&w=majority');
        const db = client.db()
        const noticeCollection = db.collection('notices');
        const result = await noticeCollection.find().toArray()
        client.close()
        res.status(200).json({message: 'Notice added successfully'})
    }
}

export default Handler;

//not used till