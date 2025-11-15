+++
date = '2025-11-15T15:14:45+01:00'
title = 'Test Doubles'
weight = 6
+++

Gemäss Testpyramide sollte es mehr Komponententests als Integrationstests geben:

{{< figure src="/img/testpyramide-einfach.svg" width="600" alt="Die Testpyramide: unten breit und oben schmal" >}}

In der Praxis gibt es jedoch sehr viele Funktionen bzw. Methoden, welche ihre Arbeit mithilfe anderer Komponenten verrichten, wodurch entsprechende Tests als Integrationstests gelten. Reine Komponententests sind oftmals Berechnungs- und Validierungsfunktionen vorbehalten, sofern diese nicht auf externe Ressourcen zugreifen müssen.

Durch diese Verschiebung von Komponententests zu Integrationstests mutet die Testpyramide eher wie eine _Testvase_ an:

{{< figure src="/img/testvase.svg" width="450" alt="Die Testvase: ähnlich viele Komponenten- wie Integrationstests" >}}

Integrationstests haben gegenüber Komponententests einige Nachteile. Sie sind:

1. **aufwändiger**, da die Abhängigkeiten zuerst in den richtigen Zustand gebracht werden müssen,
1. **langsamer**, da sie auf externe Services und Datenquellen zugreifen,
1. **weniger präzise**, da der Code der Abhängigkeiten nur indirekt ansteuerbar ist,
1. **weniger aussagekräftig**, da im Fehlerfall die betreffende Komponente noch ermittelt werden muss und
1. **teilweise redundant**, da sie die zugrundeliegenden Komponenten immer noch mittesten.

## Problem: Mittesten integrierter Komponenten

Betrachten wir hierzu ein Beispiel: Eine übergeordnete Komponente `Major` verwendet eine untergeordnete Komponente `Minor`. Zu jeder der beiden Kompnenten gibt es einen Testfall: `MajorTest` (Integrationstest) und `MinorTest` (Komponententest).

{{< figure src="/img/major-minor.png" width="450" alt="Die Komponente Major verwendet die Komponente Minor" >}}

Bei der Ausführung des Integrationstests `MajorTest` wird der Code der Komponenten `Major` _und_ `Minor` ausgeführt: Die untergeordnete `Minor`-Komponente wird _mitgetestet_. Ein Fehler in `Minor` bringt nicht nur den Komponentest `MinorTest` zum scheitern, was auch sinnvoll ist, sondern auch den Integrationstest `MajorTest`, obwohl am Integrationscode nichts falsch ist.

Sinnvoller wäre es, `Major` unabhängig von `Minor` testen zu können.

## Lösung: Dependency Injection und Test Doubles

Damit `Major` unabhängig von `Minor` getestet werden kann, müssen diese beiden Komponenten zuerst einmal voneinander _entkoppelt_ werden. Dies kann durch _Dependency Injection_ erreicht werden. Dabei wird die Eigenschaft `Major.minor` nicht mehr innerhalb von `Major` instanziiert, sondern als Konstruktorparameter erwartet.

{{< figure src="/img/major-minor-decoupled.png" width="850" alt="Die Komponenten Major und Minor wurden per Dependency Injection voneinander entkoppelt." >}}