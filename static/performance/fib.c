#include <stdio.h>
#include <stdlib.h>

int fib(int);

int main(int argc, char *argv[])
{
    int n = atoi(argv[1]);
    int nth_fib = fib(n);
    printf("fib(%d)=%d\n", n, nth_fib);
    return 0;
}

int fib(int n)
{
    switch (n) {
    case 0:
        return 0;
    case 1:
        return 1;
    default:
        return fib(n - 2) + fib(n - 1);
    }
}