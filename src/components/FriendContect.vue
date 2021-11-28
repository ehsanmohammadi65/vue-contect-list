<template>
  <li>
    <h2>{{ name }}{{ isFavorite === true ? "(Farvorite)" : "" }}</h2>
    <button @click="toggleDetails()">Show Details</button>
    <button @click="oncheck()">
      {{ isFavorite === false ? "addFavorite" : "removeFavorite" }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phone }}</li>
      <li><strong>Email: </strong>{{ email }}</li>
      <button @click="$emit('toggle-delete', id)">Delete</button>
    </ul>
  </li>
</template>
<script>
export default {
  //model 1 props easy
  //props: ["id", "name", "phone", "email", "isFavorite"],
  emits: ["toggle-favorite", "toggle-delete"],
  props: {
    id: {
      Type: String,
      require: true,
    },
    name: { Type: String, require: true },
    phone: { Type: String, require: true },
    email: { Type: String, require: true },
    isFavorite: { Type: Boolean, require: false, default: false },
  },

  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    oncheck() {
      //this.fariendisfavorite = !this.fariendisfavorite;
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
<style></style>
