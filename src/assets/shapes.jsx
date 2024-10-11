const DesktopView = ({ urlPath = "" }) => (
	<svg
		viewBox="0 0 176 120"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
	>
		<defs>
			<pattern
				id="pattern-1"
				viewBox="0 0 92.6737 77.9435"
				patternUnits="userSpaceOnUse"
				width="100"
				height="100"
			>
				<image
					width="949"
					height="734"
					x="-330.67356804456335"
					y="-293.9432564701067"
					transform="matrix(0.09765400737524033, 0, 0, 0.10619000345468521, 32.291595458984375, 31.213836669921875)"
					xlinkHref={
						urlPath ||
						"https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png"
					}
					style={{
						backgroundRepeat: "no-repeat",
					}}
				/>
			</pattern>
		</defs>
		<rect
			style={{
				fill: "rgb(88, 88, 88)",
				strokeWidth: "0.25px",
				stroke: "rgb(91, 91, 91)",
			}}
			width="176"
			height="120"
			rx="3"
			ry="3"
		/>
		<rect
			style={{
				fill: "url('#pattern-1')",
				strokeWidth: "0.5px",
				stroke: "rgb(127, 127, 127)",
			}}
			x="2.028"
			y="10"
			width="172"
			height="108"
			rx="3"
			ry="3"
			transform="matrix(1, 0.0006930000381544232, 0, 1, -0.028005000203847885, -0.0014040000969544053)"
		/>
	</svg>
);

export { DesktopView };
