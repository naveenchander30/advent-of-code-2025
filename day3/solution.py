with open("input.txt", "r") as f:
    banks = f.read().strip().split("\n")

total = 0
for bank in banks:
    length = len(bank)
    max_val = 0
    max_left = 0
    for i in range(length - 1):
        if int(bank[i]) > max_left:
            max_right = 0
            max_left = int(bank[i])
            for j in range(i + 1, length):
                if int(bank[j]) > max_right:
                    max_right = int(bank[j])
            if max_left * 10 + max_right > max_val:
                max_val = max_left * 10 + max_right
    total += max_val

print(total)
