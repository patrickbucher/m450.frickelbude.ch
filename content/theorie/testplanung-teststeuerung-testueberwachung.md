+++
date = '2025-09-07T18:34:12+02:00'
title = 'Testplanung, Teststeuerung, Testüberwachung'
weight = 9
+++

Das Testmanagement ist ein Prozess, der sich in vier Schritte gliedert:

1. Teststrategie festlegen und anpassen
2. Testausführung planen
3. Testausführung initiieren und steuern
4. Testergebnisse auswerten und berichten

Dieser Prozess wird für jede neue zu testende Softwareversion, für jede zu durchlaufende Teststufe (teilweise parallel) und für jede Iteration (im agilen Vorgehen) wiederholt durchlaufen.

## Testplanung

In der Testplanung konkretisiert der Testmanager die projektunabhängige Teststrategie für das vorliegende Projekt. In agilen Projekten unterscheidet man zwischen Iterationen, die nur einen internen Release zum Ziel haben, und solchen, deren Ergebnisse an den Kunden ausgeliefert werden sollen.

Bei der Releaseplanung legt der Product Owner im Product Backlog fest, welche User Stories in welcher Priorität umzusetzen sind. Die Risiken der einzelnen User Stories werden von den Testern eingeschätzt. Im Testkonzept legen diese dann fest, wie die einzelnen User Stories angemessen zu testen sind (passende Teststufen, Anzahl Testfälle, voraussichtlicher Testaufwand). Die Anzahl der Iterationen bis zu einem Release kann vorgegeben sein, muss aber je nach Fortschritt möglicherweise angepasst werden.

In der Iterationsplanung legt das Team im Sprint Backlog fest, welche User Stories mit welcher Priorität umzusetzen sind. Die Abnahmekriterien für die umzusetzenden Stories müssen spätestens jetzt festgelegt werden. Nun können die Testaufgaben (erforderliche funktionale und nicht-funktionale Tests; notwendige Regressionstests) anhand der Risiken der einzelnen User Stories geplant werden. Dadurch entsteht für jede Iteration ein massgeschneiderter Testansatz.

Das Testen findet in jeder Iteration statt, nicht nur bei Release-Iterationen, wo es naturgemäss noch umfassender vorgenommen wird. Der Testplan muss dabei für jede Iteration aktualisiert werden, sodass er den tatsächlichen Entwicklungsstand, die ermittelten Testergebnisse und auch die jeweils verfügbaren Ressourcen berücksichtigt.

Je nach Testfortschritt können geplante Tests niederer Priorität oder Regressionstests an unveränderten Komponenten weggelassen werden. Der Fokus der Tests kann sich im Verlauf eines Releasezyklus auch verschieben: von automatisierten Komponententests über Integrationstests bis zu manuellen Abnahmetests; und von funktionalen zu nicht-funktionalen Tests. Häufig durchgeführte manuelle Tests können allmählich automatisiert werden.

Bei der Ausführungsreihenfolge der Tests sind neben deren Vor- und Nachbedingungen auch deren Prioritäten zu berücksichtigen. Hierbei können folgende Aspekte relevant sein:

- Produktrisiko: Wie schlimm wäre ein Schaden beim Kunden aufgrund einer Fehlerwirkung?
- Testabdeckung: Welche Tests decken den grössten Teil der Software mit dem geringsten Testaufwand ab?
- Anforderungspriorität: Welche Tests beziehen sich auf wichtige Anforderungen?
- Nutzungshäufigkeit: Welche Funktionen werden häufig benutzt, sodass deren Fehlerwirkungen sehr grosse Auswirkungen hätten?
- Wahrnehmung: Welche (möglicherweise geringfügigen) Fehlerwirkungen könnten Benutzer verunsichern?
- Nicht-funktionale Qualitätsmerkmale: Legt der Kunde besonderen Wert auf Performance, Barrierefreiheit oder Optik?
- Systemarchitektur: Gibt es Komponenten, deren Ausfall die Funktionalität des Gesamtsystems gefährden könnten?
- Komplexität: Bei welchen Komponenten sind aufgrund ihrer Komplexität Fehlerzustände wahrscheinlich?
- Korrekturaufwand: Welche Fehlerwirkungen müssen möglichst früh erkannt werden, damit sie bis zum Release noch korrigiert werden könnten?

