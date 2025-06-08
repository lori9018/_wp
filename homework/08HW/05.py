#英文成績轉等第
#寫一個函數 grade(score)，根據分數輸出等第：

#90~100: A
#80~89: B
#70~79: C
#60~69: D
#0~59: F

def grade(score):
    if 90 <= score <= 100:
        return 'A'
    elif 80 <= score <= 89:
        return 'B'
    elif 70 <= score <= 79:
        return 'C'
    elif 60 <= score <= 69:
        return 'D'
    elif 0 <= score <= 59:
        return 'F'
    else:
        return 'Invalid score'

print(grade(85))  
print(grade(72))  
print(grade(101)) 
