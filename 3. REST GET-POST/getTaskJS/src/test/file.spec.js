import app from '../server.js'
import request from 'supertest'

const GLOBAL_ROUTE = '/files/getFile'

describe('prove the right functionality of the getFile endpoint', () => {
  test('should return data in string format', async () => {
    const response = await request(app)
      .get(GLOBAL_ROUTE)
      .query({ format: 'string' })
    expect(response.text).toBe(`File: designPatterns(1).pdf
              Title: Design Patterns
              Description: Design Patterns are reusable solutions to common programming problems. They were popularized with the 1994 book Design Patterns: Elements of Reusable Object-Oriented Software by Erich Gamma, John Vlissides, Ralph Johnson and Richard Helm (who are commonly known as a Gang of Four, hence the GoF acronym).
              Pages: 617
              Author: Erich Gamma, John Vlissides, Ralph Johnson and Richard Helm`)
  })

  test('should return data in json format', async () => {
    const response = await request(app)
      .get(GLOBAL_ROUTE)
      .query({ format: 'json' })
    expect(response.body).toEqual({
      File: 'designPatterns(1).pdf',
      Title: 'Design Patterns',
      Description:
        'Design Patterns are reusable solutions to common programming problems. They were popularized with the 1994 book Design Patterns: Elements of Reusable Object-Oriented Software by Erich Gamma, John Vlissides, Ralph Johnson and Richard Helm (who are commonly known as a Gang of Four, hence the GoF acronym).',
      Pages: 617,
      Author: 'Erich Gamma, John Vlissides, Ralph Johnson and Richard Helm'
    })
  })

  test('should return data in html format', async () => {
    const response = await request(app)
      .get(GLOBAL_ROUTE)
      .query({ format: 'html' })
    expect(response.text).toBe(`
            <h1>designPatterns(1).pdf</h1>
            <h3>Title:</h3>
            <p>Design Patterns</p>
            <h3>Description:</h3>
            <p>Design Patterns are reusable solutions to common programming problems. They were popularized with the 1994 book Design Patterns: Elements of Reusable Object-Oriented Software by Erich Gamma, John Vlissides, Ralph Johnson and Richard Helm (who are commonly known as a Gang of Four, hence the GoF acronym).</p>
            <h3>Pages:</h3>
            <p>617</p>
            <h3>Author:</h3>
            <p>Erich Gamma, John Vlissides, Ralph Johnson and Richard Helm</p>
            `)
  })
})
