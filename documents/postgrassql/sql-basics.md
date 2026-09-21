#  SQL Learning Notes

##  What is a Database?
A database is a collection of data used to store, manage, and retrieve information easily.

##  What is RDBMS?
RDBMS (Relational Database Management System):
- Stores data in tables (rows & columns)
- Maintains relationships between tables

Examples:
- MySQL
- PostgreSQL
- Oracle

##  What is SQL?
SQL (Structured Query Language):
- Used to interact with databases

Main uses:
- Create data
- Read data
- Update data
- Delete data

---

## CRUD Operations

- CREATE → `INSERT`
- READ → `SELECT`
- UPDATE → `UPDATE`
- DELETE → `DELETE`

---

## Data Types in SQL

## Numeric Types
- INT → Whole numbers
- FLOAT → Decimal numbers
- DECIMAL → Precise decimal values

---

## Character Types
- CHAR(n) → Fixed length text
- VARCHAR(n) → Variable length text
- TEXT → Large text

---

### Boolean Type
- BOOLEAN → TRUE / FALSE

---

### Date & Time Types
- DATE → Stores date only
- TIME → Stores time only
- TIMESTAMP → Date + Time
- INTERVAL → Duration (difference)

---

## Operators in SQL

###  Arithmetic Operators
- + → Addition
- - → Subtraction
- * → Multiplication
- / → Division
- % → Modulus (remainder)

---

###  Comparison Operators
- = → Equal
- != → Not equal
- > → Greater than
- < → Less than
- >= → Greater than or equal
- <= → Less than or equal

---

###  Logical Operators
- AND → All conditions must be true
- OR → Any one condition true
- NOT → Opposite condition

---

###  Special Operators
- BETWEEN → Range check
- IN → Match multiple values
- LIKE → Pattern match (`%`, `_`)
- IS NULL → Check null values

---

##  Constraints in SQL

- NOT NULL → Cannot be empty
- UNIQUE → No duplicate values
- PRIMARY KEY → Unique + Not Null
- FOREIGN KEY → Link between tables
- CHECK → Condition validation
- DEFAULT → Default value

---

##  Default Functions in SQL

- COUNT() → Number of rows
- SUM() → Total value
- AVG() → Average value
- MAX() → Highest value
- MIN() → Lowest value

---

## Practice Flow

- Create DB
- Create Table
- Insert Data
- Read Data
- Update Data
- Delete Data