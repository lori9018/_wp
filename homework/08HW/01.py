

def find_max(numbers):
    if not numbers:  # 檢查陣列是否為空
        return None  # 或者你可以選擇拋出例外
    max_value = numbers[0]
    for num in numbers:
        if num > max_value:
            max_value = num
    return max_value

nums = [3, 5, 2, 9, 1]
print(find_max(nums))  # 輸出: 9