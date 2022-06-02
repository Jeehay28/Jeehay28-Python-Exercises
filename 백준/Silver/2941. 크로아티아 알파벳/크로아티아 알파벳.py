croatia=['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
c_text=input()
cnt=0

for i in croatia:
    if i in c_text:
        x=c_text.count(i)
        cnt+=x
        c_text=c_text.replace(i,'*')

c_text=c_text.replace('*', '')
print(cnt + (len(c_text)))