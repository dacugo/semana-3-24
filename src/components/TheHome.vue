<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>
        <form class="d-flex">
          <button class="btn btn-outline-secondary" type="submit" @click.prevent="logOut">
            Logout
          </button>
        </form>
      </div>
    </nav>

    <div class="container text-center">
      <h2>{{ user.nombre }}</h2>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {},
      };
    },
    methods: {
      getUserDetails() {
        let user = localStorage.getItem("user");
        let token = localStorage.getItem("jwt");

        if (token) {
          this.user = JSON.parse(user);
        }
      },
      logOut() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        this.$router.push("/");
      },
    },

    created() {
      this.getUserDetails();
    },
  };
</script>
