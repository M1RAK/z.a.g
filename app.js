import express from 'express'
import bodyParser from 'body-parser'
import request from 'request'
import 'dotenv/config'

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/subscribe', (req, res) => {
	const { email } = req.body

	// let mc = mailchimp

	const mcData = {
		members: [
			{
				email_address: email,
				status: pending
			}
		]
	}

	const mcPostData = JSON.stringify(mcData)

	const options = {
		url: process.env.API_URL,
		method: 'POST',
		Headers: {
			Authorization: process.env.API_KEY
		},
		body: mcPostData
	}

	if (email) {
		request(options, (err, res, body) => {
			if (err) {
				res.status(404).json({ err })
				res.redirect('/not-found.html')
			} else {
				res.status(200).json({ message: 'User sucessfully added.' })
			}
			res.json({ body })
		})
	}
})

app.listen(PORT, console.log(`server is live on port ${PORT}...`))
