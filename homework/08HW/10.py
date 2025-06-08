#統計學生總分與平均
#輸入一個學生資料的 list，每筆資料是字典，寫一個函數 summary(data)，印出每位學生的總分與平均。

#範例輸入：

#students = [
#    {'name': 'Alice', 'scores': [90, 80, 70]},
#    {'name': 'Bob', 'scores': [100, 85, 95]}
#]

def summary(data):
    for student in data:
        total = sum(student['scores'])
        average = total / len(student['scores']) if student['scores'] else 0
        print(f"{student['name']} 總分: {total}, 平均: {average:.1f}")

students = [
    {'name': 'Alice', 'scores': [90, 80, 70]},
    {'name': 'Bob', 'scores': [100, 85, 95]}
]
summary(students)
