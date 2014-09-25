---
layout: default
---
#Animáció HTML+JS+Canvas technológiával
 * [2014/2015 informatika szakkör](../../index.html) első órája
 * [Bevezető](bevezeto.html)

##Cél
 * egyszerű animáció készítése HTML+JavaScript+Canvas technológiával
 * [Az óra anyagához tartozó kész program](program.html)

##HTML
 * Weboldal leíró nyelv
 * statikus - nem mozgó, változó - oldalképet lehet vele csinálni szövegtartalommal, képekkel, linkekkel
 * Most lényegében üres HTML oldalt csinálunk csak arra fogjuk használni, hogy elindítsunk benne egy JavaScript programot

##JavaScript/ECMAScript
 * programozási nyelv
 * HTML oldalak "hátterében" szokott JavaScript program futni
 * Amikor a weboldal betöltődik, akkor egyben elindul vele a JavaScript program is
 * Manapság szinte minden weboldal használja
 * A Weboldal elemeinek dinamizmust lehet adni vele
 * Böngészőn kívül is használható. Példa lesz rá a node.js, amivel webszervert lehet JavaScript segítségével írni.

##HTML+JS program elemei
 * egyetlen szöveges fájl:
  * Tetszőleges szövegszerkesztővel létrehozható - Eclipse szövegszerkesztője, gedit, kate, emacs, vi, nani, mcedit, Firefox scratchpad stb.
  * egyszerű HTML oldal, és beágyazva a JavaScript program
  * haladóknak: nem szép megoldás, de így a legkönnyebb átlátni egy kezdőnek
  * A böngészővel be lehet tölteni a saját gépünkről, nem kell hozzá hálózat (Internet)
  * Természetesen fel lehet tenni az Internetre is, meg fogjuk látni, hogy hogyan

##Canvas
 * téglalap alakú felület egy weboldalon belül, amire JavaScript programmal lehet rajzolni
 * böngészőben jelenik meg, de nem HTML tartalom
 * alkalmas oktatásra, és egyszerű játékok készítésére

##animáció
 * Mozgó képet akkor kapunk, ha legalább kb 20-szor újrarajzoljuk a képet úgy, hogy közben kicsit máshová kerülnek a képen a dolgok. Manapság egy tipikus PC 60-szor rajzolja újra a képet. A programunk újrarajzoló metódusát minden képkockára egyszer futtatjuk le, tehát minden 1/60 szekundum ~= 16.66 milliszekundum alatt egyszer.

##Magyarázat
 * window.addEventListener("load", function(){});
  Az Átadott metódus akkor fog lefutni, amikor a HTML oldal betöltődött már. Tehát ekkor már biztosan létezik a "mycanvas" objektum a képernyőn
 * var canvas=document.getElementById("mycanvas")
  Az azonosító alapján a JavaScript program változójába közvetlen hivatkozást kérünk a képernyőelemre. Innentől a "canvas" változó ezt az objektumot hivatkozza
 * context = canvas.getContext('2d');
  A "context" nevű változóval hivatkozott objektumon keresztül tudunk a canvasra rajzolni. Ez a lépés szigorúan technikai, még nem kell érteni. Számunkra a canvas és a context lényegében ugyanaz.
 * animate();
  Az általunk definiált animate nevű metódus lefuttatása egyszer
 * window.requestAnimationFrame(animate);
  Az általunk definiált animate nevű metódust hívja úrja a rendszer amikor a következő képkockát lehet kirajzolni. Ha a gép/program nem túl lassú, akkor ennek hatására az "animate" metódus 60-szor fog lefutni egy másodperc alatt, folyamatos mozgás érzetét keltve.


