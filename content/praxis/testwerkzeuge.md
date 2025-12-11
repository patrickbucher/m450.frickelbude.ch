+++
date = '2025-12-07T16:14:08+01:00'
title = 'Testwerkzeuge'
weight = 9
+++

Für den Systemtest kommen oft spezielle Testwerkzeuge zum Einsatz, deren Einsatz mithilfe von Skripts automatisiert wird. Dabei werden Testwerkzeuge nicht nur aufgerufen, sondern auch deren Ergebnis überprüft. Kommen zum Testen von REST-APIs oft `curl` und `jq` zum Einsatz, lassen sich textuelle Ausgaben sehr einfach mit `awk` auswerten und überprüfen.

Diese Seite bietet eine kurze und pragmatische Einführung in verschiedene Testwerkzeuge, womit sich einfache Systemtests mit wenig Aufwand aber effektiv automatisieren lassen:

- [curl](#curl)
- [jq](#jq)
- [Bash](#bash)
- [AWK](#awk)

## curl

Das Kommandozeilenprogramm `curl` kann u.a. HTTP-Anfragen an Server stellen, womit sich auch eine REST-API testen lässt. Die folgenden Beispiele gehen davon aus, dass auf `localhost` auf Port `8000` eine REST-API läuft.

Ein `GET`-Request lässt sich anhand einer URL stellen:

```plain
curl http://localhost:8080/path/to/resource
```

Eine von `GET` abweichende HTTP-Methode lässt sich mit dem Parameter `-X` definieren. Bei `POST`-Anfragen wird jeweils ein Payload mit einem entsprechenden `Content-Type` als Header mitgegeben:

```plain
curl -X POST -H 'Content-Type: application/json' -d @payload.json http://localhost:8080/path/to/resource
```

Das `@` vor dem Dateinamen gibt an, dass der _Inhalt_ der Datei (und nicht deren Namen) dem Request mitgeschickt werden soll.

Bietet der Server _Basic Authentication_ an, können Benutzername und Passwort bequem über die Syntax `username:password` mitgegeben werden:

```plain
curl -X PUT -u john-doe:topsecret http://localhost:8080/path/to/resource
```

Bietet der Server die Antwort in verschiedenen Formaten an, kann das gewünschte Format über den `Accept`-Header gewählt werden:

```plain
curl -H 'Accept: application/json' http://localhost:8080/path/to/resource
```

Die [umfassende Dokumentation](https://curl.se/docs/) enthält viele weitere nüzliche Informationen zum Umgang mit `curl`.

## jq

Das Werkzeug [`jq`](https://jqlang.org/) erlaubt es, Daten aus JSON-Datenstrukturen zu extrahieren. Es wird oft im Zusammenhang mit `curl` verwendet, wenn die HTTP-Anfrage JSON zurückliefert.

Unter Windows lässt sich `jq` am einfachsten per Winget installieren:

```plain
winget install jqlang.jq
```

Die einfachste Verwendung ist die formatierte Ausgabe von JSON:

```plain
curl -H 'Accept: applicaton/json' http://localhost:8000/path/to/resource | jq
```

Mit der Syntax `.field` kann ein bestimmtes Feld aus einem JSON-Objekt extrahiert werden:

```plain
$ echo '{ "firstName": "Joe", "lastName": "Doe", "age": 37 }' | jq '.firstName'
"Joe"
```

Mit dem Parameter `-r` werden keine umschliessenden `"` ausgegeben:

```plain
$ echo '{ "firstName": "Joe", "lastName": "Doe", "age": 37 }' | jq -r '.firstName'
Joe
```

Mit der Syntax `.[]` werden die Elemente aus einem Array herausgelöst:

```plain
$ echo '[{"x":1,"y":2},{"x":3,"y":4}]' | jq '.[]'
{
  "x": 1,
  "y": 2
}
{
  "x": 3,
  "y": 4
}
```

Auf die einzelnen Elemente kann dann wiederum mit der Syntax `.field` zugegriffen werden:

```plain
$ echo '[{"x":1,"y":2},{"x":3,"y":4}]' | jq '.[].x'
1
3
```

Das [jq Manual](https://jqlang.org/manual/) beschreibt viele weitere nützliche Techniken im Umgang mit JSON-Datenstrukturen.

## Bash

Die folgenden "Rezepte" funktionieren für Bash (wie z.B. für die [Git-Bash](https://git-scm.com/download/win)).

### Here Documents

Mit einem _Here Document_ kann man Testdaten zur Ausgabe in eine Datei (`test-file.txt`) direkt in einem Skript definieren:

```bash
cat << EOF > test-file.txt
1
2
3
EOF
```

Das obige Skript liest die folgenden Zeilen bis zu EOF ein und schreibt sie mithilfe von `cat` in die Datei `test-file.txt`.

### Subshells

Mit `$([command])` wird der Befehl `[command]` in einer Unter-Shell (Subshell) ausgeführt. Die Ausgabe dieses Befehls kann folgendermassen in einer Variablen festgehalten werden:

```bash
lines="$(cat file.txt)"
```

Die Variable `lines` enthält anschliessend die Zeilen aus der Datei `file.txt`.

### `if` und `else`

Mithilfe von `if` und `else` kann auf die Auswertung von Bedingungen reagiert werden:

```bash
if [ $actual = $expected ]
then
    echo "equal"
else
    echo "not equal"
fi
```

Das obige Skript prüft, ob die Variablen `$actual` und `$expected` den gleichen String-Wert haben. Trifft dies zu, wird `equal` ausgegeben, sonst `not equal`.

Zahlen können folgendermassen verglichen werden:

```bash
if [ $actual -eq $expected ]
then
    echo "equal"
else
    echo "not equal"
fi
```

Die Bedingung kann mit dem Not-Operator `!` negiert werden:

```bash
if ! [ $actual -eq $expected ]
then
    echo "not equal"
else
    echo "equal"
fi
```

### Exit Codes

Ein _Exit Code_ gibt zurück, ob ein Unterprogramm erfolgreich ausgeführt worden (`0`) oder gescheitert ist (Wert ungleich `0`). Der Exit Code wird in der Variablen `$?` automatisch festgehalten:

```plain
$ ls file-that-exists.txt
file-that-exists.txt

$ echo $?
0

$ ls missing-file.txt
ls: cannot access 'missing-file.txt': No such file or directory

$ echo $?
2
```

Aus einem eigenen Skript kann man den Exit Code mit dem Befehl `exit` zurückgeben:

```bash
if ! [ $result = $expected ]
then
    exit 1
fi
```

### Zufallszahlen generieren

Die Variable `$RANDOM` erhält bei jeder Verwendung einen anderen ganzzahligen Wert:

```plain
$ echo $RANDOM
2021

$ echo $RANDOM
2989

$ echo $RANDOM
11550
```

Zufallszahlen können folgendermassen in eine Datei (`random-numbers.txt`) geschrieben werden:

```bash
echo $RANDOM > random-numbers.txt
echo $RANDOM >> random-numbers.txt
echo $RANDOM >> random-numbers.txt
```

Die erste Zeile überschreibt die Datei `random-numbers.txt` (Operator `>`); jede weitere Zeile hängt der Datei eine weitere Zufallszahl an (Operator `>>`).

### Schleifen

Eine Schleife von `1` bis (inklusive) `10` kann folgendermassen formuliert werden:

```bash
for i in {1..10}
do
    echo $i
done
```

Möchte man dynamische Ober- und/oder Untergrenzen verwenden, kann der `seq`-Befehl verwendet werden:

```bash
for i in $(seq 1 $n)
do
    echo $i
done
```

In obiger Schleife wird von `1` bis auf `$n` gezählt.

### Berechnungen

Mathematische Berechnungen von Ganzzahlen können innerhalb von `$(( ... ))` angestellt werden:

```bash
remainder=$(( $RANDOM % 10 ))  # modulo: compute random value in range 0..9
middle=$(( $n / 2 ))           # division: divide $n by two
```

Für Fliesskommazahlen muss ein Hilfswerkzeug wie `awk` verwendet werden:

```bash
$ n=3
$ echo $n | awk "END { print $n / 2 }"
1.5
```

### Pipelines

Die Ausgabe von einem Befehl wird zur Eingabe eines weiteren Befehls, indem man diese mit einer Pipe `|` zusammenhängt:

```bash
sort names.txt | uniq | wc -l
```

Im obigen Beispiel werden zuerst die Werte in `names.txt` (aufsteigend) sortiert, dann an `uniq` weitergeleitet, welches aufeinanderfolgende Duplikate entfernt. Schliesslich werden die Zeilen mit `wc -l` gezählt. (Das Ergebnis der Pipeline ist die Anzahl verschiedener Namen in der Datei `names.txt`.)

### Formatierte Ausgaben

Formatierte Ausgaben können mit `printf` bewerkstelligt werden:

```plain
$ printf "%.2f\n" 1.23456
1.23
```

### Traps

Mit einer sogenannten _Trap_ (Falle) kann in einem Skript auf Signale reagiert werden, z.B. auf `EXIT` (beim Beenden des Skripts) oder auf `SIGINT` (bei einem Interrupt mit `Ctrl-C`). Traps werden oftmals verwendet, um Aufräumarbeiten vor dem Verlassen des Skripts zu erledigen. Die Syntax lautet folgendermassen:

```bash
trap [command] [signal]
```

Erhält das Skript das Signal `[signal]`, wird der Befehl `[command]` ausgeführt.  Bei diesem Beispiel werden alle Dateien bei der Beendigung des Skripts mit der Endung `.tmp` gelöscht:

```bash
trap "rm -f *.tmp" EXIT
```

Traps haben gegenüber normalen Befehlen den Vorteil, dass der Befehl erst zu einem späteren Zeitpunkt ausgeführt wird, unabhängig davon, welche Verzweigungen das Programm noch nehmen wird.

### Logische Operatoren

Mithilfe der logischen Operatoren `&&` (und) bzw. `||` (oder) können mehrere Programmaufrufe miteinander verknüpft werden:

```bash
foo && bar
```

Die Variable `$?` erhält den Wert `0`, wenn _beide_ Programme `foo` und `bar` erfolgreich ausgeführt worden sind. Scheitert `foo`, wird `bar` nicht ausgeführt; `$?` hat den Exit-Code von `foo`.

```bash
qux || baz
```

Die Variable `$?` erhält den Wert `0`, wenn mindestens eines der Programme `qux` oder `baz` erfolgreich ausgeführt worden ist. Scheitert `qux`, wird `baz` ausgeführt; `$?` hat den Exit-Code von `baz`.

## AWK

AWK ist eine schlanke Programmiersprache zum Verarbeiten tabularer Daten (sprich Dateien, die in Zeilen und Spalten aufgeteilt sind). Das AWK-Skript `foo.awk` kann folgendermassen auf die Datei `numbers.txt` angewendet werden:

```plain
$ awk -f foo.awk numbers.txt
```

### Aufbau eines Skripts

Ein AWK-Skript besteht grundsätzlich aus den folgenden Bereichen:

```awk
BEGIN {
    # this code will be executed before the first line is processed    
}

{
    # this code will be executed for every line
}

END {
    # this code will be executed after the laste line was processed    
}
```

Im `BEGIN`-Teil können beispielsweise Variablen initialisiert werden. Im mittleren Block werden dann die einzelnen Zeilen (und Spalten) verarbeitet. Im `END`-Teil können dann beispielsweise die Ergebnisse der Berechnungen ausgegeben werden. (Die Zeilen könnten weiter nach Mustern gefiltert werden, was für unsere Testfälle nicht nötig ist.)

### Zugriff auf Zeilen und Spalten

Die aktuelle Zeile ist unter der automatisch generierten Variable `$0` zugreifbar. Die einzelnen Spalten werden in Variablen `$1`, `$2` usw.  geschrieben. (Für unsere Zwecke genügt eine Spalte, d.h. die Variable `$1`.)

Die Anzahl Spalten der jeweiligen Zeile ist unter der Variablen `NF` verfügbar (_number of fields_).

Die aktuelle Zeilennummer ist unter der Variablen `NR` verfügbar (_number of records_). Im `END`-Block ist das die Anzahl der Zeilen in der Datei.

### Beispiel: Zahlen aufsummieren

Das folgende Skript (`sum.awk`) summiert alle Zahlen in einer Datei auf und gibt die Summe aus:

```awk
BEGIN { }

{
    sum += $1
}

END {
    print sum
}
```

Die Zahl `numbers.txt` hat folgenden Inhalt:

```plain
1
2
3
```

Das Skript wird folgendermassen ausgeführt:

```plain
$ awk -f sum.awk numbers.txt
6
```

### Arrays

Das folgende Skript (`sum-positive.awk`) sammelt alle positiven Zahlen in einer Datei und berechnet deren Summe:

```awk
BEGIN {
    i = 0
}

{
    if ($1 > 0) {
        numbers[i++] = $1
    }
}

END {
    sum = 0
    for (i in numbers) {
        sum += numbers[i]
    }
    print sum
}
```

Die Variable `numbers` ist ein Array mit `0`-basiertem Index. (Die Initialisierung von `i = 0` im `BEGIN`-Block ist dabei optional.)

### Assoziative Arrays

Das folgende Programm (`occurrences.awk`) verwendet ein assoziatives Array (Map, Dictionary) um die Anzahl Vorkommnisse eines Wertes zu zählen:

```awk
BEGIN { }

{
    occurrences[$1]++
}

END {
    for (key in occurrences) {
        printf "%s\texists %d times\n", key, occurrences[key]
    }
}
```

Angenommen `names.txt` hat folgenden Inhalt:

```plain
Alice
Bob
Joe
Bob
Joe
Alice
Bob
Dan
Alice
```

Würde das Programm folgendermassen funktionieren:

```plain
$ awk -f occurrences.awk names.txt
Dan     exists 1 times
Bob     exists 3 times
Joe     exists 2 times
Alice   exists 3 times
```

Die Ausgabe könnte folgendermassen absteigend (`-r`) numerisch (`-n`) nach der dritten Spalte (`-k 3`) sortiert werden, d.h. als Rangliste:

```plain
$ awk -f occurrences.awk names.txt | sort -r -n -k 3
Bob     exists 3 times
Alice   exists 3 times
Joe     exists 2 times
Dan     exists 1 times
```
