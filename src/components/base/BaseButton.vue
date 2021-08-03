<template>
    <div>
      <button 
      class="btn"
      :class="{'type':textType, 'functionButton':functionType}">
            <div 
            class="icon"
            :class="{'iconType':iconType, 'iconSize':iconSize}"
            ></div>
            <div class="btn-text">{{textButton}}</div>
        </button>
    </div>
</template>

<script>
export default {
    name:'MsButton',
    props:{
        textType:{
            type:String,
        },

        functionType:{
            type:String,
        },
        iconType:{
            type:String,
        },
        iconSize:{
            type:String,
        },
        textButton:{
            type:String,
        },
        
    }
}
</script>

<style scoped>
@import url("../../assets/css/base/Button.css");
</style>