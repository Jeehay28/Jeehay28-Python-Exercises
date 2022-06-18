N = int(input())
A = []

for i in range(1668) :
    for j in range(1001) :
        sub = 3*i + 5*j
        if N == sub :
            sub1 = i + j
            A.append(sub1)

if len(A) == 0 :
    print(-1)

else : 
    print(min(A))    