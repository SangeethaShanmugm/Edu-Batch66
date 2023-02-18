## Page 1

=> List of city (Get)
https://zomato-app.onrender.com/locations
http://localhost:8080/locations

=> List of restaurant (Get)
http://localhost:8080/restaurants
https://zomato-app.onrender.com/restaurants

=> Restaurant on the basis of city (Get)
http://localhost:8080/restaurants?stateId=2

=> List of QuickSearch (Get)
https://zomato-app.onrender.com/quickSearch
http://localhost:8080/quickSearch

## Page 2

=> List of restaurants on basis of meal (Get)
http://localhost:8080/restaurants?mealId=5
http://localhost:8080/restaurants?mealId=5&stateId=2
=> Filter on basis of cuisine (Get)
http://localhost:8080/filter/1?cuisineId=2
=> Filter on basis of cost (Get)
http://localhost:8080/filter/1?lcost=1000&hcost=1500
=> sort on basis of cost (Get)
http://localhost:8080/filter/1?lcost=700&hcost=1200&sort=-1

## Page 3

=> Details of the restaurants (Get)
http://localhost:8080/details/2
=> Menu of the restaurant (Get)
http://localhost:8080/menu/3

## Page 4

=> Menu details (selected items) (post)
http://localhost:8080/menuItem
=> Place order (post)
http://localhost:8080/placeOrder

{

    "name": "jack",
    "email": "jack@gmail.com",
    "address": "Hno 23,Sector 1",
    "phone": 7334567891,
    "cost": 500,
    "menuItem": [3, 4, 2 ]

}

## Page 5

=> List of order placed (get)
http://localhost:8080/orders
=> List of order placed of particular user (get)
http://localhost:8080/orders?email=alam@gmail.com
=> Update order status (put)
http://localhost:8080/updateOrder/2

{
"status": "TAX_SUCCESS",
"bank_name": "SBI",
"date": "02/20/2023"
}

========================

Delete orders (delete)
http://localhost:8080/deleteOrder/63e8cd06fdedce30bb5fb59c

CRUD
C - Create - POST
R - Read - GET
U - Update - PUT
D - Delete - DELETE
