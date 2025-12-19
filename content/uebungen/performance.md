+++
date = '2025-12-18T11:50:29+01:00'
title = 'Performance'
weight = 15
+++

Da Performance-Optimierungen in der Praxis nur recht selten aber meist an sehr kritischen Stellen einer Software nötig ist, sollte man das Vorgehen vorher an weniger kritischen Testobjekten üben.

## Vorbereitung

Kopiere folgenden Beispielcode, welcher die ersten 40 Fibonacci-Zahlen rekursiv berechnet, in eine Datei namens `fib.js`:

```javascript
export function fib(n) {
  switch (n) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return fib(n - 2) + fib(n - 1);
  }
}

for (let i = 0; i < 40; i++) {
  const n = fib(i);
  console.log(`fib(${i})=${n}`);
}
```

### Profiling

Neben einer einigermassen aktuellen Version von [Deno](https://deno.com/) von [Node.js](https://nodejs.org/en/download) wird zusätzlich [flamebearer](https://www.npmjs.com/package/flamebearer) benötigt, welches sich folgendermassen installieren lässt:

```bash
npm install -g flamebearer
```

Führe dieses Program nun mit Node und dem aktivierten Profiler aus:

```bash
node --prof fib.js
```

Dadurch sollte im aktuellen Arbeitsverzeichnis eine Datei mit einem Namen nach dem Muster `isolate-*-v8.log` entstanden sein. Diese kann nun folgendermassen als sogenannter _Flamegraph_ betrachtet werden: (Wichtig: schreibe unter Windows `node.exe` statt `node`!)

```bash
node.exe --prof-process --preprocess -j isolate-*-v8.log | flamebearer
```
Anhand dieser Grafik lässt sich der Hot Spot – die Funktion `fib` – recht einfach ausmachen:

![`fib` ist wenig überraschend der Hot Spot](/performance/flamebearer-fib.png)

### Benchmarking

Eine Funktion muss teilweise sehr oft aufgerufen werden, bis sich ihr Laufzeitverhalten stabilisiert – und dadurch Aussagen über ihre Laufzeiteigenschaften messbar werden. Glücklicherweise verfügt Deno über eine Funktion namens `Deno.bench`, die analog zu `Deno.test` funktioniert, aber nicht nur einen Testfall ausführt, sondern auch noch die Performance des ausgeführten Codes misst.

Kopiere folgenden Code in eine Datei namens `fib_test.js`:

```javascript
import { assertEquals } from "@std/assert";
import { fib } from "./fib.js";

Deno.bench("fib(30)", () => {
  assertEquals(fib(30), 832040);
});
```

Führe diesen Benchmark nun folgendermassen aus:

```bash
deno init
deno install
deno bench fib_test.js
```

Dabei sollte eine mit dieser vergleichbaren Ausgabe erfolgen, wobei die Zahlen natürlich abweichen können:

| benchmark   | time/iter (avg) |  iter/s |      (min … max)    |      p75 |      p99 |     p995 |
| ----------- | --------------: | ------: | :-----------------: | -------: | -------: | -------: |
| fib(30)     |          7.6 ms |   132.4 | (7.1 ms …   9.6 ms) |   7.6 ms |   9.6 ms |   9.6 ms |

### Optimierung

Ersetze nun die Implementierung von `fib` durch folgenden iterativen Code:

```javascript
export function fib(n) {
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return a;
}
```

Führe erneut ein Profiling und ein Benchmarking durch. Sowohl der Flamegraph als auch die Benchmarking-Ergebnisse sollten neu ein komplett anderes Bild ergeben.

## Aufgaben

Die folgenden Aufgaben sollen mit dem Repository [performance-tests](https://github.com/patrickbucher/performance-tests) bearbeitet werden. Erstelle zuerst einen Fork davon und klone diesen. Die Beispiele liegen in JavaScript (und nicht wie üblich in TypeScript) vor, um ein direktes Ausführen mit Deno (Benchmarking) _und_ Node.js (Profiling) zu ermöglichen.

Gehe für jede Aufgabe (Beispiel: `foo`) folgendermassen vor:

1. Betrachte den Code in `foo.js` und versuche seine Funktionsweise zu verstehen.
2. Betrachte den Testcode in `foo_test.js` und führe ihn mit `deno test foo_test.js` aus.
3. Leite aus dem Testfall einen Benchmark ab. Verwende hierzu `Deno.bench` anstelle von `Deno.test`. Achte darauf, keinen trivialen Testfall zu nehmen, sondern einen aufwändigen. Führe den Benchmark anschliessend mit `deno bench foo_test.js` aus. Erweitere die Eingabedaten falls nötig.
4. Führe ein Profiling für `foo.js` durch und versuche zu ermitteln, wo sich ein Hot Spot verbirgt.
5. Erstelle eine alternative Implementierung für die gemessene Funktion unter einem anderen Namen (z.B. `fooOptimized()` statt `foo()`).
6. Stelle sicher, dass die bestehenden Testfälle auch für die neue Implementierung funktionieren, indem du einen Testfall für die optimierte Funktion schreibst.
7. Wiederhole die Schritte von 3 bis 6, bis du über eine performantere Implementierung verfügst – oder dir die Ideen ausgehen.

Für aussagekräftige Benchmarks müssen möglicherweise die Testdaten erweitert werden. Wichtig: Die Tests müssen immer fehlerfrei durchlaufen!

### :green_circle: Aufgabe 1: Mengen

In `sets.js` sind zwei Funktionen implementiert:

1. `unique`: Gibt ein Array zurück, das alle Elemente aus dem übergebenen Array genau einmal, d.h. ohne Duplikate, enthält.
2. `diff`: Bildet die Differenz aus den beiden übergebenen Arrays: Die Elemente der ersten Liste, die nicht in der zweiten Liste vorkommen.

Diese beiden Operationen arbeiten auf Arrays. Effizienter wären wohl Implementierungen mithilfe von einem `Set`. Wichtig: Die Schnittstelle darf nicht geändert werden. Es müssen weiterhin Arrays erwartet und zurückgegeben werden.

### :yellow_circle: Aufgabe 2: Buchstabenhäufigkeit

In `frequency.js` ist die Funktion `letterFrequency` implementiert, welche die Buchstabenhäufigkeit in einem Text zurückgibt. Die Funktion gibt ein Array von Objekten bestehend aus einem Buchstaben und dessen Häufigkeit zurück. Dabei wird _nicht_ zwischen Gross- und Kleinbuchstaben unterschieden.

Die Funktion könnte effizienter implementiert werden. Hier sind zwei Ideen dazu:

1. Zähle die Buchstaben mithilfe einer Map (Key: Buchstabe, Value: Buchstabenhäufigkeit) und wandle diese Map am Ende der Funktion in ein Array um.
2. Zähle die Buchstaben in einem Array von 26 Elementen, wobei die Häufigkeit von `'a'` mit dem Element an Index 0 und `'z'` mit dem Element an Index 25 gezählt wird. (Tipp: Nutze die Differenz zum Buchstaben `'a'` um den Array-Index zu finden.)

### :red_circle: Aufgabe 3: Spam-Erkennung

In `spam.js` ist eine einfache Spam-Erkennung implementiert. Die Funktion `classify` nimmt einen Text entgegen und berechnet das Verhältnis von verdächtigen Spam-Wörtern zur Gesamtzahl der Wörter im Text. Probiere folgende Optimierungen aus:

1. Wird das Programm schneller, wenn der reguläre Ausdruck ausserhalb der Schleife erzeugt wird?
2. Gruppiere die Spam-Wörter in einer Map nach ihrem Anfangsbuchstaben (Key: Anfangsbuchstabe, Value: Array von Wörtern mit diesem Anfangsbuchstaben.) Für jedes Wort im Text müssen nun nur noch die Wörter mit dem passenden Anfangsbuchstaben überprüft werden.

### :black_circle: Aufgabe 4: Primzahlen und Primzahl-Faktorisierung

In `primes.js` sind zwei Funktionen implementiert:

1. `findPrimes`: findet die Primzahlen bis zum angegebenen `limit`.
2. `factorize`: zerlegt die angegebene Zahl `n` in ihre Primfaktoren.

Probiere folgende Optimierungen aus:

1. Prüfe in `findPrimes` für die Zahl `x` nicht für alle Zahlen von 2 bis `x` auf ihre Teilbarkeit, sondern nur bis `x/2`. (Durch eine höhere Zahl _kann_ `x` nicht restlos teilbar sein.)
2. In `factorize` sind nicht alle Primzahlen von 2 bis `n` nötig. Es genügt die Prüfung bis zur Quadratwurzel von `n` (`sqrt(n)`). Achtung: Ist `n` selbst eine Primzahl, ist diese ihr einziger Primfaktor.
3. Implementiere das _Sieb des Eratosthenes_ zum Finden der Primzahlen: Zur Prüfung, ob `x` eine Primzahl ist, muss diese nicht auf restlose Dividierbarkeit durch alle kleineren Zahlen sondern nur auf restlose Dividierbarkeit durch alle kleineren _Primzahlen_ geprüft werden.
4. Implementiere eine Klasse `PrimeCache`, welche sich alle bisher gefundenen Primzahlen bis zu einer Zahl merkt. (Die Klasse hat eine Eigenschaft für die gefundenen Primzahlen und die bisher höchste geprüfte Zahl.) Du kannst `PrimeCache` auch als [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) implementieren.

Teste die Optimierungen auch mit sehr grossen Zahlen (d.h. im Milliardenbereich).