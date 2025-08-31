+++
date = '2025-08-27T14:14:59+02:00'
title = 'Testen nach Vorgehensmodell'
weight = 6
+++

Ein Softwareentwicklungsprojekt orientiert sich an einem im Voraus festgelegten Vorgehensmodell. Damit werden die Aufgaben in eine logische Reihenfolge gebracht und auf Phasen oder Iterationen verteilt. Auch werden die Arbeiten auf verschiedene Rollen verteilt.

Verschiedene Vorgehensmodelle machen unterschiedliche Vorgaben zum Testen. Grundsätzlich unterscheidet man zwischen sequenziellen, iterativ-inkrementellen und agilen Entwicklungsmodellen.

## Sequenzielle Entwicklungsmodelle

Der Prozess wird als ein sequenzieller Ablauf von Aktivitäten verstanden, nach deren Durchlauf am Ende das gewünschte Produkt in der geforderten Qualität fertig bereitsteht. Ein zeitliches Überschneiden der einzelnen Aktivitäten ist nicht vorgesehen. Zwischen Projektstart und Auslieferung können Monate oder Jahre vergehen.

### Das Wasserfallmodell

Nach diesem Modell sind die einzelnen Phasen ‒ _System Requirements_, _Software Requirements_, _Analysis_, _Program Design_, _Testing_ und _Operation_ ‒ zeitlich streng voneinander getrennt. Das Testen wird als einmalige und den Entwicklungsarbeiten nachgelagerte Aktivität verstanden, nicht als projektbegleitende Tätigkeit.

![Das Wasserfallmodell](/img/waterfall.svg)

### Das V-Modell

Hier wird das Wasserfallmodell um ein erweitertes Verständnis der Testaktivitäten ergänzt. Zu jeder Entwicklungsarbeit ‒ _Anforderungsdefinition_, _funktionaler Systementwurf_, _technischer Systementwurf_, _Komponentenspezifikation_ ‒ gibt es eine korrespondierende Testaktivität ‒ _Abnahmetest_, _Systemtest_, _Integrationstest_, _Komponententest_.

![Das V-Modell](/img/v-modell.svg)

Die Entwicklungsarbeiten bilden die absteigende Flanke, die Testarbeiten die aufsteigende ‒ und unten in der Mitte steht das _Programmieren_. Geht man bei den Entwicklungsarbeiten vom Groben ins Feine («top-down»), setzt man bei den Testaktivitäten die einzelnen Teile wieder zu einem Ganzen zusammen («bottom-up»). Die Ergebnisse aus den Entwicklungsarbeiten werden dabei sukzessive integriert und folgendermassen getestet:

- _Komponententest_: Erfüllt der Baustein seine Spezifikation?
- _Integrationstest_: Spielen die Komponenten wie gewünscht zusammen?
- _Systemtest_: Erfüllt das System als Ganzes die spezifizierten Anforderungen?
- _Abnahmetest_: Erfüllt das System aus Kundensicht die vereinbarten Leistungsmerkmale?

Diese Testaktivitäten sind nicht als eine blosse zeitliche Unterteilung zu verstehen, sondern verfolgen unterschiedliche Testziele auf verschiedenen Abstraktionsebenen. Dabei werden unterschiedliche Testmethoden und Testwerkzeuge von für die jeweilige Testaktivität spezialisiertem Personal angewendet.

Die Testaktivitäten sind von unterschiedlichem Charakter:

- _Verifizierende_ Tests prüfen, ob ein Testobjekt seine Aufgabe gemäss Spezifikation erfüllt.
- _Validierende_ Tests prüfen, ob ein Testobjekt für seinen Einsatzzweck geeignet ist.

Mit steigender Teststufe nimmt der verifizierende Charakter der Testaktivitäten ab und der validierende zu.

Die vorbereitenden Testaktivitäten (Testplanung, Testanalyse, Testentwurf) können im V-Modell parallel zu den Entwicklungsarbeiten in der absteigenden Flanke erfolgen. Entwicklungs- und Testarbeiten werden einander in diesem Modell als gleichwertig gegenübergestellt. Auf jeder Teststufe wird gegen die korrespondierende Entwicklungsstufe getestet.

## Iterativ-inkrementelle Entwicklung

In der Praxis trifft man kaum rein sequenzielle Entwicklungsprojekte an, die etwa nach einem Durchlauf des V-Modells abgeschlossen wären. Stattdessen werden solche Vorgehensmodelle oder Teile davon iterativ durchlaufen, woraus ein Produkt inkrementell entsteht.

### Klassische iterativ-inkrementelle Entwicklung

