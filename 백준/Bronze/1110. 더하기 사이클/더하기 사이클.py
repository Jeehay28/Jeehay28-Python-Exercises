num=int(input())
new=num
count=0


while True :
    new=(new%10)*10 + ((new//10) + (new%10))%10
    count+=1
    
    if (new==num) :
        break

print (count)