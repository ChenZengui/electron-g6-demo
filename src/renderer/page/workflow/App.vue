<template>
  <div class="main">
    <div class="main-bottom" id="graph-container"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  data() {
    return {
      graph: null,
    };
  },
  components: {},
  name: "design",
  mounted() {
    const data = {
      nodes: [
        {
          id: "node0",
          shape: "rect",
          // 其他配置
        },
        // 其他节点
      ],
    };
    this.graph = new G6.Graph({
      container: "graph-container",
      height: 400,
      width: 200,
    });
    this.graph.data(data);
    this.graph.render();
  },
};
</script>

<style>
/* CSS */
</style>
