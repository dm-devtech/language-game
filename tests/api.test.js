const app = require('../index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe('testing the local page', () => {
  it('Test main page text', async done => {
    const homeResponse = await request.get('/')
    expect(homeResponse.text).toContain('Language Lighthouse')
    done()
  })
})
