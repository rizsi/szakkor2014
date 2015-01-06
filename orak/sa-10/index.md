---
layout: default
---
# Platformra ugrás

 - [2014/2015 informatika szakkör][szakkor_honlap] tizedik órája
 
 [szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html
 
[kiindulási állapot: előző óra vége](game-00.html)

[eddig jutottunk - nem pontosan a vázlat szerint haladtunk, mert az avatarból nem csináltunk objektumot, és a platformot téglalapként rajzoljuk kép helyett](game.html)

# Platform megvalósítása

 * Felveszünk egy új fajta objektumot a platformoknak.
 * Megvalósítjuk a kirajzolását. [Itt tartunk](game-01.html)
 * Összehangoljuk az ugrás méretét és a platform helyét.
 * A játékos animációjában a talajra érkezés feltételét kibővítjük a platformra érkezés feltételével. [Itt tartunk](game-02.html)
   * Az "instanceof" művelet.
 * Látszik, hogy valami nem stimmel, mert a játékos a fejével ragad a platfromra, nem a lábával. A probléma összetett:
   * A játékosnak a fejénél van a 0,0 pontja, nem a lábánál, pedig a földetérés logikája szerint a lábánál kellene lennie.
   * Azért nem vettük ezt eddig észre, mert a világ->képernyő transzformációnk is hibás: egy játékosmagasságnyival fejlebb rajzolunk mindent, mint ahova kellene.
   * Javítás: javítjuk a játékos rajzolását és a transzformációt is. [Itt tartunk](game-03.html)
 * Az összes - a játékost érintő - logikát a játékos objektumba tesszük át. [Itt tartunk](game-04.html)


# Házi feladat

 * Platformok létrehozása úgy, hogy kihívás legyen rajtuk ugrálni.
 * Double jump megvalósítása.

