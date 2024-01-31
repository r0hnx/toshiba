# Toshiba Assignment

## Project Overview
In this project, we'll be building a complex web application with a frontend developed in React.js and a backend developed in Node.js. The frontend will display a line chart representing the relationship between profit percentage and time, while the backend will provide APIs for fetching and downsampling the data.

## Frontend Development

### 1: Set Up the Frontend
Open a terminal and run the following commands to create a new React app and navigate to its directory:

```bash
npx create-react-app toshiba
cd toshiba
```

Install the required packages:
```bash
npm install axios @nivo/core @nivo/line react-query
```

### 2: Create Frontend Components

#### UI Component:
Create a new folder components/ in the src directory.
```bash
.
├── aside.tsx
├── chats.tsx
├── customers.tsx
├── growth.tsx
├── lostDeals.tsx
├── newDeals.tsx
├── quaterGoals.tsx
├── revenues.tsx
├── topStates.tsx
└── ui
    ├── avatar.tsx
    ├── badge.tsx
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    ├── progress.tsx
    └── select.tsx
```
ui\ folder contains components from shadcn.ui

### 3. Backend Development

#### Step 1: Set Up the Backend
Create a new directory named backend in the project root.
Navigate to the backend directory and initialize a new Node.js project:
```bash
cd toshiba-backend
npm init -y
```

Install the required packages:
```bash
npm install express csv-parser
```

#### Step 2: Create Backend Server and APIs

**Server.js**:
Create a new file index.js in the backend directory.

### 4. Run the Application
In the terminal, navigate to the root directory of your project.
Start the backend server:
```bash
cd tohsiba-backend
node server.js
```

Open a new terminal window and start the frontend app:
```bash
cd toshiba
npm start
```

## Downscaling Algorithm
The downsampling algorithm used in this project is a simple method that helps reduce the size of a large dataset while keeping important trends intact :

- Grouping by Time: The algorithm groups data into time intervals, like years or months.
- Keeping the Highest Value: Within each interval, the algorithm selects the data point with the highest profit percentage.
- Reducing Data Size: By keeping only the highest value in each interval, the algorithm makes the dataset smaller while still showing the most significant trends.

Open your web browser and go to http://localhost:3000 to see the application in action.

### 5. Conclusion
You have now successfully developed a dashboard web application with a dynamic line chart and a backend server serving the required data. This guide provides a high-level overview of the steps involved in creating the project.

Feel free to explore and enhance the application further based on your needs. If you have any questions or encounter issues, refer to the detailed steps in each section or seek assistance from the developer community.
