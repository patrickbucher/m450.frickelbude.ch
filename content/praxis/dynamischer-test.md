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

Äquivalenzklassen können nicht nur für Eingabeparameter, sondern für allen möglichen Werte gebildet werden, welche die Verarbeitung durch das Testobjekt beeinflussen (z.B. Konfigurationseinstellungen, Datenbankeinträge usw.).

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
