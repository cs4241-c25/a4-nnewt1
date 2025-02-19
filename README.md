## Assignment To-Do List Maker

I have tried to deploy the app on both Glitch and Vercel, and have struggled to get either to work for almost two hours now. I am not sure what the problems are, but in Vercel any route that isn't `/` instantly goes to 404 (and I've tried different build commands and including my .env file), and in Glitch it can't seem to read anything from my .env in addition to some other issue I can't place. I also made sure to update my GitHub OAuth URLs to match whatever deployment I was trying, but had no luck. However, all of my code works completely fine locally.

I hope that you can still grade this assignment, and I am sorry for the inconvenience. Since the deployments wouldn't work for me, it may have to be tested locally with `npm run start` and a visit to `localhost:3000`.

Alexander Beck's passport-github-demo helped me a lot with this assignment, so I wanted to give credit where credit was due. The majority of `index.js` and `login.html` is from his repository.

My Assignment A3 went very poorly, and I failed to get most of the functionality in the end. I put a lot of time into trying to make that right with this assignment, and I believe I have (aside from the fact that I couldn't get it deployed despite my best efforts).

My Assignment A4 uses GitHub OAuth to authenticate users and allows them to create, read, update, and delete to-do lists (although I modified the form to include a set array of radio buttons to put some variety into my HTML). The app will remember the user's to-do lists and items even after they log out. The user can also log out and log back in with the same account, and their to-do lists will still be there.

Unlike previous assignments, this assignment will be solely graded on whether or not you successfully complete it. Partial credit will be generously given.