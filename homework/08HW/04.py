#數字轉星號圖形
#寫一個函數 print_stars(n)，輸入一個整數 n，印出 n 行的星號圖形，每行 i 顆星。
#範例：
#*
#**
#***

def print_stars(n):
    for i in range(1, n+1):
        print('*' * i)

print_stars(3)