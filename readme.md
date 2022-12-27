#API documentation
documentation further divided into three group 
- user
- product
- order

every group has their own apis to perform futher task regarding their own model i.e api regarding user table(model) are comes under user .


##  user API Reference

#### 

```http
  POST /api/user/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. The name of the user |
|`email` |`string`|**required, unique** The email address of the user. Must be a unique value.
| `number`|`integer`| **required** The phone number of the user. |
| `image` | `string` | (optional): An image file for the user's profile picture.|
| `gender` | `string` |  (optional): Gender of the user, can have value either male or female |

```json
POST /user/create-user
// Input
Content-Type: application/json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "number": 1234567890,
  "image": "https://example.com/image.png",
  "gender": "male"
}

```




```http
  GET /api/user/get-user
``` 
###### This endpoint retrieves the user data for the user with the specified ID comes from token.


### Parameter

```json
GET /user/get-user
// Input
Content-Type: application/json
Authorization: Bearer abcdefghijklmnop
{}
//output
{
    "_id": "63aaf3ae9e4a6767fbd127e5",
    "gender": "male",
    "email": "abhishekydv2289@gmail.com",
    "number": 1234567890,
    "image": "https://i.stack.imgur.com/34AD2.jpg",
    "token": "abcdefghijklmnop",
    "createdAt": "2022-12-27T13:31:26.875Z",
    "updatedAt": "2022-12-27T13:31:26.875Z",
    "__v": 0
}


```
```http
  PUT /api/user/update-user

``` 
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **optional**. The name of the user |
|`email` |`string`|**optional, unique** The email address of the user. Must be a unique value.
| `number`|`integer`| **optional** The phone number of the user. |
| `image` | `string` | (optional): An image file for the user's profile picture.|
| `gender` | `string` |  (optional): Gender of the user, can have value either male or female |


```json
PUT /user/update-user
// Input
Content-Type: application/json
Authorization: Bearer abcdefghijklmnop

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "number": 1234567890,
  "image": "https://example.com/image.png",
  "gender": "male"
}
// output
{
    "message": "user updated successfully"
}
```

##  PRODUCT API Reference
```http
GET product/get-product
```
This endpoint retrieves a list of all products in the database.

```json
`no parameter required`
//output
200 OK
[
    {
        "_id": "63aa7e11f1761be051429762",
        "name": "iphone 3s",
        "price": 5342123,
        "description": "",
        "quantity": 49,
        "image": "",
        "category": "mobile",
        "color": "red",
        "seller": {
            "_id": "63a9d6c4bbf1505252780bf2",
            "name": "Abhishek Yadav",
            "email": "abhishek@gmail.com",
            "image": "https://i.stack.imgur.com/34AD2.jpg"
        },
        "brand": "apple",
        "__v": 0
    }
]

```
```http
  POST /api/product/add-product
```
This endpoint adds a new product to the database.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|name|string |(required): The name of the product.|
|image|string| (optional): An image file for the product.|
| price| integer | (required, integer): The price of the product.|
|description| string | (optional): A description of the product|
|quantity| integer| (required, integer): The quantity of the product in stock.|
|category|string| (optional): The category of the product.
|brand|string| (optional): The brand of the product.
|color|string| (optional): The color of the product.

```json
POST /products/post-product
Content-Type: application/json
Authorization: Bearer abcdefghijklmnop
//body

{
  "name": "Dove Shampoo",
  "image": "https://example.com/dove-shampoo.jpg",
  "price": 10,
  "description": "Moisturizing shampoo for all hair types.",
  "quantity": 50,
  "category": "Personal Care",
  "brand": "Dove",
  "color": "white"
}

```
```http
  PUT /api/product/update-product
```
This endpoint update the product to the database.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id|string|(required): id of the product|
|name|string |(optional): The name of the product.|
|image|string| (optional): An image file for the product.|
| price| integer | (optional, integer): The price of the product.|
|description| string | (optional): A description of the product|
|quantity| integer| (optional, integer): The quantity of the product in stock.|
|category|string| (optional): The category of the product.
|brand|string| (optional): The brand of the product.
|color|string| (optional): The color of the product._|
this api takes user data by token and check whether the product is blongs to you or not,  if yes then it will do changes as per need, else will throw 403 error
```json
POST /products/post-product
Content-Type: application/json
Authorization: Bearer abcdefghijklmnop
//body

{
  "_id": "bsd23bsad",
  "image": "https://example.com/dove-shampoo.jpg",
  "price": 19,
  "color": "blue"
}
// output
200 ok
{
    "message": "product updated successfully"
}
403 Forebidden
```
```http
  PUT /api/product/update-product
```
This endpoint delete the product to the database.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id|string|(required): id of the product|
this api takes user data by token and check whether the product is blongs to you or not,  if yes then it will do changes as per need, else will throw 403 error

```json
POST /products/post-product
Content-Type: application/json
Authorization: Bearer abcdefghijklmnop
//body

{
  "_id": "bsd23bsad",
}
// output
200 ok
{
    "message": "product deleted successfully"
}
403 Forbidden
```

##  order API Reference

```http
GET /api/order/get-order
```
this endpint returns the list of orders of the user. (toekn is use to get user details, hence token is required)
```json
Content-Type: application/json
Authorization: Bearer abcdefghijklmnop
//output
[
    {
        "_id": "63aac4e1d893d831850710b4",
        "user": {
            "_id": "63a9d6c4bbf1505252780bf2",
            "name": "Abhishek Yadav",
            "email": "abhishek@gmail.com",
            "image": "https://i.stack.imgur.com/34AD2.jpg"
        },
        "product": {
            "_id": "63aa7e11f1761be051429762",
            "name": "iphone 3s",
            "price": 49999,
            
        },
        "amount": 49999,
        "address": {
            "_id": "63aa8d5fe9beaf27634f2e80",
            "user": "63a9d6c4bbf1505252780bf2",
            "city": "Gwalior",
            "state": "Madhya Pradesh",
            "street": "16,street",
            "local": " jabcdsd ",
            "pincode": 123467,
            "__v": 0
        },
        "quantity": 1,
        "createdAt": "2022-12-27T10:11:45.124Z",
        "updatedAt": "2022-12-27T10:11:45.124Z",
        "__v": 0
    }
]
```
```http
POST /api/order/add-order
```
it use to create an order in the database. Token required 
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|product|string|(required): id of product
|amount| integer|(required): price of order
|quantity|integer|(optional):
|address | string | (requied): id of address|

```json
Content-Type: application/json
Authorization: Bearer abcdefghijklmnop
//body

{"product":"63aa7e11f1761be051429762",
"amount":5343123,
"address":"63aa8d5fe9beaf27634f2e80"}
//output
200 ok
403 forbidden
```

```http
DELETE /api/order/delete-order
```
it use to delete an order in the database. Token required 
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|_id|string|(required): id of ordert

```json
Content-Type: application/json
Authorization: Bearer abcdefghijklmnop
//body

{
"_id":"63aa7e11f1761be051429762",
}
//output
200 ok
403 forbidden
```
