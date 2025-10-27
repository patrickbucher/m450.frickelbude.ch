+++
date = '2025-10-26T17:54:35+01:00'
title = 'Review'
weight = 8
+++

Der Programmcode des Spiels [Othello](/othello) soll einem Review unterzogen werden. Das Review verfolgt diese Ziele:

1. Es soll in der Klasse ein gemeinsames Verständnis für das Spiel (relevante Domäne) und für den Programmcode (zu prüfendes Artefakt) erarbeitet werden.
2. Unklarheiten am Programmcode sollen durch Fragen an den Autor und durch dessen Rückmeldungen geklärt werden.

Dadurch sollen die Lernenden das nötige Verständnis für die Weiterentwicklung und dynamische Tests des Spiels erlangen.

## Artefakte und zu prüfende Aspekte

Das Spiel besteht (neben einer HTML- und einer CSS-Datei) aus zwei JavaScript-Quellcodedateien, welche verschiedene Programmteile (Methoden bzw. Funktionen) enthalten. Diese sind in folgende neun Arbeitspakete (**A** bis **I**) unterteilt:

- `board.js`
    - **A** Konstanten `dimension, empty, one, two` und der `constructor`
    - **B** Methoden `of` und `copy`
    - **C** Methode `validMoves`
    - **D** Methode `play`
    - **E** Methode `result`
    - **F** Methode `adjacentOf`
    - **G** Methoden `fieldsWithState` und `opponent`
- `game.js`
    - **H** Funktion `render`
    - **I** Funktion `selectField`

Jedem Lernenden wird ein Arbeitspaket zum Review übergeben.

## Auftrag

1. [5 min.] Mache dich im Rahmen eines explorativen Tests mit der Spiellogik vertraut.
2. [15 min.] Bereite dich individuell auf das Review vor, indem du den Code deines zugewiesenen Arbeitspakets studierst. Orientiere dich an den folgenden Fragen:
    1. Was macht der Programmcode?
    2. Welchen Zweck erfüllt der Programmcode im Kontext des Spiels?
    3. Welche Aspekte des Codes verstehst du nicht?
3. [10 min.] Notiere deine Erkenntnisse und offenen Fragen, um sie im Rahmen einer Reviewsitzung vor der Klasse zu besprechen.

Tipp: Den Quellcode kannst du mithilfe der Tastenkombination `Ctrl`-`U` einsehen.
