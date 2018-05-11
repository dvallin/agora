# Agora
Programming exercise with basic Person Management. This repository features a Typescript + Jest + Webpack + Vue + Vuex setup.

## Installation
You will need node and yarn

Try `brew install node` or `apt-get install node`. For yarn you want `npm install --global yarn` (or use your package manager)

Then in the project root you can run `yarn` to download and install all dependencies and build the project with `yarn build`.

## Working with the Repository
You might want to open the project in VSCode and start an interactive jest session using `yarn unit:watch`. Your tests will now watch for file changes and retrigger automatically. Type `yarn dev` to start a hot reloading development server. Now you can navigate to `localhost:8080` and see your changes being update as you type.

## Things to do
Once you have accustomed yourself with the setup (granted, it may be a bit overwhelming at first) you might want to add new Features. Such as

1. Adding/Removing Persons
2. Have more fields than the name of a Person (description, age, hobbies…)
3. Save your current state to localStorage so it persists across reloads
4. Add Teams and assign Persons to them
5. Add Tags to Persons and make them filterable
6. ?
7. Profit
