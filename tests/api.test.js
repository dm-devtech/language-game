const app = require('../index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe('testing the local page', () => {
  it('Test german dictionary api', async done => {
    const homeResponse = await request.get('/api/german')
    expect(homeResponse.text).toContain('[{"id":1,"eng":"To run","ger":"laufen","wordtype":"verb","category":"movement","gender":"n/a"}]')
    done()
  })

  it('Test french dictionary api', async done => {
    const homeResponse = await request.get('/api/french')
    expect(homeResponse.text).toContain('[{"id":1,"eng":"pan","fre":"la poêle","wordtype":"noun","category":"kitchen","gender":"la"}]')
    done()
  })

  it('Test latin dictionary api', async done => {
    const homeResponse = await request.get('/api/latin')
    expect(homeResponse.text).toContain('[{"id":1,"eng":"pan","lat":"cacabus","wordtype":"noun","category":"kitchen","gender":"masculine"}]')
    done()
  })
})
