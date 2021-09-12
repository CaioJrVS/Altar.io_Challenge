# AltarChallengeApp

This project is a frontend SPA
The first page generates random characters on a grid and creates a code using a particular algorithm.

1. It gets the actual second of the hour every 2 seconds
2. From the numbers of the second it access the array of characters
 and get the characters at the position of the second
 i.e.: if it's 12:32:25, it gets the number 25
 and access the grid of characters at the position
 [2][5] and [5][2], get it's characters,
3. Count the number of occurrences of each character
4. The code is a two the concatenation of the two counts
5. If the count of a character is higher than 9, then the
number should be the minimum integer that divides the
count so it's < 9

The second page saves a payment, where you add the amount and the name of the payment
into a grid

---

#### How to use

---
Click on the button **Generate 2d  grid** to start the creation of the random characters of the grid

![alt text](https://github.com/CaioJrVS/Altar.io_Challenge/blob/feat/CaioSouza/readme_images/img1.png "")

![alt text](https://github.com/CaioJrVS/Altar.io_Challenge/blob/feat/CaioSouza/readme_images/img1_1.png)

Then on the navbar you can switch to the payment page

![alt text](https://github.com/CaioJrVS/Altar.io_Challenge/blob/feat/CaioSouza/readme_images/img2.png)

Within the payment page you have two input to place the name and the amount of the payment and the add button that saves the amount, the payment name, the code and the grid.

![alt text](https://github.com/CaioJrVS/Altar.io_Challenge/blob/feat/CaioSouza/readme_images/img3.png)

![alt text](https://github.com/CaioJrVS/Altar.io_Challenge/blob/feat/CaioSouza/readme_images/img3_1.png)

---

#### How to install

---
Clone the repo using git: **git clone CaioJrVS/Altar.io_Challenge**
Then install the dependencies with npm: **npm i**
Then run the application with: **ng serve -o**
