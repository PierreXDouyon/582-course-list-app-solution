<template>
  <input v-model="message" placeholder="My name" />
  <p>Student Name is: {{ message }}</p>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      message: "",
    };
  },
};
</script>
