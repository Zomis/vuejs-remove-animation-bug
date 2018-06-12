<template>
  <div class="card-property">
    <button class="btn btn-sm active fa" :class="`btn-info fa-tint`" style="cursor:default" title="Mana Cost">
      {{ value }}
    </button>
    <transition-group name="diff-once" class="pos-absolute" tag="div" @after-enter="removeDiff()">
      <button v-for="diff in diffs" :key="diff.id"
        class="btn btn-sm active fa diff-once" :class="`btn-info fa-tint`" style="cursor:default">
        {{diff.value}}
      </button>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "Value",
  props: ["value"],
  data() {
    return {
      diffs: [],
      diffId: 0
    };
  },
  methods: {
    removeDiff() {
      this.diffs.splice(0, 1);
    }
  },
  watch: {
    value: function(newValue, oldValue) {
      console.log(typeof newValue);
      let diff = newValue - oldValue;
      this.diffs.push({value: diff, id: this.diffId});
      this.diffId++;
    }
  }
}
</script>
<style>
.card-property {
    position: relative;
}

.diff-once-leave-active {
  transition: all 1s;
  position: absolute;
}

.pos-absolute {
  position: absolute;
  top: 0;
  left: 0;
}

.diff-once-leave {
  opacity: 1;
}

.diff-once-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
