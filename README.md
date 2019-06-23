# AF-Project


###Dependency install

# server part
npm install

npm install mongoose

npm install nodemon

# client part
npm install

npm install react-dom

npm install express

## Structure
Each member should implement their own back end API using express or SpringBoot, Front end : React

Then we can run front ends and back ends separately on your own computer and then we can connect them using WiFi. (localhost will be your IP address : localhost:8000 => 192.168.34.56:8000). 


### MongoDB CloudCluster for final implementation
After testing your back end with locally hosted mongoDB, Use this mongoDB cloud cluster as database url: 
```
mongodb+srv://asiri:asiri123@asicloudcluster-ka5oz.mongodb.net/test?retryWrites=true
```

## Entities, Parameteres & Coding convention (update your own entities before implementation)

### User
'''
{firstname:String, lastname:String, email:String, password:String, role:String, datecreated:Date}
'''


### Course
'''
{ courseId: string, courseName: string, description: string, status: boolean}
'''
### Assignment
'''
{}
'''
### Document
'''
{}
'''
### Module
'''
{}
'''
### Student
'''
{userId: string, firstName: string, lastName: string, nameInFull: string, bioData: String}
'''
### Instructor
'''
{userId: string, firstName: string, lastName: string, nameInFull: string, bioData: String, post: string}
'''


## TODO 
FrontEnds using the given client template.

BackEnds using this template.

Testing in localhost.

Integrating front end. (Backend integration is not needed.)

Connecting to mongodb cluster url.

Final Report

Viva
