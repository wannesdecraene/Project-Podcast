var chai = require('chai');
var chaiHttp = require('chai-http');
var server = 'localhost:8080'
var should = chai.should();

chai.use(chaiHttp);

describe('Podcast', () => {
    it('should list ALL episodes on /podcast GET', (done) => {
        chai.request(server)
            .get('/podcast')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('podcast');
                res.body[0].should.have.property('url');
                res.body[0].should.have.property('episode');
                res.body[0].should.have.property('audio');
                res.body[0].should.have.property('votes');
                done();
            });
    });
    it('should list a SINGLE episode on /podcast/<id> GET', (done) => {
        chai.request(server)
            .get('/podcast/getById/5a5a4204b2b9b04560baa9d7')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('_id');
                res.body.should.have.property('podcast');
                res.body.should.have.property('url');
                res.body.should.have.property('episode');
                res.body.should.have.property('audio');
                res.body.should.have.property('votes');
                done();
            });
    });
    it('should list ALL episodes for a podcast on /podcast GET', (done) => {
        chai.request(server)
            .get('/podcast/getpodcast/Tussen Pod en Pint')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('podcast');
                res.body[0].should.have.property('url');
                res.body[0].should.have.property('episode');
                res.body[0].should.have.property('audio');
                res.body[0].should.have.property('votes');
                done();
            });
    });
    it('should list ALL episodes with more then 10 votes on /podcast/getTopPodcasts/ GET', (done) => {
        chai.request(server)
            .get('/podcast/getTopPodcasts/')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('podcast');
                res.body[0].should.have.property('url');
                res.body[0].should.have.property('episode');
                res.body[0].should.have.property('audio');
                res.body[0].should.have.property('votes');
                res.body[0].votes.should.be.above(10);
                done();
            });
    });
    it('should list ALL distinct podcasts on /podcast/getAllPodcasts/ GET', (done) => {
        chai.request(server)
            .get('/podcast/getAllPodcasts/')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                done();
            });
    });
    it('should get a random episode', (done) => {
        chai.request(server)
            .get('/podcast/getRandomEpisode/')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('podcast');
                res.body[0].should.have.property('url');
                res.body[0].should.have.property('episode');
                res.body[0].should.have.property('audio');
                res.body[0].should.have.property('votes');
                done();
            });
    });
    it('should add a SINGLE podcast on /podcast POST', (done) => {
        chai.request(server)
            .post('/podcast')
            .send(
            {
                'episode': 'test',
                'podcast': 'test',
                'url': 'test',
                'audio': 'test',
                'votes': 'test'
            }
            )
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('episode');
                res.body.should.have.property('podcast');
                res.body.should.have.property('url');
                res.body.should.have.property('audio');
                res.body.should.have.property('votes');
                res.body.episode.should.equal('test');
                res.body.podcast.should.equal('test');
                res.body.url.should.equal('test');
                res.body.audio.should.equal('test');
                res.body.votes.should.equal('test');
                done();
            });
    });
    it('should update a SINGLE podcast on /podcast/<id> PUT', (done) => {
        chai.request(server)
            .put('/podcast/5a5aa3c7922bda6668df5bc7')
            .send(
            {
                'episode': 'test',
                'podcast': 'test',
                'url': 'test',
                'audio': 'test',
                'votes': 'test'
            }
            )
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('episode');
                res.body.should.have.property('podcast');
                res.body.should.have.property('url');
                res.body.should.have.property('audio');
                res.body.should.have.property('votes');
                res.body.episode.should.equal('test');
                res.body.podcast.should.equal('test');
                res.body.url.should.equal('test');
                res.body.audio.should.equal('test');
                done();
            });
    });
});