+++
date = '2025-09-07T18:40:40+02:00'
title = 'Teststrategie'
weight = 8
+++

Ein Softwareprojekt erfordert eine darauf zugeschnittene Teststrategie. Hierzu muss der Testmanager folgende Aufgaben durchführen, indem er Antworten auf die entsprechenden Fragen findet:

- Testobjekte festlegen: Aus welchen Teilsystemen, Komponenten und Schnittstellen besteht das zu testende System, und welche davon müssen getestet werden?
- Testziele formulieren: Für welche Testobjekte und für das Gesamtsystem sind welche Qualitätskriterien zu prüfen?
- Testprozess anpassen: Welche zu den Testzielen und Testobjekten passenden Teststufen soll es geben? Wie erfolgt das Zusammenspiel mit den anderen Projektaktivitäten?
- Testverfahren auswählen: Welche Testverfahren sollen zum Erreichen der Testziele zum Einsatz kommen? Müssen Mitarbeitende allenfalls noch in diesen Testverfahren ausgebildet werden?
- Testinfrastruktur festlegen: Welche Testumgebungen und Testwerkzeuge werden benötigt? Welche davon sind bereits vorhanden?
- Testmetriken definieren: Welche Metriken sollen wie erhoben und ausgewertet werden? Wie soll auf die Testergebnisse reagiert werden, und wie lauten die Kriterien für den Testabschluss?
- Berichtswesen festlegen: Welche Dokumente und Berichte sollen bei welchen Ereignissen durch wen erstellt werden? An wen müssen die (Zwischen)ergebnisse gemeldet und wie sollen die Berichte archiviert werden?
- Kosten und Aufwand planen: Wie hoch ist der voraussichtliche Testaufwand und wann müssen welche Ressourcen bereitgestellt werden?

Diese strategischen Überlegungen werden im _Testkonzept_ festgehalten. Die Entscheidungen sollen darin zwecks Nachvollziehbarkeit gut begründet werden. Das Testkonzept wird im Verlauf des Projekts ergänzt und präzisiert. Basierend auf den damit gemachten Erfahrungen kann das Konzept ‒ mit den nötigen Anpassungen ‒ für weitere Projekte wiederverwendet werden.

## Mögliche Ansätze

Beim Finden einer Teststrategie unterscheidet man zwischen verschiedenen grundlegenden Ansätzen. In der zeitlichen Dimension unterscheidet man zwischen:

1. _vorbeugend_: Tester sind ab Projektbeginn involviert und wirken bereits bei den Anforderungen (im Rahmen vom Testentwurf) mit. Bereits Zwischenergebnisse werden getestet und Fehlerwirkungen dadurch früh erkannt.
2. _reaktiv_: Tester werden erst zu einem späteren Zeitpunkt im Projekt involviert und müssen auf die vorgefundene Situation reagieren. Oftmals wird das Testobjekt _explorativ_ getestet, d.h. Tester erkunden es interaktiv, wobei Entwurf, Durchführung und Auswertung der Tests in die gleiche zeitliche Phase fallen.

Der vorbeugende Ansatz ist in jedem Fall empfehlenswert, meist kostengünstiger und je nach Projekt (z.B. bei sicherheitskritischer Software) sogar verbindlich.

Eine weitere Dimension betrifft die verfügbaren Informationen und das vorhandene Wissen. Hier unterscheidet man ebenfalls zwischen zwei verschiedenen Ansätzen:

1. _analytisch_: Die Strategie wird aufgrund von Daten und deren Analyse festgelegt. Relevante Einflusskriterien werden ermittelt und mathematisch modelliert.
2. _heuristisch_: Man stützt sich auf Erfahrungswissen und auf Faustregeln, weil keine belastbaren Daten vorhanden sind bzw. das Entwickeln mathematischer Modelle nicht praktikabel ist (zu aufwändig, kein entsprechendes Wissen vorhanden).

Diese Ansätze können gemischt und zu verschiedenen konkreten Strategien kombiniert werden:

