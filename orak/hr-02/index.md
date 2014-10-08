---
layout: default
---
#Interakciók kezelése

 - [2014/2015 informatika szakkör][szakkor_honlap] második órája
 - [Saját bevezetőm][bevezeto]

[szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html
[bevezeto]: http://rizsi.github.io/szakkor2014/orak/hr-02/bevezeto.html

##Adminisztráció

 - Írjatok jelentkező e-mail-t nekünk a [rudolf.official@gmail.com](mailto:rudolf.official@gmail.com) vagy az [andras.schmidt.hu@gmail.com](mailto:andras.schmidt.hu@gmail.com) címekre, hogy felvegyünk titeket a levelezési listára.
 - A levelezési lista egy közös fórumunk lesz, ahol:
  - feltehetitek a kérdéseiteket
  - elérünk titeket ha változás lenne a tanórában
  - megoszthatjátok majd később, az alkotott játékaitokat

##Hol hagytuk abba

 - Van már egy kész weblapunk, rajta egy Canvas-al
 - Kirajzoltunk egy piros kockát
 - Folyamatosan mozgattuk a kockát

##Mivel folytatjuk ma

 - Képet fogunk kirajzolni a vászonra (Canvas)
 - Kialakítunk egy alapot a platform játékunknak
 - Billentyűzetleütésre mozgásba hozzuk a "karakterünket"

---------------------------

##Órai anyag

###Bemelegítés

 - Vegyük elő a legutoljára elkészített programunkat: [1. óra](http://rizsi.github.io/szakkor2014/orak/sa-01/program.html)
 - Töltsük le a forráskódját és nyissuk meg egy szövegszerkesztőben.

###Kép betöltése, kirajzolása

 - Képek letöltése:
   - [háttér]( http://rizsi.github.io/szakkor2014/orak/hr-02/background.png) (600x300px)
   - [játékos]( http://rizsi.github.io/szakkor2014/orak/hr-02/stickman.png) (16x64px)
   - A képek a következő weblapról származnak: [opengamearts.org](http://opengameart.org/content/glitch-ilmenskie-undergroundcave-terrain-svg)
 - Háttérkép betöltése Javascript-ben
 - Kép kirajzolása
 - Játékos kirajzolása (a talaj a felső kerettől 240 pixel távol van)
 
###Interakció a billentyűzettel
 
 - Billentyűzet leütések figyelése
 - Mozgás létrehozása
 
###Óra végi extra, ha jut idő

 - Gyorsuló hatás hozzáadása a mozgáshoz --> sebesség megadása
 - Elmélet hozzá:
   > maxsebesseg = 5;
   > sebesseg = 0;
   > 
   > ha jobbraLenyomva:
   >     sebesseg++
   >     ha sebesseg > maxsebesseg:
   >         sebesseg = maxsebesseg
   > ha jobbraNincsLenyomva:
   >     sebesseg--
   >     ha sebesseg < 0:
   >         sebesseg = 0
   >
   > ha balraLenyomva:
   >     gondolkozz rajta!
   >     (lehet az előző sorokon is változtatni kell hozzá, ki tudja... :)
 
-------------------------------

##Házi feladat

 - Mozgó felhők elhelyezése a pályán.
  - Kép hozzá: [misztikus felhő](http://rizsi.github.io/szakkor2014/orak/hr-02/mistic_cloud.png)
  - extra: több darab, különböző sebességekkel, különböző méretűek --> Nézd meg hogyan lehet Javascript canvas-ban átméretezni