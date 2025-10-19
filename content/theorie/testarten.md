+++
date = '2025-10-19T13:59:55+02:00'
title = 'Testarten'
weight = 12
+++

Je nach Teststufe liegt der Fokus auf bestimmten Arten von Tests. Einerseits unterscheidet man zwischen _funktionalen_ und _nicht funktionalen_ und andererseits zwischen _anforderungsbasierten_ und _strukturbasierten_ Tests.

## Funktionale Tests

Funktionale Tests umfassen alle Testmethoden und Testverfahren, bei denen das von aussen wahrnehmbare Ein- und Ausgabeverhalten des Testobjekts geprüft wird. Als Testbasis dienen die funktionalen Anforderungen. Diese beschreiben die Funktionsweise und das Verhalten des gewünschten Systems.

Zu jeder funktionalen Anforderung soll zumindest ein Testfall formuliert werden, in der Regel jedoch mehrere. Laufen diese Testfälle fehlerfrei durch, gilt die entsprechende Anforderung als erfüllt.

Funktionale Tests kommen auf allen Teststufen zum Einsatz. Beschreiben die Anforderungen einen Geschäftsprozess, werden die Tests als Szenarien mit unterschiedlichen Prioritäten definiert. Häufigkeit, Relevanz und Risiko sind für diese Priorisierung ausschlaggebend. Solche Szenarien umfassen oft mehrere hintereinandergeschaltete Tests.

## Nicht funktionale Tests

Nicht funktionale Anforderungen beschreiben, wie gut ein System oder Teilsystem seine Arbeit erfüllen soll. Solche Eigenschaften beeinflussen die Zufriedenheit des Anwenders bzw. des Kunden stark. Aus Kundenperspektive sind Bedienbarkeit und Performanz wichtige solche Kriterien. Aufseiten des Anbieters sind Änderbarkeit und Wartbarkeit wichtige Aspekte.

Nicht funktionale Anforderungen werden meist auf Stufe Systemtest mit folgenden Testarten überprüft:

- _Lasttest_: Messung des Systemverhaltens unter hoher Last
- _Performanztest_: Messung der Verarbeitungsgeschwindigkeit und Antwortzeit
- _Volumentest/Massentest_: Beobachtung des Systemverhaltens in Abhängigkeit zur Datenmenge
- _Stresstest_: Beobachtung des Systemverhaltens bei Überlastung
- _Kompatibilitätstest_: Verträglichkeit mit Umsystemen, Import/Export von Datenbeständen, Portierung auf andere Plattformen
- _Usability-Test_: Benutzerfreundlichkeit, Erlernbarkeit, Verständlichkeit im Bezug auf bestimmte Anwendergruppen (Akzeptanz)

Solche Anforderungen werden in der Praxis oft zu schwammig definiert («einfach bedienbar», «schnelle Reaktionszeit»), wodurch sie nicht oder nur schwer testbar sind. Darum sollten Tester diese Anforderungen einem Review unterziehen. Manche Anforderungen werden als so selbstverständlich betrachtet, dass ihre Formulierung vergessen geht, was zu Konflikten in der Abnahme führen kann.

Für nicht funktionale Tests können Szenarien von funktionalen Tests wiederverwendet werden, sofern diese nicht funktionale Systemeigenschaften demonstrieren.

## Anforderungs- und strukturbezogene Tests

Anforderungsbasierte Tests gehen von Spezifikationen (funktionale/nicht funktionale) als Testbasis aus und kommen v.a. im System- und Abnahmetest zum Einsatz. Aus Spezifikationen abgeleitete Komponenten- und Integrationstests gelten auch als anforderungsbezogene Tests.

Bei strukturbezogenen Tests wir auch die innere Struktur des Systems als Testbasis beigezogen. Der Fokus liegt darauf, möglichst alle Teile des Systems für Testfälle zugänglich zu machen und genügend Testfälle zu entwefen. Die Testfälle können auf funktionalen und nicht funktionalen Anforderungen basieren. Strukturbezogene Tests kommen v.a. auf Stufe Komponenten- und Integrationstest zum Einsatz.

## Fragen

1. Was ist das Problem bei der Formulierung nicht funktionaler Anforderungen?
1. Für welche Art von Stakeholder sind die Testziele strukturbezogener Tests besonders wichtig?