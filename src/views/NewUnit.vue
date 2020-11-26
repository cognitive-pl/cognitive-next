<template>
  <div>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleAddUnit">
      <a-form-item label="Name">
        <a-input
          v-decorator="['name', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Description">
        <a-textarea
          v-decorator="['description', { rules: [{ required: true, message: 'Please input description!' }] }]"
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
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" icon="plus" html-type="submit">
          Add Unit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { db } from '@/initFirebase';

export default {
  name: 'NewUnit',
  data: function () {
    return {
      name: '',
    };
  },
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
          deadline: fieldsValue['deadline'].format('YYYY-MM-DD HH:mm:ss'),
        };

        db.collection('units').add(values)
          .then(() => {
            this.$notification['success']({
              message: 'Great!',
              description: 'You just made new unit, happy learning!',
            });
          });
        this.form.resetFields();
      });
    },
  },
};
</script>
