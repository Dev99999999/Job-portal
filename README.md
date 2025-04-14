# job
https://github.com/Dev99999999/job-portal
E: job

client ->
npm i
npm run dev

server ->
npm i
npm run dev

🛠 Tech Stack
Frontend: React, React Router DOM, Axios

Backend: Express.js, Node.js, Mongoose

Database: MongoDB

Others: CORS, dotenv

Frontend runs on http://localhost:5173
Backend runs on http://localhost:5000/api/jobs

 job/ ├── client/ # React Frontend │ ├── src/ │ │ ├── components/ │ │ │ ├── AddJob.js │ │ │ ├── JobList.js │ │ │ └── JobDetails.js │ │ ├── App.js │ │ └── index.js │ └── package.json ├── server/ # Express Backend │ ├── models/ │ │ └── Job.js │ ├── routes/ │ │ └── jobs.js │ ├── server.js │ └── package.json └── README.md
