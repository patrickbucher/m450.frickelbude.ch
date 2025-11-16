+++
date = '2025-11-15T15:14:45+01:00'
title = 'Test Doubles'
weight = 6
+++

Die Komponententests machen das breite Fundament der Testpyramide aus, worüber die schmalere Ebene der Integrationstests liegt. Gemäss Testpyramide sollte es also am meisten Komponententests und weniger Integrationstests geben:

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

{{< figure src="/img/major-minor.svg" width="450" alt="Die Komponente Major verwendet die Komponente Minor" >}}

Bei der Ausführung des Integrationstests `MajorTest` wird der Code der Komponenten `Major` _und_ `Minor` ausgeführt: Die untergeordnete `Minor`-Komponente wird _mitgetestet_. Ein Fehler in `Minor` bringt nicht nur den Komponentest `MinorTest` zum scheitern, was auch sinnvoll ist, sondern auch den Integrationstest `MajorTest`, obwohl am Integrationscode nichts falsch ist.

Sinnvoller wäre es, `Major` unabhängig von `Minor` testen zu können.

## Lösung: Dependency Injection und Test Doubles

Damit `Major` unabhängig von `Minor` getestet werden kann, müssen diese beiden Komponenten zuerst einmal voneinander _entkoppelt_ werden. Dies kann durch _Dependency Injection_ erreicht werden. Dabei wird die Eigenschaft `Major.minor` nicht mehr innerhalb von `Major` instanziiert, sondern als Konstruktorparameter erwartet. Hierzu sind folgende Anpassungen nötig:

1. Ein Interface `IMinor`, welches die relevanten öffentlichen Methoden von `Minor` deklariert, muss erstellt werden.
2. Die bestehende Klasse `Minor` muss das neue Interface `IMinor` implementieren.
3. Die Eigenschaft `Major.minor` muss vom Typ `Minor` auf `IMinor` umgestellt werden.
4. Der Konstruktor von `Major` muss eine Instanz von einer `IMinor`-Implementierung als Parameter erwarten und das übergebene Argument in der Eigenschaft `minor` abspeichern.

Nach dieser Änderung kann `Major` mit einer beliebigen Implementierung von `IMinor` ausgestattet werden. Im Produktivbetrieb kommt dabei eine Instanz von `Minor` zum Einsatz. Für den Test von `Major` kann dies auch ein sogenanntes _Test Double_ sein, wovon der `MajorTest` Gebrauch machen kann. Am Komponententest `MinorTest` ändert sich nichts.

Die entkoppelte Komponentenstruktur präsentiert sich neu folgendermassen:

{{< figure src="/img/major-minor-decoupled.svg" width="100%" alt="Die Komponenten Major und Minor wurden per Dependency Injection voneinander entkoppelt." >}}

Die Entkopplung von `Major` und `Minor` wurde durch zusätzliche Komponenten und Verbindungen dazwischen erkauft, wodurch sich die Komplexität des Systems erhöht hat. Darum muss man sich immer die Frage stellen: Lohnt sich diese Komplexitätssteigerung, oder sollte man nicht besser bei einem Integrationstest bleiben? Diese Frage kann nur beantwortet werden, wenn man sich die konkreten Abhängigkeiten und Testfälle anschaut.

### Exkurs: Aggregation und Komposition

Bei der Beziehung zwischen `Major` und `Minor` handelt es sich um eine _Aggregation_: Eine `Minor`-Instanz ist ein _Aggregat_ einer `Major`-Instanz, was mithilfe einer Eigenschaft implementiert wird. In UML-Klassendiagrammen wird die Aggregationsbeziehung über eine weisse, schwarz umrandete Raute aufseiten der übergeordneten Klasse symbolisiert.

Eine andere Art der Klassenbeziehung wäre die _Komposition_: Auch hier ist die `Minor`-Instanz als Eigenschaft Teil der `Major`-Instanz. Im UML-Klassendiagramm wird die Kompositionsbeziehung ebenfalls über eine Raute aufseiten der übergeordneten Klasse symbolisiert, jedoch durch eine schwarz ausgefüllte.

Das folgende UML-Klassendiagramm zeigt zwei Beziehungen auf:

1. eine _Aggregatsbeziehung_ zwischen einem Auto (`Car`) und einem Motor (`Engine`)
2. eine _Kompositionsbeziehung_ zwischen einem Gebäude (`Building`) und einem Raum (`Room`)

{{< figure src="/img/aggregation-composition.svg" width="400" alt="Die Aggregation und Komposition als UML-Klassendiagramm" >}}

