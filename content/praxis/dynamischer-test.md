+++
date = '2025-11-01T12:05:03+01:00'
title = 'Dynamischer Test'
weight = 5
+++

Testdaten und Testfälle lassen sich mithilfe verschiedener Testverfahren ableiten. Die Menge der Testfälle wird dabei so gewählt, dass ein ausreichender Überdeckungsgrad erreicht wird. Im Rahmen solcher Testfälle gelangt das Testobjekt (bzw. gelangen Teile davon) bei dynamischen Tests zur Ausführung. Fehlende Programmteile bzw. deren Ein- und Ausgabeverhalten werden (vorerst) auf tieferen Teststufen durch Platzhalter (sogenannte «Test Doubles») ersetzt bzw. deren Verhalten durch solche emuliert. Der zu prüfende Programmteil wird von einem Testtreiber aufgerufen und hierzu mit den Platzhaltern und Testdaten ausgestattet. Diese Umgebung bestehend aus Testtreiber und Platzhalter bezeichnet man als _Testrahmen_.

Die Erfüllung der Anforderungen soll anhand möglichst weniger Testfälle nachgewiesen werden, was ein systematisches Vorgehen bei der Erstellung der Testfälle erfordert. Hierzu sind folgende Schritte nötig:

1. Bedingungen, Voraussetzungen und verfolgte Ziele des Tests festlegen
2. Testfälle spezifizieren
3. Reihenfolge der Testausführung festlegen

Diese Schritte können je nach Projektkontext mehr oder weniger formal erfolgen und dokumentiert werden. Für jeden Testfall müssen die Eingabewerte festgelegt werden, was mithilfe verschiedener Testverfahren (bzw. Testentwurfsverfahren oder Testmethoden) erfolgen kann. Auch Vor- und Nachbedingungen sowie erwartete Rückgabewerte bzw. Ergebnisse gehören zur Spezifikation eines Testfalls, woran eine Fehlerwirkung erkannt werden kann.

Tests werden i.d.R. nicht einzeln sondern gemäss Testausführungsplan zu Testreihen gruppiert gemeinsam in einer bestimmten oder zufälligen Reihenfolge durch ein Testskript ausgeführt. Die einzelnen Testfälle können anhand verschiedener Entwurfsverfahren erstellt werden, wobei man zwischen Blackbox-, Whitebox- und erfahrungsbasierten Verfahren unterscheidet:

- **Blackbox-Testverfahren** (spezifikationsorientierte Verfahren) sehen das Testobjekt als «schwarzen Kasten» an, über dessen Aufbau und innere Struktur nichts bekannt ist. Die Testfälle werden rein anhand der Spezifikation des Testobjekts und unabhängig von dessen Implementierung erstellt. Das Verhalten des Testobjekts wird von aussen beobachtet ‒ der _Point of Observation_ (PoO) liegt ausserhalb des Testobjekts. Die Steuerung des Testobjekts ist nur anhand der Vorbedingungen und Eingebadaten möglich ‒ der _Point of Control_ (PoC) liegt ebenfalls ausserhalb des Testobjekts. Blackbox-Testfälle konzentrieren sich auf die Ein- und Ausgaben des Testobjekts und funktionieren (bei gleichbleibender Spezifikation) auch nach geänderter Implementierung des Testobjekts. Dieses Verfahren ist für funktionale und nicht funktionale Tests auf allen Teststufen geeignet. Die Überdeckung wird anhand der behandelten Anforderungen gemessen.
- **Whitebox-Testverfahren** (strukturbasierte Verfahren) orientieren sich an der inneren Struktur des Testobjekts. Solche Testfälle können erst erstellt werden, wenn bereits eine Implementierung des Testobjekts vorliegt. Die Testausführung beobachtet den inneren Ablauf im Testobjekt ‒ der PoO liegt innerhalb des Testobjekts ‒ und kann bei Bedarf vom Testfall beeinflusst werden ‒ der PoC liegt dann auch innerhalb des Testobjekts. Neben Ausgaben und Ergebnissen kann auch der innere Zustand des Testobjekts zur Überprüfung auf Fehlerwirkungen herangezogen werden. Dieses Verfahren kommt auf den tieferen Teststufen Komponenten- und Integrationstests zum Einsatz. Die Überdeckung kann auf Stufe Quellcode gemessen werden.
- **Erfahrungsbasiertes Testen** nutzt das Erfahrungswissen involvierter Personen zum Ableiten der Testfälle, Testdaten und Testbedingungen. Dabei werden Kenntnisse über die erwartete Nutzung der Software, über die Umgebung und über wahrscheinliche Fehlerzustände sowie über deren Verteilung im Testobjekt genutzt. Überdeckungsgrade werden hiebei selten festgelegt, da dieses Verfahren v.a. ergänzend zu anderen Verfahren zum Einsatz kommt.

