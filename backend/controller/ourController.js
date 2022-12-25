const { MongoClient, ObjectId } = require("mongodb");

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.op8yb.mongodb.net/JACKETS?retryWrites=true&w=majority`;

const getArticles = async (req, res) => {

    const client = await MongoClient.connect(url);
    const db = client.db();
    const articlesCollection = db.collection('articles');

    const articles = await articlesCollection.find().limit(9).sort({date: -1}).toArray();
    res.status(200).json(articles);
    client.close();
}

const getSingleArticle = async (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        const client = await MongoClient.connect(url);
        const db = client.db();
        const articlesCollection = db.collection('articles');
        console.log(req.params.id);
    
        const neededArticle = await articlesCollection.findOne({_id: ObjectId(req.params.id)});
    
        res.status(200).json(neededArticle);
        client.close();
    } else {
        res.status(200).json({err: 'Object id is not valid'});
    }   
}

const deleteArticle = async (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        const client = await MongoClient.connect(url);
        const db = client.db();
        const articlesCollection = db.collection('books');
    
        const deletedArticle = await articlesCollection.deleteOne({_id: ObjectId(req.params.id)});
    
        res.status(200).json({deletedArticle, msg: 'Article successfully deleted'});
        client.close();
    } else {
        res.status(200).json({err: 'The articles to be deleted is not found'});
    }
}

const updateArticle = async (req, res) => {

    if(ObjectId.isValid(req.params.id)) {
        const client = await MongoClient.connect(url);
        const db = client.db();
        const articlesCollection = db.collection('books');
    
        const updatedArticle = await articlesCollection.updateOne({_id: ObjectId(req.params.id)}, {
            $set: req.body
        })
    
        res.status(200).json({updatedArticle, msg: 'A record is successfully updated'})
        client.close();
    } else {
        res.status(200).json({msg: 'A record to be updated is not found'})
    }
};

const addArticle = async (req, res) => {

    const newObj = {
        image: req.body.image,
        title: req.body.title,
        content: req.body.content,
        fullcontent:req.body.fullcontent,
        Date: req.body.Date,
        audioisrequired:req.body.audioisrequired,
        audiotitle:req.body.audiotitle,
        videoisrequired:req.body.videoisrequired,
        videolink:req.body.videolink,
    }

    if (newObj) {
        const client = await MongoClient.connect(url);
        const db = client.db();
        const articlesCollection = db.collection('books');
    
        const newArticle = await articlesCollection.insertOne(newObj);
    
        res.status(201).json({newArticle, msg: 'New Article successfully added'});
        client.close();
    } else {
        res.status(200).json({newArticle, msg: 'Not enough data for new record in DB'});
    }
};


module.exports = {
    getArticles,
    getSingleArticle,
    deleteArticle,
    updateArticle,
    addArticle
}

