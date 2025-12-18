#include <math.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

bool is_prime(int);
int *primes_up_to(int);
int *factorize(int);

int main(int argc, char *argv[])
{
    int lower = 0, upper = 0, i = 0, j = 0;

    if (argc < 3) {
        fprintf(stderr, "usage: %s [lower] [upper]\n", argv[0]);
        return 1;
    }

    lower = atoi(argv[1]);
    upper = atoi(argv[2]);
    if (lower > upper) {
        fprintf(stderr, "[lower] must be <= [upper], was %d > %d\n", lower,
                upper);
        return 1;
    }

    for (i = lower; i <= upper; i++) {
        printf("%d: ", i);
        int *factors = factorize(i);
        for (j = 0; factors[j] != 0; j++) {
            printf("%d ", factors[j]);
        }
        free(factors);
        putchar('\n');
    }

    return 0;
}

int *primes_up_to(int x)
{
    int i = 0, j = 0;
    int *primes = NULL;

    if (x < 2) {
        primes = (int *) malloc(sizeof(int));
        primes[0] = 0;
        return primes;
    }

    primes = (int *) malloc(sizeof(int) * x);
    memset(primes, 0, x);

    for (i = 2, j = 0; i <= x; i++) {
        if (is_prime(i)) {
            primes[j++] = i;
        }
    }

    return primes;
}

bool is_prime(int x)
{
    if (x < 2) {
        return false;
    }
    for (int i = 2; i <= x / 2; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

int *factorize(int x)
{
    int i = 0, j = 0, n = 0;
    int *primes = NULL, *factors = NULL;

    if (x < 1) {
        factors = (int *) malloc(sizeof(int));
        factors[0] = 0;
        return factors;
    }

    n = log2(x) + 1;            // heuristic: log2(16) = 4, fits "worst" case  [2, 2, 2, 2]
    primes = primes_up_to(sqrt(x));
    factors = (int *) malloc(sizeof(int) * (n + 1));
    memset(factors, 0, n + 1);

    for (i = 0, j = 0; primes[i] != 0 && x > 1;) {
        if (x % primes[i] == 0) {
            factors[j++] = primes[i];
            x /= primes[i];
        } else {
            i++;
        }
    }
    if (x > 1) {
        factors[j] = x;
    }
    free(primes);

    return factors;
}
