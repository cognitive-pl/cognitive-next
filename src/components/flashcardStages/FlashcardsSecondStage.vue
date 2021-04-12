<template>
  <div>
    <p>{{ $t('newFlashcardSet.secondStage.description') }}</p>
    <a-list item-layout="horizontal" :data-source="flashcardSet">
      <a-list-item slot="renderItem" slot-scope="{ firstSide, secondSide }, index">
        <a slot="actions">
          <a-icon
            type="minus-circle-o"
            @click="handleCardRemove(index)"
          />
        </a>
        <a-list-item-meta
          :title="firstSide"
          :description="secondSide"
        ></a-list-item-meta>
      </a-list-item>
    </a-list>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 10 }" @submit="handleSubmit">
      <a-form-item :label="$t('newFlashcardSet.secondStage.firstSide.label')">
        <a-textarea
          ref="firstSideInput"
          v-decorator="['firstSide', { rules: [{ required: true, message: $t('newFlashcardSet.secondStage.firstSide.message') }] }]"
          :auto-size="{ minRows: 2, maxRows: 4 }"
        />
      </a-form-item>
      <a-form-item :label="$t('newFlashcardSet.secondStage.secondSide.label')">
        <a-textarea
          v-decorator="['secondSide', { rules: [{ required: true, message: $t('newFlashcardSet.secondStage.secondSide.message') }] }]"
          :auto-size="{ minRows: 2, maxRows: 4 }"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 5 }">
        <a-button type="dashed" icon="plus" @click="handleAddCard">{{ $t('newFlashcardSet.secondStage.addCard')}} </a-button>
      </a-form-item>
      <a-form-item
        style='display: inline-block; margin-right: 10px'
      >
        <a-button @click.once="$emit('back')">
          {{ $t('newFlashcardSet.secondStage.previousStep') }}
        </a-button>
      </a-form-item>
      <a-form-item style='display: inline-block'>
        <a-button type="primary" html-type="submit">
          {{ $t('newFlashcardSet.secondStage.nextStep') }}
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'FlashcardsSecondStage',
  data: function () {
    return {
      flashcardSet: [],
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'flashcards' });
  },
  methods: {
    handleCardRemove(index) {
      this.flashcardSet = this.flashcardSet.filter((card, cardIndex) => cardIndex != index);
    },
    handleAddCard(e) {
      e.preventDefault();
      this.form.validateFields((err, { firstSide, secondSide }) => {
        if (err) return;
        this.flashcardSet.push({
          firstSide,
          secondSide,
          section: 1,
        });
        this.form.clearField('firstSide');
        this.form.clearField('secondSide');
        this.$refs['firstSideInput'].focus();
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      if (this.flashcardSet.length > 0) {
        this.$emit('flashcardsSubmit', this.flashcardSet);
      } else this.$message.error(this.$t('newFlashcardSet.secondStage.oneCard'));
    },
  },
};
</script>
