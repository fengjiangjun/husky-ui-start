<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <div class="page-button-group">
      <hy-button outerClass="round"
                 size="large">default</hy-button>
      <hy-button size="large"
                 type="primary">primary</hy-button>
      <hy-button size="large"
                 type="danger">danger</hy-button>
    </div>

    <div class="page-button-group">
      <hy-button>default</hy-button>
      <hy-button type="primary">primary</hy-button>
      <hy-button type="danger">danger</hy-button>
    </div>

    <div class="page-button-group">
      <hy-button size="small">default</hy-button>
      <hy-button size="small"
                 type="primary">primary</hy-button>
      <hy-button size="small"
                 type="danger">danger</hy-button>
    </div>

    <div class="page-button-group">
      <hy-button disabled
                 size="large">default</hy-button>
      <hy-button disabled
                 size="large"
                 type="primary">primary</hy-button>
      <hy-button disabled
                 size="large"
                 type="danger">danger</hy-button>
    </div>

    <div class="page-button-group">
      <hy-button plain
                 size="large">default</hy-button>
      <hy-button plain
                 size="large"
                 type="primary">primary</hy-button>
      <hy-button plain
                 size="large"
                 type="danger">danger</hy-button>
    </div>

    <div class="page-button-group">
      <hy-button>
        <img src="../../../src/assets/img/100x100.png"
             height="20"
             width="20"
             slot="icon">
        带自定义图标
      </hy-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-button'
};
</script>

<style lang="css">
@component-namespace page {
  @component button {
    padding: 0 15px 15px;
    @descendent group {
      margin-bottom: 15px;
      & > * {
        margin-bottom: 15px;
      }
    }
  }
}
.round {
  border-radius: 50%;
}
</style>