# Introduction
There are 2 reasons to use Library service.

- CRUD operations for Authors
- CRUD operations for books linked to Author

If you want to run the project on docker, You can execute the steps below.
NOTES: The .yml and docker files are in the project root directory hence following commands must executed same directory
- docker-compose build
- docker-compose up

If you want run project locally, You can follow the steps below.
- Make sure you have an active mongo db server and change the mongo connection string in app.js file
- npm install
- npm start
    

- After both container run-up successfully, Related service call can with http://localhost:3000 link

## Service Using Details
There are two endpoint named /book and /author in the service.
Both service contains GET, POST, PUT and DELETE methods. Sample requests and responses to be sent to the service are as follows

## Methods
```http
Get    /author
Post   /author
Put    /author
Delete /author

Get    /book
Post   /book
Put    /book
Delete /book
```

## Status Codes
Library service returns the following status codes in its API:

| Status Code | Description             |
| :---------- | :---------------------- |
| 200         | `OK`                    |
| 500         | `INTERNAL SERVER ERROR` |

## Requests
## new Author Inserting
```json
{
    "name":string,
    "country":string,
    "birthDate":date
}
```

## Author Updating
```json
{
    "_id": ObjectId,
    "name": string,
    "country": string,
    "birthDate": date
}
```

## Author Deleting
```json
{
    "id":ObjectId
}
```

## new Book Inserting
```json
{
    "title":string,
    "author":ObjectId,
    "price":12.5 number,
    "isbn":string,
    "language":string,
    "numberOfPages":number,
    "publisher":string
}
```

## Book Updating
```json
{
    "_id": ObjectId,
    "title":string,
    "author":ObjectId,
    "price":12.5 number,
    "isbn":string,
    "language":string,
    "numberOfPages":number,
    "publisher":string
}
```

## Book Deleting
```json
{
    "id":ObjectId
}
```

## Response
Library service returns responses in the following format:

```json
{
    "statusCode": number,
    "message": string,
    "data": object
}
```