In der Praxis kommen die drei Verfahren kombiniert zum Einsatz, wobei auch einzelne Testfälle Elemente verschiedener Verfahren als sogenannte «Greybox-Tests» kombinieren können.

## Blackbox-Testverfahren

Ein vollständiger Test, der alle möglichen Eingabewerte und deren Kombinationen behandelt, ist nicht realistisch oder gar unmöglich. Zur Auswahl sinnvoller Testfälle gibt es verschiedene Verfahren, die im Folgenden genauer betrachtet werden.

### Äquivalenzklassenbildung

Eine Menge von Eingabeparametern, bei deren Übergabe sich ein Testobjekt gleich verhält, bezeichnet man als _Äquivalenzklasse_. Pro Äquivalenzklasse ist nur ein Testfall festzulegen, da sich das Testobjekt für die anderen Repräsentanten derselben Äquivalenzklasse gleich verhält. Man unterscheidet zwischen «Äquivalenzklassen gültiger Werte», welche gültige Werte umfassen, und «Äquivalenzklassen ungültiger Werte», welche vom Testobjekt durch eine Ausnahmebehandlung zurückgewiesen werden müssen. (Die Bezeichnungen «gültige Äquivalenzklasse» und «ungültige Äquivalenzklasse» sind irreführend.)

Testfälle können anhand von Äquivalenzklassen folgendermassen systematisch hergeleitet werden:

1. Für jeden Eingabeparameter des Testobjekts wird der Definitionsbereich bestimmt. Werte innerhalb dieses Bereichs bilden die Äquivalenzklasse der gültigen Werte. Mit diesen Werten als Eingabeparameter kann das Testobjekt sinnvolle Ausgabewerte produzieren.
2. Die Äquivalenzklassen werden aufgestellt, sodass Werte, die das Testobjekt auf Basis unterschiedlicher Anforderungen verarbeiten muss, in neue (Unter-)Äquivalenzklassen gruppiert werden. Aus jeder Äquivalenzklasse soll nun ein Wert als Repräsentant seiner Äquivalenzklasse ausgewählt werden.
3. Zu jedem Repräsentant einer Äquivalenzklasse soll ein Testfall mit erwartetem Ergebnis und (falls nötig) zusätzlichen Vorbedingungen definiert werden.

Die Testfälle können auch anhand einer Äquivalenzklassenbildung und -zerlegung der erwarteten Ausgabewerte hergeleitet werden, was jedoch meist aufwändiger ist, da zu den Ausgabewerten zuerst die Eingabewerte ermittelt werden müssen.

Äquivalenzklassen können nicht nur für Eingabeparameter, sondern für alle möglichen Werte gebildet werden, welche die Verarbeitung durch das Testobjekt beeinflussen (z.B. Konfigurationseinstellungen, Datenbankeinträge usw.).

Äquivalenzklassen müssen überschneidungsfrei sein, d.h. jeder Wert darf nur zu einer Äquivalenzklasse gehören. Äquivalenzklassen dürfen unterschiedlich gross aber nicht leer sein.

