+++
date = '2025-09-20T20:26:21+02:00'
title = 'Fehlermanagement'
weight = 10
+++

Damit entdeckte Fehler auch korrigiert werden können, müssen diese zunächst erfasst und dann verwaltet werden. Dies bezeichnet man als _Fehlermanagement_. Hierzu muss die Form der gemeldeten Fehler und ihr Verarbeitungsprozess festgelegt werden, damit alle Beteiligten wissen, wer welchen Fehler zu welchem Zeitpunkt bearbeitet. Wie umfassend dieser Prozess festgelegt wird, kann sich von Organisation zu Organisation unterscheiden. Innerhalb eines Projekts sollte dem festgelegten Prozess aber diszipliniert gefolgt werden.

## Fehlerbericht und Fehlerklassifikation

Ein Fehler soll gemeldet werden, wenn ein Anwender eine Fehlerwirkung feststellt, oder ein Entwickler einen Fehlerzustand entdeckt. Das Testprotokoll dokumentiert eine allfällige Abweichung vom Istverhalten eines Testobjekts zu dessen Sollverhalten. Für jede solche Abweichung ist zu prüfen, ob wirklich ein Fehler vorliegt. Dabei unterscheidet man zwischen vier Fällen der Fehlerklassifikation:

![zwei Testobjekt-Zustände, zwei Testergebnisse ‒ vier Interpretationen](/img/testergebnis.svg)

1. _richtig positiv_: Das Testobjekt ist fehlerhaft, und ein entsprechender Testfall scheitert (ist «rot»).
2. _falsch negativ_: Das Testobjekt ist fehlerhaft, aber kein Testfall zeigt dies an, da ein entsprechender Testfall fehlt, mangelhaft konzipiert bzw. umgesetzt oder nicht (korrekt) ausgeführt worden ist.
3. _falsch positiv_: Das Testobjekt verhält sich korrekt, ein entsprechender Testfall scheitert jedoch, da dieser fehlerhaft konzipiert bzw. umgesetzt, veraltet oder falsch ausgeführt worden ist.
4. _richtig negativ_: Das Testobjekt verhält sich korrekt, und ein entsprechender Testfall läuft durch (ist «grün»).

Im ersten Fall (richtig positiv) wird der Fehler gemeldet, sofern er noch nicht bereits gemeldet worden ist. Ist dieser bereits bekannt, kann ein bestehender Fehlerbericht um neue Informationen ergänzt werden. Im dritten Fall (falsch positiv) ist die Ursache für den scheiternden Test zu klären: Ist diese der Testinfrastruktur geschuldet oder in einem anderen Bereich innerhalb des Testobjekts zu suchen?

Aus Zeitgründen können oftmals nicht alle im Testprotokoll festgehaltenen Abweichungen korrekt klassifiziert werden. Im Zweifel soll besser eine vermeintliche Fehlerwirkung zu viel als zu wenig berichtet werden.

Ein Entwicklungsprojekt soll über eine zentrale Datenbank für Fehlerberichte verfügen. Diese unterscheidet sich vom Ticketsystem, in welchem Supportanfragen von Kunden verwaltet werden, wobei sinnvollerweise Bezüge zwischen den Vorgängen der verschiedenen Systeme festgehalten werden. (Kunden melden Supportanfragen, die zu Fehlerberichten führen; ein korrigierter Fehler soll dem Kunden zurückgemeldet werden.)

Ein Fehlerbericht soll nicht auf die möglichen Ursachen der beobachteten Fehlerwirkung eingehen und auch keine Lösungen vorschlagen, sondern die Fehlerwirkung nur mitsamt Kontext, Schritten zu deren Reproduktion und festgestellten Auswirkungen beschreiben. Dabei soll das Problem präzise und prägnant beschrieben werden, damit es gedanklich schnell nachvollzogen und einfach am Testobjekt reproduziert werden kann. Neben der Problembeschreibung werden auch Informationen zur Version und Identifikation des Testobjekts und zur Klassifizierung des Fehlers angegeben.

Das Schema für die Fehlerberichte wird vom Testmanager in Absprache mit den Stakeholdern projektweit festgelegt. Neben dem Fehlerbericht sind auch Statusinformationen zum jeweiligen Vorgang festzuhalten. Die Bearbeitungsreihenfolge eines Fehlers hängt u.a. von dessen _Schwere_ ab, die sich beispielsweise folgendermassen einordnen lässt:

- _schwer_: Systemabsturz, Datenverlust ‒ das Testobjekt ist nicht einsetzbar.
- _mittel_: Fehlfunktion ‒ das Testobjekt ist nur beschränkt einsetzbar.
- _leicht_: Geringe Abweichung ‒ das Testobjekt ist dennoch voll einsetzbar.

Die Dringlichkeit der Fehlerbehebung hängt auch von weiteren Faktoren ab, etwa vom Korrekturaufwand oder von der jeweiligen Projektplanung, wobei die Schwere des Fehlers und dessen Korrekturpriorität als separate Attribute verwaltet werden.

## Fehlerkorrekturvorgang

Der Testmanager muss nicht nur die korrekte Erfassung und Verwaltung der Fehlerberichte sicherstellen, sondern auch deren Korrektur. Der Fortschritt dieses Vorgangs wird mit einem Statusattribut pro Fehlerbericht festgehalten, wobei beispielsweise folgendes Schema zum Einsatz kommen kann:

![mögliche Zustandsübergänge eines Fehlerberichts](/img/fehlermanagement.svg)

- _Neu_: Der Fehlerbericht wurde erfasst und vom Verfasser nach Gutdünken klassifiziert.
- _Offen_: Der Testmanager hat den Fehlerbericht überprüft, akzeptiert und einem Entwickler zur Korrektur zugewiesen.
- _Abgewiesen_: Der Testmanager hat den Fehlerbericht überprüft und zurückgewiesen, da es sich um ein Duplikat, um eine falsch positive Meldung oder um einen Änderungswunsch (und somit um eine neue bzw. geänderte Anforderung) handelt.
- _Analyse_: Der Entwickler bearbeitet den Fehlerbericht und lokalisiert den Fehlerzustand.
- _Korrektur_: Der Entwickler arbeitet an der Behebung des Fehlerzustands.
- _Test_: Der Entwickler überprüft die Fehlerkorrektur.
- _Erledigt_: Der Tester hat die Fehlerbehebung durch einen Fehlernachtest verifiziert.
- _Flop_: Der Fehlernachtest ist gescheitert; der Fehler muss erneut analysiert werden.

Wichtig ist, dass nur der Tester (und nicht der Entwickler) den Status auf «erledigt» setzen darf, sofern sein Fehlernachtest erfolgreich war.

Eine gut gepflegte Fehlerdatenbank erleichtert nicht nur die Nachverfolgung der einzelnen Korrekturvorgänge, sondern erlaubt auch Auswertungen zur Softwarequalität und Prognosen und kann als Entscheidungsgrundlage für Freigabetermine dienen. Auch der Entwicklungsprozess kann damit verbessert werden, indem man etwa die Anzahl und Schwere der Fehlerberichte den einzelnen Komponenten des Testobjekts zuordnet und diese den jeweiligen Testpraktiken gegenüberstellt.

## Fragen

1. In welche Reihenfolge (von gut bis schlecht) lassen sich die vier Quadranten einsortieren? Warum?
2. Warum lässt sich die Schwere eines Fehlers nicht mit dessen Korrekturpriorität gleichsetzen?
3. Warum soll nur der Tester und nicht der Entwickler den Status eines Fehlerberichts auf «erledigt» setzen dürfen?
