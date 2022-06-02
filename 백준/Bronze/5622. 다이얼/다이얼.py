Alphabet=['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'XYWZ']
t=input()

cnt=0
for i in range(len(t)): # t의 갯수
    for j in Alphabet:  # 알파벳
        if t[i] in j:   # t의 첫번째 글자가 J의 첫번째 원소
            cnt+=Alphabet.index(j)+3
print(cnt)