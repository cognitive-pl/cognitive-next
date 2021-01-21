<template>
  <div>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 10 }" @submit="handleSubmit">
      <p>Divide whole material into parts that you will learn in time of one session.</p>
      <a-form-item label="Parts">
        <p v-for="(part, index) in parts" :key="index">
          {{part}}
          <a-icon
            type="minus-circle-o"
            @click="handlePartRemove(index)"
          />
        </p>
        <a-input
          v-decorator="['partValue', { rules: [{ required: true, message: 'Please input part!' }] }]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 5 }">
        <a-button type="dashed" icon="plus" @click="handleAddPart">Add part</a-button>
      </a-form-item>
      <a-form-item
        style='display: inline-block; margin-right: 10px'
      >
        <a-button @click.once="$emit('back')">
          Previous step
        </a-button>
      </a-form-item>
      <a-form-item
        style='display: inline-block'
      >
        <a-button type="primary" html-type="submit">
          Next step
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'SecondStage',
  data: function () {
    return {
      parts: [],
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'unit' });
  },
  methods: {
    handlePartRemove(index) {
      this.parts = this.parts.filter((part, partIndex) => partIndex != index);
    },
    handleAddPart(e) {
      e.preventDefault();
      this.form.validateFields((err, { partValue }) => {
        if (err) return;
        this.parts.push(partValue);
        this.form.clearField('partValue');
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      if (this.parts.length > 0) {
        this.$emit('partsSubmit', this.parts);
      } else this.$message.error('Please input at least one part');
    },
  },
};
</script>
