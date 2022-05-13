#  Hotel Booking Application - Team Bit-By-Bit


                                                                                    
# Team Members:
1. Akhil Apparaju 
2. Sharan Santosh Rachamalla
3. Tirupati Venkata Sri Sai Rama Raju Penmatsa
4. Prerna Dattatray Garsole

# Contributions 
1. Akhil Apparaju : Acted as the scrum master, worked on the Search, bookings functionality both front and backend and also completed the admin component.Also worked on the Loyalty Points logic.
2. Sharan Santosh Rachamalla : Worked on Hotels and Rooms components both frontend and backend, room overview and the hotel bookings UI. Handled the logic for holiday and seasonal pricing, Redux State management.
3. Tirupati Venkata Sri Sai Rama Raju Penmatsa : Worked on the Signup, UserProfile, Login and logout backend functionality. Performed deployment for backend on AWS autoscaling EC2 with load balancer. Also created architetcture and deployment diagrams.
4. Prerna Dattatray Garsole : Created wireframes for the project such as login/signup, Bookings, Hotels, Services etc and also worked on Signup/Register User Profile, Login/Logout UI. Also created Use Case diagram and Activity Diagram.

# Tech Stack:
Frontend - ReactJS

Backend - NodeJS

Database - MongoDB

Deployment - AWS

# Tools Used :

* Wireframes: Figma 

* Backend Deployment : AWS EC2 AutoScaling LoadBalance 

* Version Control: Git

# Scrum Meetings Schedule:

Every Monday and Friday.

# Documentation

* [Project Dashboard](https://github.com/orgs/gopinathsjsu/projects/23) for tracking tasks
* [Journal](https://github.com/gopinathsjsu/team-project-bit-by-bit/blob/main/HotelBookingApplication/files/Journal/Journal.xlsx) 
* [Sprint Sheet](https://github.com/gopinathsjsu/team-project-bit-by-bit/blob/main/HotelBookingApplication/files/Sprint/Sprint.xlsx)
* [GitHub Repo](https://github.com/gopinathsjsu/team-project-bit-by-bit)


# Diagrams

* Architecture Diagram
![image](https://user-images.githubusercontent.com/48201939/168221088-add5c3c1-40a9-4fe8-9e7e-5552f9480552.png)


# XP Values

**Communication**
This core value was assisted by Raju. He made sure that the team kept in touch every week and communicated all the doubts and problems we had. He took the responsibility of providing appropriate information in the team with a proper workflow. He tried to have face to face discussion with the aid of a rough board along with virtual meetings throughout each sprint. He always made sure that the work environment is productive, fun and interactive.

**Feedback**
Sharan assisted this XP core value. He took the responsibility of providing feedback in each task and ensured that the feedback is followed and worked upon. He kept a note of these feedback in each sprint and focused and made sure the previous sprint is improved each time. He made sure that the tasks are prioritized according to the deadline and ensured to provide proper feedback ahead of time so that the improvements can be done before the deadline.

**Simplicity**
This XP core value was assisted by Akhil. He had a nice and simple approach to the project. He decided to keep project UI simple which will help users and the one who is new to project can use and navigate without any issues and interruptions. He ensured to avoid waste and do only absolutely necessary things such as keep the design of the system as simple as possible so that it is easier to maintain, support, and revise. He focused that the simple GUI which is responsible for the implementation of all APIs and code, which helped us preserve the application's reliability and integrity.

**Courage**
Prerna assisted this XP core value. She showed great courage to raise the issues that reduce your team’s effectiveness. She assisted us with a right way to solve a problem and manage our time according to the priority of task. She accepted new challenges and tried working on new things during the implementation.

**Respect**
We all assisted this core XP value. We made sure that we worked together and nobody in the team was made to feel unappreciated or ignored, every opinion and idea was respect	ted and valued. Team members listened to each other’s views and opinions and thoughts. Team members tried to ensure that project will be of highest quality and to ensure that no delays would take place. Respect was also ensured by properly adopting the other four XP values.


# AWS EC2 with Load Balancer Deployment Screenshots 


![image](https://user-images.githubusercontent.com/48201939/168220405-d2799de1-dd5f-43d9-9480-37ed84b46992.png)
![image](https://user-images.githubusercontent.com/48201939/168220417-d6d0020f-a445-4b53-8a5c-b45d7e306cf0.png)
![image](https://user-images.githubusercontent.com/48201939/168220426-a2134edc-806e-4f20-a3da-08602f6537cf.png)
![image](https://user-images.githubusercontent.com/48201939/168220436-7fdc405c-ead1-4eee-bb24-e69b0860c283.png)
![image](https://user-images.githubusercontent.com/48201939/168220443-576f68c1-1475-4a89-824e-73bbe56f7f05.png)
![image](https://user-images.githubusercontent.com/48201939/168220452-095947be-72f0-49f3-8346-131d4f18fd5f.png)
![image](https://user-images.githubusercontent.com/48201939/168220463-2c4a839d-c5f7-461d-9911-944f71b5aef9.png)
![image](https://user-images.githubusercontent.com/48201939/168220485-3f1817cc-dd9a-4d79-8461-d9563710e7b9.png)

# Steps to test and run the application

1. Clone the repository
   git clone https://github.com/gopinathsjsu/team-project-bit-by-bit 
   
2. For Backend
   Inside backend folder, run i then run nodeapp.js
   
3. For Frontend
   Inside frontend folder, run npm install
   then npm start

4. The web application opens in the default browser


# Design Decision:

**Strategy design pattern.**
Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable. We have used strategy design pattern for the Dynamic pricing of rooms.We have considered different types of days that a customer or a user can book room like weekdays, weekends and Holidays.

**Chain of Responsibility design pattern**
Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.Chain of Responsibility design pattern for booking the rooms. The rooms can be booked based on the user’s choice. 

**Singleton design pattern**
Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.Singleton design pattern for the validation. 

**Application Level:**
**Admin Features:**
1. Log-IN
2. View all Bookings
3. View all Users

**User Features:**
1. Register/ Login
2. Search for Hotel 
3. Select the booking Date along with the amenities
4. View Booking
5. Update booking
6. Delete booking
7. View Reward Points
8. View services





