import { defineStore } from 'pinia';
export default defineStore('userStore', {
  state: () => ({
    testValue: 1,
    userInfo: {
      userName: 'admin',
      avatar: 'https://portrait.gitee.com/uploads/avatars/user/442/1326874_zhizous_1615019143.png!avatar200'
    }
  }),
  actions: {
    SET_TESTVALUE(val: number) {
      this.testValue = val;
    },
    SET_USERNAME(val: string) {
      this.userInfo.userName = val;
    },
    SET_USERAVATAR(val: string) {
      this.userInfo.avatar = val;
    }
  },
  getters: {
    userInfoGetter: (state) => {
      return state.userInfo;
    },
    testValueGetter(): number {
      return this.testValue;
    }
  }
});
