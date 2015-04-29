---
layout: default
---
# Multiplayer nodejs szerverrel - játékosok közti interakció

 - [2014/2015 informatika szakkör][szakkor_honlap] huszonnegyedik órája

[szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html

--------

## Elmélet amit me még átbeszélünk:

 - Websocketet kommunikáció a kliens böngésző és a node.js szerver között:
   - induláskor kapcsolódik
   - ha sikerült a kapcsolat, akkor üzenetet küld
   - az üzeneteket fogadja
   - Bekerül a szerver nyilvántartásába
   - A szerver továbbítja az üzeneteket, hogy mindenki értesüljön a változásokról

## Kommunikáció JSON formátummal
 - alap esetben stringet tudunk küldeni. Azt megoldani, hogy egy üzenetben több adattagot tudjunk küldeni, mondjuk az avatar koordinátáit összefűzzük egy stringbe, majd az üzenetet a másik oldalon szétbontsuk elég sok munka lenne.
 - Ezt a problémát úgy hívják, hogy adat sorosítás (serialization/deserialization)
 - A JSON formátum használatával Javascript objektumokat tudunk küldeni könnyen. Előnye, hogy teljes objektum szerkezeteket ír és olvas stringbe/ből. Az adat sorosítás problémáját megoldja.
   - Ha például ezt a stringet akarjuk elküldeni, akkor is az eszképelést automatikusan megoldja a rendszer: alma"'árvíztűrőtükörfúrógép
   - A JSON objektum, amin keresztül a sorosítás elérhető a modern JavaScript motoroknak beépítetten része (régebbi böngészőkben nem biztos, hogy működik

## Interakció a játékosok között:

 - Mindenképpen szükséges a saját pozíciónkat elküldeni a többieknek
 - Alapesetben az egyes játéktér elemek csak a mi kliens oldali példányunkban létezik.
 - Végig kell gondolni, mely játékelemek szükségesek vagy lényegesek a multiplayer játék során. Ezután megoldhatnánk, hogy a szerveren egy "globális" játéktér legyen és az kliensek a bejelentkezéskor lekérdezik, hogy már létezik-e egy játéktér vagy ők hozzák azt létre? (Szobák nyitásának lehetősége? Túl mutat jelenleg a tárgy céljain)
 - Az én ötletem: A játéktér passzív, minden kliensben azonos és nem következnek be változások bennük (nem mozognak, nem halnak meg). Ilyenek eddig a platformok és a tüskék.
 - A multiplayer lényege a nehéz pályán való közös továbbjutás lenne:
   - A játékosok egymáshoz képest el tudják taszítani egymást és magukhoz tudják rántani a másikat.
   - Ilyen módon meg van az interakció, a multiplayer lényege, de egyszerűsödik a kód.
   - Akár kooperatív vagy küzdő játéktér kialakítható.



