# REST API server Gallery Assignnment.

1. clone repository
```
git clone https://github.com/fazaio/gallery-assignment.git
```
2. run install 
```
npm i
```

3. config database in file
```
src/config/db.js
```
4. Run this command to Create database
```
> node ./src/utils/api-to-local-mysql.js 
```
5. Start server
```
npm start
```
REST API run on http://localhost:5000


### Note:
* If there any problem on migrate database, insert manual sql user `gallery.sql` by import in phpmyadmin.
