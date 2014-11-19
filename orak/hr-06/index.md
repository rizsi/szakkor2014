---
layout: default
---
# Objektumok - folytatás + tömbök

 - [2014/2015 informatika szakkör][szakkor_honlap] hatodik órája
 - [kiindulási állapot: előző óra vége](game-02.html)
 - [óra végi eredmény:](game-00.html)

[szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html 

--------

## Röpi

 - `a={};` mi lesz a.x értéke?
 - Ha a file:///alma/korte/szolo/game.html abszolút elérési úton lévő weboldalból betöltjük a "../../pictures/ugrik.png" fájlt, akkor azt milyen abszolút elérési útvonalon kell találnunk? (Rajzolni is lehet)

## A Mai óra menete:

 - Elmélet az óra felében. (Bármennyit tudnék mesélni...)
 - Gyakorlat, hogy azért haladjunk is :)

--------

## Bemelegítés

### Konstansok használata

 - Hasznos, ha nem akarunk egy számot megtanulni és érteni akarjuk mit jelent az a szám:

    const KEY_LEFT=37;
    const KEY_RIGHT=39;
    const KEY_DOWN=40;
    const KEY_UP=38;

### Ciklusok:

 - Ha van egy *kollekciód* (kb olyan mint a matekban a halmaz) akkor annak az összes elemén végig lehet menni ezzel a módszerrel:
	
	kollekcio = {1, 2, 3, 4};

	for(elem in kollekcio){
		elem += 1; //Nagyon fontos dolog amit minden egyes elemmel csinálni akarok...
	}

  - Utána az *elem* képviseli az aktuális listaelemet
  - Kollekciók lehetnek: listák, tömbök, szótárak és egyéb adatszerkezetek... Minket ez most nem érdekel csak az, hogy valamilyen módon tárolják az elemeket :)
 - Más fajta ciklusok is vannak, de most csak erre lesz majd szükségünk.
 - A gyakorlatban amikor használjuk jobban érthető lesz, most csak említés szintjén fontos.

### A függvényekről egy picit többet

 - Ahogy egy sima számot tartalmazó változót létrehozhatsz a következő képpen: `szam = 66;` Úgy létrehozhatsz egy függvényt is: `keyup = function(e){	keys[e.keyCode]=false; };` Ez kb ugyanazzal megfelelő mint a szokásos: `function keyup(e){ keys[e.keyCode]=false; }`
 - Ezek lehetnek akár név nélküli függvények is: `document.body.addEventListener("keydown", function(){ keys[e.keyCode]=true; });`
 - Ezt azért mondom, hogy tudjátok: A függvényeket nagyon rugalmasan is lehet kezelni.

## Ismétlés: Metódusok objektumba ágyazása

 * A metódus nevéhez hozzárendeljük a programsorokat, amiket a metódus meghívásakor végre kell hajtani. (Kb ugyan az amit az előbb részleteztem)
 * Eddig a névhez rendelés a globális kontextusban történt, azaz a metódusok nevei a "Global scope" alatt találhatóak a Debuggerben --> Bárhova írtuk, hogy `keyup({keyCode = 37});` az működött és *globális* hatása volt.
 * A következőkben az lesz a célunk, hogy egyes függvények speciálisan egy objektumhoz tartozzanak és csak arra legyen hatásuk.
 * Rendeljünk metódusnevekhez metódusokat a cloud objektum alatt:
   * draw() a kirajzolását végezze: azokat a sorokat, amik a rajzolásért felelősek másoljuk át ide
   * logic() a elem logikai részét képviseli: azmegfelelő sorokat másoljuk át ide
 * this hivatkozás:
   * A this név speciális szerepű: mindig a futó metódust tartalmazó objektumot jelenti. Tehát a player esetén a player metódusaiban player helyett írhatunk this-t.
   - **Ha nem világos kérdezz rá!**

