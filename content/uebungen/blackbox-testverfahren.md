+++
date = '2025-11-02T11:59:44+01:00'
title = 'Blackbox-Testverfahren'
weight = 9
+++

Die folgenden Aufgaben sollen mit der Codebasis von [Othello](/othello) umgesetzt werden, welche wir letzte Woche einem Review unterzogen haben.

## Äquivalenzklassenbildung

Für die Klasse `Board` soll eine neue Methode namens `isValidMove(player, row, col)` implementiert werden, welche für den jeweiligen Zustand und den übergebenen Spieler prüft, ob dieser an der Koordinate `row`/`col` einen Stein setzen kann.

Vor der Umsetzung sollen sinnvolle Testfälle anhand einer [Äquivalenzklassenbildung](/praxis/dynamischer-test/#äquivalenzklassenbildung) ermittelt werden. Gehe folgendermassen vor:

1. Ermittle den Definitionsbereich für Spieler und Koordinaten.
2. Unterteile die Definitionsbereiche in Äquivalenzklassen.
3. Definiere konkrete Testfälle.

Implementiere nun die Testfälle und die Methode `isValidMove` mit [Deno Testing](https://docs.deno.com/runtime/fundamentals/testing/). Du kannst dich hierzu vom Code der Methode `Board.validMoves` bedienen. Hier ist eine Vorlage (`board_test.js`):

{{% expand title="Beispiel: `board_test.js`" %}}
```javascript
import { expect } from "jsr:@std/expect";
import { Board } from "./board.js";

Deno.test("test initial count", () => {
  // Arrange
  const board = new Board();

  // Act
  const playerOneFields = board.fieldsWithState(1);
  const playerTwoFields = board.fieldsWithState(2);
  const emptyFields = board.fieldsWithState(0);

  // Assert
  expect(playerOneFields.length).toBe(2);
  expect(playerTwoFields.length).toBe(2);
  expect(emptyFields.length).toBe(8 * 8 - 2 * 2);
});
```
{{% /expand %}}

Der Testfall kann folgendermassen ausgeführt werden:

```plain
deno test
```

## Grenzwertanalyse

Die Methode `Board.result` gibt das Spielergebnis des aktuellen Spielzustands zurück. Das Feld `tied` des Rückgabewertes gibt dabei an, ob das Spiel unentschieden geendet hat.

Führe eine [Grenzwertanalyse](/praxis/dynamischer-test/#grenzwertanalyse) für `tied` durch. Definiere einen Positivtest sowie Testfälle für die angrenzenden Äquivalenzklasen (Spiel noch nicht zu Ende, Sieg Spieler 1, Sieg Spieler 2).

Implementiere anschliessend die Testfälle mit Deno. Tipp: Verwende die statische Methode `Board.of` um einen bestimmten Spielzustand zu erzeugen.

## Zustandsbasierter Test

Die Methode `Board.play` wendet einen Spielzug auf das Brett an. Was der Methodenaufruf für eine Aktion zur Folge hat, hängt einerseits von den Eingabeparametern `row`, `col` und `player` und andererseits vom derzeitigen Zustand des Spiels ab.

Definiere zwei [zustandsbasierte Testfälle](/praxis/dynamischer-test/#zustandsbasierter-test), wobei jeweils Vorbedingung, Ereignis, Sollreaktion und Nachbedingung definiert werden müssen:

1. Negativtest: unerlaubter Spielzug
2. Positivtest: erlaubter Spielzug

Du brauchst die Testfälle nur zu definieren, aber nicht zu implementieren.

## Entscheidungstabellentest

Die Methode `Board.result`, für welche du bereits eine Grenzwertanalyse vorgenommen hast, soll noch gründlicher getestet werden. Hierzu soll ein [Entscheidungstabellentest](/praxis/dynamischer-test/#entscheidungstabellentest) durchgeführt werden.

Gehe hierzu folgendermassen vor:

1. Schreibe die relevanten Bedingungen für das Spielergebnis auf
    - notiere sie oben links in der Tabelle
2. Erstelle alle möglichen Kombinationen aus diesen Bedingungen
    - notiere sie oben rechts in der Tabelle als Wahrheitsmatrix
3. Schreibe die möglichen Ergebnisse des Spiels auf
    - notiere sie unten links in der Tabelle
4. Kombiniere die Wahrheitsmatrix (oben rechts) und die Ergebnisse (unten links) zu Testfällen
    - notiere sie unten rechts in der Tabelle als Wirkungsmatrix

Tipp: Die Unterscheidung, welcher Spieler gewonnen hat, muss nicht gemacht werden. Es gibt nur die Bedingungen: 1) noch nicht fertig, 2) unentschieden, 3) Sieg.

Du brauchst nur die Entscheidungstabelle aufzustellen, aber keine Testfälle detailliert zu definieren oder gar zu implementieren.