Lohnende Testfälle ergeben sich oft an der Grenze zweier Äquivalenzklassen, zumal hier Missverständnisse auftreten können, wenn Anforderungen ungenau formuliert oder falsch verstanden werden. Verwendet eine Anforderung die Formulierung «bis zu zehn», ist die Äquivalenzklasse gültiger Werte als x≤10 und diejenige ungültiger Werte als x>10 definiert. Ein Test mit dem Grenzwert x=10 dürfte eher eine Fehlerwirkung hervorrufen als eine mit dem Wert x=5, da ein Fehlerzustand beim Grenzwert und dessen Behandlung vorliegen könnte. (In einem solchen Fall sind auch mehrere Testfälle pro Äquivalenzklasse denkbar: an den Grenzen benachbarter Äquivalenzklassen und mit einem anderen Wert.)

Da ein Testobjekt selten nur über einen einzigen Eingabeparameter verfügt, müssen Repräsentanten aus Äquivalenzklassen der verschiedenen Eingangsparameter miteinander zu Eingabedatensätzen kombiniert werden, was folgendermassen erfolgt: Die Repräsentanten aller Äquivalenzklassen…

1. …gültiger Werte werden zu Testfällen kombiniert, wobei alle möglichen Kombinationen zu berücksichtigen sind. (Bei drei Eingabeparametern mit je zwei Äquivalenzklassen gültiger Werte sind dies bereits 2⋅2⋅2=8 Testfälle!)
2. …ungültiger Werte werden mit einem Repräsentanten einer beliebigen Äquivalenzklasse gültiger Werte der anderen Eingabeparameter kombiniert, wodurch sich pro ungültigem Wert nur ein einziger Testfall ergibt. (Ein ungültiger Wert genügt zur Auslösung der Ausnahmebehandlung.)

Die Menge gültiger Testfälle kann mittels Priorisierung (z.B. gemäss Nutzerhäufigkeit oder Risiko), durch eine paarweise Kombination (anstelle einer vollständigen) oder einer sonstigen Auswahl (z.B. Bevorzugung von Grenzwerten) eingeschränkt werden, wobei als Mindestanforderung ein Repräsentant jeder Äquivalenzklasse mindestens in einem Testfall vorkommen soll.

Die Testüberdeckung wird anhand des Verhältnisses von getesteten Äquivalenzklassen zur Gesamtzahl existierender Äquivalenzklassen ermittelt. Ein akzeptabler Überdeckungsgrad ist als Testziel bzw. Endkriterium des Tests festzulegen. Gehen beim Ausarbeiten der Testfälle Äquivalenzklassen vergessen, ist diese Metrik nicht mehr aussagekräftig, da Tests in diesem Fall tendenziell eher als abgeschlossen betrachtet werden, obwohl der nötige Überdeckungsgrad nicht erreicht worden ist. Eine korrekte Äquivalenzklassenbildung sorgt dafür, dass ausreichend aber nicht ausufernd getestet wird.

### Grenzwertanalyse

Die Grenzwertanalyse ist eine Ergänzung zur Äquivalenzklassenbildung, womit Fehlerzustände bei Fallunterscheidungen im Grenzbereich der Äquivalenzklassen festgestellt werden können. Das Minimum und das Maximum einer Äquivalenzklasse sind deren unterer bzw. oberer Grenzwert. Eine Grenzwertanalyse lässt sich nur für geordnete Daten durchführen, denn für ungeordnete Daten (wie beispielsweise kategorische Daten) lassen sich keine Grenzwerte ermitteln.

Die beiden Grenzwerte einer Äquivalenzklasse und deren benachbarten Werte, die bereits zu den angrenzenden Äquivalendklassen gehören, werden einer Prüfung unterzogen. (Der benachbarte Wert des Maximums der einen Äquivalenzklasse ist das Minimum der benachbarten Äquivalenzklasse.) Bei Fliesskommazahlen ist ein geeignetes Inkrement zu wählen, z.B. +0.01 bei Anwendungen, die mit Geldbeträgen arbeiten.

Man unterscheidet zwischen der 2-Wert-Grenzwertanalyse und der 3-Wert-Grenzwertanalyse. Bei der 2-Wert-Grenzwertanalyse wird der Grenzwert und der benachbarte Wert der angrenzenden Äquivalenzklasse geprüft. Bei der 3-Wert-Grenzwertanalyse prüft man beide benachbarten Werte des Grenzwerts, wobei der eine Nachbar innerhalb der gleichen Äquivalenzklasse liegt, und der andere zur benachbarten Äquivalenzklasse gehört.

