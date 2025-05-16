💰  A Cloud-Native Personal Finance Dashboard

A responsive and user-friendly web application for real-time budget tracking and expense visualization, enhanced with modern DevOps practices such as containerization, CI/CD, monitoring, and cloud deployment.

## 🚀 Features

- 📊 Real-time expense and budget tracking
- 📈 Interactive charts and analytics using Chart.js
- 🎨 Responsive frontend built with React and Bootstrap
- 🐳 Docker & Docker Compose for multi-service containerization
- 🌐 NGINX reverse proxy with access/error logging
- ⚙️ CI/CD pipeline using GitHub Actions 
- 🔍 System monitoring with Prometheus and Node Exporter
- ✅ Custom health checks for uptime monitoring
- ☁️ Cloud deployment on AWS EC2 with optional S3 and Load Balancer integration

---

## 📂 Project Structure

personal-finance-dashboard/
├── frontend/ # Web app
├── nginx/ # NGINX config and logs
├── monitoring/ # Prometheus config, Node Exporter setup
├── docker-compose.yml # Compose file for services
├── Dockerfile # Docker config for frontend
├── .github/workflows/ # GitHub Actions CI/CD workflow (optional)
└── README.md

---

## 🛠️ Tech Stack

| Layer             | Tools / Tech                          |
|------------------|----------------------------------------|
| Frontend         | React, Chart.js, Bootstrap             |
| Containerization | Docker, Docker Compose                 |
| Web Server       | NGINX (Reverse Proxy + Logging)        |
| CI/CD            | GitHub Actions / Jenkins               |
| Monitoring       | Prometheus, Node Exporter              |
| Deployment       | AWS EC2, S3, Load Balancer (optional)  |

---

## 🧪 Setup & Run (Local)

1. **Clone the repository**
   git clone https://github.com/SyedNasir9/personal-finance-dashboard.git
   cd personal-finance-dashboard

   
2.Start services using Docker Compose
docker-compose up --build

3.Access the app
Web: http://localhost
Prometheus: http://localhost:9090

🧩 Monitoring Setup
Prometheus scrapes metrics from Node Exporter and visualizes system stats.

🌍 Deployment
Deployed on AWS EC2 with auto-start using pm2 or Docker.

🚦 Health Check
A basic health-check.sh script pings the app endpoint and reports availability. Can be scheduled via cron or integrated with monitoring tools.

📄 License
This project is open-source and available under the MIT License.

🙌 Acknowledgements
React, Bootstrap, Chart.js
Docker, NGINX, Prometheus, GitHub Actions
AWS for cloud deployment

Built with 💻 + ☁️ to combine frontend experience with real-world DevOps skills.
