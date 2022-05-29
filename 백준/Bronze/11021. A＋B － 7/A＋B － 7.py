T=int(input())
cnt=0
for i in range(T):
  A,B=map(int, input().split())
  cnt+=1
  print(f'Case #{cnt}: {A+B}')