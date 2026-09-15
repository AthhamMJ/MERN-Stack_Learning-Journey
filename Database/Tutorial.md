# MongoDB Complete Tutorial

A practical MongoDB and `mongosh` tutorial covering databases, collections, CRUD operations, queries, operators, updates, deletes, sorting, limiting, indexing, and aggregation.

---

# 1. Create / Switch to a Database

MongoDB creates the database when you first store data in it.

```javascript
use <databaseName>
```

### Example

```javascript
use student
```

Check the current database:

```javascript
db
```

---

# 2. Show Existing Databases

```javascript
show dbs
```

> **Note:** A database will normally appear in `show dbs` only after it contains data.

---

# 3. Show the Current Database

```javascript
db
```

Example output:

```text
student
```

---

# 4. Delete a Database

First select the database:

```javascript
use student
```

Then delete it:

```javascript
db.dropDatabase()
```

Example output:

```javascript
{ ok: 1, dropped: 'student' }
```

---

# 5. Show Collections

To see all collections inside the current database:

```javascript
show collections
```

---

# 6. Create a New Collection

```javascript
db.createCollection("<collectionName>")
```

### Example

```javascript
db.createCollection("studentDetails")
```

Output:

```javascript
{ ok: 1 }
```

---

# 7. Delete / Drop a Collection

```javascript
db.<collectionName>.drop()
```

### Example

```javascript
db.studentDetails.drop()
```

Output:

```text
true
```

---

# 8. Insert One Document

MongoDB stores data as **documents**.

```javascript
db.<collectionName>.insertOne({
    field1: value1,
    field2: value2
})
```

### Example

```javascript
db.studentDetails.insertOne({
    studentID: "S001",
    Name: "Ann",
    Age: 21,
    Gender: "Female",
    Course: "IT",
    City: "Batticaloa",
    Marks: 85,
    Grade: "A"
})
```

MongoDB automatically creates an `_id` field if you don't provide one.

Example:

```javascript
{
    _id: ObjectId("..."),
    studentID: "S001",
    Name: "Ann",
    Age: 21,
    Gender: "Female",
    Course: "IT",
    City: "Batticaloa",
    Marks: 85,
    Grade: "A"
}
```

---

# 9. Insert Many Documents

Use `insertMany()` when you want to insert multiple documents at once.

```javascript
db.<collectionName>.insertMany([
    {
        field1: value1,
        field2: value2
    },
    {
        field1: value1,
        field2: value2
    }
])
```

### Example

```javascript
db.studentDetails.insertMany([
    {
        studentID: "S001",
        Name: "Ann",
        Age: 21,
        Gender: "Female",
        Course: "IT",
        City: "New York",
        Marks: 85,
        Grade: "A"
    },
    {
        studentID: "S002",
        Name: "Rory",
        Age: 22,
        Gender: "Male",
        Course: "Computer Science",
        City: "Queens",
        Marks: 85,
        Grade: "A"
    },
    {
        studentID: "S003",
        Name: "Kameron",
        Age: 20,
        Gender: "Male",
        Course: "Software Engineering",
        City: "Nevada",
        Marks: 85,
        Grade: "A"
    },
    {
        studentID: "S004",
        Name: "Tylor",
        Age: 21,
        Gender: "Male",
        Course: "IT",
        City: "Salt Lake City",
        Marks: 55,
        Grade: "C"
    },
    {
        studentID: "S005",
        Name: "Emma",
        Age: 21,
        Gender: "Female",
        Course: "Data Science",
        City: "Queens",
        Marks: 78,
        Grade: "A"
    },
    {
        studentID: "S006",
        Name: "Athham",
        Age: 20,
        Gender: "Male",
        Course: "Mechatronics",
        City: "Indiana",
        Marks: 87,
        Grade: "A"
    }
])
```

> **Important:** Every document inside the array must be separated by a comma.

---

# 10. Show All Entered Data

```javascript
db.<collectionName>.find()
```

### Example

```javascript
db.studentDetails.find()
```

This displays all documents in the collection.

---

# 11. Display Data in a More Readable Format

```javascript
db.studentDetails.find().pretty()
```

> Depending on your `mongosh` version, output formatting may already be readable without `.pretty()`.

---

# 12. Find One Document

`findOne()` returns the first document matching the condition.

```javascript
db.<collectionName>.findOne({
    field: value
})
```

### Example



```javascript
db.studentDetails.findOne({
    studentID: "S003"
})
```

