# BACKEND API

Below is a walkthrough of how the api works and what the sample requests look like.

## Category

Create a category / get all categories
```
https://t-shirt-store123.herokuapp.com/category
```

Get all shirts by category / delete a category
```
https://t-shirt-store123.herokuapp.com/category/1
```

example json response
```
[
    {
        "id": 1,
        "category_name": "tv-shows",
        "shirt_name": "Simpsons",
        "image_url": "https://s7d5.scene7.com/is/image/UrbanOutfitters/51581262_050_b?$xlarge$&hei=900&qlt=80&fit=constrain",
        "description": "A t-shirt about the simpsons",
        "category_id": 1,
        "on_sale": false,
        "sale_percent": "0.30",
        "price_small": "10.99",
        "price_medium": "15.99",
        "price_large": "20.99",
        "instock_small": 125,
        "instock_medium": 125,
        "instock_large": 150,
        "material": "cotton",
        "total_likes": 20
    },
    {
        "id": 2,
        "category_name": "tv-shows",
        "shirt_name": "Rick and Morty",
        "image_url": "https://s7d9.scene7.com/is/image/JCPenney/DP0227201911005829M?resmode=sharp2&op_sharpen=1&wid=550&hei=550",
        "description": "A t-shirt about the show Rick and Morty",
        "category_id": 1,
        "on_sale": false,
        "sale_percent": "0.30",
        "price_small": "14.99",
        "price_medium": "17.99",
        "price_large": "22.99",
        "instock_small": 125,
        "instock_medium": 125,
        "instock_large": 150,
        "material": "cotton",
        "total_likes": 23
    }
]
```

## TShirt

create a new TShirt
```
https://t-shirt-store123.herokuapp.com/tshirts
```

get a particular TShirt / Update / Delete a TShirt
```
https://t-shirt-store123.herokuapp.com/tshirts
```
example json response
```
    {
        "id": 2,
        "category_name": "tv-shows",
        "shirt_name": "Rick and Morty",
        "image_url": "https://s7d9.scene7.com/is/image/JCPenney/DP0227201911005829M?resmode=sharp2&op_sharpen=1&wid=550&hei=550",
        "description": "A t-shirt about the show Rick and Morty",
        "category_id": 1,
        "on_sale": false,
        "sale_percent": "0.30",
        "price_small": "14.99",
        "price_medium": "17.99",
        "price_large": "22.99",
        "instock_small": 125,
        "instock_medium": 125,
        "instock_large": 150,
        "material": "cotton",
        "total_likes": 23
    }
```

## Users

create a new user and create that users shopping cart in the database
```
https://t-shirt-store123.herokuapp.com/users/register
```

login a user
```
https://t-shirt-store123.herokuapp.com/users/login
```

example json response
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJNci4gQmVhbiIsImlhdCI6MTU2MTk4MTUyNCwiZXhwIjoxNTYxOTk1OTI0LCJqdGkiOiJsdGphamZzY2VnJCQifQ.Cu-KNOU7EZi3KtIrabdOLNmyIYD2aPZ-sUAZplgf7nQ",
    "id": 7,
    "name": "Mr. Bean"
}
```

edit / delete a user
```
https://t-shirt-store123.herokuapp.com/users/1
```

## Order

create a new order / get all orders for a customer
```
https://t-shirt-store123.herokuapp.com/orders
```

response body example for creating order
```
{
    "date": "around 1pm july 5 2019", 
    "user_id": 1, 
    "total": 60.99, 
    "description": "t-shirt 4, medium x1, t-shirt 6, large x2"
    
}
```

response body example for getting all orders by customer
```
{
    "id": 1
}
```

example return response
```
[
    {
        "date": "around 1pm july 5 2019",
        "total": "60.99",
        "description": "t-shirt 4, medium x1, t-shirt 6, large x2"
    },
    {
        "date": "around 5pm july 7 2019",
        "total": "49.99",
        "description": "t-shirt 4, large x2"
    },
    {
        "date": "around 2pm july 10 2019",
        "total": "33.00",
        "description": "t-shirt 4, medium x1"
    }
]
```

## Comments

create a new comment

```
https://t-shirt-store123.herokuapp.com/comments
```

response body example
```
{
    "date": "today at noon", 
    "description": "Dude solid shirt there for sure" , 
    "image": "no image",
    "posted_by": "Billy Bob",
    "tshirt_id": 1
}
```

get all comments for a shirt / update / delete a shirt

```
https://t-shirt-store123.herokuapp.com/comments/shirts/1
```

example return response
```
[
    {
        "posted_by": "test user",
        "image": "",
        "date": "around 1pm july 5 2019",
        "description": "Awesome shirt!"
    },
    {
        "posted_by": "test user",
        "image": "",
        "date": "around 5pm july 7 2019",
        "description": "sick shirt bro!"
    },
    {
        "posted_by": "test user",
        "image": "",
        "date": "around 2pm july 10 2019",
        "description": "digging that shirt!"
    }
]
```

## Shirt_Cart

post to shirt_cart / get all items for shirt cart / update / delete

```
https://t-shirt-store123.herokuapp.com/shirt/cart
```

example response body for post
```
{
    "tshirt_id": 2, 
    "cart_id": 1, 
    "small_amount": 0, 
    "medium_amount": 0, 
    "large_amount": 2
}
```

all items from one persons saved shopping cart
```
[
    {
        "tshirt_id": 1,
        "small_amount": 1,
        "medium_amount": 0,
        "large_amount": 0,
        "shirt_name": "Simpsons",
        "description": "A t-shirt about the simpsons",
        "price_small": "10.99",
        "on_sale": false,
        "price_medium": "15.99",
        "price_large": "20.99",
        "total_likes": 20,
        "material": "cotton"
    },
    {
        "tshirt_id": 2,
        "small_amount": 2,
        "medium_amount": 1,
        "large_amount": 0,
        "shirt_name": "Rick and Morty",
        "description": "A t-shirt about the show Rick and Morty",
        "price_small": "14.99",
        "on_sale": false,
        "price_medium": "17.99",
        "price_large": "22.99",
        "total_likes": 23,
        "material": "cotton"
    },
    {
        "tshirt_id": 3,
        "small_amount": 0,
        "medium_amount": 2,
        "large_amount": 1,
        "shirt_name": "Guns N Roses shirt",
        "description": "An awesome Guns and Roses shirt!",
        "price_small": "18.99",
        "on_sale": false,
        "price_medium": "13.99",
        "price_large": "14.99",
        "total_likes": 23,
        "material": "cotton"
    },
    {
        "tshirt_id": 4,
        "small_amount": 1,
        "medium_amount": 0,
        "large_amount": 0,
        "shirt_name": "MegaDeath",
        "description": "An awesome MegaDeath shirt!",
        "price_small": "18.99",
        "on_sale": false,
        "price_medium": "13.99",
        "price_large": "14.99",
        "total_likes": 23,
        "material": "cotton"
    },
    {
        "tshirt_id": 5,
        "small_amount": 0,
        "medium_amount": 0,
        "large_amount": 1,
        "shirt_name": "Arrowsmith",
        "description": "An awesome arrowsmith shirt!",
        "price_small": "18.99",
        "on_sale": false,
        "price_medium": "13.99",
        "price_large": "14.99",
        "total_likes": 23,
        "material": "cotton"
    }
]
```
