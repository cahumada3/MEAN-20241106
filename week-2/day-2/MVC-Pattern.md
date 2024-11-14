# MVC - Model View Controller
1. Model
    - represent the data layer and business logic of the application
    - it defines how data is structured, how its stored, how it interacts with the database
    - defines the schema
2. View
    - handles the presentation layer, whichis responsible for rendering the user interface
    - often HTML file or templates that display the data provided by the Controller
3. Controller
    - will act as the intermediary between the Model and View
    - it processes incoming requests, interacts with the Model to fetch or manipulate data, and then decided which View to render

MODEL <---> Controller <---> View