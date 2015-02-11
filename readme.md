# Node Summit 15

## Production Node Architecture

### Set up

Clone the project:

```
git clone https://github.com/heroku-examples/summit-service.git
cd summit-service
npm install
```

Inject config (Linux / OSX):

```
export CLOUDAMQP_URL=amqp://idhertwy:FRHI5wRxFrZJWDF4eI2BjPB7_qTyUEHh@fast-coyote.rmq.cloudamqp.com/idhertwy
```

Inject config (Windows):

```
set CLOUDAMQP_URL=amqp://idhertwy:FRHI5wRxFrZJWDF4eI2BjPB7_qTyUEHh@fast-coyote.rmq.cloudamqp.com/idhertwy
```

Start the service locally:

```
npm start
```

### Test

Check out [the web service](https://summit-web.herokuapp.com/?zip=98122)
to see it communicating with your service.

The source is available at
[https://github.com/heroku-examples/summit-web](https://github.com/heroku-examples/summit-web)

### Build

This example service responds to `weather.get` messages.
You can provide more services by handling different types of messages:

```js
var SERVICE = 'weather.get';

// ...

function handle(message, respond) {
  logger.log({ type: 'info', message: 'request', service: SERVICE });
  respond("Your response here");
}
```
