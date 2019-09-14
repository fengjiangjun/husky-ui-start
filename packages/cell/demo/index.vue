<template>
  <div>
    <hy-cell title='标题文字'></hy-cell>
    <hy-cell title='标题文字'
             value='说明文字'></hy-cell>
    <hy-cell title="标题文字"
             to="//github.com"
             is-link
             value="带链接"></hy-cell>
    <hy-cell title="标题文字"
             icon="more"
             value="带 icon"></hy-cell>
    <hy-cell title="标题文字">
      <span>icon 是图片</span>
      <img slot="icon"
           src="https://img.yzcdn.cn/vant/logo.png"
           width="24"
           height="24">
    </hy-cell>
    <hy-cell title="标题文字"
             is-link>
      <span style="color: red">这里是元素</span>
    </hy-cell>
    <hy-cell title="标题文字"
             label="描述信息"
             is-link></hy-cell>
    <hy-cell title="标题文字">
      <hy-button size="small"
                 type="danger">按钮</hy-button>
    </hy-cell>
  </div>
</template>