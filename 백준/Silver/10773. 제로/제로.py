# 정수 K를 입력 받는다
k = int(input())

# k갯수만큼 정수를 입력받는다.
lst = []
for i in range(k) :
    a = int(input())
    if a == 0 :
        lst.pop()
    else :
        lst.append(a)

# 최종 남은 숫자의 합을 구한다.    
print(sum(lst)) 