Pro Grenzwert ergeben sich zwei bzw. drei Testfälle. An der Grenze zweier Äquivalenzklassen sind, von den benachbarten Grenzwerten ausgehend, insgesamt vier Testfälle nötig. Für kategorische Daten ohne definierte Ordnung erübrigt sich eine Äquivalenzklassenbildung und dadurch auch eine Grenzwertanalyse.

Die Qualität der abgeleiteten Testfälle steht und fällt mit der Äquivalenzklassenbildung. Vergessene Unterteilungen führen zu mangelhaften Überdeckungsgraden. Unnötig unterteilte Äquivalenzklassen erhöhen den Testaufwand, ohne damit andere Fehlerwirkungen entdecken zu können.

Die Überdeckung wird anhand des Verhältnisses der getesteten zur Anzahl der vorhandenen Grenzwerte ermittelt. (Die benachbarten Werte werden hiebei auch als Grenzwerte mitgezählt.)

Bei nicht-numerischen aber geordneten Daten, wie z.B. bei Zeichenketten, ist die Äquivalenzklassenbildung und Grenzwertanalyse oftmals nicht trivial. Das Entwerfen der entsprechenden Testfälle erfordert einiges an Kreativität.

### Zustandsbasierter Test

Oftmals haben nicht nur die Eingabewerte sondern die bisher ausgeführten Aktionen Einfluss auf das Verhalten eines Systems. Solche Systeme werden mithilfe von _Zustandsmodellen_ getestet. Von einem Startzustand ausgehend lösen Ereignisse Zustandsübergänge aus, die schliesslich in einen Endzustand münden. 

Dieses Verhalten wird mithilfe von _Zustandsautomaten_ und/oder _Zustandstabellen_ modelliert. Solche Zustandsmodelle sind einerseits _deterministisch_ (nach jedem Ereignis für einen gegebenen Ausgangszustand befindet sich das System in einem eindeutig definierten Folgezustand) und andererseits _vollständig_ (für jeden Ausgangszustand ist der Folgezustand für alle möglichen Ereignisse definiert). Dabei kann der Folgezustand auch ein Fehlerzustand sein, was in Zustandsautomaten häufig nicht modelliert wird, aber in der entsprechenden Zustandstabelle ersichtlich ist.

Das folgende Beispiel zeigt die Zustände eines Computers an, an den sich nach dem Start Benutzer an- und abmelden sowie ihre Sitzung sperren können:

![Zustandsautomat mit Zuständen und Übergängen (Ereignisse)](/img/zustandsautomat.svg)

| **Ereignis/Zustand** | Start      | abgemeldet | angemeldet | gesperrt   | Ende |
|----------------------|------------|------------|------------|------------|------|
| einschalten          | abgemeldet | -          | -          | -          | -    |
| anmelden             | -          | angemeldet | -          | -          | -    |
| abmelden             | -          | -          | abgemeldet | -          | -    |
| sperren              | -          | -          | gesperrt   | -          | -    |
| entsperren           | -          | -          | -          | angemeldet | -    |
| ausschalten          | -          | Ende       | Ende       | Ende       | -    |

Ein zustandsbasierter Testfall wird folgendermassen modelliert:

- **Vorbedingung**: Das System befindet sich in einem bestimmten Ausgangszustand.
- **Ereignis**: Es wird ein zulässiges oder unzulässiges Ereignis ausgelöst.
- **Sollrekation**: Das System geht zu einem bestimmten Folgezustand über.
- **Nachbedingung**: Das System befindet sich in einem bestimmten Zustand.

Die Testintensität kann unterschiedlich abgestuft werden. Die Mindestforderung ist, dass die Tests alle möglichen Zustände mindestens einmal erreichen. Eine erweiterte Forderung ist, dass sämtliche Ereignisse einmal durchgespielt werden. Zusätzlich können auch die in der Zustandstabelle festgelegten unzulässigen Ereignisse pro Zustand getestet werden, was zu einem Fehler führen muss. Dies ist v.a. bei kritischen Systemen nötig.

