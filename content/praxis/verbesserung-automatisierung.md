+++
date = '2026-01-14T21:53:24+01:00'
title = 'Verbesserung des Entwicklungsprozess und Automatisierung'
+++

Die kontinuierliche Verbesserung von Produkten und Dienstleistungen ist Teil des Qualitätsmanagements erfolgreicher Firmen. Entwickeln diese Firmen Software, verbessern sie auch laufend ihren Softwareentwicklungsprozess, was auf der Ebene von Projekten, Teams oder unternehmensweit passieren kann. Dies soll eine Verbesserung der Produktivität (für kürzere Iterationszyklen) und Qualität (zur besseren Fehlervermeidung) zur Folge haben.

Frühes Testen ist eine wichtige Massnahme hierzu. Dabei sollen Qualitätssicherungsmassnahmen möglichst früh nach einem Arbeitsschritt ausgeführt werden, der potenziell einen Fehler produziert, um so ein schnelles Feedback zu erhalten. Reviews stellen hierzu eine wirksame Massnahme dar, wobei Arbeitsergebnisse in einer stabilen Zwischenversion einer Prüfung unterzogen werden. Dabei ist es sinnvoll, wenn Personal mit Testwissen an diesem Vorgang beteiligt ist.

Statische Quallcodeanalyse, nicht funktionale Tests auf tieferen Ebenen, die testgetriebene Entwicklung (TDD) sowie _Continuous Integration_ (CI) und _Continuous Delivery_ (CD) sind weitere sinnvolle Massnahmen des frühen Testens. Die Einführung solcher Massnahmen ist v.a. wegen der Schulung der Mitarbeiter oft mit hohen Kosten verbunden, was sich aufgrund des daraus resultierenden Qualitäts- und Produktivitätsgewinns aber durchaus längerfristig lohnen kann. Ohne solche Massnahmen ist es auf Dauer gar nicht möglich, kurze Iterationen in der Entwicklung durchzuhalten.

### Testgetriebene Entwicklung

Unter testgetriebener Entwicklung versteht man ein Vorgehen, bei dem Entwurf und Umsetzung von Testfällen der Entwicklung des Produktivcodes vorausgehen. Diese automatisierten Testfälle stehen so vor und nach jeder Veränderung zur Ausführung bereit und zeigen an, ob die jeweilige Änderung einen Fehlerzustand eingeführt und eine Fehlerwirkung hervorgebracht hat.

Diese Testfälle können weiter als ausführbare Spezifikation des Sollverhaltens betrachtet werden. Die Bezeichnung «testgetriebene Entwicklung» kommt daher, dass die Tests und ihr Ergebnis steuernden Einfluss auf die Entwicklungsaktivitäten haben.

Dabei unterscheidet man zwischen der ursprünglichen Form von TDD (_Test-Driven Development_) auf Stufe der Komponententests und ATDD (_Acceptance Test-Driven Development_) auf Stufe der Abnahmetests. Bei letzterem werden zu jedem Abnahmekriterium automatisierte Testfälle entwickelt. Diese stellen sicher, dass die beteiligten Stakeholder ein gleiches Verständnis der umzusetzenden Anforderung haben.

Beim BDD (_Behaviour-Driven Development_, d.h. verhaltensgesteuerte Entwicklung) wird das Sollverhalten mithilfe von Beispielen oder Szenarien in natürlicher Sprache formuliert und anschliessend mithilfe von speziellen Werkzeugen in automatische Testfälle übersetzt, sodass auch Nicht-Entwickler automatische Testfälle erstellen können.

### Continuous Integration, Continuous Delivery, Continuous Deployment

_Continuous Integration_ (CI) ist eine Entwicklungsstrategie, bei der Codeänderungen häufig, d.h. mindestens einmal täglich, integriert werden. Dadurch werden nicht am Ende einer Iteration verschiedenste Änderungen auf einmal zusammengenommen, sondern kontinuierlich ins bestehende System integriert.

Hierzu empfiehlt sich die Automatisierung dieses häufig durchgeführten Vorgangs, was als _Continuous Delivery_ (CD) bezeichnet wird. Diesen integrierten Prozess bezeichnet man häufig als CI/CD.

Das frühe Testen wird dabei durch das automatische Ausführen von statischen und dynamischen Tests (Codeanalyse, Komponenten- und Integrationstests) unterstützt. Dadurch erhält man ein sehr schnelles Feedback, sofern sich die Ausführungsdauer der Testsuiten in einem praktikablen Ausmass bewegt.

Das _Continuous Deployment_ (CD) ist ein konsequenter Folgeschritt, bei dem auch die Auslieferung der neuen Version automatisch stattfindet, wenn alle automatisierten Tests erfolgreich durchlaufen worden sind.

### DevOps

Die Integration der Entwicklungs- («Development», _Dev_) und Betriebsprozesse («Operations», _Ops_) bezeichnet man als _DevOps_. Diese Integration kann nicht alleine mithilfe von Werkzeugen bewerkstelligt werden, sondern erfordert auch kulturelle Veränderungen, damit die beteiligten Teams und Abteilungen besser miteinander kooperieren.

Dabei wird der CI/CD-Ansatz über die Entwicklung hinaus auf den Betrieb der Anwendung ausgedehnt, was nicht nur kürzere Iterationen beim Betrieb ermöglicht, sondern dem Entwicklungsteam auch wertvolle Informationen aus dem Betrieb der Anwendung gibt, etwa zur Performanz oder zur tatsächlichen Systemauslastung.

### Retrospektiven und Prozessverbesserung

Eine Retrospektive ist eine Teamsitzung, in welcher die Zielerreichung einer abgeschlossenen Iteration reflektiert wird. Dabei soll es darum gehen, mögliche Verbesserungen der Arbeitsweise vorzuschlagen und zu diskutieren. Auch Themen des Testens ‒ Verbesserung der Testbasis, Steigerung der Effektivität und Effizienz beim Testen, Einsatz der Testmittel ‒ sind Thema einer Retrospektive, wie auch Weiterbildungsmassnahmen der Teammitglieder sowie kulturelle Themen.

Retrospektiven können nicht nur am Ende einer Iteration (z.B. in Scrum nach einem Sprint) sondern auch nach Abschluss eines Projekts, beim Erreichen eines Meilensteins oder einfach bei Bedarf durchgeführt werden. Wichtig ist das Festhalten der Entscheidungen und die Überprüfung der Massnahmenumsetzung nach der Retrospektive.
