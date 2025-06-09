import { themeTokens } from "./type";
import { addColorChannels } from "@/utils/theme";
import { createThemeContract } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
	...themeTokens,
	colors: addColorChannels(themeTokens.colors),
});