Ein zustandsbasierter Test ist immer dann angebracht, wenn das Verhalten des Systems durch vorherige Ereignisse beeinflusst wird. Sie eignen sich auf Stufe Komponenten- und Integrationstests für objektorientiert implementierte Systembestandteile und auf Stufe Systemtest beispielsweise für grafische Benutzeroberflächen.

Die Testüberdeckung kann anhand verschiedener Kriterien gemessen werden: Werden alle Zustände einmal erreicht? Werden sämtliche gültigen Zustandsübergänge einmal ausgeführt? Werden auch die ungültigen Zustandsübergänge berücksichtigt (Negativtest)? Weiter ist es möglich, wenn auch oftmals nicht praktikabel, verschiedene Reihenfolgen für das Erreichen der Zustände zu testen.

### Entscheidungstabellentest

Betrachten die bisherigen Verfahren die Eingabeparameter in Isolation voneinander, werden im _Entscheidungstabellentest_ auch deren Kombinationen berücksichtigt. Damit können Fehlerwirkungen aufgedeckt werden, die sich aus den einzelnen möglichen (wenn auch unwahrscheinlichen oder widersprüchlichen) Kombinationen von Eingabeparametern bzw. deren zu prüfenden Bedingungen ergeben.

Eine Entscheidungstabelle hat einen oberen Bereich für Ursachen (Eingabeparameter und deren Bedingungen) und einen unteren Bereich für Wirkungen (Ergebnisse und deren Eintreten). Sie wird folgendermassen erstellt:

1. Oben links werden die einzelnen Bedingungen zeilenweise aufgelistet, die jeweils den Zustand «ja» oder «nein» bzw. «wahr» oder «falsch» haben können.
2. Oben rechts werden alle Kombinationen der Bedingungen spaltenweise aufgelistet und mit den zeilenweisen Bedingungen von links zu einer Wahrheitsmatrix kombiniert.
3. Unten links werden die einzelnen Ergebnisse zeilenweise aufgelistet.
4. Unten rechts wird die Wahrheitsmatrix der Bedingungen von oben rechts mit den Ergebnissen von unten links zu einer Wirkungsmatrix kombiniert.

Dieses Beispiel zeigt eine Entscheidungstabelle, welche Regeln für Lohnabzüge abbildet:

- Abzüge für AHV, IV und EO sind ab dem 18. Altersjahr fällig.
- Abzüge für ALV und NBU sind ab einem Jahreslohn von 2500.- fällig.
- Abzüge für PK sind ab einem Jahreslohn von 22'680.- fällig.

| **Bedingung**         | K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8 |
|-----------------------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 18. Altersjahr        |  w |  w |  w |  w |  f |  f |  f |  f |
| Jahreslohn ≥ 2500     |  w |  w |  f |  f |  w |  w |  f |  f |
| Jahreslohn ≥ 22'680   |  w |  f |  w |  f |  w |  f |  w |  f |
| **Ergebnis**          |    |    |    |    |    |    |    |    |
| AHV                   |  x |  x |  x |  x |  - |  - |  - |  - |
| IV                    |  x |  x |  x |  x |  - |  - |  - |  - |
| EO                    |  x |  x |  x |  x |  - |  - |  - |  - |
| ALV                   |  x |  x |  ! |  - |  x |  x |  ! |  - |
| NBU                   |  x |  x |  ! |  - |  x |  x |  ! |  - |
| PK                    |  x |  - |  ! |  - |  x |  - |  ! |  - |

Die Erfüllung der Bedingungen ist oben rechts mit «w» (wahr) und «f» (falsch) angegeben. Die erwarteten Ergebnisse sind unten rechts mit «x» (erwartet), «-» (nicht erwartet) und «!» (widersprüchliche Bedingungen) angegeben.

Pro Spalte der Wirkungsmatrix soll ein Testfall erstellt werden, der überprüfen soll, ob die Ergebnisse der jeweiligen Zeile korrekterweise eintreten bzw. nicht eintreten. Für widersprüchliche Bedingungen können die Testfälle weggelassen bzw. als Negativtests (Ausnahmebehandlung) formuliert werden. Die Tabelle kann weiter konsolidiert werden, indem man redundante Kombinationen eliminiert.

