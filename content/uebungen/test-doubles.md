+++
date = '2025-11-15T19:09:57+01:00'
title = 'Test Doubles'
weight = 11
+++

Die folgenden Aufgaben beziehen sich auf die Beispielanwendung [average-test-doubles](https://github.com/patrickbucher/average-test-doubles), in welcher es um verschiedene Durchschnittsberechnungen geht: Mean (arithmetisches Mittel), Median (Wert in der Mitte) und Mode (am häufigsten vorkommende Werte).

## Vorbereitung: Refactoring

Erstelle zunächst einen Fork vom [Repository](https://github.com/patrickbucher/average-test-doubles) und klone ihn.

Die Klasse `Average` verwendet die Klasse `FileAccess` zum zeilenweisen Einlesen der Zahlen aus Textdateien. Diese Abhängigkeit soll für die Unittests durch verschiedenartige _Test Doubles_ ersetzt werden. Um dies zu vereinfachen, soll die Referenz auf die konkrete Klasse `FileAccess` durch eine Referenz auf ein entsprechendes Interface (_ToBeNamed_) ersetzt werden:

![Entkopplung von `Average` und `FileAccess` über das (noch zu benennende) Interface](/img/average-interface.svg)

### Vorgehen

1. Denke dir einen passenden Namen für das Interface `ToBeNamed` aus. Tipp: Die Schnittstelle macht nichts anderes als eine Reihe von Zahlen zu liefern.
2. Erstelle das Interface im vorhandenen Projekt.
3. Passe die Deklaration der Klasse `FileAccess` so an, damit sie das neue Interface implementiert.
4. Passe die Klasse `Average` so an, dass sie keine Referenzen mehr auf `FileAccess` hat, sondern nur noch auf das neue Interface. (Funktioniert das Demoprogramm `demo.ts` anschliessend noch? Teste das!)

Damit ist die Abhängigkeit `FileAccess` von der Klasse `Average` entkoppelt. Die Klasse `Average` kann nun mit einem Test Double, welches den Dateizugriff simuliert, als Unittest getestet werden.

## Unittests mit Test Doubles

Da `Average` nur über eine einzige Abhängigkeit verfügt, die in jedem Fall aufgerufen wird, ist ein Test mit einem _Dummy_ nicht sinnvoll. Die folgenden Test Doubles können aber zum Testen von `Average` verwendet werden:

1. Fake
2. Stub
3. Mock
4. Spy

In den folgenden Aufgaben sollen entsprechende Unittests mit Test Doubles entwickelt werden. Du kannst dabei eine beliebige Methode der Klasse `Average` (`computeMeanOfFile`, `computeMedianOfFile`, `computeModeOfFile`) testen.

Die Test Doubles sollen das in der vorherigen Aufgabe definierte Interface implementieren.

### Fake

Entwickle einen _Fake_, der nicht wie `FileAccess` auf das Dateisystem zugreift, sondern in einer `Map` Pseudo-Dateipfade zu einer Zahlenreihe zuordnet, beispielsweise so:

| Pfad (Key)                      | Zahlen (Value)    |
|---------------------------------|-------------------|
| `"/path/to/an/empty/file"`      | `[]`              |
| `"/path/to/some/other/file"`    | `[1, 2, 3, 4, 5]` |
| `"C:\test-data\third-file.txt"` | `[7, 34, 2]`      |

Es soll möglich sein, dem Fake-Objekt neue "Dateien" hinzuzufügen. (Die Testdaten können so im _Arrange_-Teil des Unittests definiert und hinzugefügt werden.)

Schreibe anschliessend mindestens einen Unittest mit dieser Fake-Implementierung.

### Stub

Entwickle einen _Stub_, der immer die gleichen hart-kodierten Werte zurückliefert.

Entwickle einen weiteren Stub, welcher per Konstruktor eine Liste von Werten entgegennimmt, die beim Aufruf zurückgeliefert werden.

Schreibe anschliessend zwei Testfälle für die gleiche Methode mit den gleichen Zahlen. Verwenden Sie für die beiden Testfälle je einen anderen Stub.

**Frage**: Welche der beiden Implementierungen macht den Test besser lesbar? Ist der zweite, flexiblere Stub wirklich noch ein Stub, oder schon ein Fake?

### Mock

Entwickle einen _Mock_, welcher wie der Stub in der vorherigen Aufgabe immer die gleichen Werte zurückliefert.

Der Mock soll über einen internen Zähler verfügen, der bei null startet, und bei jedem Aufruf um eins erhöht wird.

Schreibe anschliessend einen Testfall, der diese Mock-Implementierung verwendet. Teste dabei auch per Assertion auf Basis des Zählers, ob der Mock tatsächlich aufgerufen worden ist.

### Spy

Schreibe einen _Spy_, der einen Wrapper um die Klasse `FileAccess` herum bildet. Da hier die originale Implementierung zum Einsatz kommt, ist das Aufsetzen einer Testumgebung (Zahlen in einer temporären Datei) wieder nötig.

Der Spy soll sich mittels Zähler merken, wie oft `FileAccess.readNumbers()` aufgerufen worden ist. Ausserdem sollen die zurückgelieferten Werte in einem Array protokolliert werden.

Schreibe anschliessend einen Testfall, der diesen Spy verwendet. Testen Sie dabei auch per Assertion, ob erstens `FileAccess.readNumbers()` genau einmal aufgerufen worden ist, und zweitens ob die in der Datei definierten Zahlen als Rückgabewert protokolliert worden sind.