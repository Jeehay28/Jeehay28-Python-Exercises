N=int(input())
x=list(map(int, input().split()))
M=max(x)
sum=0

for i in x:
    y=i/M*100
    sum=sum+y

print(sum/N)