Die Testüberdeckung ergibt sich aus dem Verhältnis der erstellten Testfälle zur Anzahl Spalten in der Wirkungsmatrix. Entscheidungstabellen sind ein systematisches Verfahren zur Ermittlung der Testfälle. Deren Anzahl wächst dabei exponentiell zur Anzahl der zu prüfenden Bedingungen an. Nach der Eliminierung redundanter Kombinationen kann und sollte die Anzahl der Testfälle durch Reduktionen (z.B. risikobasiert) weiter verkleinert werden.

## Whitebox-Testverfahren

Bei Whitebox-Testverfahren werden die Testfälle aus der Struktur des Quellcodes abgeleitet, der hierzu bereits geschrieben sein muss. Der Programmcode soll bis zu einem angestrebten Grad durch Testfälle überdeckt werden. In der Praxis wird zunächst der Überdeckungsgrad der Blackbox-Tests gemessen und dann gezielt durch ergänzende Whitebox-Tests erhöht.

Whitebox-Tests kommen v.a. auf der Stufe der Komponententests zum Einsatz. Neben dem Quellcode dient auch die Spezifikation der zu prüfenden Komponente als Testbasis, welche zur Festlegung der Erwartungswerte und zum Erkennen fehlerhaften Verhaltens herangezogen wird. 

Man unterscheidet beim Whitebox-Test u.a. zwischen _Anweisungstest_ und _Zweigtest_ (oder _Entscheidungstest_). Diese beiden Verfahren werden anhand eines Programmbeispiels zur Berechnung der Fakultät (engl. «factorial») demonstriert, wobei der folgende Programmcode (in JavaScript) auch als Flussdiagramm veranschaulicht ist:

```javascript
function factorial(x) {
  if (typeof x === "number") {
    if (x == 0) {
      return 1;
    } else if (x > 1) {
      let i = x - 1;
      do {
        x *= i;
        i -= 1;
      } while (i > 0);
    }
  }
  return x;
}
```

![Das Flussdiagramm zur Funktion _factorial_ zur Berechnung der Fakultät](/img/flussdiagramm.svg)

### Anweisungstest und Anweisungsüberdeckung

Beim Anweisungstest geht es darum, möglichst viele Anweisungen im Programmcode durch Testfälle erreichen zu können. Dabei wird ein bestimmtes Mindestverhältnis von überdeckten Anweisungen zur Gesamtzahl von Anweisungen angestrebt.

Im Flussdiagramm sind die Anweisungen als Knoten und der Programmfluss als Kanten dargestellt, wobei zwischen Verzweigungen (Kreise) und sonstigen Instruktionen (Rechtecke) unterschieden wird.

Im vorliegenden Beispiel sind zwei Testfälle nötig, um einen Überdeckungsgrad von 100% zu erreichen: Der erste muss der Bedingung `x == 0` und der zweite der Bedingung `x > 0` genügen, was beispielsweise mit den Eingabeparametern `0` und `3` erreicht werden kann: Der erste Testfall erreicht die Anweisung `return 1`, während der zweite die `do`/`while`-Schleife erreicht und (mehrmals) durchlaufen lässt.

Der Testfall darf sich dabei nicht mit dem Durchlaufen der Anweisungen begnügen, sondern muss auch das Ergebnis gemäss Spezifikation überprüfen (z.B. `factorial(0) == 1` und `factorial(3) == 6` gemäss der mathematischen Definition `0! = 1` und `3! = 6`).

Ein Überdeckungsgrad von 100% ist ‒ mit Ausnahme von trivialen Beispielen, wie der vorliegenden Fakultät-Berechnung ‒ in der Praxis oft schwer zu erreichen, da Anweisungen zur Ausnahmebehandlung teilweise sehr umständlich zur Ausführung gebracht werden können.

Gar nicht zu erreichende Anweisungen sind ein Hinweis auf «toten Code» (engl. «dead code»), dessen Entfernung geprüft werden soll. Das Erreichen der `else`-Zweige, die im vorliegenden Beispiel über keine Anweisungen verfügen, ist nicht Gegenstand des Anweisungstests.

