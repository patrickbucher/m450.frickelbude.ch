+++
date = '2025-11-28T14:29:42+01:00'
title = 'Debugging'
+++

> If debugging is the process of removing software bugs, then programming must be the process of putting them in.

– Edsger W. Dijkstra

>  Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.

– Brian W. Kernighan

---

Der folgende Text ist eine auszugsweise Zusammenfassung vom 5. Kapitel des Buches _The Practice of Programming_ von Brian Kernighan und Rob Pike aus dem Jahr 1999.  Viele der Ratschläge sind unabhängig von der Technologie und darum zeitlos.

---

Da man beim _Debugging_ eines Programms so viel Zeit verbringt wie beim Schreiben davon, lernen gute Programmierer von den gefundenen Fehlern, damit sie ähnliche Fehler in Zukunft vermeiden oder früh erkennen können. Debugging ist schwierig und zeitintensiv, weswegen man es so selten wie möglich machen möchte.

Gutes Design, guter Programmierstil, Wertebereichsprüfungen, defensives Programmieren und andere Praktiken helfen einem dabei das Debugging zu reduzieren. Einige Sprachfeatures ‒ Zeiger, `goto`-Statements, globale Variablen ‒ sind fehleranfällig, während andere Features ‒ automatische Speicherverwaltung, strikte Typisierung ‒ gewisse Fehler verunmöglichen.

## Debugger

Viele Programmiersprachen und Entwicklungsumgebungen verfügen über Debugging-Werkzeuge. Diese erlauben das zeilen- oder funktionsweise Abarbeiten von Code, das Anhalten an bestimmten Punkten und die Inspektion der Variablen zur Laufzeit. Gute Debugger sind ein mächtiges Werkzeug in den Händen fähiger Anwender.

Debugger stehen jedoch nicht in allen Umgebungen zur Verfügung oder sind bei gewissen Programmierproblemen (nebenläufige, verteilte Systeme) wenig hilfreich.  Ausserdem verleiten Debugger zum planlosen schrittweisen Ausführen von Code und Inspizieren von Datenstrukturen, ohne dass man weiss, wonach man eigentlich sucht. Geht man bei einer Debugging-Sitzung einen Schritt zu weit, muss man von neuem anfangen. Einfache `print`-Anweisungen verbleiben jedoch im Code und können iterativ verbessert werden. Oftmals ist es effizienter, zuerst über mögliche Fehlerursachen nachzudenken und diese durch gezielten Einsatz des
Debuggers zu prüfen.

## Gute Anhaltspunkte, leichte Fehler

Tritt ein Fehler auf, neigen unerfahrene Programmierer oft dazu der Programmiersprache, einer Library oder dem Compiler die Schuld zu geben.  Erfahrenere Programmierer wissen hingegen, dass sie für den Fehler verantwortlich sind.

Es bleibt nichts anderes übrig, als zu versuchen von der Fehlerfolge zu dessen Ursache vorzudringen, indem man die Ausführung des Codes und alle darin involvierten Variablen zurückverfolgt. Die einzige Gewissheit ist, _dass_ der Fehler aufgetreten ist. Zur Fehlerfindung sind folgende Techniken hilfreich:

- **Auf bekannte Muster achten**: Kommt einem die Fehlerfolge bereits bekannt vor (z.B. ein `null`-Pointer), dürfte man auch der Ursache für den Fehler schon einmal begegnet sein (z.B. eine uninitialisierte Variable).
- **Die letzte Änderung inspizieren**: Was wurde am Programm geändert, seitdem es das letzte Mal funktioniert hat? Der neue Code wird wohl Teil des Problems sein. Der Vergleich zu einer früheren Version könnte helfen; eine Versionskontrolle ist hierbei nützlich.
- **Den gleichen Fehler nicht zweimal machen**: Hat man einen Fehler behoben, soll man sich überlegen, ob man ihn nicht woanders auch begangen haben könnte.  Gibt es ähnliche Codepassagen, die man sich noch einmal genauer anschauen sollte?
- **Debugging ‒ jetzt, nicht später**: Stösst man auf einen Fehler, sollte man diesem direkt nachgehen. Vielleicht wird er nicht mehr so schnell auftauchen ‒ bis er plötzlich schwerwiegende Folgen hat! So musste ders _Mars Pathfinder_ einmal täglich neugestartet werden, weil die Entwickler beim ursprünglichen Entdecken des Fehlers gerade womit anders beschäftigt waren.
- **Eine Stack-Trace erhalten**: Eine Stack-Trace mit exakten Zeilenangaben des aufgetretenen Fehlers ist eine der wichtigsten Quellen bei der Fehlersuche.  Unwahrscheinliche Argumentwerte (`null`; riesige Integer, wenn kleine erwartet werden; eigenartige Zeichen in Strings) können auch gute Hinweise liefern.
- **Lesen statt tippen**: Genaues Durchlesen des Codes und ruhiges Nachdenken darüber ist oft effektiver als überstürzte Änderungsversuche an fehlerhaftem Code. Bevor man die Fehlerursache kennt, führen Änderungen eher zu einer Verschlechterung als zu einer Verbesserung. Bei besonders kniffligen Fehlern kann sich sogar das Ausdrucken einer Codepassage zum ruhigen Studium davon lohnen, sofern die Fehlerursache gut auf einen bestimmten Bereich im Code eingegrenzt werden kann. Kurze Pausen können auch hilfreich sein: Manchmal glaubt man zu lesen, was man ursprünglich meinte, und nicht, was wirklich im Code steht.
- **Jemandem den Code erklären**: Versucht man den Code einer anderen Person zu erklären, erklärt man manchmal dabei gleich die Fehlerursache mit. So braucht man hierzu nicht einmal jemanden zu unterbrechen, sondern kann das Problem ebensogut auch einem Teddybären erklären.

