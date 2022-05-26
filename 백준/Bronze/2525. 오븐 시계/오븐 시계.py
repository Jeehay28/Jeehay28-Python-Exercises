A, B = map(int, input().split())
C=int(input())

h=A+C//60
m=B+C%60

if m>=60:
  m-=60
  h+=1
if h>=24:
  h-=24

print(h,m)