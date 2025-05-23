import { CircleLoading } from "@/components/loading";
import { Suspense, lazy } from "react";
import type { AppRouteObject } from "#/router";

const ExternalLink = lazy(() => import("@/pages/sys/others/iframe/external-link"));
const Iframe = lazy(() => import("@/pages/sys/others/iframe"));

function Wrapper({ children }: any) {
	return <Suspense fallback={<CircleLoading />}>{children}</Suspense>;
}
const others: AppRouteObject[] = [
	{
		path: "frame",
		meta: {
			label: "sys.menu.frame",
			key: "/frame",
		},
		children: [
			{
				path: "external_link",
				element: (
					<Wrapper>
						<ExternalLink src="https://ant.design/index-cn" />
					</Wrapper>
				),
				meta: {
					label: "sys.menu.external_link",
					key: "/frame/external_link",
				},
			},
			{
				path: "iframe",
				element: (
					<Wrapper>
						<Iframe src="https://ant.design/index-cn" />
					</Wrapper>
				),
				meta: {
					label: "sys.menu.iframe",
					key: "/frame/iframe",
				},
			},
		],
	},
];

export default others;
