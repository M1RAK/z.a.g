const inputEl = document.querySelector('.newsletter__input')
const btnEl = document.querySelector('.input__btn--float')
const filterEls = document.querySelectorAll('.filter__tab')

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

//  Clear Input
function clearInput() {
	inputEl.value = ''
}

//  saves subscriber's email to mailchimp
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

	fetch('/subscribe', data).then((res) => {
		if (!res.ok) {
			return error()
		}
	})

	clearInput()
})
