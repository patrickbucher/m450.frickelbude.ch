+++
date = '2025-10-19T13:59:55+02:00'
title = 'Testarten'
weight = 12
+++

## Testarten

Je nach Teststufe liegt der Fokus auf bestimmten Arten von Tests. Einerseits unterscheidet man zwischen _funktionalen_ und _nicht funktionalen_ und andererseits zwischen _anforderungsbasierten_ und _strukturbasierten_ Tests.

### Funktionale Tests

Funktionale Tests umfassen alle Testmethoden und Testverfahren, bei denen das von aussen wahrnehmbare Ein- und Ausgabeverhalten des Testobjekts geprüft wird. Als Testbasis dienen die funktionalen Anforderungen. Diese beschreiben die Funktionsweise und das Verhalten des gewünschten Systems.

Zu jeder funktionalen Anforderung soll zumindest ein Testfall formuliert werden, in der Regel jedoch mehrere. Laufen diese Testfälle fehlerfrei durch, gilt die entsprechende Anforderung als erfüllt.

Funktionale Tests kommen auf allen Teststufen zum Einsatz. Beschreiben die Anforderungen einen Geschäftsprozess, werden die Tests als Szenarien mit unterschiedlichen Prioritäten definiert. Häufigkeit, Relevanz und Risiko sind für diese Priorisierung ausschlaggebend. Solche Szenarien umfassen oft mehrere hintereinandergeschaltete Tests.

### Nicht funktionale Tests

Nicht funktionale Anforderungen beschreiben, wie gut ein System oder Teilsystem seine Arbeit erfüllen soll. Solche Eigenschaften beeinflussen die Zufriedenheit des Anwenders bzw. des Kunden stark. Aus Kundenperspektive sind Bedienbarkeit und Performanz wichtige solche Kriterien. Aufseiten des Anbieters sind Änderbarkeit und Wartbarkeit wichtige Aspekte.

Nicht funktionale Anforderungen werden meist auf Stufe Systemtest mit folgenden Testarten überprüft:

- _Lasttest_: Messung des Systemverhaltens unter hoher Last
- _Performanztest_: Messung der Verarbeitungsgeschwindigkeit und Antwortzeit
- _Volumentest/Massentest_: Beobachtung des Systemverhaltens in Abhängigkeit zur Datenmenge
- _Stresstest_: Beobachtung des Systemverhaltens bei Überlastung
- _Sicherheitstest_: Prüfung auf unerlaubten Systemzugang und Datenzugriff
- _Stabilitäts- und Zuverlässigkeitstest_: Prüfung auf Ausfälle im Dauerbetrieb
- _Robustheitstest_: Verhalten bei Fehlerfällen (Bedienung, Programmierung, Hardware) und Wiederanlaufverhalten (Recovery)
- _Kompatibilitätstest_: Verträglichkeit mit Umsystemen, Import/Export von Datenbeständen, Portierung auf andere Plattformen
- _Konfigurationstest_: Verhalten unter verschiedenen Betriebssystemen; mit verschiedenen Lokalisierungs- und Spracheinstellungen; auf verschiedenen Hardware-Plattformen
- _Usability-Test_: Benutzerfreundlichkeit, Erlernbarkeit, Verständlichkeit im Bezug auf bestimmte Anwendergruppen (Akzeptanz)
- _Dokumentationsprüfung_: Übereinstimmung der Dokumentation mit der Realität (Bedienungsanleitungen, Konfigurationsinstruktionen)
- _Wartbarkeitsprüfung_: Prüfung der Entwicklerdokumentation und Systemstruktur

Solche Anforderungen werden in der Praxis oft zu schwammig definiert («einfach bedienbar», «schnelle Reaktionszeit»), wodurch sie nicht oder nur schwer testbar sind. Darum sollten Tester diese Anforderungen einem Review unterziehen. Manche Anforderungen werden als so selbstverständlich betrachtet, dass ihre Formulierung vergessen geht, was zu Konflikten in der Abnahme führen kann.

Für nicht funktionale Tests können Szenarien von funktionalen Tests wiederverwendet werden, sofern diese nicht funktionale Systemeigenschaften demonstrieren.

### Anforderungs- und strukturbezogene Tests

Anforderungsbasierte Tests gehen von Spezifikationen (funktionale/nicht funktionale) als Testbasis aus und kommen v.a. im System- und Abnahmetest zum Einsatz. Aus Spezifikationen abgeleitete Komponenten- und Integrationstests gelten auch als anforderungsbezogene Tests.

Bei strukturbezogenen Tests wir auch die innere Struktur des Systems als Testbasis beigezogen. Der Fokus liegt darauf, möglichst alle Teile des Systems für Testfälle zugänglich zu machen und genügend Testfälle zu entwefen. Die Testfälle können auf funktionalen und nicht funktionalen Anforderungen basieren. Strukturbezogene Tests kommen v.a. auf Stufe Komponenten- und Integrationstest zum Einsatz.

## Test nach Änderung und Weiterentwicklung

Der erfolgreiche initiale Abnahmetest ist nicht das Ende eines Softwareentwicklungsprojekts, sondern markiert vielmehr den Beginn einer längeren Phase der Anwendung, Korrektur und Erweiterung. Es kann passieren, dass das neue System unter nicht vorgesehenen Bedingungen betrieben und verwendet wird, neue Kundenwünsche geäussert werden, erweiterte Behandlung für neu entdeckte Sonderfälle benötigt wird und dass Probleme und Ausfälle auftreten, die erst nach einer längeren Betriebszeit beobachtbar sind.

