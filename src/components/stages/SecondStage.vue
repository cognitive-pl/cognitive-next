<template>
  <div>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 10 }" @submit="handleSubmit">
      <p>{{ $t('newUnit.secondStage.description') }}</p>
      <a-form-item :label="$t('newUnit.secondStage.parts.label')">
        <p v-for="(part, index) in parts" :key="index">
          {{part}}
          <a-icon
            type="minus-circle-o"
            @click="handlePartRemove(index)"
          />
        </p>
        <a-input
          ref="partInput"
          v-decorator="['partValue', { rules: [{ required: true, message: $t('newUnit.secondStage.parts.message') }] }]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 5 }">
        <a-button type="dashed" icon="plus" @click="handleAddPart">{{ $t('newUnit.secondStage.addPart') }}</a-button>
      </a-form-item>
      <a-form-item
        style='display: inline-block; margin-right: 10px'
      >
        <a-button @click.once="$emit('back')">
          {{ $t('newUnit.secondStage.previousStep') }}
        </a-button>
      </a-form-item>
      <a-form-item
        style='display: inline-block'
      >
        <a-button type="primary" html-type="submit">
          {{ $t('newUnit.secondStage.nextStep') }}
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
        this.$refs['partInput'].focus();
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      if (this.parts.length > 0) {
        this.$emit('partsSubmit', this.parts);
      } else this.$message.error(this.$t('newUnit.secondStage.error'));
    },
  },
};
</script>
