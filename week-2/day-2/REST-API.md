# REST APIs
- REST = REpresentational State Transfer
- API = Application Programming Interface
- we want data to be reliably represented throughout our process
- the state of our record/object/item/etc. will take on different representations, depending on what backend/DB or frontend server/browser is being used
- DB -> SQL, NoSQL, HANA, Document-Based, Graph, Blockchain
- Backend -> Java, .NET, JS, etc.
- we need to be careful about coupling -- loose coupling preferred to tight coupling
    - loose coupling enables systems to act independently from one another, and not depend on any particular system
- we want our backend API to have a set of communication rules/priniciples so that anyone can talk to it

# REST API PRINCIPLES

- These are universal for all REST APIs
- REST is not a protocol, just a set of guidelines

1. Layered Systems
    - a backend may or may not be a single server
    - the client has no idea what system(s) is/are onvolved in responding to a request
    - the server has no idea where it lives in the chain

2. Client/Server Decoupling
    - neither the client or server knows whats going on inside the other 
    - neither one can manipulate the internals of the other 
    - all each knows is that its sending/receiving aa request and responding to it
    - each just needs to know either where to send a request or what to do with it 
    - note -- this necessarily means that we have a seperate frontend/backend servers

3. Statelessnes
    - an API will not retain ANY state about the records/object in the database/system
    - it should also not retain ANY information about users/requests
    - state of objects WILL pass through as part of a request, but it wont hold onto any of the state
    - ALL information needed to process a request MUST be included in the request
    - you can use basic auth, JWT Tokens, OAUTh, etc. to hold onto state in the browser/frontend app

4. Uniform Interface
    - interface refers to the URL/URI -- location of an object/resource
    - no matter where you're accessing a resource from, the location should be the same 
    - it also shouldnt change over time
    - and a resource should only be avaialable at ONE location
    - locations should generally be based on some non-changing property 

5. Cacheability
    - this is optional
    - we should specify which resources are allowed to be cached
    - the intention behind it is to speed up the process of accessing the common resources

6. Code On Demand
    - this is optional 
    - most times are resources are static
    - however, at times, we can serve up runnable code
    - REST APIs will allow us to serve up code/apps and specifiy if they're allowed to be run as such 