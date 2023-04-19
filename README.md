# Color Scheme Lab

## About

Color Scheme Lab is a web application that allows users to create and save color schemes based on chosen color and color harmony rules.

## Features

- Choose a color and a color harmony rule (monochromatic, triad, complementary, etc.) to generate a color scheme
- Save and delete color schemes

## Technologies used

- CSS Modules
- ESLint
- GitHub Actions
- Jest
- Prettier
- React
- React Router
- React Testing Library
- TypeScript

## Demo

You can check out a live demo of the application at [https://colorschemelab.com/](https://colorschemelab.com/).

## How I worked on this project

My goal with this project was to simulate a professional work environment.

- I designed the app using Figma: [view design](https://www.figma.com/file/n7AbRFzJwYXvOUH46Tu2PK/Design?node-id=12%3A1176&t=GZ5UACLvsyjj35Ap-1)
- I worked with tasks in GitHub Projects: [view tasks](https://github.com/users/goranstevanovic/projects/6/views/1)
- I used feature branches and pull requests: [example PR](https://github.com/goranstevanovic/color-scheme-lab/pull/13)
- I practiced test-driven development: [example test](https://github.com/goranstevanovic/color-scheme-lab/blob/main/src/components/Button/Button.test.tsx)

## How to navigate this project

- Example of managing local state (using useState, useEffect): [view code](https://github.com/goranstevanovic/color-scheme-lab/blob/eb301b0db188744f5f8884e19234f2a33e9bd52b/src/pages/Saved.tsx#L12-L34)
- Example of a responsive CSS (using CSS Grid): [view code](https://github.com/goranstevanovic/color-scheme-lab/blob/eb301b0db188744f5f8884e19234f2a33e9bd52b/src/components/ColorHarmonyOptions/ColorHarmonyOptions.module.css#L51-L69)
- Example of fetching data from the third-party API (using JavaScript Fetch): [view code](https://github.com/goranstevanovic/color-scheme-lab/blob/eb301b0db188744f5f8884e19234f2a33e9bd52b/src/components/ColorHarmonyOptions/index.tsx#L30-L40)
- Example of a component test (using Jest and React Testing Library): [view code](https://github.com/goranstevanovic/color-scheme-lab/blob/eb301b0db188744f5f8884e19234f2a33e9bd52b/src/components/ColorSwatch/ColorSwatch.test.tsx#L6-L50)

## Getting started

To run the app locally, you'll need to have a `Node.js` and an `npm` installed. Once you have those installed, follow these steps:

1. Clone the repository:  
   `git clone https://github.com/goranstevanovic/color-scheme-lab.git`
1. Navigate to the project directory:  
   `cd color-scheme-lab`
1. Install dependencies:  
   `npm install`
1. Start the app:  
   `npm start`

## Usage

1. Choose a base color using the color picker.
1. Choose a color harmony rule from the dropdown menu.
1. Click the `Generate Color Scheme` button to generate a color scheme based on the selected base color and color harmony rule.
1. Click the `Save Color Scheme` button to save the color scheme.
1. To view saved color schemes, click on `Saved` in the top navigation menu.
1. To delete an existing color scheme, click on the `Delete Color Scheme` button below the scheme you want to delete.
