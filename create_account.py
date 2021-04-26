import pandas as pd
import os

if os.path.isfile('accounts.csv'):
    df = pd.read_csv('accounts.csv')
else:
    df = pd.DataFrame(columns = ['Username', 'Password'])

username = input('Enter a usernmame: ')
password = input('Enter a password: ')
dict1 = {'Username': username, 'Password': password}
df1 = pd.DataFrame(data=dict1, index=range(1))
df = df.append(df1, verify_integrity=True, ignore_index=True)
df = df.filter(items=['Username','Password'])

print(df)

df.to_csv(r'.\accounts.csv', columns=['Username','Password'])
