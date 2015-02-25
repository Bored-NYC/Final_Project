# Final Project

## Bored-NYC (Ballet and Dance your boredom away)

Our application is for ballet and dance events in NYC. We pull daily events data from the New York Times API for a user,
the user is able to view and save daily events to their personal favorites list, as well as view their personal favorites list or
see future events by selecting dates in the calendar. The application also renders the location through the New York Times API by passing in it's
latitude and longitude with a customized marker to show the location of the event. 

##### Technologies Used

Sinatra (Our Server)
Sinatra-reloader (Automatic reloads! YAY!)
Unicorn (We hosted on digital ocean)
Httparty (What we used for our API consumption)
Pry (THANK GOODNESS FOR PRY)
Sqlite3 (database)
Active_record (relational mapping for a user to have a favorites list that contains many events)
JSON (the data)
Bcrypt (Didnt use it for the session's yet, but it's going to be implemented to encrypt passwords)
Ruby/Javascript/HTML/CSS (What we wrote the app with)
