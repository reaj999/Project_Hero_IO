# HERO.IO

Live Link For the Site: https://reaj-assignment-8-hero-io.netlify.app/

- That site has been built with the use of-
- HTML
- CSS
- JavaScript
- React
- Tailwind
- DaisyUI
- Toastify
- React Router
- Recharts
- etc

# Features:
1) Header
- A logo.on clicking it user will be navigated to home page.
- A navigation bar with links [ home , apps , installation ] and active route indication.
- A Contribution button 
- Footer

2) Home Page
- Banner contain a center-aligned heading, text, and two buttons.
- “App Store” button will redirect to the App Store.
- “Play Store” button will redirect to the Play Store.
- States Section
- Contains three state cards as shown in Figma.
- Top Apps Section
- Displays eight apps in a four-column layout.
- Each app card displays: App title, Image, Download count, Average rating
- Clicking on a card will navigate the user to the App Details page.
- Includes a “Show All” button that navigates to the All Apps page.


3) 📱 All Apps Page
- Title Section
- Includes a title and subtitle.
- Search and States
- Displays the total number of apps on the left and a search bar on the right.
- Implements live search functionality
- filters apps by title as the user types.
- Searches are case-insensitive
- If no app matches, displays a “No App Found” message.
- App Section
- Displays all apps from the JSON data.
- Each app card includes: App title, Image, Download count, Average rating
- Clicking on an app card will navigate to the App Details page.

4) 📊 App Details Page
- App Information
- Shows app image on the left.
- Displays app details such as title, rating, downloads, reviews.
- Includes an Install button:
- When clicked, it becomes disabled and the text changes to Installed.
- Shows a Success Toast after App installed
- App Review Chart
- Implements a responsive chart using the Recharts library.
- Visualizes the app’s review data.
- App Description
- Shows the app details in description section.

5) Error Page & Others
- Created a custom error page for invalid routes.
- Shows a loading animation during: Challenge Part
- Page navigation.
- Search operation.
- Shows a Relevant Not Found message app not found in app details section.
- Ensures that reloading any route after deployment does not cause an error.

6) Sort by Downloads
- Implemented a dropdown for sorting apps by download count.
- The dropdown must include:
- High-Low: Sort apps in descending order by downloads.
- Low-High: Sort apps in ascending order by downloads.

7) Animation