Welche dieser Kriterien berücksichtigt werden, legt der Testmanager im Testkonzept fest. Die Testfälle sollen auf jeden Fall so priorisiert werden, dass bei einem vorzeitigen Abbruch der Testdurchführung das bestmögliche Ergebnis für das Projekt erreicht wird.

Die Testfälle sollten so auf die verschiedenen Teststufen verteilt werden, dass eine _Testpyramide_ entsteht: Eine breite Basis automatischer und schneller Komponententests (Unit Tests), darüber ebenfalls automatisierte aber etwas aufwändigere Komponentenintegrationstests, dazu einige automatische und manuelle Systemtests und schliesslich eine dünne Spitze manueller Abnahmetests.

![Die Testpyramide](/img/testpyramide.svg)

Neben der Testpyramide kann die Verteilung der Testfälle auf die verschiedenen Testarten anhand der agilen _Testquadranten_ erfolgen. Auf zwei Achsen ‒ teamunterstützende und produkthinterfragende Tests auf der x-Achse, technologieorientierte und geschäftsprozessorientierte Tests auf der y-Achse ‒ werden die Testarten in den folgenden Quadranten angeordnet:

- Q1 (teamunterstützend/technologieorientiert): automatische Unit Tests und Integrationstests
- Q2 (teamunterstützend/geschäftsprozessorientiert): manuelle und automatische Tests auf Systemebene
- Q3 (produkthinterfragend/geschäftsprozessorientiert): manuelle explorative, Usability- und Abnahmetests
- Q4 (produkthinterfragend/technologieorientiert): Performance-, Sicherheits-, Migrations- und Infrastrukturtests

![Die (agilen) Testquadranten](/img/testquadranten.svg)

Ähnlich zur Definition of Ready und Definition of Done, die bei einer User Story die Kriterien für den Anfang und das Ende der Implementierung festlegen, gibt es auch bei der Testdurchführung _Eingangs-_ und _Endkriterien_.

Mit der Testausführung wird begonnen, wenn:

1. die notwendigen Ressourcen (Personal, Infrastruktur, Budget),
2. die Testbasis sowie Testentwürfe,
3. die Testmittel wie Testfälle und Testdaten
4. sowie die Informationen zum Testobjekt und dessen Qualität vorhanden sind.

Sind die Eingangskriterien nicht erfüllt, dürfte die Testdurchführung die angestrebten Testziele wohl nicht oder nur teilweise erreichen können.

Die Testdurchführung sollte nicht vorzeitig aufgrund Zeitmangels, sondern erst nach dem Eintreten der Endkriterien als abgeschlossen gelten. Dies ist der Fall, sobald:

1. Tests zu einem bestimmten Mindestumfang (Anzahl Testfälle, verwendete Teststufen und Testarten, angestrebter Automatisierungsgrad) durchgeführt und Test- sowie Fehlerberichte dazu ausgestellt worden sind.
2. Ein bestimmter Mindestabdeckungsgrad (durch Testfälle abgedeckte Anforderungen, durch automatische Tests ausgeführte Codezeilen) erreicht worden ist.
3. Bestimmte Produktqualitätskriterien erreicht worden sind, z.B. Anzahl gefundener aber nicht behobener Fehler; Fehlerdichte (Anzahl Fehlerzustände nach Codemenge); Zuverlässigkeit (Anzahl Fehlerwirkungen nach Betriebsdauer); Anzahl fehlgeschlagener Testfälle.
4. Das Restrisiko aufgrund nicht durchgeführter Testfälle tolerierbar ist.

Diese Kriterien müssen im Projektverlauf anhand gemessener Metriken eingeschätzt und womöglich an geänderte Anforderungen angepasst werden. Die Entscheidung über die Freigabe trifft der Projektleiter bzw. Product Owner anhand dieser Einschätzung. Je nach Kritikalität der Software kann ein Release auch erfolgen, wenn einige dieser Kriterien nicht erfüllt sind.

## Teststeuerung

Die Teststeuerung umfasst Massnahmen, die unternommen werden um die vorgesehenen Testaktivitäten für einen Testzyklus vorzunehmen. Diese Steuerungsmassnahmen können einzelne Tests oder übergeordnete Aktivitäten der Entwicklung betreffen:

