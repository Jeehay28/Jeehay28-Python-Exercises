A, B, V = input().split()
A = int(A)
B = int(B)
V = int(V)
day = int((V - B) / (A - B))
height = day * (A- B) + B

if height < V :
    print(day + 1)
else : 
    print(day)