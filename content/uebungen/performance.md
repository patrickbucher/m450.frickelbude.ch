+++
date = '2025-12-18T11:50:29+01:00'
title = 'Performance'
weight = 15
+++

## Vorbereitung

Kopiere folgenden Beispielcode, welcher die ersten 40 Fibonacci-Zahlen rekursiv berechnet, in eine Datei namens `fib.js` ein:

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

Dadurch sollte im aktuellen Arbeitsverzeichnis eine Datei mit einem Namen nach dem Muster `isolate-*-v8.log` entstanden sein. Diese kann nun folgendermassen als sogenannter _Flamegraph_ betrachtet werden (wichtig: schreibe `node.exe` statt `node`!):

```bash
node.exe --prof-process --preprocess -j isolate-*-v8.log | flamebearer
```
Anhand dieser Grafik lässt sich der Hot Spot (die Funktion `fib`) recht einfach ausmachen:

![`fib` ist wenig überraschend der Hot Spot](/performance/flamebearer-fib.png)

### Benchmarking

Eine Funktion muss teilweise sehr oft aufgerufen werden, bis sich ihr Laufzeitverhalten stabilisiert – und dadurch Aussagen über seine Laufzeiteigenschaften messbar werden. Glücklicherweise verfügt Deno über eine Funktion namens `Deno.bench`, die analog zu `Deno.test` funktioniert, aber nicht nur einen Testfall ausführt, sondern auch noch die Performance des ausgeführten Codes misst.

Kopiere folgenden Code in eine Datei namens `fib_test.js`:

```javascript
import { assertEquals } from "@std/assert";
import { fib } from "./fib.js";

Deno.bench("Fibonacci", () => {
  assertEquals(fib(30), 832040);
});
```

Führe diesen Benchmark nun folgendermassen aus:

```bash
deno bench fib_test.js
```

Dabei sollte eine mit dieser vergleichbaren Ausgabe erfolgen, wobei die Zahlen natürlich abweichen können:

```plain
| benchmark   | time/iter (avg) |        iter/s |      (min … max)      |      p75 |      p99 |     p995 |
| ----------- | --------------- | ------------- | --------------------- | -------- | -------- | -------- |
| Fibonacci   |         11.2 ms |          89.3 | ( 10.4 ms …  13.4 ms) |  11.5 ms |  13.4 ms |  13.4 ms |
```

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

Die folgenden Aufgaben sollen mit mit dem Repository [performance-tests](https://github.com/patrickbucher/performance-tests) bearbeitet werden. Die Beispiele liegen dieses Mal in JavaScript (und nicht wie üblich in TypeScript) vor, um ein direktes Ausführen mit Deno _und_ Node.js (zwecks Profiling) zu ermöglichen.

Gehe für jede Aufgabe (Beispiel: `foo`) folgendermassen vor:

1. Betrachte den Code in `foo.js` und versuche seine Funktionsweise zu verstehen.
2. Betrachte den Testcode in `foo_test.js` und führe ihn mit `deno test foo_test.js` aus.
3. Leite aus dem Testfall einen Benchmark ab. Verwende hierzu `Deno.bench` anstelle von `Deno.test`. Achte darauf, keinen trivialen Testfall zu nehmen, sondern einen aufwändigen. Führe den Benchmark anschliessend mit `deno bench foo_test.js` aus.
4. Führe ein Profiling für `foo.js` durch und versuche zu ermitteln, wo sich ein Hot Spot verbirgt.
5. Erstelle eine alternative Implementierung für die gemessene Funktion unter einem anderen Namen (z.B. `fooOptimized()` statt `foo()`).
6. Stelle sicher, dass die bestehenden Testfälle auch für die neue Implementierung funktionieren.
7. Wiederhole die Schritte von 3 bis 7, bis du über eine performantere Implementierung verfügst.

### Aufgabe 1: Mengen

In `sets.js` sind zwei Funktionen implementiert:

- `unique`: Gibt ein Array zurück, das alle Elemente aus dem übergebenen Array genau einmal, d.h. ohne Duplikate, enthält.
- `diff`: Bildet die Differenz aus den beiden übergebenen Arrays: Die Elemente der ersten Liste, die nicht in der zweiten Liste vorkommen.

Diese beiden Operationen arbeiten auf Arrays. Effizienter wären wohl Implementierungen mithilfe von einem `Set`. Wichtig: Die Schnittstelle darf nicht geändert werden. Es müssen weiterhin Arrays erwartet und zurückgegeben werden.

### Aufgabe 2: Buchstabenhäufigkeit

### Aufgabe 3: Spam-Erkennung

### Aufgabe 4: Primzahlen und Primzahl-Faktorisierung