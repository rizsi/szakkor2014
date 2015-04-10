---
layout: default
---
# Multiplayer nodejs szerveren keresztül

 - [2014/2015 informatika szakkör][szakkor_honlap] huszonharmadik órája

[szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html

--------

## nodejs statikus fájl kiszolgáló telepítése

 - A nodejs szervernek alapbeállításként nem része, de kiegészítésként telepíteni lehet
 - Először az "npm" "nodejs package manager"-t kell telepíteni az Ubuntu szerveren (minden gépre telepíteni kell, amin a szervert futtatni szeretnénk). Ezt csak rendszergazdai joggal lehet megtenni, ezért ez már előre telepítve lesz nekünk:
   - $ sudo apt-get install npm
 - Utána az npm segítségével telepítjük a nodejs-en belülre a node-static csomagot.
   - $ npm install node-static
 - Ez egy node-modules könyvtárat létre fog hozni a projektünk mappájába. Hogy ez ne legyen a verziókezelőbe feltöltve, a .gitignore fájlba betesszük a node_modules sort

## nodejs statikus fájl kiszolgáló használata

 - A node-static komponens felhasználásával a server.js programban megvalósítjuk azt, hogy amennyiben nem a html, vagy a js fájlokat kéri a browser, akkor a ../../game könyvtárból adjuk vissza a fájlokat.
 - Így a képek és hangok elérési útvonalát újra módosítanunk kell (immáron remélhetőleg véglegesen).

## kommunikáció a futó böngészőben és a szerveren futó program között



