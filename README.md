# komponents
todo: badges
A collection of useful javascript web components to keep things clean

## Features

 - **Useful** and **extensive** collection of UI elements
 - **Save** lines of code and **time**
 - Initialize **multiple** events with the **same** type per **element**
 - **Commercially** usable in **closed** source projects

## Installing
Using **npm**:

    $ npm install @rxsto/komponents
Using **yarn**:

    $ yarn add @rxsto/komponents
More to come ...

## Browser Support
![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) |![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) |![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) |![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) |![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--|--|--|--|--|--|
latest ✔ |latest ✔ |**not** tested |latest ✔ |latest ✔ |**not** tested |

## Usage
**Button**
Nuxt.js: (https://nuxtjs.org)

```js
<template>
	<div class="index">
		<button id="btn">
			Click
		</button>
		<button id="clr">
			Clear
		</button>
	</div>
</template>

<script>
// Import class Button
import { Button } from  '@rxsto/komponents'

export  default {
	// Execute code on mount
	mounted () {
		// Create new instance of Button by passing the corresponding id (btn, clr)
		this.btn =  new  Button('btn')
		// Add new EventListener with name 'click_red_bg', type 'click' and callback 'makeRed()'
		this.btn.add('click_red_bg', 'click', makeRed)
		// Add a second EventListener with direct function call
		this.btn.add('click_alert', 'click', event => alert('This is an alert!'))

		// Create second instance of Button
		this.clr = new Button('clr')
		// Add new EventListener with direct function call and edit the document body
		this.clr.add('click_clear_bg', 'click', (event) => {
			document.body.style.background =  'white'
		})

		// Dispatch a click event
		this.btn.dispatch(new Event('click'))

		// Remove the EventListener with the name 'click_red_bg'
		this.btn.remove('click_red_bg')
	},
	methods: {
		// Function used for callback above
		makeRed () {
			document.body.style.background =  'red'
		}
	}
}
</script>
```
More to come ...

## Author
Oskar 'rxsto' Lang <hi@rxs.to> (https://rxs.to)
