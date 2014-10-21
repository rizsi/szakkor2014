---
layout: default
---

#Összefoglaló a parancsokról

 - Amikor a honlapod betölt, akkor mely függvényeket hívja meg és futtassa:


        window.addEventListener("load", function(){
            initialize();
            animate();
        });

 - Az **initialize()** függvény fut le elsőként. Itt hozzuk létre az összes dolgot amit a későbbiekben használni fogunk.
  -  `canvas = document.getElementById('mycanvas');` --> a **canvas** változóval hivatkozni fogunk tudni a weblapon lévő *mycanvas* nevű elemre, ami egy Javascript vászon.
  - `context = canvas.getContext('2d');` --> a **context** változóval hivatkozni fogunk tudni a Javascript vásznunk kirajzolásért felelős részére.
  - `background = loadImage("http... .png");` --> Létrehozunk a *loadImage()* fügvénnyel egy képet (a link alapján) és azt a **background** nevű változóban tároljuk el.
  - `rightkeydown = false;` --> Létrehozunk változókat amiknek értéket adunk.
  - `document.body.addEventListener("keydown", fgv);` --> Megadjuk az *fgv* nevű függvényünket, hogy "hívódjon meg", ha bekövetkezik a *keydown* nevű esemény a honlapunkon (leütnek egy billentyűzetet).
  - Létrehozunk egy objektumot, aminek adattagjai lesznek:


        cloud = {
            x: 310,
            y: 90,
        };

 - Az **animate()** függvény másodpercenként 60-szor fut le, végrehajtva a játék logikáját és újrarajzolva a vásznat.
  - `context.clearRect(0,0,canvas.width, canvas.height);` --> 
  - `context.drawImage(img, 0, 0);` --> 
  - `context.fillText("szoveg, 10, 20);` --> 



