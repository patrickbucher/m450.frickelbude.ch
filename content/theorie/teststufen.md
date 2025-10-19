+++
date = '2025-10-19T13:58:35+02:00'
title = 'Teststufen'
weight = 11
+++

## Teststufen

Die Architektur eines Softwaresystems legt fest, aus welchen Teilsystemen das Gesamtsystem, und aus welchen Komponenten die verschiedenen Teilsysteme bestehen. Entsprechend muss beim Testen jede dieser Ebenen als separate _Teststufe_ betrachtet werden.

Beim sequenziellen Vorgehen sind die Endkriterien einer unteren Teststufe oftmals Teil der Einangskriterien der nächsthöheren Teststufe; es wird «von unten nach oben» getestet. Im agilen Vorgehen kommt es zu einer zeitlichen Verschmelzung der unterschiedlichen Teststufen.

Die Anzahl und Benennung der Teststufen kann sich dabei je nach Vorgehensmodell unterscheiden. Gebräuchlich sind vier Teststufen (mit alternativen Bezeichnungen):

1. Komponententest (Unittest, Modultest)
2. Integrationstest (Komponentenintegrationstest)
3. Systemtest (Systemintegrationstest)
4. Abnahmetest (Akzeptanztest)

Je nach Teststufe unterscheiden sich Testobjekt, Testziele, Testmethoden und Verantwortlichkeiten für die Testaufgaben.

### Komponententest

Beim _Komponententest_ werden die Softwarebausteine auf tiefster Architekturebene ‒ Module, Klassen, «Units» ‒ getestet. Entsprechende Tests bezeichnet man als Modultests, Klassentests bzw. Unittests. Als Testbasis dient die jeweilige Spezifikation einer solchen Komponente, d.h. deren Anforderungen. Auch Skripte, Konfigurationen oder Datenbankinhalte können Testobjekte eines Komponententests sein.

Die Komponente wird auf dieser Stufe isoliert betrachtet, um externe Einflüsse durch andere Komponenten auf mögliche Fehlerwirkungen auszuschliessen. Eine beobachtete Fehlerwirkung kann dank dieser isolierten Betrachtung der jeweiligen Komponente zugeordnet werden. Ist eine Komponente aus mehreren Bausteinen zusammengesetzt, kann diese trotzdem als einzelne Komponente getestet werden, solange dabei nicht Wechselwirkungen zu anderen Komponenten geprüft werden. 

Diese Teststufe ist sehr entwicklungsnah, zumal das Testobjekt direkt vom Entwickler stammt. Dementsprechend erfordert der Komponententest auch Programmierkenntnisse, da Tests auf dieser Stufe ausprogrammiert werden. Dabei wird der Testcode von einem Testtreiber ausgeführt, welcher das Testobjekt aufruft, das Ergebnis entgegennimmt, protokolliert und gegenüber einer formulierten Erwartung überprüft.

Da der Testcode und das Testobjekt oft von der gleichen Person geschrieben werden, spricht man beim Komponententest von einem Entwicklertest. Komponententests verfolgen das Ziel, die vollständige und im Hinblick auf die Spezifikation korrekte Funktionsweise einer Komponente zu überprüfen, wozu verschiedene Testfälle bestimmte Ein- und Ausgabekombinationen abdecken.

Da Komponenten mit anderen Komponenten interagieren, können diese unter Umständen falsch angesprochen d.h. mit unsinnigen Testdaten verwendet werden. Solche Konstellationen dürfen nicht zu einem Systemabsturz führen, sondern müssen abgefangen und sinnvoll behandelt werden.

Verwendet man die Komponente mit Testdaten, die ihrer Spezifikation gemäss unzulässig sind, spricht man von einem _Negativtest_. Oftmals gibt es mehr Negativ- als Positivtests, da der Wertbereich an falschen Testdaten praktisch unbegrenzt ist. Nicht selten macht die Eingabeprüfung über die Hälfte der Programmlogik aus.

Nicht funktionale Eigenschaften einer Komponente, z.B. deren Effizienz, können bereits auf dieser Stufe getestet werden, was in der Praxis jedoch (zu) selten passiert. Aspekte wie Klarheit und Wartbarkeit einer Komponente können im Rahmen eines statischen Tests (d.h. Reviews) vorgenommen werden.

Da der Entwickler eines Komponententests Zugriff auf den Quellcode des Testobjekts hat, spricht man von einem Whitebox-Testverfahren. Beim Testen einer Komponente kann der Entwickler somit Gebrauch von seinem Wissen über den internen Aufbau der Komponente machen, indem er z.B. Testfälle entwirft, um die Ausführung bestimmter Programmpfade zu überprüfen. In der Praxis wird der Komponententest jedoch oftmals als reiner Blackbox-Test durchgeführt, wobei die Testfälle ohne den Blick auf die innere Struktur der Komponente erstellt werden.

