<template>
  <div>
    <p>{{ count }}</p>
    <button @click="addCount">添加</button>
    <ul>
      <li
        v-for="item in state.stus"
        :key="item.id"
        @click="removeStus(item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
    <input type="text" v-model="state2.stu.id" />
    <input type="text" v-model="state2.stu.name" />
    <input type="text" v-model="state2.stu.age" />
    <button @click="addStudent">添加</button>
  </div>
</template>



<script type="text/ecmascript-6">
import { ref, reactive, h } from "vue";
import { useAddStudent, useRemoveStudent } from "./js/setup";
export default {
  name: "",
  setup() {
    let { count, addCount, state, removeStus } = useRemoveStudent();
    let { state2, addStudent } = useAddStudent(state);
    return { count, addCount, state, removeStus, state2, addStudent };
  },
};
</script>



<style lang="less" scoped>
</style>