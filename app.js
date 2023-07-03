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

async function addSubscriber(email) {
	await mailchimp.lists.addListMember(listId, {
		email_address: email,
		status: 'pending'
	})
}

app.post('/subscribe', (req, res) => {
	const { email } = req.body

	if (!email) res.status(400).json({ message: 'No email Added.' })
	
	if (email) {
		addSubscriber(email)
	}
	return res.status(200).json({ message: 'User Added Successfully...' })
})

app.listen(PORT, console.log('Server is Live on Port 5000...'))
