<template>
  <div class="bugrepro">
    <div class="empty-space"></div>
    <Value :value="someNumber"></Value>
    <button @click="change()">Change it!</button>
  </div>
</template>
<script>
import Value from "./Value"

export default {
  name: "BugRepro",
  data() {
    return {
      someNumber: 20
    };
  },
  components :{
      Value
  },
  methods: {
    change() {
      this.someNumber += 1;
    }
  }
};
</script>
<style>
.empty-space {
  margin-top: 100px;
}
</style>
