+++
date = '2025-08-17T17:32:51+02:00'
title = 'Planung'
weight = 2
+++

## Unterrichtszeiten

- INA23a (Freitagvormittag): 09:55-11:25 Uhr (ohne 5-Minuten-Pause)
- INA23b (Montagmittag): 11:35-13:05 Uhr (ohne 5-Minuten-Pause)

## Lesepensum

Die Webseiten-Teile [Theorie](/theorie) und [Praxis](/praxis), in welchen der Unterrichtsstoff vermittelt wird (siehe [Repository](https://github.com/patrickbucher/m450.frickelbude.ch/tree/master/content)), umfassen folgende Textmenge in Wörtern.

    $ wc -w content/theorie/*.md | tail -1
    8175 total
    $ wc -w content/praxis/*.md | tail -1
    16404 total

In der Summe ergibt dies **24'579 Wörter** (bzw. "Wörter", da Tokens von Codebeispielen auch als Wörter gezählt werden).

Die Lesegeschwindigkeit eines durchschnittlichen Lesers beträgt [gemäss Wikipedia](https://de.wikipedia.org/wiki/Lesegeschwindigkeit#Lesen_von_Texten) ca. **200**-240 Wörter pro Minute:

```math
$$ \frac{24579}{200} = 122.895 $$
```

Die Informationen können also innerhalb von ca. **123 Minuten** einmal aufgenommen werden. Verteilt auf 16 Unterrichtsblöcke (19 Semesterwochen ohne Prüfungen und Lektionsausfall) ergibt dies:

```math
$$ \frac{122.895}{16} = 7.68 $$
```

Pro Doppellektion beträgt die reine Lesezeit somit knapp **8 Minuten**. Für eine vertiefte, mehrmalige Lektüre sollten **20-25 Minuten** Lesezeit pro Doppellektion die Obergrenze sein.