Example result:

```javascript
{
    _id: ObjectId("6a83fd4c20a2ee0b0059b44f"),
    studentID: "S003",
    Name: "Kameron",
    Age: 20,
    Gender: "Male",
    Course: "Software Engineering",
    City: "Nevada",
    Marks: 85,
    Grade: "A"
}
```

---

# 13. Find Specific Data

To find all documents where `studentID` is `"S003"`:

```javascript
db.studentDetails.find({
    studentID: "S003"
})
```

---

# 14. Find General / Matching Data

To find all female students:

```javascript
db.studentDetails.find({
    Gender: "Female"
})
```

This returns every document where:

```javascript
Gender: "Female"
```

---

# 15. Find Data Using Multiple Conditions

You can place multiple fields inside the query.

```javascript
db.studentDetails.find({
    Gender: "Male",
    Course: "IT"
})
```

This finds documents where **both conditions** are true.

---

# 16. MongoDB Comparison Operators

MongoDB provides comparison operators for querying data.

| Operator | Meaning               |
| -------- | --------------------- |
| `$eq`    | Equal                 |
| `$ne`    | Not Equal             |
| `$gt`    | Greater Than          |
| `$gte`   | Greater Than or Equal |
| `$lt`    | Less Than             |
| `$lte`   | Less Than or Equal    |

---

# 17. `$eq` — Equal

```javascript
db.studentDetails.find({
    Marks: { $eq: 85 }
})
```

Finds students whose marks are exactly `85`.

You can also write:

```javascript
db.studentDetails.find({
    Marks: 85
})
```

---

# 18. `$ne` — Not Equal

```javascript
db.studentDetails.find({
    Gender: { $ne: "Female" }
})
```

Finds students whose gender is not `"Female"`.

---

# 19. `$gt` — Greater Than

```javascript
db.studentDetails.find({
    Marks: { $gt: 80 }
})
```

Finds students whose marks are greater than `80`.

---

# 20. `$gte` — Greater Than or Equal

```javascript
db.studentDetails.find({
    Marks: { $gte: 80 }
})
```

Finds students whose marks are `80` or higher.

---

# 21. `$lt` — Less Than

```javascript
db.studentDetails.find({
    Marks: { $lt: 80 }
})
```

Finds students whose marks are less than `80`.

---

# 22. `$lte` — Less Than or Equal

```javascript
db.studentDetails.find({
    Marks: { $lte: 80 }
})
```

Finds students whose marks are `80` or lower.

---

# 23. Find Students Between Two Marks

You can combine operators.

```javascript
db.studentDetails.find({
    Marks: {
        $gte: 70,
        $lte: 90
    }
})
```

This finds students with marks between `70` and `90`.

---

# 24. Logical Operators

Important logical operators:

| Operator | Meaning                               |
| -------- | ------------------------------------- |
| `$and`   | All conditions must be true           |
| `$or`    | At least one condition must be true   |
| `$not`   | Negates a condition                   |
| `$nor`   | None of the conditions should be true |

---

# 25. `$and` Operator

```javascript
db.studentDetails.find({
    $and: [
        { Gender: "Male" },
        { Marks: { $gt: 80 } }
    ]
})
```

This finds male students whose marks are greater than `80`.

In many cases, `$and` can be written more simply:

```javascript
db.studentDetails.find({
    Gender: "Male",
    Marks: { $gt: 80 }
})
```

---

# 26. `$or` Operator

```javascript
db.studentDetails.find({
    $or: [
        { Gender: "Female" },
        { Marks: { $gt: 85 } }
    ]
})
```

This finds students who are either:

* Female
* OR have marks greater than `85`

---

# 27. `$not` Operator

```javascript
db.studentDetails.find({
    Marks: {
        $not: {
            $gt: 80
        }
    }
})
```

This finds documents where `Marks` is not greater than `80`.

---

# 28. `$in` Operator

`$in` finds documents where a field matches one of several values.

```javascript
db.studentDetails.find({
    City: {
        $in: ["Queens", "Nevada"]
    }
})
```

This finds students from either:

```text
Queens
Nevada
```

---

# 29. `$nin` Operator

`$nin` means **not in**.

```javascript
db.studentDetails.find({
    City: {
        $nin: ["Queens", "Nevada"]
    }
})
```

This finds students whose city is neither Queens nor Nevada.

---

# 30. Update One Document

Use `updateOne()` to modify one matching document.

