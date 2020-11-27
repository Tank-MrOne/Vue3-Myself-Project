import { ref, reactive } from "vue";
export function useRemoveStudent() {
    let count = ref(0);
    let state = reactive({
        stus: [
            { id: 1, name: "zs", age: 10 },
            { id: 2, name: "ls", age: 20 },
            { id: 3, name: "ww", age: 30 },
        ],
    });
    function addCount() {
        count.value += 1;
    }
    function removeStus(id) {
        state.stus = state.stus.filter((item) => {
            return item.id !== id;
        });
    }
    return { count, addCount, state, removeStus };
}

export function useAddStudent(state) {
    let state2 = reactive({
        stu: {
            id: '',
            name: '',
            age: ''
        }
    })
    function addStudent() {
        state.stus.push({
            id: state2.stu.id,
            name: state2.stu.name,
            age: state2.stu.age,
        })
        state2.stu.id = ''
        state2.stu.name = ''
        state2.stu.age = ''
    }
    return { state2, addStudent }
}