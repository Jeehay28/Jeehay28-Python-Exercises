a,b = input().split()
a=int(a)
b=int(b)
if a>b:
    size='>'
elif a<b:
    size='<'
elif a==b:
    size='=='
print(size)