# Productivity App

_This app keeps a log of your daily activities so you can keep track of your productivity levels_

## Things that need to be done

- Add/Edit button on Activities Edit page needs to have logic put in.
- Need to decide on how to use the main Activities display.
- Wire up backend so you can start adding activities.
- Nav bar highlighted tab reverts back to 1st one if page is refreshed even if it's on a different tab.
- Make it responsive.

**Display**
Main display needs to be figured out. What should it contain?
Activities added in the last week.
Activities added in the last month.
Bar chart, Donut chart. Percentage increase or decrease of activity.

**Database**
After database is set up,
Record button on Activities Input page needs wiring up.
Save Activtiy on Activities Edit page needs wiring up.
Delete Button on Activities List needs wiring up.

**Make it responsive**
Hamburger menu for Navbar.
See if there's a way to make a font's size be calculated by the width of it's own div.

**Problem I have encountered**
Regarding data structuring..
I want to use a stacked bar chart to display the following.
X axis - Each individual day of a specific week.
Y axis - A stack of the various activities recorded.

The problem is that any of the stacked barcharts I've seen create each stack from an individual object and that's not the way the app will store data. Data from this app will most likely have an individual object being an individual input (Actvitiy record).

This might be resolved by exploring SQL databases, there might be a way to have SQL automatically render and represent data in different ways.

**Latest set of tasks**
There should be an external place to store the activities available.
These should be requested when the app opens the activities edit page.
Also on the activities edit page,

- you should be able to delete activities from here (send a request to the external list)
- remove the add / edit slider button from the edit part. This should be done automatically.
  have one request sent that will check to see if the activity exists already.
  If it does, update the category, if both fields are the same do nothing and let the user know.
  If it doesn't just add it as new.
- Last part for edit page. When you hover an activity it should reveal the given category.

_One thing to keep in mind. Everytime the 'database' is changed I want the page to refresh. For example if an activity is deleted from the list I want it to update so you can see it removed immediately._

Activities input page

- Right now this page is detecting static activities.
  You need to remove them from the component and set it up so they are read from the external source (express).
- Last thing on this page is to wire up the record activity button.
  When this button is pushed, it should send a post request to the external source
  and save an activity object containing the information desired. (Activity, Duration, Date, Category)

Last page / Most important page

- The way I display the information is arguably the whole point of the app.
  D3 for bar charts and donut charts.
  One section displaying what categories are up or down and by how much compared to previous weeks?

After all of that is done I can worry about the actual ui design.
