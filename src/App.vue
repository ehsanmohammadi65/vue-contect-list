<template>
  <section>
    <header><h1>My Friends</h1></header>

    <new-friend @toggle-newFriend="setData"></new-friend>
    <ul>
      <friend-contect
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavorite"
        @toggle-delete="deleteContect"
      ></friend-contect>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "012 2345 3434 ",
          email: "no@gmail.com",
          isFavorite: false,
        },
        {
          id: "lora",
          name: "Lora Cage",
          phone: "032 5432 1432 ",
          email: "lora@gmail.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(friendId) {
      const identFindFriend = this.friends.find(
        (friend) => friend.id === friendId
      );

      identFindFriend.isFavorite = !identFindFriend.isFavorite;
    },
    setData(val) {
      console.log(val);
      this.friends.unshift(val);
    },
    deleteContect(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
};
</script>
<style>
body {
  background-color: black;
}

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #f58840;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  background-color: #eadede;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  margin: 2%;
  font: inherit;
  cursor: pointer;
  border: 1px solid #0066ff;
  background-color: #0066ff;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
