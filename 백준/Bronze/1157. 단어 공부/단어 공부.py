import string
alphabet_string = string.ascii_uppercase
alphabet_list = list(alphabet_string)

t=list(input().upper())
t_cnt=[]

for i in alphabet_list:
  x=t.count(i)
  t_cnt.append(x)

m=max(t_cnt)

if t_cnt.count(m)==1:
  l=t_cnt.index(m)
  print(alphabet_list[l])
else:
  print('?')