```javascript
db.<collectionName>.updateOne(
    { condition },
    { $set: { field: newValue } }
)
```

### Example

```javascript
db.studentDetails.updateOne(
    { studentID: "S001" },
    { $set: { Marks: 90 } }
)
```

This changes Ann's marks from `85` to `90`.

---

# 31. Update Multiple Documents

Use `updateMany()` when multiple documents need to be changed.

```javascript
db.studentDetails.updateMany(
    { Gender: "Male" },
    { $set: { Category: "Male Student" } }
)
```

This adds:

```javascript
Category: "Male Student"
```

to every matching male student.

---

# 32. `$inc` — Increase a Number

```javascript
db.studentDetails.updateOne(
    { studentID: "S001" },
    { $inc: { Marks: 5 } }
)
```

If the student's marks were `85`, they become:

```text
90
```

---

# 33. `$mul` — Multiply a Number

```javascript
db.studentDetails.updateOne(
    { studentID: "S001" },
    { $mul: { Marks: 2 } }
)
```

If the value was `40`, it becomes:

```text
80
```

---

# 34. `$unset` — Remove a Field

```javascript
db.studentDetails.updateOne(
    { studentID: "S001" },
    { $unset: { City: "" } }
)
```

This removes the `City` field from the matching document.

---

# 35. Rename a Field

Use `$rename`.

```javascript
db.studentDetails.updateMany(
    {},
    {
        $rename: {
            "Name": "name"
        }
    }
)
```

This changes:

```text
Name
```

to:

```text
name
```

---

# 36. Delete One Document

Use `deleteOne()`.

```javascript
db.studentDetails.deleteOne({
    studentID: "S006"
})
```

This deletes the first matching document.

---

# 37. Delete Multiple Documents

Use `deleteMany()`.

```javascript
db.studentDetails.deleteMany({
    Gender: "Female"
})
```

This deletes all documents where:

```javascript
Gender: "Female"
```

---

# 38. Delete All Documents

Be careful with this command.

```javascript
db.studentDetails.deleteMany({})
```

The empty `{}` means **match everything**.

This removes all documents from the collection but does **not** delete the collection itself.

---

# 39. Count Documents

```javascript
db.studentDetails.countDocuments()
```

Example:

```text
6
```

---

# 40. Count Documents Matching a Condition

```javascript
db.studentDetails.countDocuments({
    Gender: "Female"
})
```

This counts all female students.

---

# 41. Sort Data

Use `.sort()`.

### Ascending Order

```javascript
db.studentDetails.find().sort({
    Marks: 1
})
```

`1` means ascending.

```text
55
78
85
85
85
87
```

### Descending Order

```javascript
db.studentDetails.find().sort({
    Marks: -1
})
```

`-1` means descending.

```text
87
85
85
85
78
55
```

---

# 42. Limit Results

Use `.limit()`.

```javascript
db.studentDetails.find().limit(3)
```

This returns only the first three documents.

---

# 43. Sort and Limit Together

Find the top three students by marks:

```javascript
db.studentDetails
    .find()
    .sort({ Marks: -1 })
    .limit(3)
```

---

# 44. Skip Documents

Use `.skip()`.

```javascript
db.studentDetails.find().skip(2)
```

This skips the first two documents.

---

# 45. Projection — Select Specific Fields

By default, `find()` returns all fields.

You can select only specific fields.

```javascript
db.studentDetails.find(
    {},
    {
        Name: 1,
        Marks: 1
    }
)
```

This displays only:

```text
Name
Marks
```

MongoDB will normally also show `_id`.

---

# 46. Hide the `_id` Field

Use:

```javascript
db.studentDetails.find(
    {},
    {
        _id: 0,
        Name: 1,
        Marks: 1
    }
)
```

Output contains only:

```text
Name
Marks
```

---

# 47. Search Text Using `$regex`

You can search for text patterns.

```javascript
db.studentDetails.find({
    Name: {
        $regex: "^A"
    }
})
```

This finds names beginning with `A`.

### Case-Insensitive Search

```javascript
db.studentDetails.find({
    Name: {
        $regex: "a",
        $options: "i"
    }
})
```

`i` means case-insensitive.

---

# 48. Check Whether a Field Exists

Use `$exists`.

```javascript
db.studentDetails.find({
    City: {
        $exists: true
    }
})
```

Find documents where `City` exists.

To find documents where it does not exist:

```javascript
db.studentDetails.find({
    City: {
        $exists: false
    }
})
```

