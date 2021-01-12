<template>
  <div>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 9 }" @submit="handleAddUnit">
      <a-form-item label="Name">
        <a-input
          v-decorator="['name', { rules: [{ required: true, message: 'Please input unit name!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Description">
        <a-textarea
          v-decorator="['description', { rules: [{ required: false, message: 'Please input description!' }] }]"
          :auto-size="{ minRows: 2, maxRows: 6 }"
        />
      </a-form-item>
      <a-form-item label="Deadline">
        <a-date-picker
          v-decorator="['deadline', { rules: [{ required: true, message: 'Please input deadline!' }] }]"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          Next step
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'FirstStage',
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'unit' });
  },
  methods: {
    handleAddUnit(e) {
      e.preventDefault();
      this.form.validateFields((err, fieldsValue) => {
        if (err) return;

        const values = {
          ...fieldsValue,
          description: fieldsValue['description'] ? fieldsValue['description'] : '',
          deadline: fieldsValue['deadline'].format('YYYY-MM-DD HH:mm:ss'),
        };

        this.$emit('infoSubmit', values);
      });
    },
  },
};
</script>
