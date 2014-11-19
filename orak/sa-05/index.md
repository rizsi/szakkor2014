---
layout: default
---
# Objektumok - folytatás

 - [2014/2015 informatika szakkör][szakkor_honlap] ötödik órája
 
 [szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html
 
[kiindulási állapot: előző óra vége](game-00.html)

[eddig jutottunk](game-final.html)

# Elérési utak problematikája újra:

 * Relatív útvonalakat használva egyben másolva működni fog a program file:// url-ről betöltve Internet elérés nélkül is.
 * Az egész könyvtárszerkezetet átmásolva a játékunk nem fog attól függeni, hogy az eredeti helyén hosztolják-e még a fájlt.
 * Viszont annyi helyre lemásolni a fájlt, ahány helyen használjuk, plusz munka és plusz hely.
 * Ezért könyvtárak között lépkedős relatív útvonalra írjuk át a képek elérését.
 * De úgy, hogy csak egy helyen kelljen megadni a képeket tartalmazó folder helyét.

Megoldás: [képek elérési útvonala relatív, de nem csinálunk több másolatot a képekből](game-01.html)

# Metódusok objektumba ágyazása

 * a metódus nevéhez hozzárendeljük a programsorokat, amiket a metódus meghívásakor végre kell hajtani.
 * Eddig a névhez rendelés a globális kontextusban történt, azaz a metódusok nevei a "Global scope" alatt találhatóak a Debuggerben
 * Rendeljünk metódusnevekhez metódusokat a player objektum alatt:
   * draw() a játékos kirajzolását végezze: azokat a sorokat, amik a játékost rajzolják másoljuk át ide
   * animate() a játékos mozgatását végezze: azokat a sorokat, amik a játékost mozgatják másoljuk át ide
 * this hivatkozás:
   * A this név speciális szerepű: mindig a futó metódust tartalmazó objektumot jelenti. Tehát a player esetén a player metódusaiban player helyett írhatunk this-t.
   * használjuk a this pointert a játékos objektum metódusaiban!

# Ugrás megvalósítása

 * A player animate metódusába kell beleírni:
   * kell néhány új mező a player objektumra: függőleges sebesség és függőleges pozíció
   * Ha a függőleges pozíció 0 (talajszint), és a "fel" gombot megnyomjuk, akkor a sebességhez adjunk egy nagy számot (az ugrást pillanatszerű impulzusszerzésnek tekintjük, az elrugaszkodást nem modellezzük részleteiben)
   * A pozíciót a sebesség alapján minden animációs lépésben frissítjük ( elmozdulás=idő * sebesség )
   * Ha a függőleges pozíció 0-nál nagyobb, akkor a gravitáció minden animációs lépésben hat: a sebesség lefelé nő ( szabadesés: sebesség változása=gyorsulás * idő )
   * Ha a függőleges pozíció 0 alá kerülne, akkor 0-ba állítjuk, és a sebességet is 0-ba állíjuk (alátámasztási kényszererő hatását szimuláljuk így)

[Ez lesz a végeredmény](../sa-04/game-02.html)

# prototype hivatkozás szerepe

 * Várhatóan a következő órára marad, de ha nem akkor erről lesz szó :-)
 
# Házi feladat

 * ugrás paraméterezése tetszetősre
 * extra funkciók: double jump, lenyomás idejétől függő jump
