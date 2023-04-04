# veterinaria-backend
 
endpoints

products GET "/" = GET all products GET "/:id" = GET one product POST "/" = POST one product PUT "/:id" = PUT one product DELETE "/:id" = DELETE one product DELETE "/" = DELETE all product

user GET "/:id" = GET one user GET "/" = GET all user PUT "/" = UPDATE user info POST "/login" = START a user session POST "/register" = REGISTER a new user DELETE "/logout" = LOG OUT a user session

cart GET "/:id" = GET one cart GET "/" = GET all carts PUT "/add/:id" = ADD a product to cart DELETE "/" = DELETE one cart

order GET "/" GET all orders GET "/:id" GET one order