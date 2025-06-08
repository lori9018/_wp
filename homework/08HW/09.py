#找出 list 中出現次數最多的數字
#寫一個函數 most_common(nums)，輸入一個整數 list，找出其中出現次數最多的數字（可用字典記錄出現次數）。

def most_common(nums):
    count = {}
    for num in nums:
        if num in count:
            count[num] += 1
        else:
         count[num] = 1
    max_num = max(count, key=count.get)
    return max_num

nums = [1, 2, 2, 3, 3, 3, 4]
print(most_common(nums))
