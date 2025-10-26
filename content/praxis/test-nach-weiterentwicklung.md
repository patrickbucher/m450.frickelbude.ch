+++
date = '2025-10-19T18:39:02+02:00'
title = 'Test nach Weiterentwicklung'
weight = 3
+++

Der erfolgreiche initiale Abnahmetest ist nicht das Ende eines Softwareentwicklungsprojekts, sondern markiert vielmehr den Beginn einer längeren Phase der Anwendung, Korrektur und Erweiterung. Es kann passieren, dass das neue System unter nicht vorgesehenen Bedingungen betrieben und verwendet wird, neue Kundenwünsche geäussert werden, erweiterte Behandlung für neu entdeckte Sonderfälle benötigt wird und dass Probleme und Ausfälle auftreten, die erst nach einer längeren Betriebszeit beobachtbar sind.

Korrekturen und Ergänzungen, die während der Nutzung des Softwaresystems vorgenommen werden, bezeichnet man als _Softwarewartung_ oder _Softwarepflege_. Entsprechende Tests bezeichnet man als _Wartungstests_. Da Software aber nicht wie Hardware verschleisst, haben diese Begriffe hier eine andere Bedeutung: Bei der Softwarewartung werden Fehlerzustände behoben, die schon immer in der Software vorhanden waren. Im Rahmen der Softwarepflege wird diese an neue Einsatzbedingungen angepasst.

## Testen nach Erweiterung

Es können also Erweiterungen und Fehlerkorrekturen Grund für die Anpassung bereits im Einsatz stehender Softwareprodukte sein. Es stellt sich die Frage, in welchem Ausmass eine solche neue Softwareversion getestet werden muss, zumal ein grosser Teil der Software durch die vorgenommene Änderung nicht betroffen ist.

Bei der Fehlerkorrektur wird ein Fehlernachtest vorgenommen: Vormals aufgrund des Fehlerzustands gescheiterte Testfälle müssen erneut ausgeführt werden und fehlerfrei durchlaufen. Neue, etwa durch Kundenrückmeldung entdeckte Fehlerwirkungen, müssen durch zusätzliche Testfälle abgedeckt werden.

Oft verändern Fehlerkorrekturen das Verhalten der Software in ihrer jeweiligen Umgebung. Es muss deshalb überprüft werden, ob die Testfälle für die nähere Umgebung der Änderung noch immer durchlaufen. Oftmals erfordern schwere Fehlerwirkungen eine sofortige Korrektur, was einen umfassenden Testlauf verunmöglicht. Dieser ist im Anschluss an die erfolgte Korrektur möglichst bald nachzuholen.

Die vorzeitige Planung von Wartungsreleases erleichtert die Organisation der Testaktivitäten, besonders wenn Art und Umfang der ausgelieferten Korrekturen frühzeitig bekannt sind. Die Gewissheit, dass Wartungsreleases ohnehin nötig sein werden, darf aber keine Ausrede für mangelhaftes Testen sein. Dazu sind die Kosten und Risiken von Fehlerwirkungen im Produktiveinsatz zu hoch.

## Regressionsfehler und Regressionstests

Da sich selbst kleine lokale Änderungen auf andere Systemteile auswirken können, muss der Umfang der nötigen Testarbeiten mithilfe einer Auswirkungsanalyse ermittelt werden. Im Gegensatz zur Softwarewartung ist bei der Softwarepflege, welche die Software um neue Anwendungsfälle ergänzt, oftmals ein Akzeptanz- bzw. Abnahmetest erforderlich. Eine Migration bestehender Datenbestände muss ebenfalls angemessen auf Korrektheit überprüft werden. Ansonsten ist das Vorgehen beim Testen bei Softwarewartung und -pflege das gleiche.

Bestehende Software kann auch umfassenderen Erweiterungen unterzogen werden, welche durch das Produktmanagement geplant werden. Neben den regelmässigen kleineren Wartungs- und Pflegereleases kann es so zu grösseren funktionalen Updates kommen. Bei der Weiterentwicklung muss nicht nur die Funktionsweise der neu hinzukommenden Features überprüft werden, sondern auch, ob die bestehenden Features weiterhin funktionieren und nicht durch die Weiterentwicklung versehentlich beeinträchtigt worden sind.

Es sind also neue bzw. erweiterte Testfälle wie auch _Regressionstests_ nötig. Ein Regressionstest oder «Test nach Änderung» ist der erneute Test eines Programms nach dessen Modifikation mithilfe bereits bestehender Testfälle. Damit wird geprüft, ob Anpassungen und Erweiterungen unbeabsichtigten Seiteneffekte ‒ Regressionen ‒ erzeugt haben. Der Regressionstest prüft also, ob unveränderte Features der Software wirklich unverändert geblieben sind.

Testfälle, die im Rahmen eines Regressionstests zum Einsatz kommen, müssen wiederverwendbar sein. Hierzu müssen manuell auszuführende Testfälle gut dokumentiert sein. Besser sind jedoch automatisierte Testfälle für Regressionstests geeignet, da der Nutzen der Testautomatisierung durch die wiederholte Ausführung besonders hoch ist.

Beim Regressionstest müssen alle Testfälle herbeigezogen werden, welche die alte Funktionalität betreffen. Hierzu ist die Analyse der Testspezifikation nötig, um zu ermitteln, welche Testfälle sich auf welche Anforderungen beziehen. Automatisierte Testfälle sind an die neue bzw. erweiterte Funktionalität anzupassen, da sie sonst nicht aussagekräftig sind. Scheiternde Testfälle zeigen mögliche Regressionsfehler an ‒ oder wurden noch nicht an die neuen Anforderungen angepasst.

Neue Funktionalitäten erfordern die Entwicklung zusätzlicher Testfälle. Manuelle Regressionstests sind oft teuer und zeitaufwändig. Die Auswahl der Testfälle orientiert sich oft an deren Prioritäten, wobei Sonderfälle oft nicht getestet werden. Auch können Regressionstests auf bestimmte Konfigurationen oder Teilsysteme begrenzt werden.

## Fragen

1. Was ist der Unterschied zwischen Wartung bei Hardware (z.B. einem Auto) und Software?
1. Welcher Zielkonflikt besteht beim Testen nach dringenden Korrekturen?
1. Warum lohnt sich die Testautomatisierung für Regressionstests besonders?