<!---
## Továbbra is objektumok (Javascriptben!)

 - Egy objtektum tárolhat tulajdonságokat "properties". Ez az amit mi `x: 310,` módon felsoroltunk...
 - Egy tulajdonság a következő tulajdonságokkal rendelkezik:
   - enumerable -> Egy objektum összes tulajdonságán *"végigfuthatunk"* egy ciklussal. Ez majd később lesz nekünk hasznos, még hagyjuk.
   - configurable -> Meg lehet változtatni az értékét, a tulajdonság saját tulajdonságait is, valamint törölni lehet.
   - writable -> Ki lehet cserélni egy másik tulajdonsággal.
 - Egy tulajdonság lehet egy függvény is!

     Aniko = {
         csaladnev: "Refi",
         utonev: "Aniko",
         hazassag: function(kihez){
             this.csaladnev = kihez.csaladnev+"né";
             this.ferj = kihez;
         }
     };

 - Két féle módon lehet elérni egy tulajdonságát az objektumoknak:
   - A szokásos: `tanar.nev = "Rudi";`
   - Az eredetibb, de ritkán használt: `tanar["nev"] = Rudi;` (Akinek ez a kifejezés máshonnan ismerős, igen ez egy hash tábla, másnéven szótár, alias kulcs-érték párok halmaza...)
 - Egy objektumnak lehet egy... Wait for it!... Prototípusa! Bizony nem szülő objektuma, hanem prototípusa. Csak, hogy ne kezeld teljesen úgy ahogy máshol szokás, de attól még ugyanarra jó.
   - Ha az objektumnak el próbálod érni egy olyan tulajdonságát ami nincs még létrehozva neki, akkor a prototípusában kezdi el keresni azt a tulajdonságot.
   - Ha a szokásos módon hozunk létre egy objektumot: `var rudi = {nev: "Rudi", kor: 23};` akkor automatikusan lesz egy prototípusa, ez pedig az *Object.prototype*. Ennek van pár hasznos tulajdonsága: [kép](http://yehudakatz.com/wp-content/uploads/2011/08/prototype-chain.png)
   - Ha én készítek egy saját tulajdonságot ugyanazzal a névvel: `rudi.toString = function(){ ... };` Akkor a saját tulajdonsága lesz automatikusan elérve, nem pedig a prototípusáé.
-->
 -  Folyt köv...

----------

# Gyakorlati rész:

	cloudObject = function(x, y, velocity_x){
		this.x = x;
		this.y = y;
		this.velocity_x = velocity_x;

		this.img = loadImage("mistic_cloud.png");

		this.logic = function(){
			this.x += this.velocity_x;
			if(this.x > 600){
				this.x = -300;
			}
		};

		this.draw = function(context){
			context.drawImage(this.img, this.x, this.y);
		};
	}

----------

# Házi feladat:

 - A felhők eltűntetése és megjelenítése egy szinusz függvény alapján.
 - Felvázolom a működést és elég részletet, hogy magadtól el tudd készíteni.
 - Javítások:
   - A talajszint 176 pixel
   - Hasznos lenne hosszútávon, hogy az összes random generálást a cloudObject függvénybe tesszük és ne paraméterként adjuk át.
   - Az amplitúdónak értelmezzük inkább azt, hogy a szinusz függvény alapvetően 1 amplitúdóval rendelkezik. Tehát -1 és +1 között mozog. Ilyenkor a teljes tartomány ugye 2 amit én az órán amplitúdóként mondtam. Ezt kijavítanám, mert az általánosan bevett szokás nem ez... (Az eddigi értelmezésünket gyakorlatilag megfelezzük...)
 - A Draw metódust kiegészítjük átlátszóság kezelésével:

    this.draw = function(context){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;	context.globalAlpha = this.alpha;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;	context.drawImage(this.img, this.x, this.y);<br>
    &nbsp;&nbsp;&nbsp;&nbsp;	context.globalAlpha = 1;<br>
    }

 - Létrehozzuk a szükséges új változókat:
   - **alpha - Átlátszóság:** 0 az átlátszó, 1 a teljesen látható
   - **angle - Szög:** 0 és 2*PI között mozog, de ha véletlen nagyobb akkor sem gond, folytatja a periodicitást a szinusz... (csak ugye a végtelent nem kezeli "rendesen" a számítógép)Ezt adjuk meg a szinusz függvénynek, hisz az idővel vagy egy számlálóval nehéz lenne számolni, azt értelmezni.
   - **phase - Fázis:** 0 és 2*PI közötti értéket vehet vel. Ez azt adja meg, hogy amikor elkezdődik az animáció milyen szögből induljon. Íg nem mindegyik egyszerre kezd el eltűnni és megjelenni.
   - **amplitude - Amplitúdó:** 0.5 és 0 közötti értéket vesz fel. Azt határozza meg milyen mértékben változik meg az átlátszóság az átlaghoz képest pluszba *(fel)*, illetve mínuszba *(le)*. Ha 0.5 akkor egyszer teljesen eltűnik, egyszer teljesen megjelenik. Ha ennél kisebb akkor kevésbé lesz nagy a változás...
   - **average - Átlag:** Ha az amplitúdó 0 akkor 0 és 1 közötti értéket vesz fel, ha az amplitúdó 0.5 akkor csak 0.5 lehet *(középen lesz az átlag, félig átlátszón)*. A többi értéken és a logikáján tessék gondolkodni :) Az az érték ami körül változik az átlátszóság. (amplitúdónyival minuszba *(lejjebb)* és pluszba *(feljebb)* a szinusz tulajdonságai miatt)
 - Kiszámoljuk, hogy ha 10 másodperc alatt akarunk egy teljes *periódust* lejátszani a szinusz fügvényünkkel, akkor a másoderc 60.-ad része alatt mennyit kell hozzáadni a szög-höz:
   - A teljes periódusa a *szög* változónak:
     - 2 * *Math.PI*
   - Egy másodperc alatt lefutó függvények száma:
     - 60
   - Egy másodperc alatt 1 periódus tehát:
     - angle += 2*PI/60
   - Ezt egyszerűsítve és emberibbé tennéve:
     - angle += PI/30/10
     - Itt megjegyezném, hogy ezek szerint a 10-et elnevezhetnénk periódusidőnek :)
   - Végül, ha egy periódusnál többnél járunk akkor levonunk belőle egy periódust, hogy ne próbáljon meg végtelenig számolni (úgy sem menne neki :)
     - Ehhez egy **if** fog kelleni...
  - Végül állítsuk össze a függvényünket:
    - alpha = average + amplitude * sin( angle + phase )
    - Direkt nem egyből átmásolható Javascriptbe, logikai hiba nincs benne csak nem Javascript kód

## Szorgalmi feladat:

 - A felhők jelenjenek meg és tűnjenek el random:
   - A szinusz függvény kezdőfázisa (fázisa) 3*PI/2 legyen, így a teljesen átlátszótól indul.
   - Csak egy periódust csináljon (az angle 0-tól 2*PI-ig megy, utána megáll). Így teljesen átlátszó állapotban álljon meg.
   - Az átlag egyenlő legyen az amplitúdóval. Így garantált, hogy teljesen átlátszó lesz az elején, végén.
   - Ha elérte az átlátszó állapotot akkor generálja újra a koordinátáit sebességét, amplitúját-átlagát, *(periódusidejét: olyan 7 és 14 szekundum közöttit érdemes szerintem betenni)*
   - A legelső értékadásnál érdemes lehet az angle értékét random választani 0 és 2*PI között, mivel mi a fázist most máshogy értelmezzük ugye egy picit és így tudjuk kompenzálni azt könnyen, hogy ne mindegyik egyszerre kezdjen el megjelenni és eltűnni :)
 - Eredmény: [link](game-01.html)

