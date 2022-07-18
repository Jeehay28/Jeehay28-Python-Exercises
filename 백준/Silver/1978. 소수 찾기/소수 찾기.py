N = int(input())

lst = []
lst = map(int, input().split())

prime = []         
for i in lst :
    if i > 1 :
        for j in range(2, i) :
            if (i % j) == 0 :
                break
        else :
            prime.append(i)

print(len(prime))