---
layout: default
---
#Animáció HTML+JS+Canvas technológiával
 * [2014/2015 informatika szakkör](../../index.html) első órája
 * [Bevezető](bevezeto.html)

##Adminisztráció
 * Egy papírra mindenki írja fel a nevét és az emailcímét
 * Mindenki írjon egy emailt mindkettőnknek: címek a táblára
  * Felvesszük a szakkör levelezési listájára

##Cél
 * egyszerű animáció készítése HTML+JavaScript+Canvas technológiával
 * [Az óra anyagához tartozó induló program](start.html)
 * [Az óra anyagához tartozó kész program](program.html)
 * "canvas platformer" keresőszóval találtam egy [Hasonló programot útmutatóval, ami alapján dolgoztam](http://www.somethinghitme.com/2013/01/09/creating-a-canvas-platformer-tutorial-part-one/)

##Eszközök
 * Egyetlen szövegfájl szerkesztésére képes programra lesz szükségünk, amivel létrehozzuk és szerkesztjük a program.html fájlt.
   * Kérdés: ki milyen text editort használt eddig?
   * Ez lehet: Firefox scratchpad (így nem kell telepíteni semmi mást), Nodeclipse (ez egy nagyobb program rengeteg egyéb funkcióval), GNU/Linuxon: gedit, kate, vi, nano, mcedit valamelyike
   * "UTF-8" kódolást kell használni az editorban. A példa program.html-ben ez van beállítva, így fognak jól működni az ékezetes karakterek.
 * A program által használt képet (főhős: player.png) csak letöltjük, és a program mellé másoljuk.
 * A böngészőben meg kell nyitni ezt a program.html-t, utána már csak "refresh"-t (F5) kell nyomni, amikor a fájl változott.
 * Ha nem jól működik a program, akkor a Firefox "developer tools" részét használva lehet megtalálni a hiba okát. (Ctrl+Shift+I)

##HTML
 * Weboldal leíró nyelv
 * statikus - nem mozgó, változó - oldalképet lehet vele csinálni szövegtartalommal, képekkel, linkekkel
 * Most lényegében üres HTML oldalt csinálunk, csak arra fogjuk használni, hogy elindítsunk benne egy JavaScript programot
 * Kérdés: ki ismeri a HTML-t?

##JavaScript/ECMAScript
 * programozási nyelv
 * HTML oldalak "hátterében" szokott JavaScript program futni
 * Amikor a weboldal betöltődik, akkor egyben elindul vele a JavaScript program is
 * Manapság szinte minden weboldal használja
 * A Weboldal elemeinek dinamizmust lehet adni vele
 * Böngészőn kívül is használható. Példa lesz rá a node.js, amivel webszervert lehet JavaScript segítségével írni.
 * Kérdés: ki ismeri a JavaScriptet?

##HTML+JS program elemei
 * egyetlen szöveges fájl:
  * Tetszőleges szövegszerkesztővel létrehozható - Eclipse szövegszerkesztője, gedit, kate, emacs, vi, nani, mcedit, Firefox scratchpad stb.
  * egyszerű HTML oldal, és beágyazva a JavaScript program
  * haladóknak: nem szép megoldás, de így a legkönnyebb átlátni egy kezdőnek
  * A böngészővel be lehet tölteni a saját gépünkről, nem kell hozzá hálózat (Internet)
  * Természetesen fel lehet tenni az Internetre is, meg fogjuk látni, hogy hogyan
 * Kérdés: kinek van fenn általa előállítótt tartalom az Interneten?


##Canvas
 * téglalap alakú felület egy weboldalon belül, amire JavaScript programmal lehet rajzolni
 * böngészőben jelenik meg, de nem HTML tartalom
 * alkalmas oktatásra, és egyszerű játékok készítésére
 * Kérdés: ki ismeri a canvast?

##animáció
 * Mozgó képet akkor kapunk, ha legalább kb 20-szor újrarajzoljuk a képet úgy, hogy közben kicsit máshová kerülnek a képen a dolgok. Manapság egy tipikus PC 60-szor rajzolja újra a képet. A programunk újrarajzoló metódusát minden képkockára egyszer futtatjuk le, tehát minden 1/60 szekundum ~= 16.66 milliszekundum alatt egyszer.
 * Hány képet rajzol másodpercenként?
   * Egy tipikus mozifilm?
   * Az analóg TV adás?
   * Egy "gamer" PC?

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

##Házi feladat
 * Az alábbi ötletek nagyjából nehézségi sorrendben vannak.
 * Mindenkinek javaslom, hogy legalább két-három pontot csináljon végig!
 * A legtöbb feladathoz meg kell keresni az Interneten, hogy hogyan lehet megvalósítani.
 * Ha elakadsz, ne add fel! Kérdezz a többiektől, vagy tőlünk!
 * Ha bármi más eszedbe jut, azt is valósítsd meg, és mutasd meg a legközelebbi órán!
   * Állítsd át a talaj színét sárgára! (yellow)
   * Állítsd át a talaj színét Red Green Blue komponensekkel megadott színre! Lásd: [CSS colors az RGB résznél](http://www.w3schools.com/cssref/css_colors_legal.asp)
   * Legyen a kép háttere világoskék! (a talajhoz hasonlóan egy téglalapot lehet rajzolni, kék színnel (0, 0, canvas.width/2, canvas.height/2) koordinátákkal)
   * Változtasd meg a játéktér méreteit: talaj vastagsága (10->50 pixel), játékos mérete, játékos sebessége, stb...
     * Hány helyen kell átírnod a programot ahhoz, hogy a talaj vastagabb legyen? El lehetne-e érni valahogy, hogy csak egy helyen kelljen átírni ehhez?
     * Olvasnivaló: [Don't repeat yourself](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
   * Olvasd el az eredeti tutorialt, ami alapján ez az óravázlat készült: [Hasonló program útmutatóval, ami alapján dolgoztam](http://www.somethinghitme.com/2013/01/09/creating-a-canvas-platformer-tutorial-part-one/)
   * Rajzold át úgy a játékos képét (player.png), hogy átlátszó legyen a háttere, ne fehér! Ehhez egy rajzolóprogramot kell használnod. Például: [GIMP](http://www.gimp.org/)
     * Hogyan csináld? Keresőszó tipp: "gimp transparent background"
     * Egy működő találat: [Youtube videó arról, hogy hogyan lehet egy kép hátterét átlátszóvá tenni](https://www.youtube.com/watch?v=AC5vdKuwTp0)
   * Készíts egy új objektumot!
     * Rajzold meg az új elem képét egy png fájlba! (például [GIMP](http://www.gimp.org/) segítségével)
     * A főhőshöz hasonló programkóddal töltsd be a képet a programba és rajzold ki valahova!
     * A díszítő objektumot mozgasd valamilyen képlet szerint a képernyőn!
     * Például egy madarat színusz függvény szerint az égen balról jobbra, majd ha jobb oldalt eltűnt, akkor bal oldalon jöjjön be újra!
   * Valósítsd meg a főhős lábainak (és kezeinek) animálását, ahogy halad előre:
     * Rajzold meg az animáció fázisait! (pl. 4 fázist készíts el 4 különböző képfájlba a rajzolóprogrammal!)
     * A program töltse be az összes fázist egy tömbbe!
     * A tömb elemeit váltogatva rajzold ki, amikor a főhős mozog! (például minden tizedik újrarajzolás (frame) másik fázis mutasson)
     * Gondold végig (és valósítsd meg), hogy mi kell ahhoz, hogy a mozgás hihetően nézzen ki?
   * Rajzolhatsz pálcikaembert is, aminek teljesen folyamatos lehet az animációja. Keresőszó: "canvas how to draw line". [Vonal rajzolása](http://www.w3schools.com/tags/canvas_lineto.asp) [Vonal színének beállítása](http://www.w3schools.com/tags/canvas_strokestyle.asp)
   * Hozz Létre egy [github](https://github.com) felhasználót és...
     * ez ingyenesen megtehető, de **személyes adatok megadása kell hozzá, csak akkor csináld ha ez neked belefér**. A mikéntjét neked kell megtalálni.
     * **Amit githubra felteszel, azt azonnal publikálod az egész világon, ezért jól gondold meg, hogy mit teszel fel!**
     * Forkold le a szakkör oldalát!
     * Az általad módosított változatot egy külön könyvtárba másold be a git repo könyvtárán belül (pl. orak/xy-01/... ide kerül a program.html és a hozzá tartozó képek)!
     * Az általad átírt változatot tedd fel a publikus tárolóba! (keresőszavak: "git commit", "git push")
     * Ellenőrizd, hogy az általad átírt játék változat elérhető lett-e az Internetről elérve, be tudja-e tölteni a programot a böngésző például a http://userneved.github.io/szakkor2014/orak/xy-01/program.html oldalon. Ha nem, akkor miért nem működik, és hogy lehetne megjavítani?
     * Ha készen vagy, akkor küldj egy [pull requestet](https://help.github.com/articles/using-pull-requests), amit mi be tudunk fogadni, és ezzel felkerül az általad írt változat is a szakkör oldalára.
   * Nézd meg egy tetszőleges szabad szoftver játék forráskódját az Interneten! Próbálj megérteni belőle részeket, vagy akár az egész játék működését! [Például a 2048 játék forráskódja megtekinthető itt](https://github.com/gabrielecirulli/2048/)
   * Olvasd el a [GNU kiáltvány](http://gnu.hu/gnu-kialtvany.html)t! Mit gondolsz róla?



