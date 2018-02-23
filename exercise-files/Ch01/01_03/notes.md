# 01_03

There are two critical components to our Redux file: the actions and the state.

## Constants
To start planning your Redux app, you want to identify all of your actions.

Actions in our application:
- ADD_DAY
- REMOVE_DAY
- SET_GOAL
- ADD_ERROR
- CLEAR_ERROR
- FETCH_RESORT_NAMES
- CANCEL_FETCHING
- CHANGE_SUGGESTIONS
- CLEAR_SUGGESTIONS

Record these in a file called constants.js

## States

States (variables that actions impact) in our application: 
- allSkiDays -> []
- skiDay -> {resort, date, powder, backcountry}
- goal -> number
- errors -> []
- resortNames.fetching -> boolean
- resortNames.suggestions -> []

when we make a request for resort names from the server, we need to set a fetching boolean to true (so that we know we are making the request), amd when we get suggestions from the server, we will need to store those in an array, as well.

Now, create an initial state file, initialState.json, which serves as a snapshot of our state at any given time.

> Next, we will develop reducers that can manage the data found in this state tree.