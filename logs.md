<!-- Z.A.G -->

## Resources

₦ - Naira Symbol


<i class="fa-solid fa-check fa-sm"></i>
<i class="fa-solid fa-check fa-sm"></i>
<i class="fa-solid fa-check fa-sm"></i>
<i class="fa-solid fa-check fa-sm"></i>

### 01-07-23

-   Finish the newsletter section.
    -- Create newsletter Modal
    -- Mailchimp Api Connection
    -- Share and create accounts for Z.A.G


<!-- MC-API -->
```zsh
curl -sS \
  "https://us8.api.mailchimp.com/3.0/ping" \
  --user "anystring:0d50d3408982f71bf211c3a186bf4ff9-us8" | jq -r
```

<!-- API-Brevo -->

```js
MASTER_PASSWORD=dxpTNR0IXHkSZ3cO
SMTP Server=smtp-relay.brevo.com
Login=abdullahiismail1105@gmail.com
API_KEY=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
```

```html
<!-- Begin Brevo Form -->
<!-- START - We recommend to place the below code in head tag of your website html  -->
<style>
	@font-face {
		font-display: block;
		font-family: Roboto;
		src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2)
				format('woff2'), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff)
				format('woff');
	}

	@font-face {
		font-display: fallback;
		font-family: Roboto;
		font-weight: 600;
		src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2)
				format('woff2'), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff)
				format('woff');
	}

	@font-face {
		font-display: fallback;
		font-family: Roboto;
		font-weight: 700;
		src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2)
				format('woff2'), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff)
				format('woff');
	}

	#sib-container input:-ms-input-placeholder {
		text-align: left;
		font-family: 'Helvetica', sans-serif;
		color: #c0ccda;
	}

	#sib-container input::placeholder {
		text-align: left;
		font-family: 'Helvetica', sans-serif;
		color: #c0ccda;
	}
</style>
<link
	rel="stylesheet"
	href="https://sibforms.com/forms/end-form/build/sib-styles.css"
/>
<!--  END - We recommend to place the above code in head tag of your website html -->

<!-- START - We recommend to place the below code where you want the form in your website html  -->
<div
	class="sib-form"
	style="text-align: center;
         background-color: #ffffff;                                           "
>
	<div id="sib-form-container" class="sib-form-container">
		<div
			id="sib-container"
			class="sib-container--large sib-container--vertical"
			style="text-align:center; background-color:rgba(246,239,228,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid;"
		>
			<form
				id="sib-form"
				method="POST"
				action="https://683d6197.sibforms.com/serve/MUIFAMwduqFiGTbIOGyqbe6fJ5nezSRYaLwcguL4zdUyHixpL47p02fwVlt2VKt4zjpoiU25VUXy9BKlKk1QdPyz4ct3BdIMqZuBse89l4G5xmVVTENsHlWH2i_QUxcOtgDUodQ5lfhBryDiPfJ52DWjUvjRexhEFLO5n8LA5EHS8ymlAu-yy_q2MDA6_hdLLMqwUYsTjD3XRTMP"
			>
				<div style="padding: 8px 0;">
					<div
						class="sib-form-block"
						style='font-size:32px; text-align:center; font-weight:700; font-family:"Futura", sans-serif; color:#3C4858; background-color:transparent; text-align:center'
					>
						<p>Z.A.G</p>
					</div>
				</div>
				<div style="padding: 8px 0;">
					<div
						class="sib-form-block"
						style='font-size:16px; text-align:left; font-family:"Helvetica", sans-serif; color:#3C4858; background-color:transparent; text-align:left'
					>
						<div class="sib-text-form-block">
							<p>
								Subscribe to our newsletter and get notified
								when we launch.
							</p>
						</div>
					</div>
				</div>
				<div style="padding: 8px 0;">
					<div class="sib-input sib-form-block">
						<div class="form__entry entry_block">
							<div class="form__label-row ">
								<label
									class="entry__label"
									style='font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:"Helvetica", sans-serif; color:#3c4858;'
									for="EMAIL"
									data-required="*"
									>Enter your email address to
									subscribe</label
								>

								<div class="entry__field">
									<input
										class="input "
										type="text"
										id="EMAIL"
										name="EMAIL"
										autocomplete="off"
										placeholder="EMAIL"
										data-required="true"
										required
									/>
								</div>
							</div>

							<label
								class="entry__error entry__error--primary"
								style='font-size:16px; text-align:left; font-family:"Helvetica", sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;'
							>
							</label>
							<label
								class="entry__specification"
								style='font-size:12px; text-align:left; font-family:"Helvetica", sans-serif; color:#8390A4; text-align:left'
							>
								Provide your email address to subscribe. For e.g
								abc@xyz.com
							</label>
						</div>
					</div>
				</div>
				<div style="padding: 8px 0;">
					<div class="sib-form-block" style="text-align: center">
						<button
							class="sib-form-block__button sib-form-block__button-with-loader"
							style='font-size:16px; text-align:center; font-weight:700; font-family:"Futura", sans-serif; color:#FFFFFF; background-color:#3E4857; border-radius:3px; border-width:0px;'
							form="sib-form"
							type="submit"
						>
							<svg
								class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
								viewBox="0 0 512 512"
							>
								<path
									d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
								/>
							</svg>
							SUBSCRIBE
						</button>
					</div>
				</div>
				<input
					type="text"
					name="email_address_check"
					value=""
					class="input--hidden"
				/>
				<input type="hidden" name="locale" value="en" />
				<input type="hidden" name="html_type" value="simple" />
			</form>
		</div>
	</div>
</div>
<!-- END - We recommend to place the below code where you want the form in your website html  -->
<!-- End Brevo Form -->
```

<!-- Confirmation url -->

https://683d6197.sibforms.com/serve/MUIFAMwduqFiGTbIOGyqbe6fJ5nezSRYaLwcguL4zdUyHixpL47p02fwVlt2VKt4zjpoiU25VUXy9BKlKk1QdPyz4ct3BdIMqZuBse89l4G5xmVVTENsHlWH2i_QUxcOtgDUodQ5lfhBryDiPfJ52DWjUvjRexhEFLO5n8LA5EHS8ymlAu-yy_q2MDA6_hdLLMqwUYsTjD3XRTMP