---

# 49. Working With Arrays

MongoDB documents can contain arrays.

### Example

```javascript
db.studentDetails.insertOne({
    studentID: "S007",
    Name: "John",
    Skills: [
        "JavaScript",
        "MongoDB",
        "Python"
    ]
})
```

Find students who have MongoDB as a skill:

```javascript
db.studentDetails.find({
    Skills: "MongoDB"
})
```

---

# 50. Working With Nested Documents

MongoDB allows documents inside documents.

### Example

```javascript
db.studentDetails.insertOne({
    studentID: "S008",
    Name: "Alex",
    Contact: {
        Email: "alex@example.com",
        Phone: "123456789"
    }
})
```

To search the nested `Email` field:

```javascript
db.studentDetails.find({
    "Contact.Email": "alex@example.com"
})
```

The dot `.` is used to access nested fields.

---

# 51. Upsert

`upsert` means:

> Update the document if it exists; otherwise create it.

Example:

```javascript
db.studentDetails.updateOne(
    { studentID: "S009" },
    {
        $set: {
            Name: "David",
            Marks: 91
        }
    },
    {
        upsert: true
    }
)
```

If `S009` exists, it is updated.

If `S009` doesn't exist, MongoDB creates a new document.

---

# 52. Replace an Entire Document

Use `replaceOne()`.

```javascript
db.studentDetails.replaceOne(
    { studentID: "S001" },
    {
        studentID: "S001",
        Name: "Ann",
        Age: 22,
        Gender: "Female",
        Course: "Computer Science",
        City: "Colombo",
        Marks: 92,
        Grade: "A"
    }
)
```

> **Important:** `replaceOne()` replaces the entire document except for its `_id`. It is different from `$set`, which changes only selected fields.

---

# 53. Indexes

Indexes make queries faster when used appropriately.

Create an index:

```javascript
db.studentDetails.createIndex({
    studentID: 1
})
```

View indexes:

```javascript
db.studentDetails.getIndexes()
```

Delete an index:

```javascript
db.studentDetails.dropIndex({
    studentID: 1
})
```

---

# 54. Unique Index

A unique index prevents duplicate values.

```javascript
db.studentDetails.createIndex(
    {
        studentID: 1
    },
    {
        unique: true
    }
)
```

Now two students cannot have the same `studentID`.

---

# 55. Aggregation

Aggregation is used for more advanced data processing.

Basic structure:

```javascript
db.<collectionName>.aggregate([
    {
        $stageName: {
            // conditions
        }
    }
])
```

---

# 56. `$match`

`$match` filters documents.

```javascript
db.studentDetails.aggregate([
    {
        $match: {
            Marks: {
                $gte: 80
            }
        }
    }
])
```

This returns students with marks greater than or equal to `80`.

---

# 57. `$group`

`$group` groups documents together.

Example: calculate the average marks:

```javascript
db.studentDetails.aggregate([
    {
        $group: {
            _id: null,
            averageMarks: {
                $avg: "$Marks"
            }
        }
    }
])
```

---

# 58. `$sum`

Calculate the total marks:

```javascript
db.studentDetails.aggregate([
    {
        $group: {
            _id: null,
            totalMarks: {
                $sum: "$Marks"
            }
        }
    }
])
```

---

# 59. `$max`

Find the highest mark:

```javascript
db.studentDetails.aggregate([
    {
        $group: {
            _id: null,
            highestMarks: {
                $max: "$Marks"
            }
        }
    }
])
```

---

# 60. `$min`

Find the lowest mark:

```javascript
db.studentDetails.aggregate([
    {
        $group: {
            _id: null,
            lowestMarks: {
                $min: "$Marks"
            }
        }
    }
])
```

---

# 61. `$avg`

Find the average:

```javascript
db.studentDetails.aggregate([
    {
        $group: {
            _id: null,
            averageMarks: {
                $avg: "$Marks"
            }
        }
    }
])
```

---

# 62. Group Students by Gender

```javascript
db.studentDetails.aggregate([
    {
        $group: {
            _id: "$Gender",
            totalStudents: {
                $sum: 1
            }
        }
    }
])
```

Example result:

```javascript
{
    _id: "Male",
    totalStudents: 4
}

{
    _id: "Female",
    totalStudents: 2
}
```

---

# 63. Group Students by Course

```javascript
db.studentDetails.aggregate([
    {
        $group: {
            _id: "$Course",
            totalStudents: {
                $sum: 1
            }
        }
    }
])
```

