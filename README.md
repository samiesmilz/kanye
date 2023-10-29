# Kanye Quest

**Kanye Quest** is a simple web application that provides you with inspirational quotes from the legendary Kanye West. This README will give you an overview of the code and how to use it.

## Table of Contents

- [Introduction](#introduction)
- [Code Overview](#code-overview)
- [How to Use](#how-to-use)
- [License](#license)

## Introduction

Kanye Quest is a web page that displays Kanye West quotes. It has a "Next Quest" button, which allows you to fetch and display a new quote at the click of a button or automatically every 10 seconds.

## Code Overview

The code in this repository includes both JavaScript and HTML. Let's take a closer look at the main components:

### JavaScript (script.js)

- **$quote**: This variable stores a reference to the HTML element with the ID "qoute," which is the element where the Kanye West quotes will be displayed.

- **$nextQuestBtn**: This variable stores a reference to the HTML element with the ID "quest-btn," which is the "Next Quest" button.

- **getQuote()**: An asynchronous function that sends a request to the "https://api.kanye.rest" API to get a Kanye West quote and returns it.

- **nextQuest()**: An asynchronous function that gets a new quote by calling `getQuote()` and updates the HTML to display the new quote when the "Next Quest" button is clicked.

- **autoQuotes()**: This function uses `setInterval` to automatically fetch and display a new quote every 10 seconds. It calls `getQuote()` and updates the HTML.

- The `$(document).ready()` function initializes the `autoQuotes()` function when the document is ready, ensuring automatic quote updates.

### HTML (index.html)

The HTML file defines the structure of the web page. It includes a title, a quote container, and the "Next Quest" button. The quotes are initially displayed when the page loads, and the button allows you to manually request new quotes.

### Styles (styles.css)

The CSS file defines the visual styles for the web page, including fonts, colors, and layout. It enhances the user experience by providing an appealing design.

## How to Use

1. Clone this repository to your local environment.

2. Open the `index.html` file in your web browser.

3. You will see the current Kanye West quote displayed in the "quote-div."

4. Click the "Next Quest" button to manually request a new quote.

5. Alternatively, the application will automatically update the quote every 10 seconds without user interaction.

## License

This project is not associated with any specific license. You are free to use and modify the code as you wish for personal or educational purposes. However, if you plan to use it for commercial purposes, make sure to review and comply with any applicable licenses or terms of use of the libraries and APIs involved.

### By Samie Smilz
