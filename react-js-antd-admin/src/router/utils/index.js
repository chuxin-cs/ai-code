import { ascend } from "ramda";

/**
 * 基于 src/router/routes/modules 文件结构动态生成路由
 */
export function getRoutesFromModules() {
	const menuModules = [];

	const modules = import.meta.glob("../modules/**/*.jsx", {
		eager: true,
	});
	for (const key in modules) {
		const mod = modules[key].default || {};
		const modList = Array.isArray(mod) ? [...mod] : [mod];
		menuModules.push(...modList);
	}
	return menuModules;
}



/**
 * return menu routes
 */
export const menuFilter = (items) => {
  return items
    .filter((item) => {
      const show = item.meta?.key;
      if (show && item.children) {
        item.children = menuFilter(item.children);
      }
      return show;
    })
    .sort(ascend((item) => item.order || Number.POSITIVE_INFINITY));
};

/**
 * return flatten routes
 */
export function flattenMenuRoutes(routes) {
	return routes.reduce((prev, item) => {
		const { meta, children } = item;
		if (meta) prev.push(meta);
		if (children) prev.push(...flattenMenuRoutes(children));
		return prev;
	}, []);
}