---

# 64. `$project`

`$project` controls which fields appear in the aggregation result.

```javascript
db.studentDetails.aggregate([
    {
        $project: {
            _id: 0,
            Name: 1,
            Marks: 1,
            Grade: 1
        }
    }
])
```

---

# 65. `$sort` in Aggregation

```javascript
db.studentDetails.aggregate([
    {
        $sort: {
            Marks: -1
        }
    }
])
```

This sorts students by marks from highest to lowest.

---

# 66. `$limit` in Aggregation

Find the top three students:

```javascript
db.studentDetails.aggregate([
    {
        $sort: {
            Marks: -1
        }
    },
    {
        $limit: 3
    }
])
```

---

# 67. Combining Aggregation Stages

You can combine multiple stages.

### Example: Top Male Students

```javascript
db.studentDetails.aggregate([
    {
        $match: {
            Gender: "Male"
        }
    },
    {
        $sort: {
            Marks: -1
        }
    },
    {
        $limit: 3
    },
    {
        $project: {
            _id: 0,
            Name: 1,
            Marks: 1,
            Grade: 1
        }
    }
])
```

The pipeline performs:

```text
1. Find male students
2. Sort by marks
3. Take the top 3
4. Display selected fields
```

---

# 68. Useful MongoDB Commands Cheat Sheet

## Database

```javascript
show dbs
```

```javascript
use student
```

```javascript
db
```

```javascript
db.dropDatabase()
```

---

## Collections

```javascript
show collections
```

```javascript
db.createCollection("studentDetails")
```

```javascript
db.studentDetails.drop()
```

---

## Insert

```javascript
db.studentDetails.insertOne({})
```

```javascript
db.studentDetails.insertMany([
    {},
    {}
])
```

---

## Read

```javascript
db.studentDetails.find()
```

```javascript
db.studentDetails.findOne()
```

```javascript
db.studentDetails.find({
    Gender: "Female"
})
```

---

## Update

```javascript
db.studentDetails.updateOne(
    {},
    {
        $set: {}
    }
)
```

```javascript
db.studentDetails.updateMany(
    {},
    {
        $set: {}
    }
)
```

```javascript
db.studentDetails.replaceOne(
    {},
    {}
)
```

---

## Delete

```javascript
db.studentDetails.deleteOne({})
```

```javascript
db.studentDetails.deleteMany({})
```

---

## Comparison Operators

```text
$eq     Equal
$ne     Not Equal
$gt     Greater Than
$gte    Greater Than or Equal
$lt     Less Than
$lte    Less Than or Equal
```

---

## Logical Operators

```text
$and
$or
$not
$nor
```

---

## Array Operators

```text
$in
$nin
$all
$size
$elemMatch
```

---

## Update Operators

```text
$set
$unset
$inc
$mul
$rename
$min
$max
$push
$pull
```

---

# 69. Complete CRUD Example

```javascript
// Select database
use student

// Create collection
db.createCollection("studentDetails")

// CREATE
db.studentDetails.insertOne({
    studentID: "S010",
    Name: "Tony",
    Age: 20,
    Gender: "Male",
    Course: "Mechatronics",
    City: "Colombo",
    Marks: 95,
    Grade: "A+"
})

// READ
db.studentDetails.find({
    studentID: "S010"
})

// UPDATE
db.studentDetails.updateOne(
    {
        studentID: "S010"
    },
    {
        $set: {
            Marks: 98
        }
    }
)

// DELETE
db.studentDetails.deleteOne({
    studentID: "S010"
})
```

---

# 70. MongoDB CRUD Concept

The four fundamental database operations are:

```text
C → Create
R → Read
U → Update
D → Delete
```

MongoDB commands:

```text
Create → insertOne() / insertMany()

Read   → find() / findOne()

Update → updateOne() / updateMany()

Delete → deleteOne() / deleteMany()
```

---

# 71. Important MongoDB Syntax Rules

### Strings

Strings must use quotes:

```javascript
Name: "Ann"
```

Not:

```javascript
Name: Ann
```

---

### Numbers

Numbers do not need quotes:

```javascript
Age: 21
Marks: 85
```

---

### Multiple Documents

Separate documents with commas:

```javascript
db.studentDetails.insertMany([
    {
        Name: "Ann"
    },
    {
        Name: "Rory"
    }
])
```

---

### Field Names

