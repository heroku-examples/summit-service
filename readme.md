# Node Summit 15

## Production Node Architecture

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