### Zweigtest und Zweigüberdeckung

Stehen beim Anweisungstest die Anweisungen (Knoten im Flussdiagramm) im Fokus, sind es beim Zweigtest die Verzweigungen (Kanten im Flussdiagramm). Bei Abfrage- (`if`/`else if`/`else`, `switch`/`case`) und Schleifenanweisungen (`do`/`while`, `for`) sind die dort getroffenen Entscheidungen über den weiteren Kontrollfluss die Grundlage der Überlegungen.

Im Gegensatz zum Anweisungstest sind auch «leere» Zweige ohne Anweisungen zu überdecken; es müssen sämtliche Kanten im Flussdiagramm durchlaufen werden! Genügen beim Anweisungstest noch zwei Testfälle (`x = 0` und `x = 3`) um einen Überdeckungsgrad von 100% zu erreichen, müssen im Zweigtest auch die beiden «leeren» Zweige geprüft werden. (Diese werden ausgeführt, wenn `x` nicht numerisch ist bzw. den Wert `1` hat.)

Die Zweigüberdeckung ist das Verhältnis der ausgeführten Zweige zur Gesamtzahl der vorhandenen Zweige. Hierbei ist darauf zu achten, dass im Flussdiagramm ersichtliche Zweige teilweise (wie im vorliegenden Beispiel) nicht im Programmcode ersichtlich sind.

Eine Zweigüberdeckung von 100% garantiert auch eine Anweisungsüberdeckung von 100% ‒ was umgekehrt jedoch nicht gilt! Bei beiden Testverfahren ‒ Anweisungstest und Zweigtest ‒ sind Werkzeuge zur Messung der Codeüberdeckung eine unverzichtbare Unterstützung zur effizienten Ermittlung des erreichten Überdeckungsgrades.

## Erfahrungsbasierte Testfallermittlung

Die erfahrungsbasierte Testfallermittlung nutzt die Kenntnisse und die Intuition der Tester und ist eine sinnvolle Ergänzung zu den systematischen Testverfahren. Überdeckungsgrade sind dabei sekundär bzw. kaum messbar.

Neben dem Erfahrungs- und Fachwissen aus dem Softwaretest sind auch Kenntnisse aus vergleichbaren Vorgängerprojekten und Erfahrungen mit dort eingesetzten Programmiersprachen und Technologien hilfreich. Dieses Vorgehen ist wenig methodisch und basiert darauf, in früheren Projekten aufgedeckte Fehlerwirkungen erneut zu provozieren sowie auf Erfahrungswerten, welche Fehlhandlungen oft im jeweiligen Umfeld zu beobachten sind, wie z.B. fehlende Eingabeprüfungen oder falsche Formatierungen von Werten.

Die auf der Intuition basierte Testfallermittlung wird oft auch als «error guessing» bezeichnet. Dieses Vorgehen kann etwas methodischer ausgestaltet werden, wenn die beobachteten Fehlerwirkungen und ihre Ursachen systematisch gesammelt und beim Testen abgearbeitet und ergänzt werden.

Der _checklistenbasierte Test_ basiert auf einer Sammlung von Aspekten, die beim Testen berücksichtigt werden sollen. Solche Checklisten können laufend ‒ erfahrungsbasiert ‒ ergänzt werden. Auf automatisch testbare Aspekte soll dabei verzichtet werden, da die manuelle Abarbeitung solcher Tests ineffizient ist und zuverlässiger mithilfe von Testskripts vonstatten geht.

Checklisteneinträge sind oft als Fragen formuliert, welche sich auf verschiedene Qualitätskriterien beziehen. Checklisten können auch in funktionale und nicht funktionale Aspekte aufgeteilt werden. Aufgrund hinzugefügter bzw. entfernter Funktionalität im Testobjekt oder aufgrund häufiger bzw. seltener auftretender Fehlhandlungen sollen Checklisten laufend um neue Einträge ergänzt bzw. um obsolete Einträge gekürzt werden.

