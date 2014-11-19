---
layout: default
---
#Interakciók kezelése

 - [2014/2015 informatika szakkör][szakkor_honlap] harmadik órája

[szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html

##Hol hagytuk abba

 - Képet tudunk már kirajzolni a vászonra (Canvas)
 - Kialakítottunk egy alapot a platform játékunknak
 - Billentyűzetleütésre mozgásba tudjuk hozni a "karakterünket"

##Mivel folytatjuk ma

 - szöveg kirajzolása
 - véletlen szám generálása és felhasználása
 - okosabb progamozás: "objektumok" használata
 - guggolás programozása

---------------------------

##Órai anyag

###Bemelegítés

 - Vegyük elő a legutoljára elkészített programunkat: [2. óra](http://rizsi.github.io/szakkor2014/orak/hr-02/game.html)
 - Töltsük le a forráskódját és nyissuk meg egy szövegszerkesztőben.

###Elkészült házi feladatok megtekintése

 - Mindenkiére vetünk egy pillantást
 - Akinek kedve van elmagyarázhatja hogyan csinálta ;)
 
###Objektumok a Javascriptben

 - A Javascript nagyon rugalmas, figyelni kell rá, hogy más programozási nyelvekben szigorúbbak a szabályok (és ez jó)
 - Player objektum elkészítése x, y koordinátákkal, képpel
 - Felhő objektum elkészítése

###Véletlen szám generálás
 
 - Maga a generálás egyszerű: `Math.random();`
  - A függvény visszatérési értéke egy 0 és 1 közötti véletlen szám.
 - Mire használhatjuk?
  - Véletlenül jelennek meg felhők (3db), véletlen sebességgel és mérettel
   - `context.drawImage(img,x,y,width,height);` --> méret megváltoztatása (hasznos tudni előtte az eredeti méretet)
   - `canvas2d.globalAlpha = 0.5;` --> 50%-os átlátszóság beállítása
 
###Szöveg kirajzolás

 - A használható parancs: `context.fillText("szoveg",x,y);`
 - A szöveg tárolása változóban ugyanúgy mint a számoknál

###Guggolás leprogramozása

 - Guggoló helyzetű kép kirajzolása a le billentyűzet nyomva tartása alatt
  - Felhasználható kép: [link](http://rizsi.github.io/szakkor2014/orak/hr-03/guggol.png)

###Óra végi extra, ha jut idő

 - Megtett táv kiírása:
   - eltárolod a helyzetedet az előző képkockában
   - mozogsz
   - az eddigi távhoz hozzáadod a mostani és az előző helyzeted távolságát --> Pitagorasz tétel

-------------------------------

###Az órai munka eredménye:
[link a "játékra"](http://rizsi.github.io/szakkor2014/orak/hr-03/game.html)

<canvas id="mycanvas" width='600' height ='300'></canvas>
<script src="script.js"></script>

-------------------------------

##Házi feladat

 - Beépíteni a játékodba egy véletlen szám által vezérelt dolgot. *Fantázia!*
  
  
  
  
  
  
   
