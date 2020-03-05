# dms


Creating your S3 bucket.
Edit dms/aws/create-bucket.js

AWS CORS Configuration
```<?xml version="1.0" encoding="UTF-8"?>
   <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
   <CORSRule>
       <AllowedOrigin>*</AllowedOrigin>
       <AllowedMethod>GET</AllowedMethod>
       <AllowedMethod>POST</AllowedMethod>
       <AllowedMethod>PUT</AllowedMethod>
       <AllowedHeader>*</AllowedHeader>
   </CORSRule>
   </CORSConfiguration>
```

Add your bucket name and aws credentials to the .env file.
`npm run createBucket`


The ability to share documents in a secure way.
AWS S3 encrypted storage buckets
Email is not a secure method of sharing information.
Email often has size limitations.
The ability to create separate accounts for document segregation.
Access control to the S3 bucket or specific files.

Uploads documents to S3 and writes document name to the database.
Download documents from S3.
Add new users and upload initial document.

