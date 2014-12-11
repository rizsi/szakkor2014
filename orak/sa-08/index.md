---
layout: default
---
# Szemétgyűjtő - garbage collector

 - [2014/2015 informatika szakkör][szakkor_honlap] nyolcadik órája
 
 [szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html
 
# Az alap probléma

 * A program futása során objektumokat hozunk létre. Ezeket a RAM memóriában tárolja a program. A RAM mérete véges, ezért a már nem kellő objektumokat ki kell törölni belőle.
 * A program futásának állapota az alábbiakkal írható le:
   * globális változó hozzárendelések (global scope)
   * végrehajtási állapot:
     * futó metódusok állapota: melyik utasítás fut éppen, és hova fog visszatérni (és ugyanez arra a pontra, ahova vissza fog térni).
     * metódus változó hozzárendelések (function scope)
 * A tárolt objektumokat gráfként rajzolhatjuk le:
   * Minden csomópont egy objektum (kulcs-érték hozzárendelés JavaScript-ben)
   * Irányított él mutat a csomópontból a hivatkozott objektumokra.
 * Belátható, hogy azon objektumok, amikre a global scope-ból és az éppen futó function scope-okból nincsen hivatkozás, már soha nem lesznek elérhetőek a program számára. Tehát ezek az objektumok törölhetőek.
 * Pontosan a fent leírt logikát hajtja végre a szemétgyűjtő algoritmus a JavaScript futtatókörnyezetben.

# Házi feladat
 * Írj olyan JavaScript programot, ami betelíti a rendelkezésre álló memóriát! Mérd meg, hogy mennyi foglalás után lép ki a program!
 