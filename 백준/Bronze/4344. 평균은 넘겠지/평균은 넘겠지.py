from statistics import mean

C=int(input())

for i in range(C):
    L=list(map(int, input().split()))
    n=L[0]
    del L[0]
    m=mean(L)
    
    cnt=0
    for j in L:
        if j>m:
            cnt+=1
    
    r=(cnt/n)*100                  
    print('%0.3f'%r+'%')