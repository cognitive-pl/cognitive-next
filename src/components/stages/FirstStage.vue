<template>
  <div>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 9 }" @submit="handleAddUnit">
      <a-form-item :label="$t('newUnit.firstStage.name.label')">
        <a-input
          v-decorator="['name', { rules: [{ required: true, message: $t('newUnit.firstStage.name.message') }] }]"
        />
      </a-form-item>
      <a-form-item :label="$t('newUnit.firstStage.description')">
        <a-textarea
          v-decorator="['description', { rules: [{ required: false }] }]"
          :auto-size="{ minRows: 2, maxRows: 6 }"
        />
      </a-form-item>
      <a-form-item :label="$t('newUnit.firstStage.deadline.label')">
        <a-date-picker
          v-decorator="['deadline', { rules: [{ required: true, message: $t('newUnit.firstStage.deadline.message') }] }]"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          {{ $t('newUnit.firstStage.button') }}
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
        if (fieldsValue['deadline'] < new Date()) {
          this.$message.error(this.$t('newUnit.firstStage.error'));
          return;
        }

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
