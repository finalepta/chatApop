<template>
  <div class="not-found">
    <h1>Oops! Page not found</h1>
    <p>We're sorry, the page you requested could not be found.</p>
    <span class="link"><router-link to="/">Go to homepage</router-link></span>
  </div>
</template>

<style>
.not-found {
  text-align: center;
  padding: 20px;
}
a {
  color: white;
}
</style>
