# Project Title:
Market4Farmers: Connecting Farmers To Customers In Need

# Project Description: 
This project is design to provide members of the public by using Prince George API database  with convenient access to information about Prince George farmer markets 
locations, and map direction.

# Target Browsers:
Our target browsers are desktop-based web browsers. Fully functional using Chrome, Firefox, Safari, and Edge. Opera/IE may encounter some issues.

# [User Manual](https://github.com/ericTle1/inst377_jedim/blob/main/docs/user.md)

# [Developer Manual](#Developer-Manual)
## Installation and Dependencies
This project is stored in a Github repository, and you may fork it to your own repository and make modifications to it when cloned to your local repository. You may either choose to install GitHub Desktop or Git to clone it to your local repository. For GitHub Desktop installation and documentation, [click here](https://desktop.github.com/). For Git installation, [click here](https://git-scm.com/downloads), and for Git repository instructions, [click here](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

Once you have cloned this project from GitHub into your local repository, you would need to install Node.js , npm, and Git in order for this project to work.
* To download and install Node.js, [click here](https://nodejs.org/en/download/). It should be noted that npm will automatically be installed along with node.js.
* If you haven't installed Git, [click here](https://git-scm.com/downloads)

Once you have installed Node.js, npm, and Git, open up gitbash console and navigate to your local repository that contains this project. Run the following code to navigate to your local repository. 
```
cd {project repository path}
```
## Dependencies
Install all node dependencies inside the application directory
```
npm install
```
## Deployment
Start the application server
```
npm run start -watch
```
Type in your internet browser
```
localhost: 4000
```

### Project Structure
>### /docs 
Contains user manual and final report.

>### /public 
Front-end folder that contains images, css, and js files.

>### /src
Back-end folder that contains the routes folder, server, database, SQL Lite

>### README.md
Introduces and explains our project.

>### package.json	
Contains project descriptions, properties, scripts, dependencies, license information, and more.

>### package-lock.json	
Records specific dependencies' version number that our application needs

### APIs Used
* [Google Map API](https://maps.googleapis.com/maps/api/js?key=AIzaSyDUIN4splV3Mg8N2pasIr7B_uOnePMnC5w&callback=initMap&libraries=&v=weekly)
* [Prince George Farmer Markets API](https://data.princegeorgescountymd.gov/resource/sphi-rwax.json)

### Known Issues and Development
As of right now, there is are no functioning API in the server that get data from the PG County data base. We simply hosted all the data on our front end. Another issue is that the filtering function on the home page in not functioning. Their submission on the DATA page are not stored anywhere either.
If you were to continue this project, creating a GET API for the PG County Data would be a priority. From there you can create a POST endpoint to place the data in a sqlite database. Once you do that, you can use a PUT endpoint to pass the data to the front end.
By solving this problem, figuring out the issue of the filtering would be much easier as the data will be in a stadardized form. You can also create a table for the submission data and create new aggregate tables with the already existing data.
These are just our reccomendations for next steps. Please develop new and innovative uses and implementations for our application!
