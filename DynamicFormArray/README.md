# Dynamic Search Form

Angular 5+ 

This project demonstrates how to implement a Dynamic Search Form in an Angular application that will create a custom request object that can be POSTed to and web service.

There is a companion project to this one (see below), which is an ASP.NET WebApi project that can dynamically build a Linq query to be used with Entity Framework.

But this Angular Search Form component can be used with any back-end to handle the database querying, but you would have to provide the code for that yourself.

![alt text](https://github.com/kahanu/DynamicSearchForm/blob/master/angular-form.jpg "Angular Dynamic Search Form")

## .Net WebApi Companion Project

As a full end-to-end application, I've created a separate .Net WebApi project that can consume the payload from this customer form and return a result.  See the companion project for more information.  It's a Visual Studio 2017 project using .NET Framework 4.6.1.

[Full Text Search WebApi Project](https://github.com/kahanu/FullTextSearchWebApi)

Connect this WebApi project to this Angular app, and you can see results like this:

![alt text](https://github.com/kahanu/DynamicSearchForm/blob/master/form-with-results.jpg "Search form with results from the WebApi service.")

Date: July 25, 2018 - added Http service to communicate with .Net WebApi project in Customers module.

Date: July 21, 2018 - initial app
