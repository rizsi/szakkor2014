---
layout: default
---
# Játék nodejs szerveren indítása

 - [2014/2015 informatika szakkör][szakkor_honlap] huszonkettedik órája

[szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html

--------

## A Mai óra anyaga:

 - Cél az, hogy a játék egy nodejs szerveren keresztül többjátékos módban is tudjon működni.
 - A mai órán odáig jutunk el, hogy amit megcsináltunk eddig, az mind egy nodejs szerverről tudjon indulni.

## VPS szerver

 - Virtuális Private Server: virtuális gép, ami egy IP-n keresztül elérhető
 - SSH-n keresztül tudunk belépni szöveges konzolra, és parancssoros felületen menedzselni

## SSH kapcsolat

 - SSH kapcsolat segítségével lehet egy távoli gépre "belépni", azaz konzolos parancssori elérést kapni. Windowson putty programot használtuk.
 - Ha a szerver publikus SSH kulcsát ellenőrizzük belépéskor, hogy az aminek lennie kell (a rendszer üzemeltetője adja meg), akkor biztosak lehetünk benne, hogy harmadik fél nem tudja a kommunikációt elolvasni, vagy módosítani.
 - felhasználónév/jelszó páros tudni kell a belépéshez.

## git parancssorból

 - A szakköri program pillanatnyi állapotát parancssori git kliens segítségével másolta le a szerverre mindenki a saját mappájába.

## mcedit

 - Szöveges konzolon keresztül (tehát SSH-n keresztül is) használható text editor
 - alternatívái: joe, nano, vi

## nodejs szerver, ami a HTML és a JS fájlokat kiszolgálja

 - Elkészült egy egyszerű változat, ami induláskor egy változóba betölti a fájlok tartalmát, és kérésre ezt adja vissza

## python szerver, ami a kép és hangfájlokat visszaadja

 - Hogy óra végéig össze tudjuk rakni azt, hogy a szerverről működjön a programunk egy python HTTP szervert indítottunk a szakkor2014/game lönyvtárból, hogy ez ossza meg a statikus tartalmat (képek, hangfájl). Ezt később le fogjuk cserélni egy nodejs alapú implementációra, hogy egyetlen szerverről menjen minden.
 - Ehelyett egy apache szerverre tettem a game könyvtár elérhetőségét, tehát a képek elérése: 	image.src = "http://rizsi.com/pictures/"+src;

## Óra után készült el

 - A VPS szerver most már elérhető a rizsi.com címen, így a kódba ezt a címet írjuk az IP helyett.
 - index.html helyett program.html néven lesz elérhető az alkalmazás

## Házi feladat
 - Lépjetek be a VPS szerverre
 - Indítsátok el a játékunkat úgy, hogy a nodejs szervert! Próbáljátok ki az otthoni gépetekről, hogy működik-e?
 - Az alábbi paranccsal el lehet indítnai úgy a nodejs szervert, hogy az SSH kilépés után is fusson:
   - $ nohup nodejs server.js &
 - Leállítás:
   - $ killall -u myself nodejs
   - Leállítja az összes futó nodejs nevű programot, amit a te felhasználód indított (myself helyére a szerveren lévő felhasználónevedet írd!)
 - Csináljátok meg, hogy fixen fusson a programotok, és küldjétek el a linket emailen, amivel meg lehet nézni!
 - Próbáljatok fájlokat szerkeszteni - pl a program.html tartalmát - joe, nano és vi editorokkal (használjatok netes kereséseket, hogy hogy kell ezeket használni!)



