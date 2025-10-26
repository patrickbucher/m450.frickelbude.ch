+++
date = '2025-10-26T14:04:41+01:00'
title = 'Statischer Test'
weight = 14
+++

Der _statische Test_ (bzw. die _statische Analyse_ oder _statische Prüfung_) kann manuell oder werkzeuggestützt erfolgen. Das Testobjekt ist nicht ein ausführbares Programm wie beim dynamischen Test, sondern ein für die Erstellung der Software relevantes Arbeitsergebnis (Dokument, Quellcode).

Im Gegensatz zum dynamischen Test erfordert der statische Test keine Formulierung von Testfällen. Der statische Test ist darum weniger aufwändig und kann Fehlerzustände früher feststellen. Im Sinne der Prävention sollen mit statischen Tests Fehler erkannt werden, bevor sie sich auf den weiteren Entwicklungsprozess auswirken können.

## Das Review

Im Rahmen eines _Reviews_ werden Qualitätskriterien wie Lesbarkeit, Vollständigkeit, Korrektheit, Konsistenz und Testbarkeit geprüft, woran schliesslich auch die Wartbarkeit bewertet werden kann. Reviews dienen sowohl der Verifikation als auch der Validierung.

Beim Review kann jegliche Art von Spezifikation geprüft werden: Geschäftsanforderungen, funktionale und nicht funktionale Anforderungen, Sicherheitsanforderungen usw. Entsprechende Fehler sollen gefunden und behoben werden, bevor sie in den Quellcode gelangen.

Im agilen Vorgehen sind v.a. Epics und User Stories Gegenstand von Reviews. Es wird geprüft, ob diese der Definition of Ready genügen, vollständig und verständlich sind und über sinnvolle Abnahmekriterien verfügen. Dabei können Fehler wie Inkonsistenz, Mehrdeutigkeit, Widersprüchlichkeit, Lücken, Ungenauigkeit, Redundanz aber auch Rechtschreibefehler aufgedeckt werden.

Auch Testkonzepte, Testfälle und Testpläne sowie Verträge, Projekt- und Zeitpläne und Benutzeranleitungen können Gegenstand eines Reviews sein. Mit den Ergebnissen eines Reviews können nicht nur die Arbeitsergebnisse selber, sondern auch deren zugrundeliegende Arbeitsprozesse verbessert werden, indem man etwa aus häufig festgestellten Fehlern Schulungsmassnahmen ableitet.

Das Review basiert auf der menschlichen Analyse- und Denkfähigkeit, womit komplexe Sachverhalte überprüft und bewertet werden. Das Review ist also ein intensives Nachdenken über Arbeitsergebnisse, wozu der Reviewer mit den Inhalten der jeweiligen Artefakte vertraut sein und sie nachvollziehen können muss.

Für viele Arten von Arbeitsergebnissen stellt das Review die einzige Möglichkeit zu deren Prüfung dar, wobei es unterschiedliche Vorgehensweisen gibt. Reviews können mehr oder weniger formell sein, d.h. sich stärker oder schwächer an einem vorgegebenen Prozess orientieren.

Beim formellen Review sind die am Review beteiligten Personen, das dabei einzuhaltende Vorgehen sowie die zu dokumentierenden Informationen festgelegt. Das gewählte Vorgehen hängt auch vom Entwicklungsmodell (sequenziell, agil), von der Reife des Entwicklungsprozesses, von der Komplexität der zu prüfenden Inhalte und von allfälligen gesetzlichen Vorgaben ab.

Wie das Review durchgeführt werden soll, hängt davon ab, welche Ziele man damit verfolgt. Möchte man Fehler aufdecken, ein gemeinsames Verständnis schaffen oder eine Entscheidungsgrundlage für die weitere Entwicklung erarbeiten?

### Der Reviewprozess

Der Reviewprozess besteht aus mehreren Schritten und kann für umfassende Reviews mehrmals durchgespielt werden. Diese Schritte oder Hauptaktivitäten sind:

