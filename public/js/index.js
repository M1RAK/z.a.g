const inputEl = document.querySelector('.newsletter__input')
const btnEl = document.querySelector('.input__btn--float')
const filterEls = document.querySelectorAll('.filter__tab')
const successWrapper = document.querySelector('.newsletter__meta')
const successEl = document.querySelector('.newsletter__success')

// adds check to filter option
filterEls.forEach((tab) => {
	tab.addEventListener('click', () => {
		const text = tab.textContent
		tab.innerHTML = `<i class="fa-solid fa-check fa-sm"></i> ${text}`
	})
})

// clears filter options
const checked = () => {
	filterEls.forEach((tab, index) => {
		const text = tab.textContent
		tab.innerHTML = text
		if (index === 5)
			tab.innerHTML = `<i class="fa-solid fa-trash fa-sm"></i> ${text}`
	})
}

filterEls[5].addEventListener('click', checked)

//  Error-Handler
function error() {
	location.replace('https://z-a-g.vercel.app/not-found.html')
}

//  saves subscriber's email to mailchimp
async function mcPost(data, email) {
	const res = await fetch('/subscribe', data)
	const successMsg = `<div class="newsletter__success open">
			<div class="icon-success">
				<i
					class="fa-regular fa-thumbs-up fa-2xl"
				></i>
			</div>
			<h2>Thanks for subscribing</h2>
			<p>
				A confirmation email has been sent to
				${email}. <br />
				please open it and click the button inside
				to confirm your subscription.
			</p>
		</div>`
	if (res.ok) {
		successWrapper.innerHTML = successMsg
	} else {
		return error()
	}
}

//  Clear Input
function clearInput() {
	inputEl.value = ''
}

btnEl.addEventListener('click', (e) => {
	e.preventDefault()

	if (inputEl.value == '') return error()

	const data = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email: inputEl.value })
	}

	mcPost(data, inputEl.value)

	clearInput()
})
