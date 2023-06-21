<template>
  <van-list
    v-model:loading="listLoading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="theater-content" v-for="item in classData" :key="item.id" v-show="item.children.length > 0">
      <div class="theater-content_title">
        {{ item.class_name }}
      </div>

      <div class="theaterContent">
        <NuxtLink :to="`/player/${val.id}`" v-for="val in item.children" :key="val.id">
          <div class="theater-item">
            <img class="theater-item_img" :src="val.cover_url" alt=""/>
            <p>{{val.title}}</p>
          </div>
        </NuxtLink>
      </div>
    </div>


  </van-list>
</template>

<script lang="ts" setup>
import { PropType, ref, watch } from 'vue'

const props = defineProps({
  classData: Array as PropType<any>,
  loading: Boolean,
  finished: Boolean,
})

watch(() => props.loading, (val) => {
  listLoading.value = val;
})

const listLoading = ref(false);

const emits = defineEmits(['onLoad'])

const onLoad = () => {
  emits('onLoad')
}

</script>
<style lang="scss" scoped>
.theater-content {
  padding: 0.2rem 0.1rem;
  .theater-content_title {
    font-size: 0.3rem;
    font-weight: 600;
    color: #FFFFFF;
    text-shadow: 0 0.02rem 0.06rem rgba(0, 0, 0, 0.4);
  }
}
.theaterContent {
  margin-top: 0.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.2rem;
  .theater-item {
    width: 100%;
    font-size: 0.2rem;
    margin-bottom: 0.2rem;
    overflow: hidden;

    .theater-item_img {
      width: 100%;
      height: 3rem;
      border-radius: 0.08rem;
    }
    p {
      margin-top: 0.08rem;
      font-size: 0.26rem;
      font-weight: 500;
      color: #FFFFFF;
      text-shadow: 0 0.02rem 0.06rem rgba(0, 0, 0, 0.4);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
