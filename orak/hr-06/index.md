---
layout: default
---
# Objektumok - folytatás + tömbök

 - [2014/2015 informatika szakkör][szakkor_honlap] hatodik órája
 
 [szakkor_honlap]: http://rizsi.github.io/szakkor2014/index.html
 
[kiindulási állapot: előző óra vége](game-00.html)

--------
# Röpi

 - `a={};` mi lesz a.x értéke?
 - Ha a file:///alma/korte/szolo/game.html abszolút elérési úton lévő weboldalból betöltjük a "../../pictures/ugrik.png" fájlt, akkor azt milyen abszolút elérési útvonalon kell találnunk? (Rajzolni is lehet)

# A Mai óra menete:

 - Elmélet az óra felében. (Bármennyit tudnék mesélni...)
 - Gyakorlat, hogy azért haladjunk is :)

--------
# Konstansok használata

 - Hasznos, ha nem akarunk egy számot megtanulni és érteni akarjuk mit jelent az a szám:

    const KEY_LEFT=37;
    const KEY_RIGHT=39;
    const KEY_DOWN=40;
    const KEY_UP=38;

# Ciklusok:

 - Ha van egy *kollekciód* (kb olyan mint a matekban a halmaz) akkor annak az összes elemén végig lehet menni ezzel a módszerrel:
  - for(elem in kollekcio)
  - Utána az elem képviseli az aktuális listaelemet
  - Kollekciók lehetnek: listák, tömbök, szótárak és egyéb adatszerkezetek... Minket ez most nem érdekel csak az, hogy valamilyen módon tárolják az elemeket :)
 - Más fajta ciklusok is vannak, de most erre lesz majd szükségünk.
 - A gyakorlatban amikor használjuk jobban érthető lesz, most csak említés szintjén fontos.

# A függvényekről egy picit többet

 - Ahogy egy sima számot tartalmazó változót létrehozhatsz a következp képpen: `szam = 66;` Úgy létrehozhatsz egy függvényt is: `keyup = function(e){	keys[e.keyCode]=false; };` Ez kb ugyanazzal megfelelő mint a szokásos: `function keyup(e){ keys[e.keyCode]=false; }`
 - Ezek lehetnek akár név nélküli függvények is: `document.body.addEventListener("keydown", function(){ keys[e.keyCode]=true; });`
 - Ezt azért mondom, hogy tudjátok: A függvényeket nagyon rugalmasan is lehet kezelni.

# Ismétlés: Metódusok objektumba ágyazása

 * a metódus nevéhez hozzárendeljük a programsorokat, amiket a metódus meghívásakor végre kell hajtani.
 * Eddig a névhez rendelés a globális kontextusban történt, azaz a metódusok nevei a "Global scope" alatt találhatóak a Debuggerben --> Bárhova írtuk, hogy `keyup({keyCode = 37});` az működött és *globális* hatása volt.
 * A következőkben az lesz a célunk, hogy egyes függvények speciálisan egy objektumhoz tartozzanak és csak arra legyen hatásuk.
 * Rendeljünk metódusnevekhez metódusokat a player objektum alatt:
   * draw() a játékos kirajzolását végezze: azokat a sorokat, amik a játékost rajzolják másoljuk át ide
   * animate() a játékos mozgatását végezze: azokat a sorokat, amik a játékost mozgatják másoljuk át ide
 * this hivatkozás:
   * A this név speciális szerepű: mindig a futó metódust tartalmazó objektumot jelenti. Tehát a player esetén a player metódusaiban player helyett írhatunk this-t.

# Továbbra is objektumok (Javascriptben!)

 - Egy objtektum tárolhat tulajdonságokat "properties". Ez az amit mi `x: 310,` Módon felsoroltunk...
 - Egy tulajdonság a következő tulajdonságokkal rendelkezik:
  - enumerable -> Egy objektum összes tulajdonságán *"végigfuthatunk"* egy ciklussal. Ez majd később lesz nekünk hasznos, még hagyjuk.
  - configurable -> Meg lehet változtatni az értékét, a tulajdonság saját tulajdonságait, vaamint törölni lehet.
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
 -  Folyt köv...

# Var szócska magyarázata?

----------

# Gyakorlati rész:

cloudObject = function(x, y, velocity_x){
	this.x = x;
	this.y = y;
	this.velocity_x = velocity_x;

	this.img = loadImage("../../game/pictures/mistic_cloud.png"); //mistic_cloud.png

	this.logic = function(){
		this.x += this.velocity_x;
		if(this.x > 600){
			this.x = -200;
		}
	};

	this.draw = function(context){
		context.drawImage(this.img, this.x, this.y);
	};
}

----------

# Házi feladat:

 - Dinamikusan kerül meghatározásra, aszerint meddig jutottunk :)

