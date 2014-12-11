---
layout: default
---
# Koordinátarendszerek, transzformáció

 - [2014/2015 informatika szakkör][szakkor_honlap] kilencedik órája
 
 [szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html
 
[kiindulási állapot: kettővel ezelőtti óra vége](game-00.html)

[eddig jutottunk](game.html)

# Világ(színtér) koordinátarendszer, képernyő koordinátarendszer

 * A képernyőre rajzolás koordinátarendszere JavaScript canvas API esetén (és a legtöbb egyéb API esetén is) felülről lefelé növekvő Y tengellyel van megadva.
 * A játék objektumaira természetesebb az Y tengelyt függőlegesen felfelé elhelyezni, és az Y=0 szintet a talajszintre tenni.
 * A legegyszerűbb megközelítés a következő:
   * A játék minden objektumának helyét a világ koordinátarendszerben határozzuk meg.
   * Csak a kirajzoláskor számítjuk ki a képernyő koordinátákat.
   * Attól függően, hogy mi a célunk, a képernyő vonatkoztatási rendszere lehet álló, vagy mozoghat a játékos karakterével együtt.
 * A játék koordinátáinak a képernyő koordinátára való átszámítását egy transzformáció objektummal végezzük. Egyelőre a transzformáció objektum eltolást és skálázást valósít meg.

A pontokban leírt elveknek megfelelően alakítottuk át a programot közösen.

Házi feladat most nincs.
