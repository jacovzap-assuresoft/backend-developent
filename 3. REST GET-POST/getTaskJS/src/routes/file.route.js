import { Router } from 'express'
import { data } from '../../data.js'

const router = Router()

router.get('/getFile', (req, res) => {
  try {
    const { format } = req.query

    if (format === 'string') {
      return res.send(`File: ${data.file}
              Title: ${data.title}
              Description: ${data.description}
              Pages: ${data.pages}
              Author: ${data.author}`)
    }

    if (format === 'json') {
      return res.status(200).json({
        File: data.file,
        Title: data.title,
        Description: data.description,
        Pages: data.pages,
        Author: data.author
      })
    }

    if (format === 'html') {
      return res.send(`
            <h1>${data.file}</h1>
            <h3>Title:</h3>
            <p>${data.title}</p>
            <h3>Description:</h3>
            <p>${data.description}</p>
            <h3>Pages:</h3>
            <p>${data.pages}</p>
            <h3>Author:</h3>
            <p>${data.author}</p>
            `).status(200)
    }

    if (format === 'xml') {
      res.type('application/xml')
      return res.send(`
              <file>${data.file}</file>
              <title>${data.title}</title>
              <description>${data.description}</description>
              <pages>${data.pages}</pages>
              <author>${data.author}</author>
            `).status(200)
    }

    return res.status(400).send('Bad Request')
  } catch (err) {
    console.log(err)
    res.status(500).send('Error')
  }
})

export default router
