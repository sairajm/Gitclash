

def calculate_score(arr[[]], total_users):
    arr = [[7, 7, 6, 3], [3, 2, 7, 5], [7, 5, 2, 4]]
    users = []
    N=total_users 
    for i in range(N):
        users.append(0)
   
    #for self-bet score calculation
    for i in range(N):
        if arr[i][i] > arr[i][N]:
            users[i] = users[i] + 0 #redudant code to be removed later
        else:
            #print "won self bet %d points to %d"%(arr[i][i], i)
            users[i] = users[i] + arr[i][i] 
    i=0 
    j=0
    index = 0
    #calculation of score for bets made against        
    for j in range(N):
        for i in range(N):
            if i != j:
                #won a bet
                if arr[j][i] == arr[j][N] or arr[j][i] < arr[j][N] :
                    #print "%d won bet against %d %d points to %d"%(j,i,arr[j][i], j)
                    users[j] = users[j] + arr[j][i]
                    index = 0
                #lost a bet and hence calculate who won that round    
                elif arr[j][i] > arr[j][N] and i!= index:
                    temp_arr = list(arr[j])
                    realized = temp_arr[N]
                    temp_arr.pop()
                    temp_arr[j] = 0
                    diff = 1000
                    index = 0
                    for k in range(len(temp_arr)):
                        if temp_arr[k] > 0:
                            diff1 = abs(realized - temp_arr[k])
                            if diff1 < diff or diff1 == diff :
                                diff = diff1
                                index = k
                    #print "%d lost bet %d points to %d"%(j,arr[j][index], index)            
                    users[index] = users[index] + arr[j][index]


                
        
    print "Scores %d, %d, %d"%(users[0],users[1],users[2])
