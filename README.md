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
