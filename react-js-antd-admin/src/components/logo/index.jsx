// lib
import { NavLink } from "react-router";
// hooks
import { useTheme } from "@/theme/hooks";
// components
import { Iconify } from "../icon";


function Logo({ size = 50 }) {
	const { themeTokens } = useTheme();

	return (
		<NavLink to="/">
			<Iconify icon="solar:code-square-bold" color={themeTokens.color.palette.primary.default} size={size} />
		</NavLink>
	);
}

export default Logo;
