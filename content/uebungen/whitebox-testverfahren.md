+++
date = '2025-11-09T13:39:59+01:00'
title = 'Whitebox-Testverfahren'
weight = 10
+++

## Testüberdeckung

Kopiere folgenden Code in eine Datei namens `fibonacci.js`:

```js
export function fibonacci(n) {
  if (typeof n == "number" && n >= 0) {
    switch (n) {
      case 0:
      case 1:
        return 1;
      default:
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
  }
}
```

Kopiere folgenden Testcode ins gleiche Verzeichnis in eine Datei namens `fibonacci_test.js`:

```js
import { expect } from "jsr:@std/expect";
import { fibonacci } from "./fibonacci.js";

Deno.test("test first Fibonacci number", () => {
  expect(fibonacci(0)).toBe(1);
});

Deno.test("test second Fibonacci number", () => {
  expect(fibonacci(1)).toBe(1);
});
```

Führe nun den Test einmal aus:

```plain
deno test fibonacci_test.js
```

Mit dem Parameter `--coverage` kann die Codeüberdeckung gemessen und in einer Datei abgespeichert werden:

```plain
deno test --coverage=cover_profile fibonacci_test.js
```

Die Codeüberdeckung ist nun im Verzeichnis `cover_profile/` abgespeichert kann summarisch auf der Kommandozeile betrachtet werden:

```plain
deno coverage cover_profile
```

Der folgende Befehl erzeugt einen HTML-Bericht zur Codeüberdeckung, der komfortabel im Browser betrachtet werden kann:

```plain
deno coverage --html cover_profile/
```

**Auftrag**: Schreibe nun zusätzliche Testfälle, um die Anweisungs- und Zweigüberdeckung zu erhöhen.

Tipp: Beachte `if`-Verzweigungen ohne dazugehörige `else`-Zweige, um die Zweigüberdeckung zu erhöhen.

## Quadratische Gleichungen

Eine quadratische Gleichung hat die folgende Form:

```math
$$ ax^2 + bx + c = 0 $$
```

Mithilfe der _Diskriminante_ $D$ unterscheidet man, wie viele Lösungen eine Gleichung hat:

```math
$$ D = b^2 - 4ac $$
```

1. $D>0$: _zwei_ Lösungen
2. $D=0$: _eine_ Lösung
3. $D<0$: _keine_ Lösung

Für $D>0$ können die beiden Lösungen folgendermassen ermittelt werden:

```math
$$ x_{1,2} = \frac{-b \pm \sqrt{D}}{2a} $$
```

Für $D=0$ kann die Lösung folgendermassen ermittelt werden:

```math
$$ x = \frac{-b}{2a} $$
```

Der folgende Code setzt diese Formeln bereits um:

```js
export function solve(a: number, b: number, c: number): Array<number> {
  const d = b ** 2 - 4 * a * c;
  if (d > 0) {
    return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  } else if (d == 0) {
    return [-b / (2 * a)];
  } else {
    return [];
  }
}
```

**Auftrag**: Speichere diesen Code in einer Datei namens `quadratic_equation.ts` ab. Ermittle nun die drei nötigen Testfälle (d.h. Wertkombinationen für die Parameter `a`, `b` und `c`), um eine vollständige Codeüberdeckung zu erreichen. Erstelle nun automatisch ausführbare Testfälle in `quadratic_equation_test.ts`, führe sie aus und miss deren Codeüberdeckung.

## Othello

Bei den Aufgaben zur [Äquivalenzklassenbildung](/uebungen/blackbox-testverfahren/#äquivalenzklassenbildung) und [Grenzwertanalyse](/uebungen/blackbox-testverfahren/#grenzwertanalyse) vom vergangenen Übungsblock hast du automatisch ausführbare Testfälle mit Deno geschrieben.

**Auftrag**: Ermittle als erstes die Codeüberdeckung dieser Testfälle. Erstelle anschliessend weitere Testfälle, um die Codeüberdeckung weiter zu erhöhen. (Falls du die anderen beiden Übungen bearbeitet hast, kannst du von Anfang an mit dem Whitebox-Testverfahren arbeiten und komplett neue Tests schreiben.)