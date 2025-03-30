# ApprovalFunctionApp UI

## 📌 Overview
ApprovalFunctionApp UI is the **frontend application** for interacting with the **ApprovalFunctionApp backend**. It allows users to **start an approval request, approve, or reject requests** via a clean and responsive web interface.

---

## 🚀 Features
✅ **Built with Angular**
✅ **State Management with Services**
✅ **Localization with @ngx-translate**
✅ **API Integration with Azure Functions**
✅ **UI/UX Best Practices**
✅ **Unit Testing with Jasmine & Karma**

---

## 🏗️ Project Structure
```
ApprovalFunctionApp-UI/
│-- src/
│   │-- app/
│   │   │-- components/             # Reusable components
│   │   │-- pages/                  # Application pages
│   │   │-- services/               # API services
│   │   │-- interfaces/             # TypeScript interfaces
│   │-- assets/                     # Static assets
│   │-- environments/               # Environment configurations
│-- angular.json                    # Angular configuration
│-- package.json                     # Dependencies
│-- README.md                        # Project documentation
```

---

## ⚙️ Setup & Requirements
### 🔹 Prerequisites
- **Node.js 18+** [(Download)](https://nodejs.org/)
- **Angular CLI** (Install via npm):
  ```sh
  npm install -g @angular/cli
  ```
- **A Running Backend** (Ensure the Azure Functions backend is running)

### 🔹 Clone the Repository
```sh
git clone https://github.com/YOUR_GITHUB/ApprovalFunctionApp-UI.git
cd ApprovalFunctionApp-UI
```

### 🔹 Install Dependencies
```sh
npm install
```

---

## 🏃 Running Locally
### 🔹 Configure Environment
Update `src/environments/environment.ts` with your backend API URL:
```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:7071/api' // Change this for deployed API
};
```

### 🔹 Start the Angular App
```sh
ng serve --open
```

This will open the UI in your default browser at `http://localhost:4200`.

---

## 🌍 Deploying to Azure
### 🔹 Build for Production
```sh
ng build --configuration=production
```

### 🔹 Deploy to Azure Static Web Apps
```sh
az staticwebapp create --name YOUR_UI_APP_NAME \
    --resource-group YOUR_RESOURCE_GROUP \
    --source . \
    --location YOUR_REGION \
    --app-location "dist/approval-function-app-ui" \
    --output-location "dist/approval-function-app-ui"
```

---

## 🧪 Running Tests
```sh
ng test
```

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 📞 Need Help?
- **Issues:** Submit an issue on GitHub.
- **Angular Docs:** [Angular Official Documentation](https://angular.io/).
- **Azure Static Web Apps Docs:** [Azure Docs](https://learn.microsoft.com/en-us/azure/static-web-apps/).

🚀 Happy Coding! 🎯