## Keine Anhaltspunkte, schwere Fehler

Wenn man gar keine Idee hat, was gerade falsch läuft, wird das Leben schwieriger.

- **Den Fehler reproduzierbar machen**: Ein Fehler soll zuverlässig reproduzierbar gemacht werden, sodass er auf Knopfdruck demonstriert werden kann. Ist dies nicht möglich, sollte man untersuchen, unter welchen Bedingungen der Fehler reproduziert werden kann. Ausgaben wie der Seed eines Zufallszahlengenerators können wertvolle Hinweise liefern.
- **Teile und Herrsche** (_Divide and Conquer_): Kann der Fehler auch mit weniger Eingabedaten reproduziert werden? Welches ist die kleinstmöglichste Änderung an den Eingabedaten, die Zwischen Fehler und Erfolg entscheidet? Mit einer _binären Suche_ können problematische Eingabedaten weiter eingegrenzt werden, indem man die Testdaten bei jedem Durchlauf halbiert und schaut, mit welcher Hälfte sich der Fehler reproduzieren lässt. Auch der Programmcode kann einer binären Suche unterzogen werden, indem man ihn schrittweise halbiert, bis nur noch der Teil übrig ist, der zum Fehler führt.
- **Numerologische Studien**: Tauchen Fehler nach einen bestimmten Muster auf?  Gibt es gewisse Regelmässigkeiten in der Häufigkeit des Auftauchens von Fehlern? Solche Muster können auf typische Fehler wie einen _off by one error_ hinweisen. Statistische Analysen von Ausgabedaten können bei der Fehlersuche hilfreich sein.
- **Die Suche eingrenzen**: Einfache `print`-Befehle können einem beim Verständnis des Programms helfen. Wird beispielsweise eine Meldung aus einem Codeblock ausgegeben, der gar nie betreten werden sollte, hat man offenbar etwas an dessen Bedingung falsch verstanden. So weiss man, dass der Fehler weiter oben am Code sein muss. Einheitlich formatierte `print`-Ausgaben können mit Werkzeugen wie `grep` weiter gefiltert und isoliert werden.
- **Selbstprüfenden Code schreiben**: Der Code kann um spezielle Debugging-Funktionen erweitert werden, die den Zustand verschiedener Variablen an mehreren Stellen ausgeben. So können Werte vor und nach einem verdächtigen Abschnitt einfach verglichen werden. Solche Funktionen sind auch im weiteren Verlauf der Entwicklung noch sinnvoll, selbst wenn das ursprüngliche Problem bereits behoben worden ist.
- **Logs schreiben**: Schreibt man Debugging-Ausgaben in eine Log-Datei, kann man damit nachvollziehen, was zuletzt passiert ist bevor ein Programm abgestürzt ist. (Vorsicht bei gepufferten Ausgaben: Diese erscheinen erst in der Logdatei, wenn der Puffer geleert wird.)
- **Ein Bild zeichnen**: Verdächtige Zahlenreihen können mit einem Streudiagramm visualisiert werden, womit sich Muster darin besser erkennen lassen. Gibt es Extremwerte oder andere auffällige Abweichungen?
- **Werkzeuge verwenden**: Werkzeuge wie `grep` oder `diff` helfen einem beim Filtern bzw. Vergleichen von Ausgaben. Mit Shell-Skripts kann die Fehleranalyse weiter automatisiert werden. Triviale Programme helfen dabei eine Hypothese über die Funktionsweise von Programmkomponenten zu überprüfen.  Versionskontrolle hilft beim Nachvollziehen der Änderungshistorie und beim Wiederherstellen früherer Zustände.
- **Aufzeichnungen festhalten**: Dauert die Fehlersuche länger an, sollte man sich Notizen dazu machen. Ansonsten läuft man Gefahr den Überblick über bereits unternommene Untersuchungen zu verlieren. Schon das Schreiben alleine hilft einem beim Verständnis des Problems.

