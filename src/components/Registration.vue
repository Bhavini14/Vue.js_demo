<template>
  <div class="form-container">
    <h2>User Details</h2>

    <div class="form-grid">
      <div class="form-group">
        <label>First Name</label>
        <input placeholder="Enter first name" v-model="first_Name" />
        <span class="error" v-if="errors.firstName">{{ errors.firstName }}</span>
      </div>

      <div class="form-group">
        <label>Middle Name</label>
        <input placeholder="Enter middle name" v-model="Middle_Name" />
        <span class="error" v-if="errors.middleName">{{ errors.middleName }}</span>
      </div>

      <div class="form-group">
        <label>Last Name</label>
        <input placeholder="Enter last name" v-model="last_Name" />
        <span class="error" v-if="errors.lastName">{{ errors.lastName }}</span>
      </div>

      <div class="form-group">
        <label>Address</label>
        <textarea placeholder="Enter address" v-model="address" rows="3" />
        <span class="error" v-if="errors.address">{{ errors.address }}</span>
      </div>

      <div class="form-group">
        <label>City</label>
        <select v-model="city">
          <option value="">Select Value</option>
          <option v-for="c in cities" :key="c" :value="c">{{ c }}</option>
        </select>
        <span class="error" v-if="errors.city">{{ errors.city }}</span>
      </div>

      <div class="form-group">
        <label>Contact No</label>
        <input placeholder="Enter contact number" v-model="cno" />
        <span class="error" v-if="errors.contact">{{ errors.contact }}</span>
      </div>
    </div>

    <!-- grid -->
    <div class="form-group full-width">
      <div class="button-group">
        <button class="btn primary" @click="create">Create</button>
      </div>
      <div class="table-wrapper">
        <table class="grid">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(user, index) in users" :key="index" :class="{ selected: selected === index }">
              <td>{{ index + 1 }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.middleName || '-' }}</td>
              <td>{{ user.lastName }}</td>
              <td class="ellipsis">{{ user.address }}</td>
              <td>{{ user.city }}</td>
              <td>{{ user.contact }}</td>
              <td class="action-cell">
                <button class="icon-btn edit" @click="editUser(user, index)">
                  ✏️
                </button>
                <button class="btn warning" @click="update" :disabled="selected === null">
                  Update
                </button>

                <button class="icon-btn delete" @click="deleteUser(index)">
                  🗑️
                </button>
              </td>
            </tr>

            <tr v-if="!users.length">
              <td colspan="8" class="empty-state">
                No records found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const first_Name = ref('')
const Middle_Name = ref('')
const address = ref('')
const city = ref('')
const cno = ref('')
const last_Name = ref('')
const users = ref([]);
const selected = ref(null)
const errors = ref({})


const cities = ref([

  'Surat',
  'Ahmedabad',
  'Bardoli',
  'Baroda',
  'Rajkot'

])

function validateForm() {
  errors.value = {}

  if (!first_Name.value.trim())
    errors.value.firstName = 'First name is required'

  if (!Middle_Name.value.trim())
    errors.value.middleName = 'Middle name is required'

  if (!last_Name.value.trim())
    errors.value.lastName = 'Last name is required'

  if (!address.value.trim())
    errors.value.address = 'Address is required'

  if (!city.value)
    errors.value.city = 'City is required'

  if (!cno.value.trim())
    errors.value.contact = 'Contact number is required'

  return Object.keys(errors.value).length === 0
}


function create() {

  if (!validateForm()) return
  users.value.push({
    firstName: first_Name.value,
    middleName: Middle_Name.value,
    lastName: last_Name.value,
    address: address.value,
    city: city.value,
    contact: cno.value
  })

  clearForm()
}

function clearForm() {
  first_Name.value = ''
  Middle_Name.value = ''
  last_Name.value = ''
  address.value = ''
  city.value = ''
  cno.value = ''
  selected.value = null
}

function deleteUser(index) {
  users.value.splice(index, 1)
  clearForm()
}

function update() {
  if (selected.value === null) return
  if (!validateForm()) return

  users.value[selected.value] = {
    firstName: first_Name.value,
    middleName: Middle_Name.value,
    lastName: last_Name.value,
    address: address.value,
    city: city.value,
    contact: cno.value
  }

  clearForm()
}

function editUser(user, index) {
  selected.value = index

  first_Name.value = user.firstName
  Middle_Name.value = user.middleName
  last_Name.value = user.lastName
  address.value = user.address
  city.value = user.city
  cno.value = user.contact
}



</script>

<style scoped>
.form-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 24px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

h2 {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.full-width {
  grid-column: span 3;
}

label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #555;
}

input,
select {
  padding: 10px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

input:focus,
select:focus {
  outline: none;
  border-color: #3b82f6;
}

.name-select {
  width: 100%;
}

.button-group {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 12px;
}

.btn {
  padding: 10px 18px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.primary {
  background: #3b82f6;
  color: #fff;
}

.warning {
  background: #f59e0b;
  color: #fff;
}

.danger {
  background: #ef4444;
  color: #fff;
}

.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.grid tr.active {
  background-color: #e0f2fe;
}


.table-wrapper {
  margin-top: 30px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.grid {
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  font-size: 14px;
}

.grid thead {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
}

.grid th,
.grid td {
  padding: 12px 14px;
  text-align: left;
}

.grid th {
  font-weight: 600;
  letter-spacing: 0.3px;
}

.grid tbody tr {
  transition: background 0.2s ease;
}

.grid tbody tr:hover {
  background: #f1f5f9;
  cursor: pointer;
}

.grid tbody tr.selected {
  background: #dbeafe;
}

.grid tbody tr:not(:last-child) {
  border-bottom: 1px solid #e5e7eb;
}

/* Address ellipsis */
.ellipsis {
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Actions */
.action-cell {
  display: flex;
  gap: 8px;
}

.icon-btn {
  border: none;
  padding: 6px 8px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: transform 0.1s ease, background 0.2s;
}

.icon-btn.edit {
  background: #e0f2fe;
}

.icon-btn.delete {
  background: #fee2e2;
}

.icon-btn:hover {
  transform: scale(1.05);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 20px;
  color: #6b7280;
  font-style: italic;
}

textarea {
  padding: 10px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
  min-height: 70px;
}

textarea:focus {
  outline: none;
  border-color: #3b82f6;
}

.error {
  color: #dc2626;
  font-size: 12px;
  margin-top: 4px;
}

input.ng-invalid,
textarea.ng-invalid,
select.ng-invalid {
  border-color: #dc2626;
}
</style>
