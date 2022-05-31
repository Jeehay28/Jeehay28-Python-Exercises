def h(N):
  
  cnt=0
  for i in range(1, N+1):
    if i>=1 and i<100:
      cnt+=1
    
    elif i>=100 and i<=1000:
      a1=i//100
      a2=(i-(a1*100))//10
      a3=(i-(a1*100))%10
      s1=a1-a2
      s2=a2-a3
      if s1==s2:
        cnt+=1

  return cnt

N=int(input())
print(h(N))