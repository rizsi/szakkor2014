---
layout: default
---
#Programozási trükkök
 
 - [2014/2015 informatika szakkör][szakkor_honlap] negyedik órája

[szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html

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

##