1. **Planung**: Die Projektleitung entscheidet, welches Arbeitsergebnis welcher Art von Review unterzogen wird. Je nach Art des Reviews unterscheiden sich die zu besetzenden Rollen und die auszuführenden Aktivitäten. Die zu bewertenden Qualitätsmerkmale sowie der Zeitrahmen und der Aufwand werden auch in der Planung festgelegt. Die Rollen werden mit geeigneten Personen besetzt. In Zusammenarbeit mit dem Autor des zu prüfenden Artefakts vergewissert man sich, dass sich dieses in einem stabilen Zustand befindet. Bei einem formalen Review werden auch eingangs- und Ausgangskriterien für die einzelnen Arbeitsschritte festgelegt. Werden umfassende Arbeitsergebnisse einem Review unterzogen, kann eine Auswahl der zu prüfenden Inhalte getroffen werden.
2. **Initiierung**: Die am Review beteiligten Personen werden über ihre Rollen informiert und mit allen notwendigen Informationen versorgt. Dies kann im Rahmen einer Besprechung oder rein schriftlich vonstatten gehen. Neben dem zu prüfenden Arbeitsergebnis müssen auch sämtliche Informationen bereitgestellt werden, womit der Soll-Zustand des Artefakts eingeschätzt werden kann. Solche _Basisdokumente_ («Baseline») können Standards, Designdokumente, Richtlinien usw. sein. Auch Checklisten oder Vorlagen für das Festhalten der Befunde können hilfreich sein und den Arbeitsaufwand reduzieren. Beim formalen Review wird geprüft, ob die Eintrittskriterien eingehalten werden. Das Review kann abgebrochen werden, wenn das zu prüfende Arbeitsergebnis hierzu noch nicht stabil oder reif genug ist.
3. **Individuelles Review**: Die Reviewer (oder «Gutachter») unterziehen das Arbeitsergebnis einer intensiven Prüfung, wozu sie Gebrauch von den relevanten Basisdokumenten machen und Abweichungen sowie potenzielle Fehlerzustände festhalten. Dieser Schritt gilt als Vorbereitung für die folgende Phase.
4. **Reviewsitzung**: Die Ergebnisse aus dem individuellen Review werden im Rahmen einer gemeinsamen Besprechung oder mithilfe einer Kollaborationsplattform zusammengeführt. Anschliessend werden diese Befunde besprochen und analysiert. Die Zuständigkeit für deren Behebung wird festgelegt und eine evtl. nötige Nachkontrolle geplant. Das Erreichen der festgelegten Qualitätskriterien wird gemeinsam eingeschätzt und dokumentiert. Am Ende steht die Entscheidung über das Arbeitsergebnis: Wird dieses (evtl. mit geringfügigen Änderungen) akzeptiert, zu einer umfangreichen Überarbeitung zurückgewiesen oder gar verworfen?
5. **Behebung und Berichterstattung**: Wird ein detailliertes Reviewprotokoll erstellt, erübrigt sich die Anfertigung einzelner Fehlerberichte. Der Autor des Arbeitsergebnisses kann die Anpassungen direkt durch das Abarbeiten dieses Protokolls vornehmen. Anhand der gesammelten Reviewprotokolle ist es möglich, den Arbeitsprozess zu verbessern, indem man aus häufig auftretenden Fehlern Schulungsmassnahmen ableitet.

### Rollen im formalen Review

Das formale Review sieht verschiedene Rollen vor, die aber nicht alle besetzt werden müssen bzw. bei Bedarf zusammengelegt werden können. Diesen Rollen kommen folgende Aufgaben zu:

- **Management**: Auswahl der zu prüfenden Arbeitsergebnisse, Planung des Reviews, Bereitstellung der Ressourcen, Überwachung und Steuerung des Vorgangs
- **Reviewleiter**: Planung, Vorbereitung, Durchführung, Nachbereitung, Terminplanung, Auswahl der beteiligten Personen
- **Moderator**: diplomatische Leitung der Reviewsitzung, unnütze Diskussionen unterbinden, Untertöne heraushöhren und darauf reagieren, die persönliche Meinung zurückhalten, Metriken sammeln, Protokoll führen
- **Autor**: zu prüfendes Arbeitsergebnis erstellen und in stabilen Zustand bringen, aufgedeckte Fehlerzustände beheben, Kritik auf das Arbeitsergebnis (und nicht auf sich selber) beziehen, über erfolgte Nachbearbeitung informieren
- **Reviewer**: Vorbereitung im Rahmen des individuelles Reviews, problematische Stellen im Arbeitsergebnis identifizieren und beschreiben, verlangte Perspektive auf das Arbeitsergebnis einnehmen, Konzentration auf relevante Aspekte, positive Aspekte hervorheben, unzulängliche Aspekte dokumentieren
- **Protokollant**: bestehende Unklarheiten dokumentieren, getätigte Aussagen unverfälscht festhalten, Protokoll den relevanten Stakeholdern zur Verfügung stellen

### Arten von Reviews

Arbeitsergebnisse können unterschiedlichen Arten von Reviews unterzogen werden:

