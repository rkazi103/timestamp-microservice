# Timestamp Microservice

This is a simple timestamp microservice that I created. It is one out of the five FCC projects you need to complete in order to get the "APIs and Microservices" certification.

## Authors

- [@rkazi103](https://www.github.com/rkazi103)

## Tech Stack

Node + Express


## Demo

Click [here](http://fcc-timestamp-project-api.herokuapp.com/) to see a working demo of the project.

## Run Locally

Clone the project

```bash
  git clone https://github.com/rkazi103/timestamp-microservice
```

Go to the project directory

```bash
  cd timestamp-microservice
```

Install dependencies

```bash
  yarn
```

Start the server in development

```bash
  yarn run dev
```

Start the server in production

```bash
  yarn start
```

## API Reference

### Get Current Date / Time

```http
  GET /api/
```

Will return a JSON object containing the current time as a Unix timestamp and a UTC string (2 different keys in the object).

### Get Specific Date / Time

```http
  GET /api/${date}
```

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `date`    | `string` | A date.     |

## Feedback

If you have any feedback, please email me at @rayan.quack.you@gmail.com
