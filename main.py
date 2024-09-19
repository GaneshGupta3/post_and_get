# Trifid Cipher implementation in Python with Menu and Key
# Function to generate a key-based alphabet grid 3x3x3
def generate_keyed_alphabet(key):
    key = ''.join(dict.fromkeys(key.upper())) 
    key = ''.join(c for c in key if c.isalpha())  
    all_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    remaining_letters = ''.join(c for c in all_letters if c not in key)
    final_key = key + remaining_letters
    return [final_key[i:i + 3] for i in range(0, 27, 3)]#i starts from 0 and increments by 3 until >=27
def get_keyed_alphabet(key):
    return generate_keyed_alphabet(key)
# Function to get coordinates of a letter
def get_coordinates(letter, keyed_alphabet):
    for i, row in enumerate(keyed_alphabet):#i = index of the row and the row is the actual content of that row
        if letter in row:
            row_num, col_num = divmod(i, 3)
            return (row_num + 1, col_num + 1, row.index(letter) + 1)
    return None
# Function to get letter from coordinates
def get_letter(coords, keyed_alphabet):
    row, col, depth = coords
    index = (row - 1) * 3 + (col - 1)
    return keyed_alphabet[index][depth - 1]
# Encryption function
def trifid_encrypt(plaintext, key, group_size=5):
    keyed_alphabet = get_keyed_alphabet(key)
    plaintext = plaintext.replace(" ", "").upper()
    coordinates = [get_coordinates(char, keyed_alphabet) for char in plaintext]
    x, y, z = [], [], []
    for coord in coordinates:
        x.append(coord[0])
        y.append(coord[1])
        z.append(coord[2])
    combined = x + y + z
    ciphertext = ''
    for i in range(0, len(combined), group_size * 3):
        group = combined[i:i + group_size * 3]
        for j in range(0, len(group), 3):
            coords = (group[j], group[j + 1], group[j + 2])
            ciphertext += get_letter(coords, keyed_alphabet)  
    return ciphertext
# Decryption function
def trifid_decrypt(ciphertext, key, group_size=5):
    keyed_alphabet = get_keyed_alphabet(key)
    ciphertext = ciphertext.replace(" ", "").upper()
    coordinates = [get_coordinates(char, keyed_alphabet) for char in ciphertext]
    x, y, z = [], [], []
    combined = []
    for coord in coordinates:
        combined.extend(coord)
    split_len = len(combined) // 3
    x = combined[:split_len]
    y = combined[split_len:2 * split_len]
    z = combined[2 * split_len:]
    decrypted_text = ''
    for i in range(len(x)):
        coords = (x[i], y[i], z[i])
        decrypted_text += get_letter(coords, keyed_alphabet)
    return decrypted_text
# Menu-driven interface
def menu():
    while True:
        print("\nTrifid Cipher Menu")
        print("1. Encrypt")
        print("2. Decrypt")
        print("3. Exit")
        choice = input("Choose an option: ")
        if choice == '1':
            key = input("Enter the key: ")
            plaintext = input("Enter plaintext to encrypt: ").upper()
            ciphertext = trifid_encrypt(plaintext, key)
            print(f"Encrypted ciphertext: {ciphertext}")
        elif choice == '2':
            key = input("Enter the key: ")
            ciphertext = input("Enter ciphertext to decrypt: ").upper()
            decrypted_text = trifid_decrypt(ciphertext, key)
            print(f"Decrypted plaintext: {decrypted_text}")

        elif choice == '3':
            print("Exiting...")
            break

        else:
            print("Invalid choice. Please select 1, 2, or 3.")
# Run the menu
menu()