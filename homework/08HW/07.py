#字典轉換為字串
#寫一個函數 dict_to_string(d)，將字典轉換為類似：

#{'a': 1, 'b': 2} -> "a:1, b:2"

def dict_to_string(d):
    return ', '.join(f"{k}:{v}" for k, v in d.items())

d = {'a': 1, 'b': 2}
print(dict_to_string(d))
# 輸出: a:1, b:2