Beim iterativen «Test-First»-Vorgehen wird zuerst ein automatischer Testfall erstellt und erst dann die gewünschte Komponente umgesetzt. Dieses Vorgehen wird wiederholt, bis die umgesetzte Komponente allen Anforderungen genügt ‒ und alle Testfälle fehlerfrei durchlaufen. Dieses Vorgehen bezeichnet man auch als «testgetriebene Entwicklung» bzw. als «Test-Driven Development» (TDD).

### Integrationstest

Der _Integrationstest_ oder _Komponentenintegrationstest_ prüft das Zusammenspiel zweier oder mehrerer Komponenten. Hierzu müssen diese Komponenten zuerst von den Entwicklern integriert werden, d.h. es muss Code vorhanden sein, der die jeweiligen Komponenten verwendet. Beim Integrationstest sollen Fehlerzustände ermittelt werden, welche in den Schnittstellen zwischen den Komponenten bzw. in ihrem Zusammenspiel auftreten.

Als Testbasis dienen v.a. Schnittstellenspezifikationen, aber auch Sequenzdiagramme, Anwendungsfälle und Flussdiagramme. Integrationsfehler können auch dann auftreten, wenn bei den Komponententests keine Fehler ermittelt worden sind. Schliesslich können fehlerfreie Komponenten falsch verwendet werden, oder sie können Gebrauch unterschiedlicher, inkompatibler Datenstrukturen machen und dadurch inkompatibel zueinander sein.

Integrationstests können auf verschiedenen Ebenen zum Einsatz kommen: Von der Integration einzelner Komponenten über die Integration untereinander bereits integrierter Komponentengruppen bis zur Integration von Teilsystemen, wobei man im letzten Fall von einer _Systemintegration_ spricht.

Ein Integrationstest empfiehlt sich überall da, wo (bereits getestete) Systemteile neu integriert, d.h. miteinander ins Zusammenspiel gebracht werden. Neben Schnittstellen können auch Konfigurationsprogramme und -daten sowie Datenbankanbindungen und andere Infrastrukturkomponenten Testobjekt sein. Dabei ist es sinnvoll, wenn der gleiche Testtreiber wie bei den Komponententests zum Einsatz kommt. Zusätzliche Testwerkzeuge, die den Datenverkehr an den Schnittstellen aufzeichnen und protokollieren, können dabei sehr hilfreich sein.

Das Testziel von Integrationstests ist es, Schnittstellenfehler zu finden. Im einfachsten Fall wird dies bereits bei der Kompilierung erkannt; schwer zu findende Probleme mit einer Ursache im Datenaustausch zwischen den Komponenten erfordern jedoch dynamische Tests. Dabei unterscheidet man grob zwischen den folgenden Arten von Fehlerzuständen:

- _Inkompatibilität_: Die eine Komponente liefert Daten in einer Form, mit der die andere Komponente nicht umgehen kann.
- _Fehlinterpretation_: Die Komponenten interpretieren die Daten unterschiedlich, sodass es zu Widersprüchen in deren Verarbeitung kommt.
- _Synchronisationsproblem_: Die Komponenten übergeben einander Daten zum falschen Zeitpunkt (Empfangspunkte sind nicht bereit, Timeout) oder in falschen Zeitintervallen (zu schnell, zu langsam).

Diese Arten von Fehlern können unmöglich in den Komponententests gefunden werden, sondern erst in ihrer Wechselwirkung. Auch nicht-funktionale Aspekte wie Performance und Sicherheit können auf der Stufe der Komponentenintegration getestet werden. Da Integrationstests die betroffenen Komponenten mittesten, wird oftmals auf Komponententests verzichtet, was aber gravierende Nachteile haben kann:

- Die Fehlerzustände sind in der Komponente zu finden, die aber über den Integrationstest nur indirekt zugänglich sind.
- Durch diesen indirekten Zugang können nur eine eingeschränkte Menge an Eingebedaten der Komponente übergeben werden. Dadurch wird es schwierig bis unmöglich, bestimmte Fehlerwirkungen zu provozieren, wodurch nicht alle vorhandenen Fehlerzustände aufgespürt werden können.
- Eine Fehlerwirkung im Integrationstest hat ihre Ursache in einer bestimmten Komponente, es ist aber schwierig, diese Fehlerwirkung ihr auch zuzuordnen.

