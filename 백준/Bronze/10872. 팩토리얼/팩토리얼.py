N = int(input())

result = 1
if N <= 1 :
    print(result)

else : 
    for i in range(1, N+1) :
        result *= i
    print(result)