Zwischen den beiden Beziehungen gibt es einen wichtigen Unterschied: Das untergeordnete Objekt kann bei der Aggregation unabhängig vom übergeordneten Objekt existieren, bei der Komposition jedoch nicht. Ein Auto und sein Motor können unabhängig voneinander existieren und zu einem späteren Zeitpunkt zueinander in Beziehung gebracht werden. Ein Raum kann aber nur im Kontext eines Gebäudes existieren. Für die Implementierung bedeutet dies: Die `Engine`-Klasse kann instanziiert und der `Car`-Klasse als Eigenschaft mitgegeben werden. Die `Room`-Instanz muss jedoch von `Building` erstellt werden.

Was bedeutet das nun für Test Doubles? Da bei der Komposition die übergeordnete Klasse die Instanziierung der untergeordneten Klasse vornimmt, ist Dependency Injection nicht ohne Weiteres möglich! Eine Komposition sollte im Sinne der Testbarkeit nur sparsam zum Einsatz kommen, etwa wenn die untergeordnete Klasse ein reiner Datencontainer ist und nicht etwa ein Service, der auf externe Ressourcen zugreift.

## Arten von Test Doubles

Nun gilt es, das Test Double `MinorDouble` zu implementieren. Doch wie genau soll das funktionieren? Zunächst muss man sich einmal überlegen, _was_ überhaupt getestet bzw. was mit dem Test herausgefunden werden soll. Dabei kommt es darauf an, was `Minor` in der Interaktion mit `Major` für eine Rolle spielt.

Man unterscheidet zwischen verschiedenen Arten von Test Doubles:

- **Dummy**: ein einfacher Platzhalter, welcher keine Logik implementiert
- **Fake**: eine vereinfachte Implementierung, welche ohne externe Ressourcen auskommt
- **Stub**: eine verstümmelte Implementierung, welche hartkodierte Antworten liefert
- **Mock**: ein Stub mit "Erinnerungsvermögen", der zusätzlich Aufrufe protokolliert
- **Spy**: ein Wrapper für eine echte Implementierung, dessen Verhalten beobachtet wird

### Dummy

Verfügt `Major` über eine Eigenschaft vom Typ `Minor` bzw. (`IMinor`), die zwar von der Klasse benötigt, für den jeweiligen Testfall aber gar nicht verwendet wird, ist ein _Dummy_ der passende Platzhalter. Dieser Dummy muss bloss das Interface `IMinor` implementieren, kommt aber ohne jegliche Programmlogik aus. 

Da die Methoden vom Dummy nie ausgeführt werden, können diese einfach eine Exception werfen (z.B. eine `NotImplementedException` in Java). Sollte doch einmal eine solche Exception im Testdurchlauf geworfen werden, muss die Situation neu geprüft werden.

### Fake

Ein _Fake_ ist eine vereinfachte Implementierung einer Komponente. Angenommen, `Minor` arbeitet mit einer externen Datenquelle wie einer relationalen Datenbank, könnte ein Fake die CRUD-Operationen dazu (`INSERT`, `SELECT`, `UPDATE`, `DELETE`) mithilfe eines Arrays umsetzen. Die Testdaten würden dann nicht persistent in einer Datenbank, sondern tepmorär in einer Klasseneigenschaft gespeichert werden.

Fake-Implementierungen können schnell aufwändig und bei Erweiterungen sehr wartungsintensiv werden. Verwendet die `Major`-Komponente aber nur einen kleinen Teil der `Minor`-Komponente, muss diese nicht vollumfänglich sondern nur teilweise umgesetzt werden. Ein Fake lohnt sich v.a., wenn ein Test mit der richtigen Komponente zu langsam (wegen einer externen Datenquelle) oder zu teuer (weil eine externe API nach Aufrufen abrechnet) ist.

### Stub

Im Gegensatz zum Fake implementiert der _Stub_ keine Programmlogik. Stattdessen ignoriert er die Methodenparameter und liefert einfach hartkodierte Antworten zurück. Im Gegensatz zum reinen Dummy kann er aber Daten zurückliefern.

Ein Stub ist also dann sinnvoll, wenn die `Minor`-Komponente als reine Datenquelle dient, welche jedoch keine Änderungen oder Erweiterungen an diesen Daten durchführen können muss.

### Mock

Ein Mock ist ein Stub oder Fake, welcher zusätzlich über ein Erinnerungsvermögen verfügt. Verwendet `Major` die `Minor`-Komponente nur abhängig von einer bestimmten Bedingung, kann deren korrekte Handhabung dadurch geprüft werden, indem Aufrufe von `Minor` protokolliert werden. Der Testfall prüft am Ende, ob sich entsprechende Aufrufe nachweisen lassen.