- Beim **informellen Review** wird ein Arbeitsergebnis ohne formalen Prozess einer Prüfung unterzogen, um darin Fehlerzustände erkennen und dem Autor eine Rückmeldung darauf geben zu können. Dieses Review wird oft vom Autor selber angestossen, wobei er Reviewer und Termin selber bestimmt. Oft wird auf eine Reviewsitzung verzichtet; die Rückmeldung erfolgt rein schriftlich. Die Qualität der Rückmeldungen hängt oft von der Auswahl der Reviewer und deren verfügbaren Ressourcen ab.
- Das **Walkthrough** ist eine Reviewsitzung, in der einzelne Anwendungsszenarien anhand eines Arbeitsergebnisses durchgespielt werden. Die Reviewer untersuchen diesen mental durchgespielten Ablauf auf mögliche Fehlerzustände, welche hierzu den Ablauf durch Nachfragen unterbrechen können. Oft spricht man hierbei auch von einem «Trockenlauf» («dry run»). Üblicherweise führt der Autor selber durch die Reviewsitzung, wozu keine individuelle Vorbereitung der Reviewer nötig ist. Dabei ermittelte Probleme und im Konsens gefundene Verbesserungsvorschläge werden vom Autor selber protokolliert, der sein Arbeitsergebnis im Anschluss einer Nachbereitung unterzieht.
- Das **technische Review** stellt die Entscheidungsfindung im Konsens in den Vordergrund. Dieses Review wird von Fachspezialisten durchgeführt, wobei auch der unverstellte Blick Aussenstehender willkommen ist. Bei der Reviewsitzung, die eine gewissenhafte Vorbereitung erfordert, sollen auch alternative Lösungsansätze diskutiert werden. Am Ende steht ein zusammenfassender Bericht der Reviewergebnisse.
- Die **Inspektion** ist die formalste Art des Reviews, wobei Rollenverteilung, Planung, Checklisten sowie die Erfüllung der Eingangs- und Ausgangskriterien der einzelnen Schritte eine wichtige Rolle spielen. Hierbei soll einerseits die Qualität des Arbeitsergebnisses eingeschätzt und Vertrauen darin geschaffen werden. Andererseits sollen Fehlerzustände und Unklarheiten aufgedeckt werden. Zusätzlich soll der Arbeitsprozess verbessert werden, der zur behandelten Art von Arbeitsergebnissen führt, um vergleichbare Fehlerzustände in Zukunft vermeiden zu können. Bei der Reviewsitzung tragen alle Reviewer der Reihe nach ihre Erkenntnisse vor, wozu der Autor jeweils Stellung nimmt. Die gefundenen Fehlerzustände werden protokolliert und am Schluss diskutiert. Am Ende steht eine Bewertung, die ausschlaggebend für Nacharbeiten ist. In diesem Prozess können auch Metriken erhoben werden, womit der Arbeitsprozess weiter verbessert werden kann.

### Das Review im Entwicklungsprozess

Reviews sind ein Mittel des frühen Testens und finden am besten möglichst bald nach der Erstellung des Arbeitsergebnisses statt. Ein Review beseitigt nicht nur die Fehlerzustände in einem Dokument, sondern auch überall im weiteren Entwicklungsprozess, wo das betreffende Dokument als Arbeitsgrundlage dient.

Eine Nachbesserung macht (im Gegensatz zu einer Fehlerkorrektur nach einem dynamischen Test) keinen Regressionstest nötig, sofern es sich um eine Anpassung an einem Dokument handelt.

Ein Review kann auch widersprüchliche Kundenwünsche identifizieren und so deren Implementierung verhindern, was nicht nur Korrekturaufwand sondern auch initiale Entwicklungskosten spart.

Eine Codebasis, die regelmässigen Reviews unterzogen wird, ist auf Dauer besser wartbar und erweiterbar, was die Weiterentwicklungskosten senkt. Reviews fördern zudem den Wissensaustausch innerhalb einer Organisation und ermöglichen Verbesserungen im Arbeitsprozess.

Die Durchführung eines Reviews erfordert eine klare Darstellung des behandelten Sachverhalts, wobei der Vorgang der Klärung oft interessante Einsichten ermöglicht. Weiter steigert das Review das Veranwortungsbewusstsein aller Beteiligter für die Qualität und sorgt für ein gemeinsames Verständnis der Anforderungen.

Damit diese Vorteile zum Tragen kommen können, müssen einige Erfolgsfaktoren gegeben sein:

