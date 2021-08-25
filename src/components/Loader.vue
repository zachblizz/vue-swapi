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
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
}

.spinner::after {
  animation: spin .75s linear infinite;
  border: var(--loader-border);
  border-top-color: var(--loader-top-border);
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
</style>