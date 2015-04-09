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
 - Indítása a szakkor2014/game könyvtárból: $ python -m SimpleHTTPServer 8000
 - Ahol a 8000 a kívánt port, ahol a webszerver nyílni fog.
 - Ha nem a 8000-es porton indítjátok a "segéd" webszervert, akkor a programban is át kell írni a hivatkozásokat - a program.html elején!

## Óra után készült el

 - A VPS szerver most már elérhető a rizsi.com címen, így a kódba ezt a címet írjuk az IP helyett.
 - index.html helyett program.html néven lesz elérhető az alkalmazás

## Házi feladat
 - Lépjetek be a VPS szerverre
 - Indítsátok el a játékunkat úgy, hogy a nodejs szervert, és a python szervert is elindítjátok! Próbáljátok ki az otthoni gépetekről, hogy működik-e?
 - Próbáljatok fájlokat szerkeszteni - pl a program.html tartalmát - joe, nano és vi editorokkal (használjatok netes kereséseket, hogy hogy kell ezeket használni!)


