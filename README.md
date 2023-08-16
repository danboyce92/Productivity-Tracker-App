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
There should be an external place to store the activities available. ✓
These should be requested when the app opens the activities edit page. ✓
Also on the activities edit page,

- you should be able to delete activities from here (send a request to the external list) ✓
- remove the add / edit slider button from the edit part. This should be done automatically.
  have one request sent that will check to see if the activity exists already.
  If it does, update the category, if both fields are the same do nothing and let the user know.
  If it doesn't just add it as new.
- Last part for edit page. When you hover an activity it should reveal the given category.

_One thing to keep in mind. Everytime the 'database' is changed I want the page to refresh. For example if an activity is deleted from the list I want it to update so you can see it removed immediately._

Activities input page

- Right now this page is detecting static activities.
  You need to remove them from the component and set it up so they are read from the external source (express). ✓
- Last thing on this page is to wire up the record activity button.
  When this button is pushed, it should send a post request to the external source
  and save an activity object containing the information desired. (Activity, Duration, Date, Category)

Last page / Most important page

- The way I display the information is arguably the whole point of the app.
  D3 for bar charts and donut charts.
  One section displaying what categories are up or down and by how much compared to previous weeks?

After all of that is done I can worry about the actual ui design.

## Things to do now 14/08

Lots of things are wired up to mongo db now, currently the next tasks are:

### Activities Edit

*Remove the add/edit slider button in activities edit*✓

- This should be removed and in the save activity button you should add logic that checks the following:✓

* That both input fields are not empty. (If so do not proceed and display a warning to fill fields)✓
* That there is not already an activity of the same name in the list. (If so do not proceed and display error explaining why)✓

*Hover over activity list item*✓

- Hovering over an activity list item should display the item's category.✓

### Activities Input

_Record Activity button_

- If either input fields are empty this will not do anything. Display a warning to let the user know this if they record an empty field.
- When the button is clicked and a record is successfully made, display a short success message to the user✓

### Nav bar

- The nav bar z-index issue needs to be addressed. When the screen is very small, the nav bar blocks access to clicking certain buttons.✓

## 16/8

Next tasks

### Activities

- introduce flex so when they can fit, multiple activity cards will be on the same line. This should only occur on the larger side. Smaller screen remains one per line.

  Introduce new buttons:

  Button for page to display latest activities added.
  (Add a delete to the activities card in case of mistakes)

  Button for charts page.

_How will I bring the charts into it?_
Ok initial plan:
Have activities page load on chart section.
Charts will all include the last weeks activities.

_Donut chart:_
All activities of the week.
(If you could dive deeper there would be a button beside the chart to separate by category)

_Stacked Bar chart:_
All activities of the week stacked by category.

_Percentage display:_
A box dedicated to showing the total duration spent on productive things this week. Displaying a percentage of increase or decrease compared to previous week.

_For now I will leave the activity card delete button as is. But if I want to make it better in the future it would be nicer to have a warning/confirm pop up before the card is fully deleted._

_On the record card I could associate different categories with different colours_
