<template>
  <div>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 9 }" @submit="handleNextStep">
      <a-form-item :label="$t('newFlashcardSet.firstStage.name.label')">
        <a-input
          v-decorator="['name', { rules: [{ required: true, message: $t('newFlashcardSet.firstStage.name.message') }] }]"
        />
      </a-form-item>
      <a-form-item :label="$t('newFlashcardSet.firstStage.description.label')">
        <a-textarea
          v-decorator="['description', { rules: [{ required: false, message: $t('newFlashcardSet.firstStage.description.message') }] }]"
          :auto-size="{ minRows: 2, maxRows: 6 }"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          {{ $t('newFlashcardSet.firstStage.nextStep') }}
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'FlashcardFirstStage',
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'flashcardSet' });
  },
  methods: {
    handleNextStep(e) {
      e.preventDefault();
      this.form.validateFields((err, fieldsValue) => {
        if (err) return;

        const values = {
          ...fieldsValue,
          description: fieldsValue['description'] ? fieldsValue['description'] : '',
        };

        this.$emit('infoSubmit', values);
      });
    },
  },
};
</script>
