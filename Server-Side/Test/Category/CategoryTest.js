const chai = require('chai')
const chaiHttp = require('chai-http')
const { response } = require('express')
const server = require('../../index')

//Assertion Style
chai.use(chaiHttp)
chai.should()

describe('Category API', () => {
    /**
     * Test the GET (All) Route
     */
    describe("GET /api/category/get/all", () => {
        it('should return 200', (done) => {
            chai.request(server)
                .get('/api/category/get/all')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })
    /**
     * Test the POST (create) Route
     */
    describe("Post /api/question/create", () => {
        it('should return 201', (done) => {
            const question = {
                categoryName: "cate 1",
            }
            chai.request(server)
                .post('/api/category/create')
                .send(question)
                .end((err, res) => {
                    res.should.have.status(201)
                    done()
                })
        })
    })
})