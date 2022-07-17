N = int(input())
P = 2

while N != 1 :
    if N % P == 0 :
        print(P)
        N = N // P
    else :
        P += 1