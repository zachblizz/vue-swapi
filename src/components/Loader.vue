<template>
  <div class="wrapper">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>


<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.spinner {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
}

.spinner::after {
  animation: spin 1s linear infinite;
  border: 3px solid #ddd;
  border-top-color: var(--button-bg);
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
</style>