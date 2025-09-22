+++
date = '2025-09-21T18:40:17+02:00'
title = 'Fehlermanagement'
weight = 6
+++

## Klassifikation Testergebnisse

In welche Quadranten der Fehlerklassifikation lassen sich die folgenden Sachverhalte einteilen? Begründen Sie Ihre Entscheidung und dokumentieren Sie allfällig getroffene Annahmen.

1. Während eines Refactorings schlagen plötzlich verschiedene Testfälle fehl.
1. Nach einer Anpassung der Validierungsfunktion laufen die vormals scheiternden Testfälle durch.
1. Nach der Umstellng der Mehrwertsteuerberechnung auf die neuen Sätze laufen die bestehenden Testfälle überraschenderweise immer noch durch.
1. Nach einer Performance-Optimierung laufen einige Testfälle nicht mehr durch.
1. Nach der Erweiterung der Rabattlogik laufen immer noch alle Testfälle durch. Da der Entwickler nicht nach _Test-Driven Development_ vorgegangen ist, muss er nun noch die entsprechenden Testfälle schreiben.
1. Nach einer versehentlich vorgenommenen Anpassung der Zinslogik (der Zins wird neu dem Saldo abgezogen und nicht mehr dazuaddiert) laufen noch alle Testfälle durch.

![zwei Testobjekt-Zustände, zwei Testergebnisse ‒ vier Interpretationen](/img/testergebnis.svg)

## Schweregrad von Fehlerberichten

Ordnen Sie den folgenden Fehlerberichten einen Schweregrad zu. Begründe Sie Ihre Entscheidung und dokumentieren Sie allfällig getroffene Annahmen.

1. Die Preise werden auf fünf statt auf einzelne Rappen gerundet angezeigt.
1. Die Messergebnisse werden als Ganzzahlen statt als Fliesskommazahlen abgespeichert.
1. Das Textfeld ist mit _Anerde_ statt mit _Anrede_ beschriftet.
1. Der PDF-Export produziert immer eine zusätzliche leere Seite am Ende des Dokuments.
1. Der Primärschlüssel einer Kundendatenbank wurde aus Platzgründen von einer eindeutigen ID auf einen kombinierten Schlüssel aus Vor- und Nachname umgestellt.
1. Beim mehrmaligen Sortieren nach Nachnamen erscheint der Eintrag _Hans Meier_ einmal vor und einmal nach _Hugo Meier_.