Die generische Formulierung der Checklisteneinträge führt zu einer hohen Variabilität in der Testausführung ‒ und damit zu einer höheren Abdeckung bei geringerer Wiederholbarkeit. Eine Überdeckung kann als Verhältnis abgearbeiteter zur Gesamtzahl vorhandener Checklisteneinträge angegeben werden.

Ist die Testbasis veraltet bzw. gar nicht vorhanden, oder ist die zum Testen verfügbare Zeit sehr knapp bemessen, muss man sich oftmals mit einem rein _explorativen Test_ begnügen. Dieses Verfahren basiert auf der Intuition und profitiert von fachspezifischen Kenntnissen wie auch allgemeinen Fähigkeiten (Kreativität, Neugier, analytische Fähigkeiten) der involvierten Tester.

Beim explorativen Test werden sämtliche Testaktivitäten parallel ausgeführt; eine Testplanung ist nicht vorgesehen. Das Testobjekt wird intuitiv erforscht und dabei dessen zu Beginn unbekanntes Verhalten schrittweise ergründet. Dieses Verfahren kann auch als Grundlage für nachfolgende systematische Testaktivitäten dienen, sofern hierfür Ressourcen zur Verfügung stehen.

Das explorative Testen wird oft zeitlich begrenzt im Rahmen einzelner Sitzungen (von i.d.R. maximal zwei Stunden) durchgeführt und dabei pragmatisch dokumentiert, wobei ergänzend eine Nachbesprechung (auch in einem erweiterten interessierten Personenkreis) zum Verbreiten des erlangten Erfahrungswissens sinnvoll sein kann.

Ein explorativer Test wird vorgängig sinnvollerweise mit einer «Test-Charta» auf zu testende Aspekte wie angestrebte Testziele, relevante Teile des Testobjekts, zu suchende Fehlerwirkungen usw. eingegrenzt. Beim explorativen Test ergibt sich ein «mentales Modell» von der Funktionsweise des Testobjekts, das im weiteren Verlauf der Testaktivitäten verfeinert wird.

Diese beschriebenen erfahrungsbasierten Testverfahren lassen sich nicht eindeutig den Blackbox- oder Whitebox-Verfahren zuordnen und kommen v.a. ergänzend auf den höheren Teststufen zum Einsatz. Überdeckungselemente und Endkriterien lassen sich dabei nur angeben, wenn die Testaktivitäten durch abzuarbeitende Listen eingegrenzt sind. Die Effektivität dieser Verfahren hängt stark vom eingesetzten Testpersonal und von dessen Erfahrung und Kenntnissen ab.

## Fragen

1. Äquivalenzklassen
    1. Wie viele Testfälle sind pro Äquivalenzklasse sinnvoll?
    2. Welchen Einfluss hat die Äquivalenzklassenbildung auf den Testaufwand?
2. Grenzwertanalyse
    1. Wie unterscheidet sich die Grenzwertanalyse bei Äquivalenzklassen gültiger gegenüber ungültiger Werte?
3. Zustandsbasierter Test
    1. Welchen Einfluss hat die Wahl des Programmierparadigmas (objektorientiert, funktional) auf die Menge der zustandsbasierten Testfälle?
4. Entscheidungstabellentest
    1. Wie kann die Anzahl der Testfälle beim Entscheidungstabellentest reduziert werden?
5. Anweisungstest und Anweisungsüberdeckung
    1. Welcher wichtige Aspekt des Testens kann vergessen gehen, wenn man sich auf die Überdeckung von Anweisungen konzentriert?
    2. Warum ist ein Überdeckungsgrad von 100% schwierig bis gar nicht erreichbar?
6. Zweigtest und Zweigüberdeckung
    1. Welchen Aspekt vom Programmablauf, der im Quellcode kaum oder gar nicht erkennbar ist, macht ein Flussdiagramm sichtbar?
    2. Warum garantiert eine Zweigüberdeckung von 100% auch eine Anweisungsüberdeckung von 100%, aber nicht umgekehrt?
7. Erfahrungsbasierte Testfallermittlung
    1. Welche Erfahrungen können beim Ermitteln von Testfällen nützlich sein?
    2. Wovon hängt der Nutzen erfahrungsbasierten Testens v.a. ab?
