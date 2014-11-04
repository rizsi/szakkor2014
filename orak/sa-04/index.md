---
layout: default
---
#Programozási trükkök
 
 - [2014/2015 informatika szakkör][szakkor_honlap] negyedik órája

[szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html

[kiindulási állapot: előző óra vége](game-00.html)
[befejező állapot: nem sikerült a végére írni a tervezettnek](game-final.html)


## Egyszerűsítés
Általában a lehető legegyszerűbb megoldásra törekszünk.

Egy dolgot egy helyen írjunk le:
 * Így ha meg kell változtatni, akkor sokkal könnyebb dolgunk van.
 * Példa: billentyűzetkezelés
  * Konstansba kiemelés: így ha át kell írni egy értéket, akkor könnyebb dolgunk van.

Általában a rövidebb az egyszerűbb:
 * Érthetőség
 * Módosíthatóság

## Fájlok elérése

A programunk jelenleg a következő fájlokból áll:
 * HTML oldal benne JavaScript kóddal
 * képek

A képeket jelenleg abszolút URL-lel érjük el:
 * URL Universal Resource Locator - hol van a fájl az Interneten?
  * Ha ezt a címet a böngésző címsorába másoljuk, akkor ugyanez a fájl töltődik le mindenhol.
  * A cím eleje hivatkozza a szervert - ez a mi esetünkben a github szolgáltató szervere. Minden játékindításkor innen újra letöltjük a képet.
 * Ha az adott helyről eltűnik a fájl, akkor a programunk nem fog működni!
 * Ha nincsen éppen Internet elérés a gépeden, akkor a képek nem töltődnek be.

Megoldás:
 * Reltív URL használata.
 * A HTML fájlhoz képest adjuk meg hogy relatíve hol található a kép.
 * Ehhez a HTML fájl mellé oda kell másolni a képet
 * A program az eredeti hoszt szerver nélkül is működni fog:
  * Ha a saját gépedről futtatod, akkor onnan fájlként tölti be a böngésző
  * Ha felteszed egy Internetes szolgáltatóhoz a programot, akkor oda is fel kell másolni a képeket is.
 * Így a harmadik féltől függetlenné válik az alkalmazásod: "nem törik el" amikor az eredeti képet leszedi valaki

## Objektumok

Táblánál magyarázva, az alábbi vázlat szerint:

 * A program futása:
  * A program futása állapotátmenetek sorozata
  * program utasítás végrehajtása: állapot1 -> állapot2
  * debuggerrel megállítva a program teljes állapotát láthatjuk:
    * objektumok
    * futási állapot:
      * melyik metódus hol tart éppen
      * helyi változók
 * Debuggerrel nézzük meg, hogy hogyan épülnek fel a program objektumai!
   * kulcs->érték hozzárendelés
   * a kulcs csak egyszerű típus lehet: string, szám
   * érték lehet:
     * egyszerű típus: string, szám
     * másik objektum
     * metódus
   * 
 * írjuk át a player-t objektummá
   * a playeren végzett műveleteket tegyük át metódusokba: animate, draw
   * ugyanezt tegyük meg a felirattal és a felhővel is
   * az animate metódust írjuk át úgy, hogy a game objektumain fusson végig

## Házi feladat

Nem jutottunk el a player objektummá alakításáig, ami a terv volt. A házi feladat:
 * Írd át a programot úgy, hogy JavaScript ekvivalens átalakításokkal úgyanazt csinálja, mint az eredeti, de máshogy nézzen ki a forráskód!
 * Próbáld meg a játékos objektum tagváltozóiba tenni a hozzá tartozó metódusokat!
 * Az első órához írt (távlati) házi feladatokkal próbálj meg haladni! [Itt találod meg](../sa-01/index.html)
 
   