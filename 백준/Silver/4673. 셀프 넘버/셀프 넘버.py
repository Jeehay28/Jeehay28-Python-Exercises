def d(n):

  s=0
  if n>=1 and n<10:
    s=2*n

  elif n>=10 and n<100:
    s=n + n//10 + n%10
  
  elif n>=100 and n<1000:
    a1=n//100
    a2=(n-(a1*100))//10
    a3=(n-(a1*100))%10
    s=n+a1+a2+a3

  elif n>=1000 and n<10000:
    b1=n//1000 
    b2=(n-(b1*1000))//100
    b3=(n-(b1*1000)-(b2*100))//10
    b4=(n-b1*1000-b2*100)%10
    s=n+b1+b2+b3+b4
  
  elif n==10000:
    s=n+1
  
  return s

l=[]
j=[]
for i in range(1, 10001):
  l.append(d(i))
  j.append(i)

for k in j:
  if (k in l)==False:
    print (k) 
