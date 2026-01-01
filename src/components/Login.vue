<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h2 class="title">Login</h2>

      <div class="form-grid">
        <div class="form-group full-width">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            v-model="email"
          />
        </div>

        <div class="form-group full-width">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            v-model="password"
          />
        </div>
      </div>

      <p v-if="error" class="error">{{ error }}</p>

      <div class="button-group">
        <button class="btn primary" @click="login">
          Login
        </button>
      </div>

      <p class="link-text">
        Don’t have an account?
        <RouterLink to="/registration">Register</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const emit = defineEmits<{
  (e:'login-success',user:{email:string}) :void
}>()

function login() {
  // if (!email.value || !password.value) {
  //   error.value = 'All fields are required'
  //   return
  // }

  // // Dummy auth
  // localStorage.setItem('token', 'demo-token')
  // router.push('/dashboard')

  if(email.value && password.value){
    emit('login-success',{email: email.value})
  }
}
</script>

<style scoped>
/* Wrapper – same background as content */
.login-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

/* Card – SAME as registration */
.login-card {
  width: 420px;
  background: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

/* Title */
.title {
  text-align: center;
  margin-bottom: 24px;
  color: #1f2937;
}

/* Grid */
.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.full-width {
  grid-column: span 3;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #374151;
}

input {
  padding: 10px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #2563eb;
}

/* Button */
.button-group {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.btn {
  padding: 10px 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.primary {
  background: #2563eb;
  color: #fff;
}

.primary:hover {
  background: #1e40af;
}

/* Error */
.error {
  color: #ef4444;
  font-size: 13px;
  text-align: center;
  margin-top: 10px;
}

/* Bottom link */
.link-text {
  text-align: center;
  margin-top: 16px;
  font-size: 13px;
}

.link-text a {
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}
</style>
