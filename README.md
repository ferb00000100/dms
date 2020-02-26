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

