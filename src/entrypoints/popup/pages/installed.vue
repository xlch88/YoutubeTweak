<template>
	<section id="page-installed">
		<div class="installed">
			<img src="@/assets/img/logo.svg" alt="logo" />
			<p class="title">YouTube Tweak</p>
			<p class="version">
				v{{ APP_INFO.version }}<br /><span>Build at {{ APP_INFO.build }}</span>
			</p>

			<h1>{{ $t("installed.title") }}</h1>
			<p>{{ $t("installed.line1") }}</p>
			<p>{{ $t("installed.line2") }}</p>
			<p>{{ $t("installed.line3") }}</p>
		</div>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			shape-rendering="geometricPrecision"
			text-rendering="geometricPrecision"
			image-rendering="optimizeQuality"
			fill-rule="evenodd"
			clip-rule="evenodd"
			viewBox="0 0 511.999 414.537"
			id="arrow"
		>
			<path
				fill-rule="nonzero"
				fill="#bababa"
				d="M272.672 106.83c35.974-29.622 93.074-70.771 124.026-101.724C404.401.483 413.074-.958 421.124.61c8.291 1.606 15.868 6.316 21.079 13.928l1.587 2.598 68.209 134.816-23.269 11.733c-6.285-12.42-46.018-93.326-61.794-123.347-8.421 113.201-50.941 202.355-119.111 265.333C232.553 375.215 126.272 412.448.41 414.537L0 388.52c119.332-1.982 219.658-36.875 290.177-102.028 64.084-59.205 103.813-143.79 111.061-251.776l-112.032 92.217-16.534-20.103z"
			/>
			<path
				transform="translate(0, 50) scale(8)"
				fill="#828282"
				d="M9 4C9 2.89543 9.89543 2 11 2C12.1046 2 13 2.89543 13 4V6H18V11H20C21.1046 11 22 11.8954 22 13C22 14.1046 21.1046 15 20 15H18V20H13V18C13 16.8954 12.1046 16 11 16C9.89543 16 9 16.8954 9 18V20H4V15H6C7.10457 15 8 14.1046 8 13C8 11.8954 7.10457 11 6 11H4V6H9V4Z"
			/>
		</svg>
	</section>
</template>

<script setup>
const APP_INFO = window.__APP_INFO__;
</script>

<style lang="scss">
.installed {
	text-align: center;
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;

	img {
		width: 150px;
		height: 150px;
	}

	p {
		margin: 10px 0;
		text-align: center;

		&.title {
			font-size: 20px;
			font-weight: bolder;
			margin-top: 10px;
		}

		&.version {
			font-size: 15px;
			margin-bottom: 50px;

			span {
				color: rgba(#000, 0.5);
			}
		}
	}
}

#arrow {
	position: fixed;
	right: 100px;
	top: 50px;
	width: 150px;
}
</style>
