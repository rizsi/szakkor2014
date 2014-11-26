---
layout: default
---
# Keretrendszer építése

 - [2014/2015 informatika szakkör][szakkor_honlap] hetedik órája
 - [kiindulási állapot: előző óra vége](../hr-07/game-00.html)
 - [óra végi eredmény:](game-final.html)

[szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html 

--------

## Röpi

  - Hogyan hajtunk végre egy parancsot egy kollekció összes elemén?
    - Írd fel a kódot, ha a kollekció neve: tomb
  - Sorolj fel minél több dolgot, ami meghatározhat egy szinusz függvényt.
    - Nekem 4 jut eszembe elsőre, de nem biztos hogy mindegyiket vettük alaposan, 2-3 már jó
    - Ha tudod, egészítsd ki a képletet velük: y = sin(x)
  - Hogyan hozunk létre egy új felhőt, aminek cloud a neve és a 0, 10 koordinátákon van?
    - A Prototípusa: cloudObject = function(x, y){ ... }

## A Mai óra menete:

 - Elmélet: Prototípúsok/Osztályok
 - Gyakorlat: Kényelmes programozás + haladó képernyő készítése

--------

## Hol tartottunk?

### Ciklusok:

 - Ha van egy *kollekciód* (kb olyan mint a matekban a halmaz) akkor annak az összes elemén végig lehet menni ezzel a módszerrel:
	
	kollekcio = {1, 2, 3, 4}; 

	for(i in kollekcio){ 
		elem[i] += 1; //Nagyon fontos dolog amit minden egyes elemmel csinálni akarok... 
	} 

  - Utána az *elem* képviseli az aktuális listaelemet


### Függvények:

  - Függvények lehetnek:
    - keyup = function(e){	 keys[e.keyCode]=false; };
    - function keyup(e){     keys[e.keyCode]=false; }
    - Név nélküliek: addEventListener("keydown", function(){ keys[e.keyCode]=true; });

### Objektumok:
  
  - Alapvetően egy függvény ami *"magában"* hordoz változókat és függvényeket.
  - A new operátorral tudunk létrehozni egy új példányt belőle.
  - Példakód:


        function people(name){ 
            this.name = name; 
            this.sayHi = function(){ 
                console.log("Hi, my name is " + this.name); 
            } 
        } 

        var rudolf = new people("Rudolf"); 
 
        rudolf.sayHi(); 

### Tömbök:

  - Sajnos pontatlanul tanítottam, sorry :/
  - Amit eddig tömbnek neveztünk:
    - var tomb = {};
    - Az igazából egy objektum, ami "üres".
    - Egy objektumot is lehet tömbként kezelni, mivel a Javascript-ben az objektum egyfajta "kollekciója" tulajdonságoknak. A tulajdonságoknak van nevük és értékük. Példa:


        tomb1 = { 
            szam:1, 
            betu: 'a', 
            fgv: function(){ 
                console.log("függvény"); 
            } 
        }; 
        var tomb2 = { 0: 2, 1: 3, 2: 5, 3: 7}; 
        console.log(tomb2[0]);      //A konzolra ír: 2 
        console.log(tomb1[0]);      //A konzolra ír: undefined 
        console.log(tomb1["szam"]); //A konzolra ír: 1 
        console.log(tomb1["fgv"]);  //A konzolra ír: function (){ console.log("függvény"); } 


  - Ami igazából egy tömb: var tomb = [];
  - Nagy gond nincs, nagyon hasonlóan működik addig a szintig amit mi tanultunk eddig:

        var tomb = []; 
        tomb[0] = 1; 
        tomb[2] = 3; 
 
        for(i in tomb) 
             console.log(i + " - " + tomb[i]); 
 
        console.log(tomb[1]); 
 
        Amit kiír: 
            0 - 1 
            2 - 3 
            undefined 

  - Új elem hozzáadása egy egyszerű értékadás: tomb[1] = 77;
  - Elem törlése: delete tomb[1];
  - Ilyenkor a tomb[1] undefined lesz.
  - Amikor viszont rendesen kezelünk egy tömböt akkor 0-tól számozzuk az elemeit és folytonosan töltjük fel!


------------------------------------------------------------

# Új anyag:

## Tömbök

  - További segítség a **splice(index, howmany, item1, item2...)** függvény, amelyik függvény minden kollekciónak van.
    - Az index-től kezdve töröl *howmany* elemet: Az első 2 törlése:
      - tomb.splice(0, 2);
    - Ha be akarunk szúrni elemeket az elejére:
      - tomb.splice(0, 0, elso, masodik)
      - Ilyenkor 0 elemet töröl és az összes további átadott *argumentumot* (elso, masodik) hozzáfűzi a megadott indextől kezdve.
  - További segítség még, hogy minden kollekciónak van egy .length változója ami azt tartalmazza hány elem van benne. 
    - Példa:


        var tomb = [1, 3]; 
 
        console.log("Tárolt elemek száma: " + tomb.length); 
        for(i in tomb) 
            console.log(i + " - " + tomb[i]); 
        console.log("--------"); 
    
        tomb.splice(1, 0, 2); //Beszúrás az egyes index-hez (2. elem) 
    
        console.log("Tárolt elemek száma: " + tomb.length); 
            for(i in tomb) 
        console.log(i + " - " + tomb[i]); 
        console.log("--------"); 
    
        tomb.splice(1, 0, 4); //Beszúrás az egyes index-hez (második elem) 
    
        console.log("Tárolt elemek száma: " + tomb.length); 
        for(i in tomb) 
            console.log(i + " - " + tomb[i]); 
        console.log("--------"); 
    
        tomb.splice(1, 1);  //Törlés az egyes index-nél (második elem) 
        
        console.log("Tárolt elemek száma: " + tomb.length); 
        for(i in tomb) 
            console.log(i + " - " + tomb[i]); 
    
        Amit kiír: 
    
        Tárolt elemek száma: 2 
        0 - 1 
        1 - 3 
        -------- 
        Tárolt elemek száma: 3 
        0 - 1 
        1 - 2 
        2 - 3     
        --------     
        Tárolt elemek száma: 4 
        0 - 1 
        1 - 4 
        2 - 2 
        3 - 3 
        -------- 
        Tárolt elemek száma: 3 
        0 - 1 
        1 - 2 
        2 - 3 

## Objektumok

  - Először jöjjön egy kis kiegészítő az előző órához. Amikor a cloudObject-en belül megírtuk a *draw()* és *logic()* függvényt akkor ez azt jelentette, hogy minden egyes később létrehozott cloud1, cloud2... példány magába foglal egy saját *draw()* és egy saját *logic()* fügvényt. Ez nem praktikus, mivel feleslegesen van meg többször ugyanaz, pocsékoljuk a memóriát...
  - Ehelyett a cloudObject-nek a **prototype**-jában hozzuk létre a *draw()* és *logic()* függvényeket, amit minden egyes példány el tud érni és használni tud. Hogy ez hogyan is néz ki?

        function cloudObject(x, y){ 
            this.x = x; 
            this.y = y; 
        } 

        cloudObject.prototype.draw = function(){ ... }; 
        cloudObject.prototype.logic = function(){ ... }; 

  - Ez nagyszerű! Sokkal jobb kódot írtunk! Bár igaz, hogy kevésbé szebb...
  - Majd később azt is meg fogjuk tudni csinálni, hogy egy objektum rendelkezzen egy másik objektum összes tulajdonságával: változóival és függvényeivel. Mondjuk egy új felhőtípus aminek más a képe és a mozgása,de ugyanaz a kirajzolása és a legtöbb tulajdonsága.
  - Még nem szükséges ez a saját játékunkban, úgyhogy későbbre hagyjuk, de ötleteljetek addig is hol tudnánk ezt hasznosítani!

----------

# Házi feladat:

 - Ugyan az mint legutoljára, az átlátszóság változtatása szinusz függvény szerint.
 - Szorgalmi: A szinusz függvény mesteri kezelése, így az eltűnés és megjelenés élethű megvalósítása :)
