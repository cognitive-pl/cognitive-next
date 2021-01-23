<template>
  <div>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 10 }" @submit="handleSubmit">
      <p>Here you can add your cards to your set.</p>
      <a-list item-layout="horizontal" :data-source="flashcardSet">
        <a-list-item slot="renderItem" slot-scope="{ firstSide, secondSide }, index" :key="index">
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
      <a-form-item label="First side">
        <a-input
          v-decorator="['firstSide', { rules: [{ required: true, message: 'Please input first side of flashcard!' }] }]"
          ref="firstSideInput"
        />
      </a-form-item>
      <a-form-item label="Second side">
        <a-input
          v-decorator="['secondSide', { rules: [{ required: true, message: 'Please input second side of flashcard!' }] }]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 5 }">
        <a-button type="dashed" icon="plus" @click="handleAddCard">Add card</a-button>
      </a-form-item>
      <a-form-item
        style='display: inline-block; margin-right: 10px'
      >
        <a-button @click.once="$emit('back')">
          Previous step
        </a-button>
      </a-form-item>
      <a-form-item style='display: inline-block'>
        <a-button type="primary" html-type="submit">
          Add set
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
      } else this.$message.error('Please input at least one card');
    },
  },
};
</script>
