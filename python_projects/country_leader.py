
"""
Google competition on kickstart 

finding who has the largest latest in the alphabet

"""
from spitting_creating_list import strip_split_word
from alphabet_or_not import is_aphabet
from converting import convert_list_to_string


names_of_people = {}

T = int(input("Number of test cases to be carried ")) #number of test cases
if T > 0:
    for test in range(1, T+1):
        print(f'Test case number {test}')
        N = int(input("enter number of people in country: "))#number of people in the country
        if N > 0:
            number_of_letters = 0
            for person_number in range(1, N+1):
                original_name = input()
                name_of_person = strip_split_word(original_name)
                name_of_person = is_aphabet(name_of_person)
                 
                if number_of_letters < len(name_of_person):
                    number_of_letters = len(name_of_person)
                    names_of_people.clear()
                    name_of_person = convert_list_to_string(name_of_person)
                    names_of_people[original_name] = number_of_letters

                elif number_of_letters == len(name_of_person):
                    continue
                else:
                     continue
        for keys, values in names_of_people.items():
            print(f'{keys} with {values} won')

else:
    print("Error Test case isn't greater that 0 ")