Das Produkt wird schrittweise verbessert, wobei man sich auf Rückmeldungen des Kunden abstützt, dessen Bedürfnisse nach jeder Iteration besser erfüllt werden sollen. Erfahrungen aus vorhergehenden Iterationen dienen ebenfalls zur Verbesserung des Produkts.

Durch das schrittweise Vorgehen mit häufigen Releases wird die _Time to Market_ verkürzt und vermieden, an den Bedürfnissen des Kunden vorbei zu entwickeln. Klassisch iterativ-inkrementelle Modelle wie z.B. der _Rational Unified Process_ (RUP) sind heute nur noch sehr wenig verbreitet.

### Agile Softwareentwicklung

In der agilen Softwareentwicklung wird das vorausplanende Projektmanagement durch eine adaptive Projektsteuerung ersetzt, womit schnell auf angepasste oder neue Kundenwünsche reagiert werden kann, ohne dabei Zeit zum Nachtragen der Projektdokumentation zu verlieren.

In Abgrenzung zu den klassischen schwergewichtigen und dokumentlastigen Modellen gelten agile Methoden wie _Extreme Programming_, _Kanban_ und das am meisten verbreitete _Scrum_ als leichtgewichtig, wobei Projekt- und Prozessdokumentation minimiert werden. Scrum zeichnet sich aus durch:

- _Sprints_: kurze Iterationen fester Länge
- _Product- & Sprint Backlog_: Priorisierungen der Kundenanforderungen
- _Timeboxing_: begrenzte Zeitfenster für Aufgaben und Besprechungen
- _Transparenz_: Offensichtlichmachung des Sprint-Fortschritts durch regelmässige Besprechungen (_Daily Scrum_) und jederzeit einsehbare Taskboards

Auf Basis des «Whole Team»-Ansatzes werden Aufgaben und Probleme bevorzugt gemeinsam von mehreren Teammitgliedern angegangen, wobei jedes Mitglied seine Stärken und sein Fachwissen einbringen kann. Anstelle einer starren Rolleineinteilung ‒ Programmierer, Tester ‒ unterstützen sich die Teammitglieder gegenseitig, auch bei Testaufgaben.

Für die Qualität des resultierenden Produkts sind alle im Team gleichermassen verantwortlich. Es gibt jedoch Projekte, in denen dieser Ansatz beispielsweise aus regulatorischen Gründen nicht gangbar ist, etwa wenn Entwicklungs- und Testteam aus sicherheitstechnischen Überlegungen voneinander getrennt agieren müssen.

Freigaben können mehrmals pro Jahr bis im Extremfall mehrmals täglich erfolgen. Damit eine so hohe Taktung der Releases mit der notwendigen Qualität überhaupt möglich ist, müssen die Testfälle grösstenteils automatisch bereitgestellt werden, sodass die Inkremente früherer Releases automatisch durch Regressionstests mitgeprüft werden können.

Dadurch nimmt die Anzahl der Testfälle von Iteration zu Iteration laufend zu. Nur dank hoher Testautomatisierung kann die wachsende Testmenge bei gleichbleibender Sprintdauer konsequent durchgeführt werden. Zur Beschleunigung der Testdurchläufe können Tests geringerer Priorität auch von der Ausführung ausgenommen werden.

In einem agilen Projekt werden die Anforderungen in einem iterativ-inkrementellen Prozess aufgenommen. Dabei steigt nicht nur die Menge der Anforderungen mit jeder Iteration an, sondern auch deren Detailgrad. Durch eine enge Zusammenarbeit der Stakeholder untereinander wird sichergestellt, dass beim Verständnis der Anforderungen keine Missverständnisse auftreten.

#### User Stories

Dieses gemeinsame Verständnis soll über die Form der _User Story_ erreicht werden, mit welcher Anforderungen folgendermassen beschrieben werden. (In der Praxis sind leicht unterschiedliche Satzschablonen in Gebrauch):

> Als _ROLLE_ möchte ich, dass _ZU ERREICHENDES ZIEL_, damit _RESULTIERENDER NUTZEN_.

Die Qualität der User Stories wird mit den sogenannten _INVEST_-Kriterien sichergestellt. Demnach soll eine User Story folgendes sein:

- **I**ndependent: _unabhängig_ von anderen User Stories
- **N**egotiable: _verhandelbar_ durch Spielraum bei der Umsetzung
- **V**aluable: _wertvoll_/_nützlich_ für den Anwender bzw. Kunden
- **E**stimable: _abschätzbar_ im Aufwand durch ausreichende Beschreibung
- **S**mall: _klein_ genug für eine Umsetzung ohne weitere Aufteilung
- **T**estable: _testbar_ durch hinreichende Akzeptanzkriterien

Teammitglieder mit Testwissen können durch die Erfüllung des letztgenannten Kriteriums viel dazu beitragen, die Testkosten für eine Story tief zu halten.