- geplante Testaufgaben an Mitarbeiter übertragen und deren Ausführung überprüfen
- auf geänderte Situationen reagieren, etwa durch das Bereitstellen weiterer Ressourcen
- die eingeleiteten Korrekturmassnahmen bzw. deren Erfolg überprüfen

Die Korrekturmassnahmen müssen teilweise während eines laufenden Testzyklus umgesetzt werden oder können gar zusätzliche Testzyklen zur Folge haben, was bis zu einer Verschiebung von Releaseterminen führen kann. Stösst ein Testmanager auf Risiken und Probleme, die er nicht selber tragen bzw. lösen kann, muss er diese entsprechend dokumentieren und dem Projektverantwortlichen melden.

## Testüberwachung

Bei der Testüberwachung werden ‒ automatisch und manuell ‒ Informationen zu den Testaktivitäten gesammelt und ausgewertet. Damit kann das Erreichen der Testziele, der Testfortschritt und das Eintreten der Testendkriterien überprüft werden.

Hierbei orientiert man sich an den Testmetriken, die im Testkonzept festgelegt worden sind; etwa zur angestrebten Produktqualität, zur tolerierbaren Fehlermenge und -schwere, zum erwarteten Testfortschritt, zu einzuhaltenden Kosten und vertretbarem Risiko. Dabei sollte sich der Testmaanger auf aussagekräftige und mit vertretbarem Aufwand korrekt erhebbare Metriken begrenzen.

## Testberichte

Mithilfe von Testberichten informiert der Testmanager verschiedene Stakeholder des Projekts zusammenfassend über den Verlauf, den Fortschritt und die Ergebnisse der Testaktivitäten. Dies geschieht beim Abschluss eines Testzyklus oder einer Iteration, kann aber auch als Reaktion auf bestimmte Ereignisse (z.B. bei unvorhergesehenen Problemen) geschehen.

Dabei wird oft zwischen _Teststatusbericht_, der knapp ist und sich meist auf eine bestimmte Iteration bezieht, und _Testabschlussbericht_, der als Grundlage für die Entscheidung zu einer Freigabe dient, unterschieden. In letzterer gibt der Testmanager seine subjektive Einschätzung als Experte ab, ob ein Release mit vertretbarem Risiko erfolgen kann.

Ein Testbericht führt i.d.R. die folgenden Informationen auf:

- Testobjekte: _was_ wurde getestet?
- Zeitraum: _wann_ wurde getestet?
- Zusammenfassung: _wie_ (Teststufen & -arten) wurde getestet?
- Testfortschritt: _wie viel_ wurde getestet?
- Qualität: _welche_ Fehler wurden entdeckt?
- Risiken: _worin_ bestehen die Risiken bei einer Freigabe?
- Planerfüllung: _wie stark_ weicht man vom Plan ab?
- Ausblick: _woran_ arbeitet man als nächstes?
- Gesamtbewertung: _inwiefern_ vertraut man dem Testobjekt?

Je nach Art des Projekts und Industrie unterscheiden sich die Anforderungen an solche Testberichte, wobei auch allfällige regulatorische Vorgaben zu berücksichtigen sind.

In agilen Projekten empfiehlt sich die Integration des Fortschrittberichts in Taskboards und Burn-Down-Charts.

Testberichte sind in Umfang und Inhalt zielgruppenorientiert zu verfassen und können so einen Fokus auf technische oder betriebswirtschaftliche Aspekte haben.

## Fragen

1. Testplanung
    1. Wann müssen die Abnahmekriterien für User Stories spätestens festgelegt werden?
    1. Zwischen welchen beiden Iterationen unterscheidet man beim agilen Vorgehen im Bezug aufs Testen?
    1. Wie und warum verschiebt sich der Testfokus innerhalb eines Releasezyklus?
    1. Welche Aspekte sind für die Priorisierung der Tests relevant?
    1. Warum sollten die Tests erst nach Erreichen der…
        1. … Eingangskriterien durchgeführt werden?
        1. … Endkriterien abgeschlossen werden?
1. Teststeuerung
    1. Was passiert bei der Teststeuerung?
1. Testüberwachung
    1. Wozu und wie werden die Testaktivitäten überwacht?
1. Testberichte
    1. Zwischen welchen beiden Arten von Testberichten unterscheidet man und wozu werden diese erstellt?
