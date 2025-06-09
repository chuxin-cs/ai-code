import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

const useSettingStore = create()(
  persist(
    (set) => ({
      settings: {
        themeColorPresets:"default",
        themeMode: "light",
				themeLayout: "vertical",
				themeStretch: false,
				breadCrumb: true,
				accordion: false,
				multiTab: false,
				darkSidebar: false,
				fontFamily: "Open Sans Variable",
				fontSize: 14,
				direction: "ltr",
      },
      actions:{
        setSettings: (settings) => {
					set({ settings });
				},
				clearSettings() {
					useSettingStore.persist.clearStorage();
				},
      }
    }),
    {
      name: "settings",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        "settings": state.settings
      })
    }
  )
)

export const useSettings = () => useSettingStore((state) => state.settings);
export const useSettingActions = () => useSettingStore((state) => state.actions);