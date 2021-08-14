<template>
  <div :class="{ 'popup-show': isHidePopup }">
    <div class="modal-popup"></div>
    <div class="popup">
      <div class="popup-header">
        <div class="popup-title">{{ popupTitle }}</div>
        <base-button
          :buttonType="'m-second-button'"
          :buttonFunction="'m-btn-exit'"
          iconSize="icon-32"
          iconType="icon-exit"
          @click.native="btnExitClick"
        />
      </div>
      <div class="popup-content">
        <div class="popup-content-image" :class="[popupImage]"></div>
        <div class="popup-content-text">{{ popupContent }}</div>
      </div>
      <div class="popup-footer">
        <div class="popup-footer-button">
          <base-button
            v-if="textButtonCancel"
            :buttonType="'m-second-button'"
            :buttonFunction="'m-btn-cancel'"
            :textButton="textButtonCancel"
            @click.native="btnCancelClick"
          />
          <base-button
            :buttonType="'btn'"
            :buttonFunction="buttonFunction"
            @click.native="btnAcceptClick"
            :textButton="textButtonAccept"
          />
         
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import BaseButton from "../../components/base/BaseButton.vue";

export default {
  components: { BaseButton },
  props: {
    isHidePopup: {
      type: Boolean,
      default: true,
      required: true,
    },
    popupTitle: String,
    popupContent: String,
    popupImage: String,
    textButtonCancel:String,
    textButtonAccept:String,
    buttonFunction:String
  },
  methods: {
    btnCancelClick() {
      this.isHidePopup = true;
    },
    btnExitClick() {
      this.isHidePopup = true;
    },

    btnAcceptClick() {
      alert("save");
    },
  },
};
</script>

<style scoped>
</style>