- Management und Projektleitung müssend ausreichend Ressourcen für Reviews zur Verfügung stellen.
- Lernen und ständiges Verbessern sind Teil der Firmenkultur.
- Reviews verfolgen klar definierte Ziele.
- Kommen Checklisten zum Einsatz, müssen diese die relevanten Risiken abbilden.
- Beim Review kommen geeignete Personen mit dem nötigen Fachwissen zum Einsatz.
- Tester sollen am Review beteiligt sein, um möglichst früh mit der Testbasis in Kontakt zu kommen ‒ und um diese auf das Kriterium der Testbarkeit zu überprüfen.
- Die Effizienz eines Reviews hängt stark von einem Moderator ab, der die zu besprechenden Befunde sinnvoll zu priorisieren und gewichten weiss.
- Das Review muss von allen Beteiligten als konstruktive Kritik am Arbeitsergebnis und nicht als Bewertung des Autors verstanden werden.
- Reviewsitzungen sollen kurz und fokussiert durchgeführt werden, damit die Aufmerksamkeit der Beteiligten dabei nicht erschöpft wird. Grosse Arbeitsergebnisse erfordern eine Auswahl der zu behandelnden Inhalte oder aber mehrere Reviewsitzungen.

## Werkzeuggestützte Analyse

Triviale Fehlerzustände in Dokumenten wie etwa Rechtschreibefehler können mithilfe von Werkzeugen sehr effektiv und effizient ermittelt und korrigiet werden. Arbeitsergebnisse, die in einer formalen Sprache vorliegen (z.B. Quellcode oder Konfigurationsdateien), können ebenfalls mithilfe von Werkzeugen automatisch geprüft und verbessert werden.

Spezialisierte Werkzeuge zur sprachlichen Analyse von Dokumenten können Metriken wie die Komplexität der verwendeten Sprache oder die Länge der Sätze automatisch ermitteln und bewerten. Werkzeuge, die heuristisch arbeiten und bestimmte vorgegebene Muster im Programmcode erkennen können, helfen beim Ermitteln bekannter Probleme, z.B. bei üblichen Sicherheitslücken (Verkettung von SQL-Befehlen ermöglicht _SQL Injection_; fehlende Eingabeprüfungen führen zu undefiniertem Verhalten).

Eine solche statische Analyse kann zwar nicht verhindern, dass übliche Fehlerzustände Einzug in den Programmcode finden (z.B. eine Division durch null), aber darauf hinweisen, dass solche Fehlerzustände möglicherweise bestehen (z.B. weil der Divisor nicht auf den Wert null geprüft wird). Hier kann es auch falsch positive Befunde geben, da oftmals erst der dynamische Test zuverlässig aufzeigt, welche Programmpfade tatsächlich ausgeführt werden.

## Abgrenzung zum dynamischen Test

Eine umfassende Teststrategie erfordert eine Kombination aus statischer und dynamischer Prüfung. Gelangt ein Quellcodeabschnitt sehr selten zur Ausführung, kann es sehr lange dauern, bis ein dynamischer Test einen Fehlerzustand darin aufdecken kann. Wird der Code hingegen auch statisch überprüft, kann der Fehlerzustand unter Umständen schnell gefunden werden.

Aspekte wie Erweiterbarkeit und Lesbarkeit des Programmcodes können nur mit statischen Tests ermittelt werden. Metriken, die das Laufzeitverhalten des Codes betreffen, z.B. Performanz und Ressourcenverbrauch, erfordern hingegen dynamische Tests.

Statische Tests können v.a. die folgenden Arten von Fehlerzuständen ermitteln:

- **Anforderungsfehler**: Anforderungen sind mehrdeutig, inkonsistent, widersprüchlich oder ungenau.
- **Entwurfsfehler**: Komponenten weisen eine hohe Kopplung oder schwache Kohäsion auf und sind deswegen schwer zu testen. Entworfene Datenstrukturen können ungeeignet und Schnittstellen umständlich anzusprechen sein.
- **Programmierfehler**: Variablen werden nicht initialisiert, Eingaben nicht geprüft.
- **Abweichungen von Standards**: Richtlinien werden verletzt, missbilligte Programmierkonstrukte verwendet.
- **Unpassende Schnittstellen**: Komponenten lasen sich aufgrund inkompatibler Schnittstellen nicht integrieren.

Viele Aspekte der Wartbarkeit können (nur) mithilfe der statischen Analyse überprüft werden. Je länger ein Softwaresystem im Einsatz ist und weiterentwickelt wird, desto eher lohnt sich eine ‒ möglichst frühe ‒ statische Prüfung.

## Fragen

1. Wie unterscheiden sich statischer und dynamischer Test im Bezug auf:
    1. Testobjekt
    2. Testfälle
    3. Regressionstest
    4. Testzeitpunkt
    5. Testziele
2. Warum muss ein Arbeitsergebnis sich für ein Review in einem stabilen Zustand befinden?
3. Welche positiven Effekte haben Reviews jenseits der Verbesserung des geprüften Arbeitsergebnisses?
4. Welche Qualitätsmerkmale einer Software können mithilfe eines statischen Tests kaum oder gar nicht ermittelt werden?