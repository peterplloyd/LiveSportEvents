# Sky Tech Test

# A few points:

1) I spent 2 hours on this tech test while on a cruise and with spotty internet so this has impacted the quality of my work.

2) I tried to implement socket.io but the version the server uses is very old so it proved tricky.

3) If you don't mind me saying it would be good to update your packages for this tech test. It hasn't been updated since 2019 so I was having compatibility issues with my package.json

## Technology Choices

This application is built using `React with Redux` this was because it is useful to update content in real time and redux would help with state management particularly when using WebSockets. It's also sensible since it would be easy to expand to other parts of the site. EG Live Rugby Results. I used `Typescript` for type checking which proved useful for checking the data coming into my components.

I used `create-react-app` to get started as quickly as possible with more time I would have customised my project more eg used custom Webpack config. I wrote a small test wit `Jest` and with more time I would have used `React Testing Library` to provide testing of the DOM which would give me a good idea of what users would experience.

I used `WebSocket` API rather than a library such as `Socket.IO` as previously mentioned because I was struggling to get it to work with the version on the server.

I think it's clear that the time spent on this has impacted the quality of the project. With more time I would have structured this project better and ensured that much more unit testing had been completed. I would have also hosted the project for viewing.

## Getting Started

Requirements

-   Docker
-   `docker-compose`

For reference this application/documentation uses `yarn` however `npm` is also compatible.

-   To launch the API run `docker-compose up`.
-   To launch the application run `yarn start`.

## Testing

To execute the test suite, run `yarn test`.

Thank you for taking the time to look at my submission.