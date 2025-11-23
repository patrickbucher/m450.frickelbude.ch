+++
date = '2025-11-23T07:00:11+01:00'
title = 'Codebeispiele'
weight = 7
+++

## Ein C-Programm

Hinweis: Wird es als `./prog 1 2 3 4 5` gestartet:

- hat `argc` den Wert 6,
- und `argv` ist das Array `{"./prog", "1", "2", "3", "4", "5"}`.

Die Funktion `atof` konvertiert eine Zeichenkette in eine Fliesskommazahl.

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    float sum = 0;
    for (int i = 1; i < argc; i++) {
        sum += atof(argv[i]);
    }
    printf("mean:\t%10.2f\n", sum / (argc - 1));
    if ((argc - 1) % 2 == 0) {
        float left = atof(argv[(argc - 1) / 2]);
        float right = atof(argv[(argc - 1) / 2 + 1]);
        printf("median:\t%10.2f\n", (left + right) / 2);
    } else {
        printf("median:\t%10.2f\n", atof(argv[(argc - 1) / 2 + 1]));
    }
    return 0;
}
```

### Fragen

1. Was macht das folgende Programm?
2. Wie viele Sachen macht das Programm?
3. Welche Teile des Programms sind wohl besonders fehleranfällig?
4. Wie liesse sich dieses Programm verbessern?