n1, n2 = input().split()

r_n1=n1[2]+n1[1]+n1[0]
r_n1

r_n2=n2[2]+n2[1]+n2[0]
r_n2

if int(r_n1)>int(r_n2):
  print(int(r_n1))
else:
  print(int(r_n2))