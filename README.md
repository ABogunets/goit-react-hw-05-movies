# Movie search application

Movie search application is a simple web application to search movies and
display movie details. The data are taken via API requests from from
https://www.themoviedb.org/ API.

## Installation

To install the application just run:

### `npm install`

## Usage

1. On the 'Home' page a list of popular movies is downloaded at start. By click
   on the selected movie you can get detailes of the movie in the Movies page.
2. On the 'Movies' page you can also search for a movie typing its name in the
   search bar.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deploy

The production version of the project will automatically be linted, built, and
deployed to GitHub Pages, in the `gh-pages` branch, every time the `main` branch
is updated. For example, after a direct push or an accepted pull request. To do
this, you need to edit the `homepage` field in the `package.json` file,
replacing `your_username` and `your_repo_name` with your own, and submit the
changes to GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Next, you need to go to the settings of the GitHub repository (`Settings` >
`Pages`) and set the distribution of the production version of files from the
`/root` folder of the `gh-pages` branch, if this was not done automatically.

![GitHub Pages settings](./assets/repo-settings.png)

### Deployment status

The deployment status of the latest commit is displayed with an icon next to its
ID.

- **Yellow color** - the project is being built and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, build or deployment.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.
