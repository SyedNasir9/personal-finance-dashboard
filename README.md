# Personal Finance Dashboard

A web-based application that allows users to manage their personal finances efficiently. The app tracks income, expenses, and provides insights through graphs and statistics, making it easier for users to stay on top of their financial goals.

### Key Features:
* **Budget Tracking**: Users can set and track their budgets.
* **Expense Management**: Allows users to log and categorize their expenses.
* **Data Visualization**: Provides charts and graphs for a better understanding of financial trends.
* **Responsive Design**: Fully mobile and desktop responsive for users to access anywhere.
* **Cloud Deployment**: Deployed using AWS EC2 for scalability and availability.
* **Real-time Monitoring**: Integrated with Prometheus and Grafana for real-time app performance tracking.

---

## 🛠 Technologies Used
* **Frontend**:
  * **React**: JavaScript library for building the user interface.
  * **Bootstrap**: Frontend framework for responsive design.
  * **Chart.js**: Library for data visualization and interactive charts.

* **Backend**:
  * **Node.js**: JavaScript runtime environment for building the backend.
  * **Express.js**: Web application framework for Node.js.

* **Containerization**:
  * **Docker**: Used to containerize the application for easy deployment and scalability.
  * **Docker Compose**: Used to manage multi-container applications.

* **Monitoring**:
  * **Prometheus**: Monitoring and alerting toolkit, integrated for real-time app performance tracking.
  * **Grafana**: Open-source platform for monitoring and observability, used for visualizing the metrics collected by Prometheus.

* **Cloud**:
  * **AWS EC2**: Cloud hosting for the application to ensure high availability and performance.

* **CI/CD**:
  * **GitHub Actions**: Automates the process of building, testing, and deploying the app.
  * **Docker Hub**: Used to store Docker images and manage versioning.

---

## 🚀 Deployment Instructions

To deploy the Personal Finance Dashboard on your local machine or on AWS EC2, follow these steps:

### 1. Clone the repository:
```bash
git clone https://github.com/SyedNasir9/personal-finance-dashboard.git
cd personal-finance-dashboard
2. Install dependencies and run the app locally:
bash
Copy code
npm install
npm start
This will start the app on http://localhost:3000.

Cloud Deployment (AWS EC2):
Launch EC2 Instance:
Go to AWS EC2 → Launch Instance → Choose Amazon Linux 2 AMI → Configure security groups to allow ports 22 (SSH) and 80 (HTTP).

SSH into your EC2 Instance:
bash
Copy code
ssh -i your-key.pem ec2-user@your-ec2-public-ip
Install Docker and Docker Compose on the EC2 instance:
bash
Copy code
sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -aG docker ec2-user
logout && log back in
Install Docker Compose:
bash
Copy code
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
Clone the repository and deploy:
bash
Copy code
git clone https://github.com/SyedNasir9/personal-finance-dashboard.git
cd personal-finance-dashboard
docker-compose up -d
Now, your app will be live on your EC2 instance's public IP.

📈 Monitoring Dashboard Guide
To monitor the performance of your app using Prometheus and Grafana, follow these steps:

1. Prometheus:
Prometheus scrapes metrics from the app’s NGINX server to monitor HTTP request rates and server performance.

Access Prometheus at http://localhost:9090 (or your EC2 IP if deployed).

2. Grafana:
Grafana is connected to Prometheus as a data source.

Access Grafana at http://localhost:3000 (or your EC2 IP if deployed).

Login using admin/admin.

Create dashboards to visualize metrics like requests, memory usage, and CPU load.

For example, you can create a dashboard to visualize the following NGINX metrics:

nginx_connections_active

nginx_connections_handled

nginx_http_requests_total

You can also create custom queries in Grafana to show specific metrics you are interested in.

🩺 Health Check Status Info
You can check the health status of the application by visiting the /health endpoint. This is helpful to verify that the application is running as expected.

Health Check Endpoint:
bash
Copy code
GET /health
Response:

json
Copy code
{
  "status": "healthy"
}
If the health check fails, investigate the logs and metrics for any issues.

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
