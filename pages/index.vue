<template>
  <div class="user">
    <div class="title">Welcome {{ fullName }} </div>
    {{dd}}
    <BTree/>
    <div>
      First:
      <input type="text" v-model="localData.first" />
    </div>
    <button @click="update">Update Info</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
// import axios from "axios";
const user = namespace('user')
@Component
export default class User extends Vue {
  public localData: object = {}
  @user.State
  public info!: object
  @user.Getter
  public fullName!: string
  @user.Mutation
  public updateUserInfo!: (data: object) => void
  async asyncData(ctx:any) {
      const post = await ctx.app.$axios.get('/test')
      const dd = post.data
      console.log('post', dd)
      return { dd }
  }
  async mounted() {
    this.localData = { ...this.localData, ...this.info }
    // const post = await axios.get('/test')
    //   const dd = post.data
    //   console.log('post', dd)
    this.$injectway.hide()
    console.log('this.$log',this.$injectway)
  }
  public update(): void {
    this.updateUserInfo(this.localData)
  }
}
</script>