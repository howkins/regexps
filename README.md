# Basic regexps

### Email validation
```
regex.valid('email', 'example@email.com');
```

### Floating point number

```
regex.valid('float', '2.0');
```

### Integer number

```
regex.valid('integer', '250');
```

### Date

dd/mm/yyyy dd-mm-yyyy or dd.mm.yyyy
```
regex.valid('date', '01/01/2030');
```

Days of week
```
regex.valid('date', 'sun');
regex.valid('date', 'SUNDAY');
```

### Range 
```
regex.valid('date', '2', '0-100');
```
f