Korrekturen und Ergänzungen, die während der Nutzung des Softwaresystems vorgenommen werden, bezeichnet man als _Softwarewartung_ oder _Softwarepflege_. Entsprechende Tests bezeichnet man als _Wartungstests_. Da Software aber nicht wie Hardware verschleisst, haben diese Begriffe hier eine andere Bedeutung: Bei der Softwarewartung werden Fehlerzustände behoben, die schon immer in der Software vorhanden waren. Im Rahmen der Softwarepflege wird diese an neue Einsatzbedingungen angepasst.

Es können also Erweiterungen und Fehlerkorrekturen Grund für die Anpassung bereits im Einsatz stehender Softwareprodukte sein. Es stellt sich die Frage, in welchem Ausmass eine solche neue Softwareversion getestet werden muss, zumal ein grosser Teil der Software durch die vorgenommene Änderung nicht betroffen ist.

Bei der Fehlerkorrektur wird ein Fehlernachtest vorgenommen: Vormals aufgrund des Fehlerzustands gescheiterte Testfälle müssen erneut ausgeführt werden und fehlerfrei durchlaufen. Neue, etwa durch Kundenrückmeldung entdeckte Fehlerwirkungen, müssen durch zusätzliche Testfälle abgedeckt werden.

Oft verändern Fehlerkorrekturen das Verhalten der Software in ihrer jeweiligen Umgebung. Es muss deshalb überprüft werden, ob die Testfälle für die nähere Umgebung der Änderung noch immer durchlaufen. Oftmals erfordern schwere Fehlerwirkungen eine sofortige Korrektur, was einen umfassenden Testlauf verunmöglicht. Dieser ist im Anschluss an die erfolgte Korrektur möglichst bald nachzuholen.

Die vorzeitige Planung von Wartungsreleases erleichtert die Organisation der Testaktivitäten, besonders wenn Art und Umfang der ausgelieferten Korrekturen frühzeitig bekannt sind. Die Gewissheit, dass Wartungsreleases ohnehin nötig sein werden, darf aber keine Ausrede für mangelhaftes Testen sein. Dazu sind die Kosten und Risiken von Fehlerwirkungen im Produktiveinsatz zu hoch.

Da sich selbst kleine lokale Änderungen auf andere Systemteile auswirken können, muss der Umfang der nötigen Testarbeiten mithilfe einer Auswirkungsanalyse ermittelt werden. Im Gegensatz zur Softwarewartung ist bei der Softwarepflege, welche die Software um neue Anwendungsfälle ergänzt, oftmals ein Akzeptanz- bzw. Abnahmetest erforderlich. Eine Migration bestehender Datenbestände muss ebenfalls angemessen auf Korrektheit überprüft werden. Ansonsten ist das Vorgehen beim Testen bei Softwarewartung und -pflege das gleiche.

Bestehende Software kann auch umfassenderen Erweiterungen unterzogen werden, welche durch das Produktmanagement geplant werden. Neben den regelmässigen kleineren Wartungs- und Pflegereleases kann es so zu grösseren funktionalen Updates kommen. Bei der Weiterentwicklung muss nicht nur die Funktionsweise der neu hinzukommenden Features überprüft werden, sondern auch, ob die bestehenden Features weiterhin funktionieren und nicht durch die Weiterentwicklung versehentlich beeinträchtigt worden sind.

Es sind also neue bzw. erweiterte Testfälle wie auch _Regressionstests_ nötig. Ein Regressionstest oder «Test nach Änderung» ist der erneute Test eines Programms nach dessen Modifikation mithilfe bereits bestehender Testfälle. Damit wird geprüft, ob Anpassungen und Erweiterungen unbeabsichtigten Seiteneffekte ‒ Regressionen ‒ erzeugt haben. Der Regressionstest prüft also, ob unveränderte Features der Software wirklich unverändert geblieben sind.

Testfälle, die im Rahmen eines Regressionstests zum Einsatz kommen, müssen wiederverwendbar sein. Hierzu müssen manuell auszuführende Testfälle gut dokumentiert sein. Besser sind jedoch automatisierte Testfälle für Regressionstests geeignet, da der Nutzen der Testautomatisierung durch die wiederholte Ausführung besonders hoch ist.

Beim Regressionstest müssen alle Testfälle herbeigezogen werden, welche die alte Funktionalität betreffen. Hierzu ist die Analyse der Testspezifikation nötig, um zu ermitteln, welche Testfälle sich auf welche Anforderungen beziehen. Automatisierte Testfälle sind an die neue bzw. erweiterte Funktionalität anzupassen, da sie sonst nicht aussagekräftig sind. Scheiternde Testfälle zeigen mögliche Regressionsfehler an ‒ oder wurden noch nicht an die neuen Anforderungen angepasst.

Neue Funktionalitäten erfordern die Entwicklung zusätzlicher Testfälle. Manuelle Regressionstests sind oft teuer und zeitaufwändig. Die Auswahl der Testfälle orientiert sich oft an deren Prioritäten, wobei Sonderfälle oft nicht getestet werden. Auch können Regressionstests auf bestimmte Konfigurationen oder Teilsysteme begrenzt werden.