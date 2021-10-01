import {MongoClient} from 'mongodb';

const Handler = async(req, res) => {
    const data = req.body;
    const client = await MongoClient.connect('mongodb+srv://PrabinBaral:2y1FDf1ZgdxBJCcF@cluster0.aptdm.mongodb.net/school?retryWrites=true&w=majority');
    const db = client.db();
    const feedbackCollection = db.collection('feedbacks');
    const result = await feedbackCollection.insertOne(data);
    client.close();
    res.status(200).json({messagae: 'Feedback Send Sucessfully.'})
}

export default Handler;