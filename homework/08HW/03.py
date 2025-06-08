#寫一個函數 classify_even_odd(numbers)，將一組整數 list 中的數字分成奇數與偶數，回傳字典：

#{
#  'even': [...],
#  'odd': [...]
#  }

def classify_even_odd(numbers):
    result = {'even': [], 'odd': []}
    for num in numbers:
        if num % 2 == 0:
            result['even'].append(num)
        else:
            result['odd'].append(num)
    return result

nums = [1, 2, 3, 4, 5, 6]
print(classify_even_odd(nums))

