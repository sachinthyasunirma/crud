const chai = require('chai')
const chaiHttp = require('chai-http')
const { response } = require('express')
const server = require('../../index')

//Assertion Style
chai.use(chaiHttp)
chai.should()

describe('Question API', () => {
    /**
     * Test the GET (All) Route
     */
    describe("GET /api/question/get/all", () => {
        it('should return 200', (done) => {
            chai.request(server)
                .get('/api/question/get/all')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })
    /**
     * Test the GET (By Id) Route
     */
    describe("GET /api/question/get/:question_id", () => {
        it('should return 200', (done) => {
            const question_id = '63a19626b502d7e501600c9c';
            chai.request(server)
                .get('/api/question/get/' + question_id)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
        it('should return 404, worng id', (done) => {
            const question_id = '63a19626b502d7e501600c';
            chai.request(server)
                .get('/api/question/get/' + question_id)
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })
    })
    /**
     * Test the GET (By SearchText) Route
     */
    describe("GET /api/question/get/s/:searchtext", () => {
        it('should return 200', (done) => {
            const searchString = 'q';
            chai.request(server)
                .get('/api/question/get/s/' + searchString)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
        it('should return 404, worng search text', (done) => {
            const searchString = 'k';
            chai.request(server)
                .get('/api/question/get/s/' + searchString)
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })
    })
    /**
     * Test the POST (create) Route
     */
    describe("POST /api/question/create", () => {
        it('should return 201', (done) => {
            const question = {
                question: "question 02",
                category: "63a19563de44d05c5c7422fd"
            }
            chai.request(server)
                .post('/api/question/create')
                .send(question)
                .end((err, res) => {
                    res.should.have.status(201)
                    done()
                })
        })
        it('should return 500, without category', (done) => {
            const question = {
                question: "question 02",
            }
            chai.request(server)
                .post('/api/question/create')
                .send(question)
                .end((err, res) => {
                    res.should.have.status(500)
                    done()
                })
        })
    })
    /**
     * Test the Update Active state (By Id) Route
     */
     describe("PUT /api/question/update/:question_id", () => {
        it('should return 200', (done) => {
            const question_id = '63a19626b502d7e501600c9c';
            const isActive = false;
            chai.request(server)
                .put('/api/question/update/' + question_id)
                .send(isActive)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
        it('should return 404, worng id', (done) => {
            const question_id = '63a19626b502d7e501600c';
            const isActive = false;
            chai.request(server)
                .put('/api/question/update/' + question_id)
                .send(isActive)
                .end((err, res) => {
                    res.should.have.status(404)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })
    /**
     * Test the Edit Active state (By Id) Route
     */
     describe("PUT /api/question/edit/:question_id", () => {
        it('should return 200', (done) => {
            const question_id = '63a19626b502d7e501600c9c';
            const question = {
                question: "question 02"
            }
            chai.request(server)
                .put('/api/question/edit/' + question_id)
                .send(question)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
        it('should return 404, worng id', (done) => {
            const question_id = '63a19626b502d7e501600c';
            const question = {
                question: "question 02"
            }
            chai.request(server)
                .put('/api/question/update/' + question_id)
                .send(question)
                .end((err, res) => {
                    res.should.have.status(404)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })

    /**
     * Test the Delete state (By Id) Route
     */
     describe("DELETE /api/question/delete/:question_id", () => {
        it('should return 200', (done) => {
            const question_id = '63a19626b502d7e501600c9c';
            chai.request(server)
                .put('/api/question/update/' + question_id)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
        it('should return 404, worng id', (done) => {
            const question_id = '63a19626b502d7e501600c';
            chai.request(server)
                .put('/api/question/update/' + question_id)
                .end((err, res) => {
                    res.should.have.status(404)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })
})