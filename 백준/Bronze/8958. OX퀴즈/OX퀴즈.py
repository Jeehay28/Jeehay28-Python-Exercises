N=int(input())

for i in range(N):
    x=list(input())
    num=0
    result=0
    
    for j in x:
        if j=='O':
            num+=1
            result+=num
        else:
            num=0
    print(result)