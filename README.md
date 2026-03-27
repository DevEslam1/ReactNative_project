<div align="center">

# 🌟 React Native Auth Flow

*A beautifully designed, seamless authentication UI for modern React Native apps.*

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)

</div>

---

## 🚀 Overview

This app features a fully functional, aesthetically pleasing Authentication flow built with Expo and React Native. It showcases best practices for structuring auth components, sharing styles, and maintaining state.

## ✨ Key Features

- **🔐 Login Screen:** A clean, gradient-based UI to handle user sign-in.
- **📝 Sign Up Screen:** An intuitive interface for creating a new account, perfectly integrated with the login flow.
- **⚡ Seamless Navigation:** Root-level state navigation powered by `SafeAreaProvider`, ensuring zero layout flashing during screen transitions.
- **🎨 DRY Shared Styles:** Extracted authentication styles into a standalone file (`login_style.js`) for better maintainability.

---

## 📂 Project Structure

We follow a clean, feature-driven folder architecture:

```text
📦 features
 ┗ 📂 auth
   ┣ 📜 index.js         # Exports components cleanly
   ┣ 📜 login_page.js    # Login UI Layout
   ┣ 📜 signup_page.js   # Sign Up UI Layout
   ┗ 📜 login_style.js   # Shared authentication stylesheet
📜 App.js                # App entry point & Routing
```

---

## 🛠️ Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Start the Application

Launch the Expo development server:

```bash
npx expo start
```

*Scan the QR code printed in the terminal with the **Expo Go** app on your phone to view it instantly!*

---

## 📱 Tech Stack

- **[React Native Safe Area Context](https://docs.expo.dev/versions/latest/sdk/safe-area-context/)** - For handling device notches and safe areas gracefully.
- **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** - For rendering smooth, immersive background gradients.

---

<div align="center">
  <i>Ready for further development! 🚀</i>
</div>