Beim Erstellen einer User Story empfiehlt sich das _3C-Schema_:

1. **C**ard: Die User Story wird auf einer physischen oder virtuellen Story-Karte festgehalten.
2. **C**onversation: In einem Dialog, der von Releaseplanung bis zur Umsetzung andauern kann, klären die Stakeholder die User Story inhaltlich.
3. **C**onfirmation: Die korrekte Umsetzung der User Story wird explizit aufgrund der festgelegten Abnahmekriterien bestätigt.

#### Abnahmekriterien

_Abnahmekriterien_ sind nichts weiteres als Testbedingungen, die beim Abnahmetest einer User Story zur Anwendung kommen. Diese tragen dazu bei, dass

- bei den Stakeholdern Konsens über die Interpretation der User Story herrscht,
- der Umfang der User Story klar eingegrenzt ist, und
- der Arbeitsaufwand einschätzbar und planbar ist.

Bei der _abnahmetestgetriebenen Entwicklung_ (ATDD: engl. _acceptance test-driven development_) werden die Abnahmetestfälle bereits vor der Implementierung umgesetzt. Zuerst werden die Abnahmekriterien an einem Spezifikations-Workshop gemeinsam unter den Stakeholdern geklärt. Anschliessend setzt das Team daraus die Abnahmetestfälle um.

Die Testfälle sollten dabei nicht über die jeweilige User Story hinaus gehen und auch keine Überschneidungen untereinander haben, aber nicht nur den Normalfall, sondern alle möglichen Sonderfälle behandeln. Schwierigkeiten bei der Erarbeitung der Abnahmekriterien deuten auf eine unklare User Story hin. Das Team ist selber dafür verantwortlich, zusätzliche nicht-funktionale Test umzusetzen, wenn es diese als angebracht sieht.

## Softwareentwicklung im Projekt- und Produktkontext

Je nach umzusetzendem Produkt oder Projekt unterscheiden sich die Anforderungen an Nachvollziehbarkeit und Planung, was einen Einfluss auf das auszuwählende Entwicklungsmodell hat. Hierbei können verschiedene Kriterien eine Rolle spielen:

- die angestrebte _Time to Market_
- das Einsatzgebiet (intern, bei Kunden) und die geplante Lebensdauer (vorübergehend, langfristiges Kundenangebot)
- das technische Umfeld (zentrale Web-Anwendungen, auf Offline-Geräten vorinstallierte Software)
- identifizierte Produktrisiken (geringe bei Unterhaltungsanwendungen, sehr hohe bei Medizinalsoftware)
- organisatorische und kulturelle Aspekte (eingespieltes lokales Team, geografisch verteilte Einzelkämpfer)

Vorgehensmodelle können miteinander kombiniert und auf die jeweiligen Bedürfnisse zugeschnitten werden (engl. «Tailoring»). Dies kann auch die Testaktivitäten betreffen, welche aber in jedem Fall folgenden Anforderungen genügen sollten:

- Testaktivitäten sollen schon früh im Projekt angegangen werden (Spezifikation von Testfällen, Aufbau der Testumgebung).
- Für jede Entwicklungsaktivität muss eine passende Testaktivität vorgesehen sein.
- Die Testaktivitäten müssen auf jeder Teststufe den Testzielen entsprechend ausgerichtet sein (z.B. mehr oder weniger Fokus auf die Validierung oder Verifizierung).
- Testanalyse und Testentwurf erfolgen bereits während der Entwicklung und nicht nachgelagert.
- Tester sind bereits beim Aufnehmen der Anforderungen und bei deren Prüfung (Review) involviert.

## Fragen

1. Sequenzielle Entwicklungsmodelle
    1. Wie wird das _Testing_ im Wasserfallmodell verstanden?
    1. Welche Vorteile bringt das V-Modell im Bezug aufs Testen gegenüber dem Wasserfallmodell?
1. Agile Softwareentwicklung
    1. Wie unterscheidet sich die Rollenteilung im agilen gegenüber dem sequenziellen Vorgehen?
    1. Warum ist die Testautomatisierung im agilen Vorgehen besonders wichtig?
    1. Aus der [Testplanung](/theorie/testprozess/#testplanung) kennen wir bereits die _Definition of Ready_ und die _Definition of Done_. Was haben diese Begriffe mit der Umsetzung einer User Story zu tun?
    1. Wozu werden zu jeder User Story Abnahmekriterien festgelegt?
1. Wahl des Entwicklungsmodell
    1. Nenne je ein (reales oder fiktives) Beispiel für ein Projekt das sich besonders für das sequenzielle bzw. agile Vorgehensmodell eignet und gib Gründe für diese Eignung an.