- _kostenorientiert_: Testverfahren werden auf Kosten optimiert; Tests, die mit wenig Aufwand viel abdecken werden bevorzugt. Es wird eher in die Breite als in die Tiefe getestet.
- _risikobasiert_: Tests werden anhand ihres Risikos bzw. anhand des Risikos ihrer Anforderungen priorisiert.
- _modellbasiert_: Tests werden anhand abstrakter Modelle für das jeweilige Testobjekt organisiert, z.B. mithilfe von Zustandsautomaten, anhand statistischer Modelle für die Fehlerverteilung oder basierend auf der Häufigkeit der Anwendungsfälle.
- _methodisch_: Es wird mit vordefinierten Sets von Testbedingungen gearbeitet, womit wahrscheinliche Fehlerwirkungen provoziert werden sollen.
- _wiederverwendungsorientiert_: Testfälle und Testinfrastruktur sollen so weit wie möglich von einem vorherigen Projekt übernommen werden.
- _checklistenorientiert_: Es werden Fehlerlisten aus früheren Projekten/Iterationen und Listen potenzieller Fehler und Risiken abgearbeitet.
- _prozess- und standardkonform_: Man orientiert sich an branchenspezifischen Vorgaben oder an sonstigen Standards und testet dabei «nach Rezept».
- _expertenorientiert_: Es werden Experten zum Testen beigezogen, welche das Testobjekt auf Basis ihres Fachwissens und «Bauchgefühls» überprüfen.
- _leistungserhaltend_: Ein Rückgang der bestehenden Leistung soll durch das erneute Ausführen bestehender Testfälle überprüft und vermieden werden, z.B. mittels Regressions- und Performancetests.

## Risiken

Risiko, definiert als Schadensausmass multipliziert mit Schadenswahrscheinlichkeit, ist ein wichtiges Kriterium zur Auswahl und Priorisierung von Testzielen, Testverfahren und Testfällen. Die Schadenswahrscheinlichkeit ist davon abhängig, wie die jeweilige Software genutzt wird.

Da eine exakte numerische Beurteilung von Schadensausmass und Schadenswahrscheinlichkeit in der Praxis schwer zu ermitteln ist, begnügt man sich oft mit Risikoklassen wie «gering», «mittel», «hoch» und evtl. «sehr hoch». Die Kombination der Risikofaktoren von Schadensausmass und Schadenswahrscheinlichkeit erlaubt eine zweidimensionale Einteilung in Risikostufen, etwa nach «A», «B» und «C».

![Aus den kombinierten Risikostufen ergeben sich die Risikoklassen](/img/risikoklassen-risikostufen.svg)

Grundsätzlich unterscheidet man zwischen zwei Arten von Risiken:

1. _Projektrisiken_: Risiken, die den Projekterfolg beeinträchtigen oder verhindern
    - _organisatorische_: mangelnde Ressourcen, Verzögerungen aufgrund zu optimistischer Schätzungen, mangelnde Zusammenarbeit zwischen Involvierten
    - _personalbezogene_: fehlendes Fachwissen, Ausfälle durch Krankheit, geringe Produktivität aufgrund von Konflikten
    - _technische_: Leistungsmerkmale aufgrund Änderungen des Projektumfangs (engl. _scope creep_) nicht erreicht, schlechte Qualität von Zwischenergebnissen aufgrund unzureichender Prozesse, unerwartet komplizierte Lösungen aufgrund veralteter/ungeeigneter Werkzeuge und Bibliotheken, Testmittel mangelhaft oder verzögert bereitgestellt
    - _lieferantenseitige_: schlechte Leistungen, Ausfälle, Streitigkeiten
2. _Produktrisiken_: Risiken, die aus dem ausgelieferten Produkt entstehen; auch als «Qualitätsrisiken» bezeichnet
    - _verfehlte Erwartungen_: Erwartungen von Markt und Anwendern nicht erfüllt, Produkt unbrauchbar
    - _mangelnde Leistungsmerkmale_: Features funktionieren nicht oder fehlen ganz
    - _schlechte nicht-funktionale Eigenschaften_: schwere Bedienbarkeit, schlechte Performanz, fehlende Skalierbarkeit, mangelhafte Kompatibilität
    - _schlechte Datenqualität_: aufgrund fehlerhafter Migration oder Konvertierung
    - _verletzte Regularien/Gesetze_: Datenschutz und Sicherheit mangelhaft, Zulassungskriterien nicht erfüllt
    - _mangelnde Produktsicherheit (Safety)_: Schäden an Mensch und Material beim Produkteinsatz

Das Eintreten von Produktrisiken kann für den Hersteller gravierende Folgen haben: von unzufriedenen Kunden über verminderte Einnahmen und höheren Wartungskosten bis zu Schäden an dritten und straftrechtlichen Sanktionen.

## Risikomanagement

Schäden können vermieden oder vermindert werden, indem man ein professionelles Risikomanagement betreibt. Dieser Prozess sieht die folgenden Aktivitäten vor:

1. _Risikoanalyse_: Risiken identifizieren und bewerten
2. _Risikosteuerung_: Risiken mindern und überwachen

Zu den im ersten Schritt ermittelten Risiken sind im zweiten Schritt passende Massnahmen zu definieren, umzusetzen und auf deren Wirksamkeit zu überprüfen. Mit der Risikoanalyse soll möglichst früh im Projekt begonnen werden. Im agilen Vorgehen ist der Prozess für jede Iteration zu wiederholen. Es müssen dabei sowohl Projektrisiken als auch Produktrisiken berücksichtigt werden.

