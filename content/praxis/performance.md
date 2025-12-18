+++
date = '2025-12-18T09:22:45+01:00'
title = 'Performance'
weight = 10
+++

Der folgende Text basiert auf dem 7. Kapitel ("Performance") des Buches _The Practice of Programming_ von Brian Kernighan und Rob Pike aus dem Jahr 1999. Die Beispiele wurden eigens ausgearbeitet.

---

Früher waren Computer langsam und teuer. Es lohnte sich, Aufwand in die Optimierung von Programmen zu stecken. Heute, da Computer schnell und günstig sind, muss man die Frage differenzierter betrachten. Ist das zu lösende Problem wichtig, und ist das bestehende Programm wirklich zu langsam? Ein optimiertes Programm, das nicht richtig funktioniert, spart niemandem Zeit.

> Thus the first principle of optimization is: _don't_.

Für Programme, die selten oder nur von einem kleinen Personenkreis verwendet werden, lohnt sich eine meist zeitaufwändige, fehleranfällige und die Komplexität erhöhende Optimierung meistens nicht. Grundsätzlich soll man die einfachste mögliche Lösung verwenden, die funktioniert.

Es gibt jedoch zentrale Komponenten in einem System, deren Performance ausschlaggebend – und eine Optimierung deshalb sinnvoll ist. Hierbei ist es wichtig, dass man die tatsächliche Performance misst und nicht einfach spekuliert. Auch Regressionstests sollte man unbedingt schreiben, damit bei der Optimierung nicht Fehler eingebaut werden.

Bei der Performance-Optimierung sind folgende Aspekte ausschlaggebend:

## Zeitmessung

Unix-artige Betriebssysteme bieten den `time`-Befehl an, der den Zeitbedarf einer Programmausführung genau misst. Zur Demonstration soll das Beispielprogramm [`fib.c`](/performance/fib.c) zum Einsatz kommen, welches die n-te Fibonacci-Zahl berechnet:

```bash
$ cc fib.c -o fib
$ time ./fib 45
fib(45)=1134903170

real    0m11.297s
user    0m10.058s
sys     0m0.879s
```

Die Ausgabe gibt an, wie viel Zeit von Programmstart bis -ende vergangen ist (`real`), wie viel CPU-Zeit dabei vom Programm selber (`user`) und mit Systemaufrufen (`sys`) verbracht worden ist. Es lohnt sich, die Programmausführung vor und nach der Optimierung damit zu messen – und auch die Messergebnisse zwecks Vergleichbarkeit aufzubewahren.

Möchte man nur einzelne Abschnitte eines Programms messen, kann man in C/C++ kritische Stellen mit `clock()`-Funktionsaufrufen umgeben und anschliessend die Differenz der Messpunkte auswerten:

```c
#include <time.h>
#include <stdio.h>

clock_t before = clock();
// performancekritischer Programmabschnitt
clock_t after = clock();
printf("time: %.3f seconds\n", (after - before) / CLOCKS_PER_SEC)
```

In Java kann hierzu die `Date`-Klasse verwendet werden:

```java
Date before = new Date()
// performancekritischer Programmabschnitt
Date after = new Date();
long milliseconds = after.getTime() - before.getTime();
```

## Profiling

Neben einer summarischen Zeitmessung ist _Profiling_ ein wichtiges Werkzeug. Ein Profil legt dar, womit ein Programm seine Rechenzeit verbringt. Ein Profiler sammelt Informationen darüber, welche Funktionen und Anweisungen wie oft und für wie lange ausgeführt werden, bereitet diese Daten auf und gibt sie aus.

Damit lassen sich sogenannte _Hot Spots_ im Programm finden: Stellen im Programm, die am meisten Rechenzeit verbrauchen. Donald Knuth hat den Begriff "Profiling" 1971 in einem Artikel eingeführt und dazu geschrieben, dass weniger als 4 Prozent des Programms mehr als die Hälfte seiner Laufzeit ausmachten.

Das Beispielprogramm [`factorize.c`](/performance/factorize.c), welches Zahlen in ihre Primfaktoren zerlegt, kann beispielsweise folgendermassen einem Profiling unterzogen werden:

```bash
cc factorize.c -pg -g -o factorize -lm
./factorize 999999900 999999999
gprof factorize gmon.out >profile.txt
```

