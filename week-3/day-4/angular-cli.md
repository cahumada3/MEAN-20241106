# THE ANGULAR CLI = Command Line Interface

- to install Angular CLI use: npm install -g @angular/cli

- all of these commands start with ng (a-NG-ular), then the command and possible flags
- ng --help: gives you a list of root level commands 
- ng new: will create a project for you
    - this creates a folder with the same name and puts everything in it 
    - this ALSO creates a github repo if youre not already inside of one
    - if you move a project created outside into an existing repo, you'll have to delte the new repo
- ng serve: will start your server and run the project
    - default port is 4200
    - add --open to auto-open a browser to this new server's homepage
    - add --live-reload to see changing files when saved
    - if you have "compilation" erros, angular will throw those errors in the console and the browser
    - you can also add flags here for which environment to run (dev/prod, etc.)
- ng generate (ng g): will create a new angular elements of this type/name
    - ng g component product: will create all files for a new component called product
    - ng g service: will create all files for a new service
- ng test: will run your test suite