Bei der Risikosteuerung gibt es verschiedene Möglichkeiten:

- _Akzeptanz_: Das Risiko wird samt Auswirkung hingenommen.
- _Transfer_: Das Risiko wird an den Kunden oder an Dritte abgewälzt.
- _Notfallplan_: Für das Risiko werden keine vorbeugenden Massnahmen definiert, dafür wird aber ein Plan erarbeitet, was beim Eintreten des Risikos passieren soll.
- _Testen_: Das Risiko wird durch Testen minimiert, indem Fehler bereits vor dem Produktiveinsatz gefunden werden.

Testen erlaubt eine bessere Risikobeurteilung, indem es Risiken sichtbar macht und die Wahrscheinlichkeit unentdeckter Fehler vermindert. Durch das Testen werden einerseits Produktrisiken minimiert, andererseits Projektrisiken kompensiert.

Beim risikobasierten Testen wird die Teststrategie entlang der identifizierten und bewerteten Risiken festgelegt. Kritische Programmteile werden dabei intensiver (tiefer) und umfassender (breiter) getestet als weniger kritische.

## Testkosten und Fehlerkosten

Zwecks Budgetierung der Testkosten müssen die Aufwände der geplanten Testaktivitäten vorab geschätzt werden. Testkosten und Fehlerkosten müssen dabei in einem Verhältnis stehen, das durch die Risikoabschätzung gerechtfertigt wird: Wo hohe Risiken zu vermeiden sind, soll ausführlicher getestet werden. Die Testkosten hängen von verschiedenen Faktoren ab:

- Reifegrad des Entwicklungsprozesses: Änderungs- und Fehlerrate, Stabilität, Planbarkeit
- Qualität und Testbarkeit der Software: Anzahl und Schwere der Fehlerwirkungen
- Testinfrastruktur: Verfügbarkeit, Vertrautheit, Anschaffungs- und Unterhaltskosten
- Team und Mitarbeiter: Erfahrung, Können, Zusammenarbeit
- Qualitätsziele: angestrebte Testabdeckung und Zuverlässigkeit, zulässige Fehlermenge
- Teststrategie: Testziele, Testumfang, Testverfahren, Planung

Die Schätzung der Aufwände kann auf verschiedenen Verfahren basieren:

1. _metrikbasiert_: Der Aufwand wird aufgrund aus anderen Projekten gemachter Erfahrungen geschätzt, etwa auf Basis eines ermittelten Verhältnis von Entwicklungs- zu Testaufwand.
2. _expertenorientiert_: Der Aufwand wird in einem Dialog einer Expertengruppe abgeschätzt, bis daraus ein Konsens entsteht (z.B. Breitband-Delphi, Planungspoker). Bei der Drei-Punkt-Schätzung wird ein schlechtester (pessimistisch), bester (optimistisch) und daraus gemittelter Normalfall (realistisch) geschätzt.

Je grösser die einzuschätzende Aufgabe ist, desto ungenauer fällt in der Regel deren Schätzung aus. Da Schätzfehler unvermeidbar sind, sollen Annahmen möglichst gut dokumentiert werden, womit die Schätzungsmethodik in Zukunft verfeinert werden kann.

Fehlen Erfahrungswerte und Expertenwissen, kann man von eine Testaufwand im Umfang von ca. 25%-50% der Entwicklungskosten ausgehen.

Durch reduzierte Testaktivitäten eingespartes Geld wirkt sich oftmals durch höhere Folgekosten aus:

- _direkte Fehlerkosten_: Mehrkosten, die beim Kunden durch Fehlerwirkungen entstehen
- _indirekte Folgekosten_: Umsatzeinbussen und Mehrkosten, die beim Hersteller aufgrund des geschädigten Rufs bzw. durch höhere Supportaufwände entstehen
- _Fehlerkorrekturkosten_: Kosten, die bei der Fehleranalyse, Fehlerkorrektur und beim Ausliefern der aktualisierten Version entstehen

Je früher ein Fehler erkannt wird, desto günstiger fällt seine Korrektur in der Regel aus.

## Fragen

1. Mögliche Ansätze
    - Wie funktioniert _exploratives Testen_ und wann ist es sinnvoll?
2. Risiken
    - Warum soll Testen _Produktrisiken minimieren_ und _Projektrisiken kompensieren_ können?
3. Risikomanagement
    - Wie würde ein Beispiel für _Akzeptanz_, _Transfer_ und _Notfallplan_ aussehen?
4. Testkosten und Fehlerkosten
    - Welche möglichen Kosten können durch unzureichendes Testen anfallen?