Der erste Befehl kompiliert das Programm mit Profiling-Informationen (`-pg`) und Debug-Symbolen (`-g`). Der zweite Befehl ruft das Programm für 100 relativ grosse Zahlen auf, wodurch die Datei `gmon.out` generiert wird. Der dritte Befehl verarbeitet diese Informationen für das kompilierte Programm `factorize` und leitet die Ausgabe in die Datei `profile.txt` um. Diese enthält u.a. folgendes:

```plain
  %   cumulative   self              self     total
 time   seconds   seconds    calls  ms/call  ms/call  name
100.21      0.75     0.75  3162100     0.00     0.00  is_prime
  0.00      0.75     0.00      100     0.00     7.52  factorize
  0.00      0.75     0.00      100     0.00     7.52  primes_up_to
```

Werden die Funktionen `factorize` und `primes_up_to` jeweils 100 mal aufgerufen – eine Zahl, die dem Aufruf des Benutzers entspricht und sich so kaum reduzieren lässt – stehen dem 3'162'100 Aufrufe der Funktion `is_prime` gegenüber. Obwohl diese Funktion recht schnell arbeitet und weniger als eine Millisekunde pro Aufruf benötigt, verbringt das Programm praktisch die gesamte Rechenzeit mit dieser Funktion.

Ist nun der Hot Spot ermittelt, gibt es folgende Möglichkeiten: Man macht die Funktion schneller, man ruft die Funktion weniger oft auf oder man löst die Funktion auf und integriert ihre Logik in den aufrufenden Code.

Soll die Funktion schneller gemacht werden, sollte man zuerst prüfen, ob ein effizienterer Algorithmus für das Problem existiert. Andernfalls kann der bestehende Algorithmus durch Optimierungen (wie z.B. durch das Caching von Ergebnissen oder mithilfe paralleler Abarbeitung) versucht werden schneller zu machen. Hierbei ist es wichtig, dass man die Laufzeit nach jeder Änderung misst. Manche vermeintliche Optimierung macht den Code bloss noch langsamer.

Oftmals sind nach zwei, drei Iterationen sämtliche Hot Spots eliminiert – und das Programm arbeitet nun wesentlich schneller.

## Compiler-Optimierungen

Verwendet man eine kompilierte Programmiersprache, stehen oftmals Einstellungen zur Optimierung von Programmen zur Verfügung. Mit den Standardeinstellungen funktioniert der Kompiliervorgang recht schnell, produziert jedoch eher langsamen Code. Dies ist während der Entwicklungs- und Testphase ein sinnvoller Kompromiss. Möchte man das Programm aber für die Produktion ausliefern, lohnt sich ein langsamerer Kompiliervorgang, der verschiedenste Optimierungen vornimmt.

Das folgende Beispiel zeigt, wie das Programm `factorize` mithilfe der Optimierungseinstellung `-O3` (höchste Optimierungsstufe) beschleunigt werden kann, ohne dabei etwas am Code verändern zu müssen:

```bash
$ cc factorize.c -o factorize -lm
$ time ./factorize 999999900 999999999 >/dev/null
real    0m7.188s
user    0m6.161s
sys     0m0.723s
$ cc factorize.c -o -O3 factorize -lm
$ time ./factorize 999999900 999999999 >/dev/null
real    0m5.393s
user    0m4.852s
sys     0m0.389s
```

Die Programmausführung ist um ca. 25% schneller geworden, wobei der Kompiliervorgang ca. 40% länger dauert:

```bash
$ time cc factorize.c -o factorize -lm
real    0m0.107s
user    0m0.059s
sys     0m0.036s
$ time cc factorize.c -O3 -o factorize -lm
real    0m0.149s
user    0m0.108s
sys     0m0.024s
```

Da ein Programm aber nur einmal kompiliert und anschliessend beliebig oft ausgeführt werden kann, ist dieser Kompromiss sehr sinnvoll.

## Fragen

1. Was können wir mit der Unterscheidung zwischen `user` und `sys` in der Ausgabe des `time`-Befehls anfangen?
1. Was kann man machen, wenn manuelle Performance-Messungen im Code (mittels `clock`-Funktion, `date-`Klasse usw.) unmessbar kleine Ergebnisse (z.B. `0.00s`) ausgeben?
1. Wie kann das _Auflösen einer Funktion_ und die _Integration deren Logik in den aufrufenden Code_ ein Programm verschnellern?
1. Warst du schon einmal mit der Performance eines deiner Programme unzufrieden? Wenn ja:
    1. Was hast du getan, um es schneller zu machen?
    2. Wurde das Performance-Problem dadurch gelöst?