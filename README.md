# Social Network Management System


## **Project Overview:** <br>
This is an eucational Social Media web application project designed to:  
manage users, set status messages, and connect users as friends—all within a local environment, without relying on external APIs. 

This application provides a platform where users can view and interact with a feed of status updates from themselves and their friends.

Technologies used: 
- TypeScript
- NextJS 
- HTML 
- CSS + Bootstrap
- Vercel

You can view the deployed project [here.](https://socialmedia-web-app.vercel.app/)

## **Key Features**
**1. User Management** <br> 
User Creation: Add new users, complete with a name, profile picture, and other relevant details. <br>
Status Updates: Set and update status messages for individual users. <br> <br>
**2. Friend Management:** <br> 
Friend Connections: Allow users to connect with other users by adding them as friends using their unique IDs. <br>
Status Feed: Display a unified feed where users can view their own and their friends' status updates. <br> <br>
**3. Feed Display** <br> 
Feed Page: A dedicated feed page (Feed.tsx) where status messages are displayed in visually appealing cards. <br>
Filter by User: Enable filtering of the feed by a specific user's ID to see status updates from that user and their friends. <br> <br>
**4. Styling and UI** <br> 
User Cards: Design and implement cards to display user information such as name, status message, and profile picture. <br>
Responsive Design: Ensure the application is fully responsive and accessible across different devices and screen sizes.  

## **Getting Started**

### **Prerequisites**

Make sure you have the following installed on your system:

- TypeScript

- Node.js (v14 or later) and npm (Node Package Manager)

- Git (for cloning the repository)


### **Installation Instructions**

1. First, clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/socialmedia-web-app.git
```

2. Navigate to the Project Directory

```bash
cd socialmedia-web-app
```

3. Install the necessary npm packages:

```bash
npm install
```

### **Run the development server**

Start the development server to view the project in your browser:

```bash
npm run dev
```

Once the server is running, open your browser and go to:

```arduino
http://localhost:3000
```

If you want to build the project for production, use the following command:

```bash
npm run build
```
After building, you can start the production server with:

```bash
npm start
```

Optionally, you can deploy your project on providers like Vercel. 
[Here](https://vercel.com/docs/deployments/overview) you can see a detailed step by step of the process.

## **Folder Structure** 

```1. FOLDER STRUCTURE 


/social-web-app
│
├── /public
│   ├── /images                        
│    
├── /README.md
│ 
├── /wireframes.ts
│
├── /src
│   ├── /app                   
│   │   ├── /(auth)                    
│   │   │   ├── login                  
│   │   │   │   └── page.tsx            
│   │   │       └── login.module.css
│   │   │   
│   │   │   
│   │   ├── /feed               
│   │   │   └── page.tsx      
│   │   ├── /profile            
│   │   │   └── page.tsx        
│   │   └── layout.tsx          
│   │   └── PAGE.tsx           
│   │
│   ├── /components            
│   │   ├── Navbar.tsx         
│   │   ├── UserCard.tsx        
│   │   └── StatusForm.tsx      
│   │
│   ├── /redux                  
│   │   ├── authSlice.ts          
│   │   ├── userSlice.ts    
│   │   ├── store.ts    
│   │
│   ├── /styles                 
│   │   ├── globals.css        
│   │
│   │
......

-----------------------------------------------------
```
