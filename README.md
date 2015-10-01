CRUD using AngularJS and Codeigniter

In this CRUD AngularJS part uses AngularJS-seed-app.
Here Codeigniter provides all the api. Can't say this api architecture follows proper RESTFull idea as it only returns data in JSON format.

# Required:

Bower

/**

TODO:
-documentation
||- File structure
||- Explain security issues

**/

# Getting started:

Clone this repo to your xampp/htdocs or wamp/www rename the folder if you want.

Run 'bower install'

Create a database in your phpmyadmin, name it 'ngci' and then import the ngci.sql

Now you can reach the app here 'localhost/yourappname'

Database issue:

If you face problem importing ngci.sql open the file in any text editor. Remove this "ON UPDATE CURRENT_TIMESTAMP" line (there are 2). Then save the file and import again. Or you can update your mysql version.

*user password 123*