MongoDB field names are case-sensitive in normal query usage.

These are different:

```text
Name
name
NAME
```

So:

```javascript
db.studentDetails.find({
    Name: "Ann"
})
```

is different from:

```javascript
db.studentDetails.find({
    name: "Ann"
})
```

---

# 72. The Most Important Commands to Learn First

If you are just starting MongoDB, learn these commands first:

```javascript
use student

show dbs

show collections

db

db.createCollection("studentDetails")

db.studentDetails.insertOne({})

db.studentDetails.insertMany([])

db.studentDetails.find()

db.studentDetails.findOne()

db.studentDetails.updateOne()

db.studentDetails.updateMany()

db.studentDetails.deleteOne()

db.studentDetails.deleteMany()

db.studentDetails.drop()

db.dropDatabase()
```

Then move on to:

```text
$eq
$ne
$gt
$gte
$lt
$lte

$and
$or
$in
$nin

sort()
limit()
skip()

createIndex()

aggregate()
```

---

# 73. MongoDB Learning Order

A good order for learning MongoDB is:

```text
1. Database
      ↓
2. Collections
      ↓
3. Documents
      ↓
4. insertOne()
      ↓
5. insertMany()
      ↓
6. find()
      ↓
7. findOne()
      ↓
8. Query Conditions
      ↓
9. Comparison Operators
      ↓
10. Logical Operators
      ↓
11. updateOne()
      ↓
12. updateMany()
      ↓
13. deleteOne()
      ↓
14. deleteMany()
      ↓
15. Projection
      ↓
16. sort()
      ↓
17. limit()
      ↓
18. Arrays & Nested Documents
      ↓
19. Indexes
      ↓
20. Aggregation
```

---

# 74. Quick MongoDB Mental Model

Think of MongoDB like this:

```text
MongoDB
│
├── Database
│   │
│   ├── Collection
│   │   │
│   │   ├── Document
│   │   │   ├── Field
│   │   │   ├── Field
│   │   │   └── Field
│   │   │
│   │   └── Document
│   │
│   └── Collection
│
└── Database
```

Example:

```text
student
│
└── studentDetails
    │
    ├── Student S001
    ├── Student S002
    ├── Student S003
    ├── Student S004
    ├── Student S005
    └── Student S006
```

In simple terms:

```text
Database
   ↓
Collection
   ↓
Document
   ↓
Fields
```

---

# 75. Final CRUD Cheat Sheet

```javascript
// DATABASE
use student
show dbs
db
db.dropDatabase()

// COLLECTION
show collections
db.createCollection("studentDetails")
db.studentDetails.drop()

// CREATE
db.studentDetails.insertOne({...})
db.studentDetails.insertMany([...])

// READ
db.studentDetails.find()
db.studentDetails.findOne({...})

// UPDATE
db.studentDetails.updateOne(
    {...},
    {$set: {...}}
)

db.studentDetails.updateMany(
    {...},
    {$set: {...}}
)

// DELETE
db.studentDetails.deleteOne({...})
db.studentDetails.deleteMany({...})

// QUERY
$eq
$ne
$gt
$gte
$lt
$lte

// LOGICAL
$and
$or
$not
$nor

// ARRAY
$in
$nin
$all
$size
$elemMatch

// SORT / LIMIT
.sort()
.limit()
.skip()

// INDEX
.createIndex()
.getIndexes()
.dropIndex()

// AGGREGATION
.aggregate()
$match
$group
$project
$sort
$limit
$sum
$avg
$min
$max
```

---

# MongoDB Key Idea

The most important thing to understand is that MongoDB is **document-oriented**.

Instead of thinking:

```text
Table → Row → Column
```

think:

```text
Collection → Document → Field
```

For example:

```javascript
{
    studentID: "S006",
    Name: "Athham",
    Age: 20,
    Course: "Mechatronics",
    Marks: 87
}
```

That entire object is one **document**.

A group of these documents forms a **collection**:

```text
studentDetails
    │
    ├── { studentID: "S001", ... }
    ├── { studentID: "S002", ... }
    ├── { studentID: "S003", ... }
    ├── { studentID: "S004", ... }
    └── { studentID: "S005", ... }
```

And the collection belongs to a database:

```text
student
    └── studentDetails
            ├── Document
            ├── Document
            ├── Document
            └── Document
```

**Master `insert → find → update → delete` first. Once CRUD is comfortable, move into operators, arrays, indexes, and aggregation.**
