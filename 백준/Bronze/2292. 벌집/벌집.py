N = int(input())

r = 1
cnt = 1
while N > r :
    r += 6*cnt
    cnt += 1
print(cnt)