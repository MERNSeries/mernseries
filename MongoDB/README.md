## In web development, a database is a place where data is stored, organized, and managed so that it can be easily accessed, updated, and deleted. Think of it as a digital filing system where websites and applications keep all the information they need, like user accounts, products in an online store, or blog posts.

## When you log in to a website, your login information is checked against a database.

## When you view products on an online store, those products are fetched from a database.

<!-- SQL vs NoSQL -->

<!-- SQL -->

## Structure: SQL databases store data in tables (like spreadsheets) with rows and columns. Each table has a predefined structure (schema), meaning you must decide the format of the data before storing it.

## Examples: MySQL, PostgreSQL, SQLite, and Microsoft SQL Server.

<!-- NoSQL -->

## Structure: NoSQL databases store data in a more flexible way, often in documents, key-value pairs, or graphs. They don't require a predefined structure, so you can store different types of data together.

## Examples: MongoDB, Firebase, CouchDB, Cassandra.

### MongoDB is a popular NoSQL database that stores data in a flexible, document-oriented format. Instead of using tables and rows like traditional SQL databases, MongoDB uses collections and documents to organize data.

## Document-based: In MongoDB, data is stored as documents in a format called BSON (Binary JSON), which is similar to JSON (JavaScript Object Notation). Each document is like a record and can store different types of data together in a flexible way.

{
"\_id": "12345",
"name": "Alice",
"age": 28,
"email": "alice@example.com",
"address": {
"city": "New York",
"zip": "10001"
}
}

## Collections: Documents are grouped into collections. A collection is like a folder that holds multiple documents of similar types (e.g., users, products, orders), but the structure of the documents within a collection can vary.

## Example: A users collection could store all user information, but each user document doesn't have to have the same fields.

## Schema-less: MongoDB is schema-less, meaning you don’t need to define the structure of your data upfront. You can add new fields or change the data structure easily without breaking existing data.

## Scalable: MongoDB is designed to handle large amounts of data and can scale easily across multiple servers. This makes it great for applications that need to grow and manage a lot of unstructured or semi-structured data.
