<template>
  <Modal
    title="添加"
    :value="value"
    :mask-closable="true"
    :footer-hide="true"
    @input="$emit('input', $event)"
  >
    <Form
      ref="formEmployment"
      :model="formEmployment"
      :rules="ruleValidate"
      label-position="right"
      :label-width="80"
    >
      <FormItem label="请选择" :label-width="100" prop="iconid">
        <Select v-model="formEmployment.iconid" style="width:200px">
          <Option v-for="item in cityList" :value="item.id" :key="item.id">{{ item.icname }}</Option>
        </Select>
      </FormItem>
      <FormItem label="招聘人数" :label-width="100" prop="pnumber">
        <InputNumber :min="1"  type="number" v-model="formEmployment.pnumber" placeholder="招聘人数"    style="width:100%"/>
      </FormItem>

      <FormItem label="招聘详情" :label-width="100" prop="skill">
        <rich-text style="margin-bottom: 5%" :value="formEmployment.skill"  @on-change="richTextChange($event)"></rich-text>
      </FormItem>

      <FormItem>
        <Button type="primary" @click="handleSubmit('formEmployment')">提交</Button>
        <Button @click="handleReset('formEmployment')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </Modal>
</template>
<script>
  import { save,list1 } from '@/api/employment'
  import { createModelObj } from '@/libs/util'
  import richText from "../richText/richText";
  export default {
    name: 'Add',
    components: {richText},
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        cityList:[],
        formEmployment: {
          iconid:'',
          id:'',
          pnumber:'',
          skill:'',
        },
        ruleValidate: {
        }
      }
    },
    methods: {
      richTextChange(res){
        this.formEmployment.skill = res;
      },
      handleSubmit (name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            save(Object.assign({}, createModelObj(this.formEmployment, 'employment'))).then(
              res => {
                if (res) {
                  this.$emit('addRow', res.row)
                  this.$emit('input', false)
                  this.handleReset(name)
                }
              }
            )
          } else {
            this.$Message.error('验证失败!')
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      },
      initData () {

        list1().then(
          res => {
            this.cityList = res

          }
        )
      }
    },
    watch: {
      value: function (val, oldVal) {
        this.initData()
      }
    }
  }
</script>
