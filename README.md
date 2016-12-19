# Simply Social Frontend Challenge

* Date: 18th Dec, 2016
* Author: Colin Burns
* Email: ccburns@gmail.com

## Requirements
This project uses GULP to combine, minify and build the final source code. See **gulpfile.js** in the project root directory for more information about the required gulp packages.

## Directory Structure
* `/app` // This directory holds the source code for the website
* `/dist` // This directory holds the final files that has been built using the `gulpfile.js` workflow. These are the final files that should be used in production.
* `/node_modules` // These are the modules required for the gulp workflow used in this project
* `gulfile.js` // Contains the `gulp` workflow
* `package.json` // Stores all the node requirements for this project
## Installation Instructions
This project can be installed in several ways, either using `gulp` or using a standard web server.

### Standard Web server
Either clone or download this repository. If you are using a standard webserver then copy the files and directories that are in the `/dist` directory and place them in your webroot. Open your web browser and visit http://localhost or enter the URL that accesses your webroot.

**NOTE: This can not be run by simply double clicking the index.html file in the file browser because the application uses AJAX to load various bit of content**

### Gulp
If you have all the required gulp packages installed you should simply be able to run the command `gulp` from within the root directory and it will spawn a browser window running the app in the browser. The url will be something like http://localhost:3000. When you run the `gulp` command the URL will be displayed in the output if your browser window doesn't load the site.



## Notes about the work completed
* Profile pages are loaded via AJAX. Because of this there is a small flash of content on initial load when coming from the Settings page (the setting page is a separate file). When you go pack to the profile page from the Settings page the base page is loaded and then the AJAX inserts the relevant HTML. With more time I would prevent this flash of content.

* I wasn't 100% certain of how the mobile version of pages were supposed to look so I have just tried to do what I think would look good.

## Bugs

There are a couple of bugs that I would normally fix but they weren't two minute fixes and given this is a work challenge to demonstrate my ability I hope the rest of the code base is sufficient evidence of my abilities.

* When on the first screen if you click Videos or Photos and then change to grid view the masonry (used to display the grid layout) doesn't seem to shuffle the posts into the 3 columns they are all in the first column.
* On the xsmall screen size (mobile phones) I have hidden the search bar. I could have changed this to just be a search icon where the input field slides out when clicked or it could have been search on a second row beneath the header and before the content.
