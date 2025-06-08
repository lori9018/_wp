#計算平均值
#寫一個函數 average(nums)，輸入一個整數 list，回傳平均值（小數點取到一位）。

def average(nums):
    if not nums:  # 檢查列表是否為空
        return None  # 或 raise ValueError("List is empty")
    avg = sum(nums) / len(nums)
    return round(avg, 1)

nums = [3, 5, 2, 9, 1]
print(average(nums))  # 輸出: 4.0
