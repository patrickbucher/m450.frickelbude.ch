+++
date = '2025-11-15T19:09:57+01:00'
title = 'Test Doubles'
weight = 11
+++

Die folgenden Aufgaben beziehen sich auf die Beispielanwendung
_AverageTestDoubles_, welche eine modifizierte Version der in C## geschrieben
Beispielanwendung _Average_ der letzten beiden Übungen ist. Sie finden das
Repository auf [GitHub](https://github.com/patrickbucher/AverageTestDoubles)
oder auf [Gitea](https://code.frickelbude.ch/m450/AverageTestDoubles).

## Vorbereitung: Refactoring

Die Klasse `Average` verwendet die Klasse `FileAccess` zum Einlesen der Zahlen.
Diese Abhängigkeit soll für die Unittests durch verschiedenartige _Test Doubles_
ersetzt werden. Um dies zu vereinfachen, soll die Referenz auf die konkrete
Klasse `FileAccess` durch eine Referenz auf ein entsprechendes Interface
(_ToBeNamed_) ersetzt werden:

![Entkopplung von `Average` und `FileAccess` über das (noch zu benennende)
Interface](/img/average-interface.svg)

#### Vorgehen

1. Denken Sie sich einen passenden Namen für das Interface `ToBeNamed` aus.
   Tipp: Die Schnittstelle macht nichts anderes als eine Reihe von Zahlen zu
   liefern.
2. Erstellen Sie das Interface im `Average`-Projekt.
3. Passen Sie die Deklaration der Klasse `FileAccess` so an, damit sie das neue
   Interface implementiert.
4. Passen Sie die Klasse `Average` so an, dass Sie keine Referenzen mehr auf
   `FileAccess` hat, sondern nur noch auf das neue Interface. (Funktioniert das
   Demoprogramm bzw. die Klasse `Program` anschliessend noch? Testen Sie das!)


Damit ist die Abhängigkeit `FileAccess` von der Klasse `Average` entkoppelt. Die
Klasse `Average` kann nun mit einem Test Double, welches den Dateizugriff
simuliert, als Unittest getestet werden.


## Unittests mit Test Doubles

Da `Average` nur über eine einzige Abhängigkeit verfügt, die in jedem Fall
aufgerufen wird, ist ein Test mit einem _Dummy_ nicht sinnvoll. Die folgenden
Test Doubles können aber zum Testen von `Average` verwendet werden:

1. Fake
2. Stub
3. Mock
4. Spy

In den folgenden Aufgaben sollen entsprechende Unittests mit Test Doubles
entwickelt werden. Sie können dabei eine beliebige Methode der Klasse `Average`
(`ComputeMeanOfFile`, `ComputeMedianOfFile`, `ComputeModeOfFile`) testen.

Die Test Doubles sollen das in der vorherigen Aufgabe definierte Interface
implementieren.

#### Fake

Entwickeln Sie einen _Fake_, der nicht wie `FileAccess` auf das Dateisystem
zugreift, sondern in einem `Dictionary` Pseudo-Dateipfade zu einer Zahlenreihe
zuordnet, beispielsweise so:

| Pfad (Key)                      | Zahlen (Value)    |
|---------------------------------|-------------------|
| `"/path/to/an/empty/file"`      | `[]`              |
| `"/path/to/some/other/file"`    | `[1, 2, 3, 4, 5]` |
| `"C:\test-data\third-file.txt"` | `[7, 34, 2]`      |

Es soll möglich sein, dem Fake-Objekt neue "Dateien" hinzuzufügen. (Die
Testdaten können so im _Arrange_-Teil des Unittests definiert und hinzugefügt
werden.)

Überlegen Sie sich, in welches Projekt diese Klasse gehört: `Average` oder
`Average.Test`?

Schreiben Sie anschliessend mindestens einen Unittest mit dieser
Fake-Implementierung.

#### Stub

Entwickeln Sie einen _Stub_, der immer die gleichen hart-kodierten Werte
zurückliefert.

Entwickeln Sie einen weiteren Stub, welcher per Konstruktor eine Liste von
Werten entgegennimmt, die beim Aufruf zurückgeliefert werden.

Schreiben Sie anschliessend zwei Testfälle für die gleiche Methode mit den
gleichen Zahlen. Verwenden Sie für die beiden Testfälle je einen anderen Stub.

Welche der beiden Implementierungen macht den Test besser lesbar? Ist der
zweite, flexiblere Stub wirklich noch ein Stub, oder schon ein Fake?

#### Mock

Entwickeln Sie einen _Mock_, welcher wie der Stub in der vorherigen Aufgabe
immer die gleichen Werte zurückliefert.

Der Mock soll über einen internen Zähler verfügen, der bei null startet, und bei
jedem Aufruf um eins erhöht wird.

Schreiben Sie anschliessend einen Testfall, der diese Mock-Implementierung
verwendet. Testen Sie dabei auch per Assertion auf Basis des Zählers, ob der
Mock tatsächlich aufgerufen worden ist.

#### Spy

Schreiben Sie einen _Spy_, der einen Wrapper um die Klasse `FileAccess` herum
bildet. Da hier die originale Implementierung zum Einsatz kommt, ist das
Aufsetzen einer Testumgebung (Zahlen in einer temporären Datei) wieder nötig.

Der Spy soll sich mittels Zähler merken, wie oft `FileAccess.ReadNumbers()`
aufgerufen worden ist. Ausserdem sollen die zurückgelieferten Werte in einer
Liste protokolliert werden.

Schreiben Sie anschliessend einen Testfall, der diesen Spy verwendet. Testen Sie
dabei auch per Assertion, ob erstens `FileAccess.ReadNumbers()` genau einmal
aufgerufen worden ist, und zweitens ob die in der Datei definierten Zahlen als
Rückgabewert protokolliert worden sind.

## Zusatzaufgabe: Mocking mit Moq

Installieren Sie die Library
[Moq](https://de.wikipedia.org/wiki/Moq_%28Software%29) für das Projekt
`Average.Test`:

    dotnet add Average.Test/Average.Test.csproj package Moq

Verwenden Sie das Moq-Framework um `FileAccess` zu "mocken". Orientieren Sie
sich dabei an der Aufgabe zum _Stub_, indem Sie einen der vorher implementierten
Unittests nachimplementieren.

Betrachten Sie dieses
[Einstiegsbeispiel](https://github.com/devlooped/moq/wiki/Quickstart##methods),
das mit `mock.Setup(...).Returns(...)` arbeitet.