Ein gebräuchlicher Anwendungsfall für Mocks ist beispielsweise das Testen von Caching-Logik. Angenommen, `Major` implementiert einen Cache, und `Minor` stellt den Zugriff auf eine externe Datenquelle bereit: Nach erstmaligem Lesen von der externen Datenquelle sollte ein Datensatz anschliessend im Cache vorhanden sein. (Dies kann auch ohne Mock geprüft werden.) Ein erneuter Lesevorgang sollte aber _nicht_ mehr auf die externe Datenquelle (sprich: auf `Minor`) zugreifen, sondern die Antwort aus dem Cache liefern.

Der Zugriffszähler des Mocks sollte somit zu Beginn 0 betragen und nach erstmaligem Lesen den Wert 1 haben, der sich bis zum Zurücksetzen des Caches nicht mehr ändern sollte. Ein Mock kann sich nicht nur die Anzahl der Aufrufe, sondern auch die übergebenen Argumente oder Rückgabewerte merken, sollten diese von Interesse sein.

Da Mocks die interne Logik einer Komponente überprüfen, sind sie sehr fragil, wodurch entsprechende Testfälle häufig angepasst und erweitert werden müssen. Mocks lohnen sich nur, wenn diese der Überprüfung einer bestimmten Anforderung dienen, wie das im Caching-Beispiel veranschaulicht worden ist.

### Spy

Ein _Spy_ ist kein Test Double im eigentlichen Sinn, da dieser keine bestehende Implementierung einer Komponente ersetzt, sondern diese nur umschliesst. Ein Spy delegiert die Methodenaufrufe 1:1 an das umschlossene Objekt, zeichnet aber wie ein Mock die Aufrufe auf, die dann im Testfall überprüft werden können. (Ein Spy kann mithilfe des [Adapter-Entwurfsmusters](https://refactoring.guru/design-patterns/adapter) umgesetzt werden.)

Ob ein Mock oder ein Spy zum Einsatz kommen soll, hängt davon ab, ob die Ausführung des produktiven Codes problematisch ist. Verfügt man beispielsweise über eine In-Memory-Datenbank, welche Datenzugriffe sehr effizient durchführen kann, kann man sich den Aufwand für eine Fake-Implementierung inkl. Mock-Logik sparen und stattdessen einen weniger aufwändigen Spy implementieren. Stellt der Datenzugriff an sich ein Problem dar, ist ein Spy nicht geeignet.

---

Oftmals durchlaufen Test Doubles im Entwicklungszyklus eine Evolution: Vom reinen Dummy ausgehend (damit der Testcode überhaupt kompiliert) werden für einige Testfälle bald Stubs und schliesslich sogar Fakes nötig. Sollen diese auch noch das Verhalten der untergeordneten Komponenten protokollieren, werden diese zu Mocks ausgebaut. Wird das Test Double schliesslich zu kompliziert, baut man es nach Möglichkeit zu einem Spy zurück und macht Gebrauch von der tatsächlichen Komponente.

## Mocking-Frameworks

Es gibt verschiedene Frameworks bzw. Libraries, welche einem den Umgang mit Test Doubles erleichtern:

- Java: [Mockito](https://site.mockito.org/)
- C#: [Moq](https://github.com/devlooped/moq/)
- Python: [unittest.mock](https://docs.python.org/3/library/unittest.mock.html)
- JavaScript: [mocha](https://mochajs.org/)

Im Rahmen von diesem Modul sollen diese jedoch nicht zum Einsatz kommen. Stattdessen sollen die zugrundeliegenden Mechanismen durch eigene Implementierungen eingeübt werden.

Beim Einsatz von Test Doubles lohnt sich die Messung der Testabdeckung. Setzt man Test Doubles wahllos und unreflektiert ein, werden die Testfälle schon bald wenig aussagekräftig, da diese nur noch die Test Doubles und nicht mehr den eigentlichen Produktivcode ausführen.

## Fragen

1. Warum gibt es oft mehr Integrations- als Komponententests?
2. Was sind die Vor- und Nachteile von Integrations- gegenüber Komponententests?
3. Welchen Vorteil schafft Dependency Injection und welche Nachteile bringt es mit sich?
4. Wann hat die Verwendung von Komposition keinen negativen Effekt auf die Testbarkeit?
5. Warum sollte ein Dummy Exceptions werfen?
6. Warum sind Fakes aufwändig zu implementieren?
7. Was ist der Unterschied zwischen Stub und Fake?
8. Wozu protokolliert ein Mock Methodenaufrufe?
9. Warum ist ein Spy strenggenommen _kein_ Test Double?