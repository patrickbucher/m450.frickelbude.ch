+++
date = '2025-11-29T17:46:09+01:00'
title = 'Debugging'
weight = 13
+++

Diese Übung bezieht sich auf das Repository [connect-four-debugging](https://github.com/patrickbucher/connect-four-debugging).

Das Repository besteht aus drei Quellcode-Dateien:

1. `board.ts`: die Programmbibliothek, welche die eigentliche Logik enthält.
2. `main.ts`: das interaktive Demoprogramm für die Spiellogik.
3. `board_test.ts`: eine Datei, welche erst einen Dummy-Testfall enthält.

Das Spiel ist im deutschsprachigen Raum als _Vier Gewinnt_ bekannt. Zwei Spieler lassen abwechlungsweise Steine in ein 6x7-Gitter fallen. Das Spiel endet, wenn ein Spieler vier seiner Steine in eine Reihe (horizontal, vertikal, diagonal) gebracht hat und so zum Sieger wird.

## Aufgabe 1: Manueller Test

Erstelle einen Fork vom Repository und klonen diesen. Starte das Spiel gemäss den Anweisungen im `README.md`. Reagiert das Spiel in bestimmten Situationen bzw. bei bestimmten Eingaben unerwartet? Halten deine Erkenntnisse in einer neuen Datei namens `Testprotokoll.md` fest. Du solltest zumindest folgende Fehler finden:

1. **Programmabsturz**: Das Programm kann durch eine valide oder invalide Eingabe zum Absturz gebracht werden.
2. **Spiellogik**: Die Spiellogik ist nicht gemäss den gängigen Regeln implementiert, sondern fehlerbehaftet.

Beschreibe die gefundenen Fehler mitsamt Zustand (Spielbrett) und Eingabe, die zum Fehler führte.

## Aufgabe 2: Test-Driven Debugging

Suchen dir einen Fehler aus, den du mithilfe von _Test-Driven Development_ auf den Grund gehen willst. Schreibe einen Testfall, der den Fehler zuverlässig reproduziert und dabei "erfolgreich scheitert".

## Aufgabe 3: Debugging

Wähle dir passende [Debugging-Techniken](/praxis/debugging) aus (zusätzliche Ausgaben auf die Kommandozeile, Einsatz des Debuggers, Durchspielen des Codes im Kopf bzw. auf Papier usw.). Wenn du der Fehlerursache auf den Grund gekommen bist, dokumentiere dein Vorgehen und deine Erkenntnisse in einer neuen Datei namens `Fehlersuche.md`.

Korrigiere den Fehler anschliessend, sodass der Testfall erfolgreich durchläuft.

## Zusatzaufgabe: Weitere Fehler beseitigen

Wiederhole das Vorgehen von Aufgabe 2 und 3 für weitere gefundene Fehler, bis du mit dem Spiel zufrieden bist.
