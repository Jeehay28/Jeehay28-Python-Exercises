T = int(input())

for test in range(T) :
    k = int(input()) # floor
    n = int(input()) # door number
    
    # create 2-dimensional arrays : rows(floor), columns(door number)
    rows, cols = (k+1, n)
    arr = [[0]*cols]*rows

    # 0th floor
    sub0 = 0
    for i in range(n) : 
        sub0 += 1
        arr[0][i] = sub0

    # 1st~nth floor
    for f in range(1, k+1) :
        sub = 0
        for r in range(n) :
            sub += arr[f-1][r]
            arr[f][r] = sub
        
    print(arr[k][n-1])
