// API Podcast Routes

var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

    //GET: All Podcasts
    app.get('/podcast/', (req, res) => {

        db.collection('podcasts').find().toArray((err, episodes) => {
            if (err) {
                res.send({ 'error': err });
            } else {
                res.send(episodes);
            }
        });
    })

    //GET: Get Podcast Episode By Id
    app.get('/podcast/getById/:id/', (req, res) => {

        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };

        db.collection('podcasts').findOne(details, (err, episode) => {
            if (err) {
                res.send({ 'error': err });
            } else {
                res.send(episode);
            }
        });
    })

    //GET: Get Podcast Episode By Podcast
    app.get('/podcast/getpodcast/:podcast', (req, res) => {
        const podcast = req.params.podcast;
        const details = { 'podcast': podcast };
        
        db.collection('podcasts').find(details).toArray((err, episodes) => {
            if (err) {
                res.send({ 'error': err });
            } else {
                res.send(episodes);
            }
        });
    })

    //GET: Get Popular episodes (more then 10 votes)
    app.get('/podcast/getTopPodcasts/', (req, res) => {
        const top = { 'votes': { $gt: 10} };
        
        db.collection('podcasts').find(top).toArray((err, episodes) => {
            if (err) {
                res.send({ 'error': err });
            } else {
                res.send(episodes);
            }
        });
    })
    //GET: Get distinct podcast in DB
    app.get('/podcast/getAllPodcasts/', (req, res) => {
        
        db.collection('podcasts').distinct("podcast", (err, podcasts) => {
            if (err) {
                res.send({ 'error': err });
            } else {
                res.send(podcasts);
            }
        });
    })

    //GET: Get a random Episode
    app.get('/podcast/getRandomEpisode/', (req, res) => {
        
        var random = { $sample: {size: 1}}
        db.collection('podcasts').aggregate(random, (err, episode) => {
            if (err) {
                res.send({ 'error': err });
            } else {
                res.send(episode);
            }
        });
    })


    //POST: Create Podcast Episode
    app.post('/podcast', (req, res) => {

        const podcast = { episode: req.body.episode, podcast: req.body.podcast, url: req.body.url, audio: req.body.audio, votes: req.body.votes }

        db.collection('podcasts').insert(podcast, (err, result) => {
            if (err) {
                res.send({ 'error': err });
            } else {
                res.send(result.ops[0]);
            }
        })
    })

    //PUT: Add Vote 
    app.put('/podcast/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const podcast = { episode: req.body.episode, podcast: req.body.podcast, url: req.body.url, audio: req.body.audio, votes: req.body.votes + 1 }
        db.collection('podcasts').update(details, podcast, (err, result) => {
            if (err) {
                res.send({ 'error': err });
            } else {
                res.send(podcast);
            }
        });
    })
};