<template>
    <Login v-if="isLoginPage" @login-success="onLoginSuccess" />
  <div class="layout">
    <!-- Header -->
    <header class="header">
      CRUD Application
    </header>

    <!-- Main Area -->
    <div class="main">
      <!-- Navbar -->
      <nav class="navbar">
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/Registration">Registration</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/About">About Us</RouterLink>
        <RouterLink to="/Contact">Contact Us</RouterLink>
      </nav>


      <!-- Body -->
      <section class="content">
        <RouterView />
      </section>
    </div>

    <!-- Footer -->
    <footer class="footer">
      © 2025 CRUD App
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { useRoute, useRouter } from 'vue-router'
import Login from './components/Login.vue'
import Layout from './Layout.vue'

const route = useRoute()
const router = useRouter()

const isLoginPage = route.path === '/login'

const onLoginSuccess = (user: { email: string }) => {
  console.log('Logged in user:', user)
  router.push('/dashboard')
}

</script>

<style>
  /* FULL SCREEN */
html, body, #app {
  height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
}

/* LAYOUT */
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* HEADER */
.header {
  height: 60px;
  background: #2563eb;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-weight: bold;
}

/* MAIN AREA */
.main {
  flex: 1;
  display: flex;
}

/* NAVBAR */
.navbar {
  width: 200px;
  background: #f3f4f6;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.navbar a {
  text-decoration: none;
  color: #111827;
  padding: 8px;
}

.navbar a.router-link-active {
  background: #2563eb;
  color: white;
}

/* CONTENT */
.content {
  flex: 1;
  padding: 20px;
  background: #ffffff;
}

/* FOOTER */
.footer {
  height: 40px;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 13px;
}

  </style>