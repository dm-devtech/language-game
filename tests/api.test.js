const app = require('../index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe('testing the local page', () => {
  it('Test main page text', async done => {
    const homeResponse = await request.get('/')
    expect(homeResponse.text).toContain('Language Lighthouse')
    done()
  })

  it('Test german dictionary api', async done => {
    const homeResponse = await request.get('/german')
    expect(homeResponse.text).toContain('[{"id":1,"eng":"To run","ger":"laufen","wordtype":"verb","category":"movement","gender":"n/a"}]')
    done()
  })

  it('Test french dictionary api', async done => {
    const homeResponse = await request.get('/french')
    expect(homeResponse.text).toContain('[{"id":1,"eng":"pan","fre":"la poêle","wordtype":"noun","category":"kitchen","gender":"la"}]')
    done()
  })

  it('Test latin dictionary api', async done => {
    const homeResponse = await request.get('/latin')
    expect(homeResponse.text).toContain('[{"id":1,"eng":"pan","lat":"cacabus","wordtype":"noun","category":"kitchen","gender":"masculine"}]')
    done()
  })
})
