import { createApp } from "vue";
import App from "./App.vue";
import FriendContect from "./components/FriendContect.vue";
import NewFriend from "./components/NewFriend.vue";
const app = createApp(App);
app.component("friend-contect", FriendContect);
app.component("new-friend", NewFriend);

app.mount("#app");
