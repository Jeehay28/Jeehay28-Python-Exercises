A = input()
B = input()
a=int(A[0])
b=int(A[1])
c=int(A[2])
d=int(B[0])
e=int(B[1])
f=int(B[2])

l1= ((f*c)*10**0+(f*b)*10**1+(f*a)*10**2)
l2= ((e*c)*10**1+(e*b)*10**2+(e*a)*10**3)
l3= ((d*c)*10**2+(d*b)*10**3+(d*a)*10**4)
l4= l1+l2+l3

print(l1)
print(l2//10*1)
print(l3//10**2)
print(l4)