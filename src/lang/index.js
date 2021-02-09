import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  locale: 'cn', // 默认语言
  messages: {
    en: require('./en'),
    cn: require('./cn'),
  }
})
export default i18n