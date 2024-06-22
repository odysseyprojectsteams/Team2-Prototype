EnerSense2
EnerSense2 is a project for [brief description of the project].

Installation
Clone the repository:
bash
Copier le code
git clone https://github.com/EnerGuard/EnerSense2.git
Install backend dependencies:
bash
Copier le code
cd EnerSense2/server
npm install
Install frontend dependencies:
bash
Copier le code
cd ../client
npm install
Database Setup
Install and run MongoDB.
Configure the MongoDB connection in server/config/db.js.
Usage
Start the backend server:
bash
Copier le code
cd ../server
npm run dev
This command will start the server using nodemon, which will automatically restart the server when changes are made.
Start the frontend development server:
bash
Copier le code
cd ../client
npm run dev
Open your browser and navigate to http://localhost:3000 to view the app.