Die vermeintliche Zeitersparnis beim Verzicht auf Komponententests lohnt sich selten, da so nur mehr Zeit mit dem Lokalisieren von Fehlern aufgewendet wird.

Mit der Integration der Komponenten kann erst begonnen werden, wenn diese soweit fertig sind. Möchte man trotz unfertiger Komponenten bereits mit deren Integration anfangen, kann man Platzhalter entwickeln, die das Verhalten der fehlenden Komponenten simulieren. Je mehr Zeit in die Entwicklung solcher Platzhalter investiert wird, desto höher fallen die vermeidbaren Aufwände aus, die durch die Verzögerung einer Komponente entstehen.

Die Integration der Komponenten unterliegt verschiedenen Rahmenbedingungen:

- Die Systemarchitektur legt die Komponenten und deren Zusammenspiel fest.
- Der Projektplan gibt den Zeitpunkt für die Integration der Teilsysteme und Komponenten vor.
- Das Testkonzept bestimmt die Testintensität und die Teststufe für die verschiedenen Systemaspekte.

Durch eine sinnvolle Reihenfolge der Integration kann frühzeitig mit den Testaktivitäten begonnen werden, ohne dass hierzu hohe Aufwände zur Entwicklung von Platzhaltern nötig werden. (Es ist sinnvoller, alle Komponenten eines Teilsystems fertig zu haben als vereinzelte Komponenten aus verschiedenen Teilsystemen.) Zur Integration der Komponenten gibt es verschiedene Strategien:

- _Top-Down-Integration_: Die Tests beginnen auf oberster Systemebene, wobei fehlende, tieferliegende Komponenten vorerst durch Platzhalter ersetzt werden. Dieses Vorgehen ist einfach aber aufwändig.
- _Bottom-Up-Integration_: Die Tests beginnen auf tiefster Systemebene, wobei man sich stetig nach oben vorarbeitet. Es sind dadurch keine Platzhalter für tieferliegende Komponenten nötig, doch muss der Integrationscode durch Testcode simuliert werden.
- _Ad-hoc-Integration_: Die Komponenten werden in der (zufälligen) Reihenfolge ihrer Fertigstellung integriert. So wird jede Komponente frühstmöglich integriert, was jedoch viele Platzhalter erfordert.
- _Backbone-Integration_: Es wird vorab ein Programmskelett erstellt, in welchs die fertiggestellten Komponenten nach und nach eingebunden werden. Dadurch wird die Integrationsreihenfolge beliebig. Die Entwicklung eines solchen Backbones ist jedoch sehr aufwändig.

In der Praxis trifft man Mischformen dieser Strategien an. Eine «Big-Bang»-Integration, bei der alle Komponenten auf einmal integriert werden, ist nicht sinnvoll, weil hierdurch zu lange mit den Integrations- und Testaktivitäten gewartet wird, und dann alle Fehlerwirkungen auf einmal geballt auftreten, was deren Lokalisierung erschwert.

### Systemtest

Im _Systemtest_ wird das integrierte Gesamtsystem darauf geprüft, ob es die spezifizierten Produktanforderungen erfüllt. Trotz erfolgreicher Komponenten- und Integrationstests ist das nötig, weil diese tieferen Testarten die Erfüllung technischer Anforderungen überprüfen (_Verifizierung_), während der Systemtest aus Perspektive des Anwenders bzw. Kunden deren Anforderungen prüft (_Validierung_). Ausserdem können gewisse Funktionen und Systemeigenschaften nur anhand des Gesamtsystems überprüft werden.

Als Testbasis dienen alle Informationen, welche die Funktionsweise des Gesamtsystems beschreiben (Anforderungen, Spezifikationen, Benutzerhandbücher usw.) Getestet wird auf einer produktionsnahen Umgebung mit vergleichbarer Hardware- und Softwarekonfiguration ‒ und nicht mehr mithilfe eines Testtreibers. Dabei wird die Dokumentation und Konfiguration des Systems mitgeprüft.

Der Systemtest darf jedoch nicht auf dem Produktivsystem des Kunden durchgeführt werden, da der Testbetrieb durch provozierte Fehlerwirkungen den Produktivbetrieb beeinträchtigen kann (z.B. durch Systemausfälle oder Datenverluste) und weil ein Produktivsystem nicht zu Testzwecken beliebig umkonfiguriert werden kann (etwa um performantere Einstellungen zu finden).

Der Systemtest ist sehr aufwändig. Gemäss Faustregel markiert der Beginn des Systemtests ca. die Hälfte der Testaufwände. Die Qualität der Datenbestände wird im Rahmen des Systemtests mitgeprüft, gerade bei datenbankgestützten Anwendungen: auch die Daten selber werden so zum Testobjekt mit Testkriterien wie Konsistenz, Vollständigkeit, Aktualität.

