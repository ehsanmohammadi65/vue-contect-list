<template>
  <form @submit.prevent="setContect">
    <div>
      <label for="Name">Name:</label>
      <input type="text" id="Name" v-model="name" />
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="text" id="phone" v-model="phone" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div>
      <button>AddContect</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      id: null,
      name: null,
      phone: null,
      email: null,
      isFavorite: false,
    };
  },
  methods: {
    setContect() {
      this.id = this.name;
      const val = {
        id: new Date().toISOString(),
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: this.isFavorite,
      };
      this.$emit("toggle-newFriend", val);
    },
  },
};
</script>
<style></style>
