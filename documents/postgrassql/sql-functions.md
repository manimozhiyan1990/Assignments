# SQL Functions

## 1. Numerical Functions

These functions are used to perform **math operations on numbers**.

### Common Numerical Functions
- **ABS()**
  - Returns positive value (removes negative sign)
  - Example:
    ```sql
    SELECT ABS(-10); -- Output: 10
    ```
- **CEIL() / CEILING()**
  - Rounds number **up**
  - Example:
    ```sql
    SELECT CEIL(10.2); -- Output: 11
    ```
- **FLOOR()**
  - Rounds number **down**
  - Example:
    ```sql
    SELECT FLOOR(10.9); -- Output: 10
    ```
- **ROUND()**
  - Rounds to nearest value
  - Example:
    ```sql
    SELECT ROUND(10.5); -- Output: 11
    ```

- **POWER()**
  - Returns power of number
  - Example:
    ```sql
    SELECT POWER(2, 3); -- Output: 8
    ```

- **SQRT()**
  - Square root of number
  - Example:
    ```sql
    SELECT SQRT(16); -- Output: 4
    ```

---

## 2. String Functions

These functions are used to work with **text (characters)**.

### Common String Functions

- **LENGTH()**
  - Returns number of characters
  - Example:
    ```sql
    SELECT LENGTH('Hello'); -- Output: 5
    ```

- **UPPER()**
  - Converts text to uppercase
  - Example:
    ```sql
    SELECT UPPER('hello'); -- Output: HELLO
    ```

- **LOWER()**
  - Converts text to lowercase
  - Example:
    ```sql
    SELECT LOWER('HELLO'); -- Output: hello
    ```

- **TRIM()**
  - Removes spaces from beginning and end
  - Example:
    ```sql
    SELECT TRIM('  hello  '); -- Output: hello
    ```

- **CONCAT()**
  - Joins two strings
  - Example:
    ```sql
    SELECT CONCAT('Hello', ' World'); -- Output: Hello World
    ```

- **SUBSTRING()**
  - Extracts part of a string
  SUBSTRING(text, start, length)
  - Example:
    ```sql
    SELECT SUBSTRING('Hello', 1, 3); -- Output: Hel
    ```

---

## Simple Understanding

- **Numerical Functions** → Work with numbers  
- **String Functions** → Work with text  
