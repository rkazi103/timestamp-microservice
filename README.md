# Timestamp Microservice

This is a simple timestamp microservice that I created. It is one out of the five FCC projects you need to complete in order to get the "APIs and Microservices" certification.

This repo is where I wrote all of the code, but if you want to see the actual repository I submitted and deployed with, you can find that [here]().

## Authors

- [@rkazi103](https://www.github.com/rkazi103)

## Tech Stack

Node + Express

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
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
