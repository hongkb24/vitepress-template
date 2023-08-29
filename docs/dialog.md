## Dialog 组件

### 使用组件

在模板中使用 Dialog 组件：

```vue
<template>
  <div>
    <!-- 其他内容 -->
    <Dialog
      :visible="dialogVisible"
      :formList="formList"
      :formModel="formModel"
      @confirm="handleConfirm"
      @close="handleClose"
    >
      <!-- 自定义内容插槽 -->
      <template #formTop>
        <!-- 自定义表单顶部内容 -->
      </template>
      <template #formFooter>
        <!-- 自定义表单底部内容 -->
      </template>
      <!-- 自定义底部按钮插槽 -->
      <template #footer>
        <!-- 自定义底部按钮 -->
      </template>
    </Dialog>
  </div>
</template>
```

## Props

| 属性          | 类型    | 默认值  | 描述                                                         |
| ------------- | ------- | ------- | ------------------------------------------------------------ |
| confirmBtn    | Boolean | true    | 是否显示确认按钮                                             |
| formItemWidth | Number  | 8       | 每一项表单元素的宽度                                         |
| contentHeight | Number  | 10      | 内容高度，超出部分可滚动                                     |
| labelWidth    | Number  | 70      | 表单标签的宽度                                               |
| formRules     | Object  | {}      | 表单验证规则                                                 |
| formList      | Array   | []      | 表单字段配置列表，格式为 `[{ label: '标签名称', prop: '属性名', type: 'img|enum|time', enum: '枚举名' }]` |
| formModel     | Object  | {}      | 表单数据对象                                                 |
| visible          | Boolean | false   | 控制对话框的显示和隐藏                                       |
| width         | Number  | 50      | 对话框的宽度                                                 |
| top           | Number  | 10      | 对话框距离顶部的距离，单位为百分比                           |
| title         | String  |         | 对话框的标题，默认为 "提示"                                  |
| showClose     | Boolean | true    | 是否显示关闭按钮                                             |
| showTitle     | Boolean | true    | 是否显示标题                                                 |
| labelPosition | String  | 'right' | 表单标签的位置，可选值为 'left'、'right'、'top'              |

## Events

| 事件名称     | 参数    | 描述                         |
| ------------ | ------- | ---------------------------- |
| update:visible  | Boolean | 对话框显示状态发生变化时触发 |
| selectChange | Object  | el-select 选择发生变化时触发 |
| confirm      | -       | 点击确认按钮时触发           |
| close        | -       | 关闭对话框时触发             |

## Slots

| 插槽名称   | 描述             |
| ---------- | ---------------- |
| formTop    | 表单顶部内容插槽 |
| formFooter | 表单底部内容插槽 |
| footer     | 底部按钮插槽     |

## 示例

以下示例演示了如何使用 Dialog 组件：

```vue
<template>
  <div>
    <el-button @click="dialogVisible = true">打开对话框</el-button>
    <Dialog
      :visible="dialogVisible"
      :formList="formList"
      :formModel="formModel"
      @confirm="handleConfirm"
      @close="handleClose"
    >
      <!-- 自定义内容插槽 -->
      <template #formTop>
        <div>自定义表单顶部内容</div>
      </template>
      <template #formFooter>
        <div>自定义表单底部内容</div>
      </template>
      <!-- 自定义底部按钮插槽 -->
      <template #footer>
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog.vue';

export default {
  components: {
    Dialog
  },
  data() {
    return {
      dialogVisible: false,
      formList: [
        [
          { label: '姓名', prop: 'name' },
          { label: '年龄', prop: 'age' }
        ],
        [
          { label: '性别', prop: 'gender', type: 'enum', enum: 'genderEnum' }
        ]
      ],
      formModel: {
        name: '',
        age: '',
        gender: ''
      }
    };
  },
  methods: {
    handleConfirm() {
      // 处理确认逻辑
      console.log('确认');
      this.dialogVisible = false;
    },
    handleClose() {
      // 处理关闭逻辑
      console.log('关闭');
      this.dialogVisible = false;
    }
  }
}
</script>
```

以上示例中，点击 "打开对话框" 按钮会显示一个对话框，包含一个表单，用户可以输入姓名、年龄和选择性别。用户点击 "确认" 按钮时会触发 `handleConfirm` 方法，点击 "关闭" 按钮或对话框外部区域时会触发 `handleClose` 方法，关闭对话框。用户可以自定义表单的顶部内容、底部内容和底部按钮。