Beinhaltet der Systemtest auch die Überprüfung von Schnittstellen zu externen Systemen und die Interaktion mit der Systemumgebung, spricht man oft von einem _Systemintegrationstest_. (Der Integrationstest betrifft nur die eigens entwickelten Komponenten. Die Abgrenzung zwischen Integrations- und Systemintegrationstest ist nicht immer messerscharf und erfolgt projektspezifisch.)

Solche Systemintegrationstests erfordern ebenfalls eine produktionsnahe Testumgebung der relevanten Umsysteme. Oft werden Systemintegrationstests erst durchgeführt, wenn die Systemtests einigermassen fortgeschritten sind, da sonst die Unterscheidung des Ursprungs von Fehlerwirkungen (aus dem Eigen- oder einem Umsystem) schwerfällt. Dabei ist zu berücksichtigen, dass die Gegenseite der Schnittstelle nicht unter Kontrolle des Entwicklungsteams steht und dadurch fremdverschuldete Fehlerwirkungen erzeugen kann.

### Abnahmetest

Die bisher betrachteten Teststufen werden in der Verantwortung des Herstellers der Software durchgeführt. Vor der Inbetriebnahme der Software beim Kunden erfolgt nur noch der abschliessende _Abnahme-_ bzw. _Akzeptanztest_. Hier steht das Urteil des Anwenders bzw. des Kunden im Vordergrund. Der Umfang der Abnahmetests ist projektabhängig und orientiert sich an den ermittelten Risiken.

Bei Individualsoftware sind Abnahmetests umfangreicher als bei Standardsoftware. Als Testbasis dienen alle Informationen, welche das Produkt aus Anwendersicht beschreiben, aber auch Gesetze und regulatorische Vorgaben, welche die Software betreffen. Bei der Abnahme von Individualsoftware empfiehlt es sich, die Abnahme vertraglich zu regeln und schriftlich bestätigen zu lassen. In einem solchen Vertrag werden die Abnahmekriterien vorgegeben, wozu diese klar und eindeutig formuliert sein müssen.

Diese Abnahmetests kann der Anbieter schon intern durchführen, um diese dann zwecks eigentlicher Abnahme beim Kunden durch diesen wiederholen zu lassen. Hierbei ist es wichtig, dass der Kunde die Abnahmekriterien ausformuliert oder zumindest einem Review unterzieht. Abnahmetests werden in einer Umgebung des Kunden durchgeführt, jedoch nicht in einer Produktivumgebung. Dadurch wird auch die Installation bzw. Aktualisierung und Konfiguration der Software mitgeprüft.

Verwenden auf Kundenseite mehrere unterschiedliche Gruppen von Anwendern die Software, sollen im Rahmen eines _Benutzerakzeptanztests_ Tester aus verschiedenen Gruppen beigezogen werden. Diese Auswahl von Testfällen und Testpersonal trifft am besten der Kunde selber. Ein korrekt arbeitendes aber als umständlich zu bedienend empfundenes System kann eine komplette Systemeinführung gefährden, weswegen Benutzerakzeptanz bei den Abnahmetests einen sehr hohen Stellenwert hat.

Gravierende Akzeptanzprobleme sollte man aber bereits früher im Entwicklungsprozess vermeiden, indem man rechtzeitig repräsentative Vertreter des Kunden in die Testaktivitäten einbindet. Abnahmetests können auch den Systembetrieb betreffen, der Aspekte wie Backup, Restore, Datenschutz aber auch Konfiguration und Datenpflege (z.B. die Benutzerverwaltung) sicherstellen muss.

Kommt eine Software auf sehr vielen Systemumgebungen zum Einsatz, können nicht alle möglichen Kombinationen von Konfigurationen getestet werden. In diesem Fall wird ein sogenannter _Feldtest_ durchgeführt, für welchen der Anbieter einem ausgesuchten Benutzerkreis eine Vorabversion der neuen Software zur Verfügung stellt. Der Anbieter kann Vorgaben zu Testfällen machen oder die Anwender die Software durch eigene (realistische und alltägliche) Anwendungsszenarien testen lassen.

Die Anwender melden ihre Feststellungen und Fehlerberichte dem Hersteller, der nun durch Verbesserungen und Fehlerkorrekturen darauf reagieren kann. Ein solcher Feldtest wird oftmals herstellerintern als _Alpha-Test_ und extern als _Beta-Test_ durchgeführt. Für letzteres muss die Software bestimmten Mindestqualitätsstandards genügen, damit sie externen Testern zugemutet werden kann.
