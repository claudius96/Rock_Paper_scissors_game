def is_aphabet(names):
    alpha = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')
    alpha = set(alpha)
    if isinstance(names, str):
        names = names.upper()
    names = list(names)
    for name in names:
        if name not in alpha:
            names.remove(name)
    return names

