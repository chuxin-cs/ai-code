import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import en_US from "antd/locale/en_US";
import zh_CN from "antd/locale/zh_CN";
import { useTranslation } from "react-i18next";

export const LANGUAGE_MAP = {
  'zh_CN': {
    locale: 'zh_CN',
    label: "Chinese",
    icon: "ic-locale_zh_CN",
    antdLocal: zh_CN,
  },
  'en_US': {
    locale: 'en_US',
    label: "English",
    icon: "ic-locale_en_US",
    antdLocal: en_US,
  },
};


const useLocale = () => {
  const { i18n } = useTranslation();

  const locale = (i18n.resolvedLanguage || 'zh_CN');
  const language = LANGUAGE_MAP[locale];

  /**
   * localstorage -> i18nextLng change
   */
  const setLocale = (locale) => {
    i18n.changeLanguage(locale);
    // set lang ant dayjs
    document.documentElement.lang = locale;
    dayjs.locale(locale);
  };

  return {
    locale,
    language,
    setLocale,
  };
}
export default useLocale