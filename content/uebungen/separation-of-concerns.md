+++
date = '2025-11-23T07:15:04+01:00'
title = 'Separation of Concerns'
weight = 12
+++

Das Repository [separation-of-concerns](https://github.com/patrickbucher/separation-of-concerns/) beinhaltet drei Beispiele mit je drei Quellcodedateien:

1. `*.ts`: Die Programmbibliothek mit jeweils einer Funktion, welche die eigentliche Logik enthält.
2. `*_demo.ts`: Ein Demoprogramm, welches die jeweilige Funktion aufruft.
3. `*_test.ts`: Ein Dummy-Testfall als Vorlage.

## Auftrag

1. Erstelle einen Fork vom [Repository](https://github.com/patrickbucher/separation-of-concerns/) und klone diesen.
2. Suche dir eine der nachfolgend beschriebenen Aufgaben aus. Du kannst in beliebiger Reihenfolge vorgehen.
3. Gehe für jede Aufgabe nach den folgenden Schritten vor:
    1. Testen Sie den jeweiligen Beispielcode mit verschiedenen Argumenten, indem du das Beispielprogramm ausführst. (Befolge hierzu die Anweisungen in `README.md` des Repositories.)
    2. Betrachte den Code zur jeweiligen Aufgabe. Überlege dir, welche verschiedenen Aspekte in der einen grossen Methode gemeinsam behandelt werden. (Tipp: Oft werden "Berechnung" und "Ausgabe" vermischt. Es gibt aber noch weitere Aspekte, die man separieren könnte.)
    3. Nimm ein Refactoring am Code vor, um eine bessere _Separation of Concerns_ zu erreichen. Passe wenn nötig den aufrufenden Code im Demoprogramm an, um den Beispielcode wieder laufen lassen zu können.
    4. Dank der verbesserten _Separation of Concerns_ sollte sich der Code besser automatisiert testen lassen. Schreibe Komponententests für den überarbeiteten Code. (Entscheide selber, welche und wie viele.)
4. Wiederholen Sie dieses Vorgehen für die nächste Aufgabe.

Die einzelnen Aufgaben werden in den folgenden Abschnitten erklärt.

## Multiplikationstabelle

Die Funktion `printMultiplicationTable` in `multiplication_table.ts`  gibt eine Multiplikationstabelle für die Zahlen des Array-Parameters aus. Es wird eine Matrix ausgegeben, bei der jede Zahl als Spalte und Zeile vorkommt. Für jede Spalten- und Zeilenkombination wird das Produkt berechnet und in der jeweiligen Zelle ausgegeben.

Die Ausgabe mit der korrekten Spaltenbreite ist dabei recht ausgeklügelt.  Weniger gut gelöst ist die Organisation des Codes. Verbessere diese.

## Primfaktorzerlegung

Bei der Primfaktorzerlegung wird eine Zahl in ihre _Primfaktoren_ zerteilt. Man beginnt mit der kleinsten Primzahl 2 und versucht die gegebene Zahl dadurch zu teilen. Ist eine Teilung möglich, wird wiederum versucht den Rest durch die gleiche Primzahl zu teilen. Ist die Teilung nicht restlos möglich, wird mit der nächsten Primzahl fortgefahren. Die Faktoren, mit denen die Teilung restlos funktioniert hat, werden dabei aufgelistet. Multipliziert man diese Faktoren anschliessend, kommt man wieder auf die Originalzahl.

Beispiele für Primfaktorzerlegungen:

| Zahl |                 Primfaktoren |       Kontrolle |
|-----:|-----------------------------:|----------------:|
|   10 |                         2, 5 |      2 * 5 = 10 |
|   42 |                      2, 3, 7 |  2 * 3 * 7 = 42 |
|   55 |                        5, 11 |     5 * 11 = 55 |
|   99 |                     3, 3, 11 | 3 * 3 * 11 = 99 |
| 1024 | 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 |     2^10 = 1024 |

Die Primfaktorenzerlegung wird z.B. bei der Kryptographie (genauer: der Kryptoanalyse) verwendet, um beispielsweise RSA-Schlüssel zu knacken. (Hierbei kommen jedoch sehr grosse Zahlen zum Einsatz.)

Für die Primfaktorzerlegung müssen zunächst die Primzahlen bis zu einer gegebenen Zahl gefunden werden. Dies könnte auch wesentlich effizienter implementiert werden. Versuchen Sie eine Primfaktorzerlegung einer grösseren Zahl, sodass es spürbar langsam läuft. Verbessern Sie anschliessend die Performance, bis das Programm wieder schnell genug läuft (Ideen: Caching oder das _Sieb des Eratosthenes_).

Die Funktion `factor` in `prime_factors.ts` erwartet ein Array von zu faktorisierenden positiven Zahlen. Verbessere diese Funktion.

## Monty-Hall-Problem

In der Spielshow _Monty Hall_ bekommen die Teilnehmer drei Tore zur Auswahl: Hinter einem verbirgt sich der Hauptgewinn von einem Auto, hinter den anderen beiden eine Ziege als Niete/Trostpreis.

Nachdem der Spieler sich für ein Tor entscheidet, lässt Monty Hall jeweils ein anderes Tor öffnen, hinter welchem sich eine Ziege verbirgt. Der Spieler hat nun die Möglichkeit seine Wahl zu ändern oder bei der ursprünglichen Wahl zu bleiben.

Das _Monty-Hall-Problem_ lautet folgendermassen: 

> Verbessern sich durch das Wechseln der Wahl die Gewinnchancen?

Im gegebenen Code wird versucht, die Frage mittels einer Simulation zu lösen.  Hierbei wird eine gegebene Anzahl von Spielen gespielt. Dabei wird ausgerechnet, wie oft der Spieler gewinnen würde wenn er:

1. bei seiner Wahl bleibt
2. seine Wahl ändert

Das Ergebnis ist verblüffend. Weniger beeindruckend (und schwerer testbar) ist jedoch die Implementierung der Funktion `play` in `monty_hall.ts`.