## Der letzte Ausweg

Sind diese Tipps nicht hilfreich, wird es Zeit das Programm Schritt für Schritt mit dem Debugger durchzugehen. Hierbei entdeckt man, ob man falsche Vorstellungen hat: vom ungefähren Ort der Fehlerursache oder von Details wie der Operatorenpräzedenz.

Ändern sich globale Variablen unerwartet? Oder wurde der falsche Algorithmus für das Problem gewählt? Vielleicht ist es auch bloss eine falsche Einrückung des Codes, welche die eigentliche Programmstruktur verschleiert: Der Debugger zwingt einem, der tatsächlichen Struktur des Programms zu folgen ‒ und nicht der Struktur, die man bloss davon angenommen hat.

Kann der Fehler auch mit dem Debugger nicht gefunden werden, sollte man eine Pause einlegen und sich mit etwas anderem beschäftigen. Die Lösung kann einem dann plötzlich einfallen.

Hat sich vielleicht etwas an der Umgebung geändert, wodurch der Fehler plötzlich aufgetreten ist? Tritt der Fehler auch in anderen Umgebungen auf? Ist vielleicht sogar der Compiler oder Interpreter des Programms fehlerhaft? Die Fehlersuche sollte niemals hier beginnen, kann aber in Ausnahmefällen hier enden! Memory-Leaks, nicht geschlossene File-Deskriptoren oder volle Partitionen können auch zu Fehlern führen.

## Nicht-reproduzierbare Fehler

Kann ein Fehler nicht zuvelässig reproduzierbar gemacht werden, kann dies ein Hinweis auf seine Ursache sein. Vielleicht wird die Programmausführung von Änderungen in der Umgebung beeinflusst.

Nicht initialisierte Variablen können zu eigenartigen Effekten führen. Verändert sich das Fehlerverhalten durch das Hinzufügen von Debugging-Anweisungen, kann der Fehler mit der Zuweisung von Arbeitsspeicher zusammenhängen. Funktioniert das Programm in einer Umgebung aber nicht in einer anderen, ist der Fehler eher in der Umgebung als am Programm zu suchen.

## Die Fehler Anderer

Oftmals ist man mit dem Debugging von Code beschäftigt, den andere Leute geschrieben haben. Hierbei gelten alle Regeln, die auch beim Debugging des eigenen Codes gelten. Hinzu kommt, dass man sich zuerst in die Struktur des Programms und in die Denkweise des anderen Programmierers einarbeiten muss.

Textsuchen und das Ausführen des Codes mit dem Debugger können dabei helfen die Struktur des Codes zu erkunden. Auch die Versionsgeschichte kann wertvolle Hinweise liefern: Werden ständig Änderungen an gleichen Codeabschnitten vorgenommen, deutet das darauf hin, dass hier viele Fehler auftauchen und das Problem schlecht verstanden worden ist.

Hat man keinen Zugriff auf den fehlerbehafteten Code, muss man das Auftauchen des Fehlers so gut wie möglich dokumentieren und zurückmelden. Gleichzeitig sollte man einen _Workaround_ finden, um das Problem vorerst vermeiden zu können. Bevor man einen Fehler zurückmeldet, sollte man sich vergewissern, dass es sich wirklich um einen Fehler handelt, damit man nicht die Zeit des anderen Programmierers verschwendet.

Wurde der gleiche Fehler vielleicht schon einmal gemeldet? Gibt es vielleicht schon eine neuere Version, bei welcher der Fehler bereits behoben worden ist?  Meldet man einen Fehler, sollte man dessen Reproduzierbarkeit anhand eines möglichst minimalen Beispiels demonstrieren.  Zusatzinformationen zur Umgebung (Betriebssystem, Versionen) sind auch hilfreich.

## Fragen

1. Wozu verleiten Debugger?
2. Warum sollte man den Code zuerst lesen bevor man Korrekturen daran ausprobiert?
3. Wie lässt sich eine _binäre Suche_ auf Testdaten und Programmcode anwenden?
4. Welcher Vorteil hat die Ausführung mit dem Debugger gegenüber dem reinen Durchlesen des Codes?
5. Worauf können häufige Änderungen am selben Codeabschnitt hinweisen?
