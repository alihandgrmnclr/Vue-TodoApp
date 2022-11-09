<script setup>

</script>

<template>
  <div class="planned">
    <ul>
      <li class="planned__list"> <p class="planned__list__text">Lorem ipsum dolor sit amet.</p>
        <div class="planned__btn">
          <div class="planned__btn__done"><img class="icon" src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" alt=""></div>
          <div class="planned__btn__delete"><img class="icon" src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt=""></div>
        </div>
      </li>
      <li class="planned__list done"><p class="planned__list__text">Lorem ipitatis pari eligendi magni!</p> 
        <div class="planned__btn">
          <div class="planned__btn__done"><img class="icon" src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" alt=""></div>
          <div class="planned__btn__delete"><img class="icon" src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt=""></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.planned {
  @apply w-[80%];
  @apply min-w-[300px] min-h-[50px];

  &__list {
    @apply flex items-center p-2 bg-white mb-3 rounded-md hover:scale-105 transition;
    @apply min-h-[50px] min-w-[300px];
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }

  &__list__text{
    @apply min-w-[80%] overflow-hidden;
  }

  &__btn {
    @apply flex ml-auto gap-2;
    @apply min-w-[60px];
    .icon{
     @apply w-[25px] cursor-pointer hover:scale-110;
    }
  }
  
  .done{
    @apply text-gray-400 line-through;
  }

}
</style>