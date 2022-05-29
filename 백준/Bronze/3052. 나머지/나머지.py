l=[]
for i in range(10):
  n=int(input())
  l.append(n%42)

s=set(l)

print(len(s))