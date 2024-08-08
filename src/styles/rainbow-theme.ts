import { merge } from "lodash"
import { darkTheme, Theme } from "@rainbow-me/rainbowkit"
import { colors } from "./tailwind-theme"

export const rainbowTheme = merge(
  darkTheme({
    accentColor: colors.mist,
    accentColorForeground: colors.slate,
    borderRadius: "medium",
    overlayBlur: "small",
  }),
  {
    colors: {
      connectButtonBackground: "transparent",
      connectButtonText: colors.mist,
      modalBackground: colors.onyx,
      modalText: colors.mist,
      profileForeground: colors.onyx,
    },
  } as Theme
)
