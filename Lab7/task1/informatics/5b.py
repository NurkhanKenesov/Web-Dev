def power(a,k):
    ans = 1
    while k:
        ans *= a
        k-=1
    return ans

a,k = map(int, input().split())
print(power(a,k))