import { defineComponent, ref, Ref } from 'vue';
export default defineComponent({
  // name: 'Test',
  setup() {
    const current: Ref<string | number> = ref('你好');
    return {
      current,
      handleTest() {
        current.value = Math.random() * 1000;
      }
    };
  },
  render() {
    return (
      <div>
        <div style="padding: 20px">{this.current}</div>
        <div>
          <n-button onClick={this.handleTest}>点击</n-button>
        </div>
      </div>
    );
  }
});
