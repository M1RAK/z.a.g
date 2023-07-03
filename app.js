import express from 'express'
import bodyParser from 'body-parser'
import mailchimp from '@mailchimp/mailchimp_marketing'
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

mailchimp.setConfig({
	apiKey: process.env.API_KEY,
	server: 'us8'
})

const listId = process.env.AUDIENCE_ID

app.post('/subscribe', (req, res) => {
	const { email } = req.body

	if (email) {
		addSubscriber()
	}

	async function addSubscriber() {
		const response = await mailchimp.lists.addListMember(listId, {
			email_address: email,
			status: 'pending'
		})

		if (!response.id || !unique_email_id) {
			res.redirect('/not-found.html')
			res.status(400).json({ message: 'User not added sucessfully' })
		}
	}
	res.status(200).json({ message: 'User added sucessfully' })
})

app.listen(PORT, console.log('Server is Live on Port 5000...'))
