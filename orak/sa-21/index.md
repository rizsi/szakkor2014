---
layout: default
---
# Számítógép hálózatok bevezető

 - [2014/2015 informatika szakkör][szakkor_honlap] huszonegyedik órája
 
 [szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html

## DNS - Domain Name Server

 - Számítógép név -> IP cím hozzárendelés szolgáltatás

## TCP port

 - Egy adott gépen egy számmal ellátott kapcsolódási pont. Pontosan egy szerver program lehet mögötte. Például: github.com:22 - A github.com szerveren a 22-es port mögött egy SSH szerver van.
 - IP cím és TCP port pontosan azonosít egy szolgáltatást az adott hálózaton (például az Interneten)

## TCP kapcsolat

 - Két gép közötti kapcsolat. Az egyik gép a szerver, a másik a kliens.
 - Mindkét oldalról párhuzamosan írható csatorna (duplex).
 - A csatornába írt bájtok sorrendhelyesen olvashatóak ki a másik oldali programból.

## HTTP kapcsolat

 - TCP feletti kapcsolat.
 - A kommunikáció szabályait a HTTP protokoll határozza meg.
 - Mi egyszerű kérdezz-felelek céllal fogjuk használni, ilyen kapcsolaton keresztül szólítja meg a böngészőbeli programunk a nodejs szervert.

## nodejs alkalmazás

 - Javascript programot futtat böngésző nélkül.
 - Parancssoros változatban is futtatható, ha nem adunk meg indítandó js fájlt.
 - Indítandó js fájlt megadva egy előre megírt programot futtat.
 - A programon belül el tudunk indítani egy HTTP szerver szolgáltatást egy választott porton.
 - [Minimális nodejs HTTP szerver példaprogram](server.js)

