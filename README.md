# Simple Nodejs CRUDAPI

APIs made using nodejs,mongodb Atlas, mongoose with jwt-authorization

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install dependencies.

```bash
npm install
```

## Usage
**POST** '/register'

Request body:
```json
{
  "email": "xyz@abc.com",
  "name" : "ABCD"
}
```

**POST** '/login'

Request body:
```json
{
  "email": "xyz@abc.com",
  "name" : "ABCD"
}
```
Response body
```json
cv45szdf5gf67trredw4gyyh7jfdsfdg8efdsgsgd8
```

**GET** '/getAll'

fetches all user data

**GET** '/get/:email'

param - email of type string

body:
```json
{
  "email": "xyz@abc.com",
  "name" : "ABCD"
}
```

**PUT** '/update/:email'

param - email of type string

Request body:
```json
{
  "email": "xyz@abc.com",
  "name" : "ABCD"
}
```

**DELETE** '/delete/:email'

param - email of type string
