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

## git parancssorból

## mcedit

 - Szöveges konzolon keresztül (tehát SSH-n keresztül is) használható text editor
 - alternatívái: joe, nano, vi

## nodejs szerver, ami a HTML és a JS fájlokat kiszolgálja

 - Elkészült egy egyszerű változat, ami induláskor egy változóba betölti a fájlok tartalmát, és kérésre ezt adja vissza

## python szerver, ami a kép és hangfájlokat visszaadja

 - Hogy óra végéig össze tudjuk rakni azt, hogy a szerverről működjön a programunk egy python HTTP szervert indítottunk a szakkor2014/game lönyvtárból, hogy ez ossza meg a statikus tartalmat (képek, hangfájl). Ezt később le fogjuk cserélni egy nodejs alapú implementációra, hogy egyetlen szerverről menjen minden.
 - Indítása a szakkor2014/game könyvtárból: $ python -m SimpleHTTPServer 8000
 - Ahol a 8000 a kívánt port, ahol a webszerver nyílni fog.

## Óra után készült el

 - A VPS szerver most már elérhető a rizsi.com címen, így a kódba ezt a címet írjuk az IP helyett.

## Házi feladat
 - Lépjetek be a VPS szerverre
 - Indítsátok el a játékunkat úgy, hogy a nodejs szervert, és a 
 - Próbáljatok fájlokat szerkeszteni - pl a program.html tartalmát - joe, nano és vi editorokkal (használjatok netes kereséseket, hogy hogy kell ezeket használni!)


