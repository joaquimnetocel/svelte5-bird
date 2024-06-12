<script lang="ts">
	import { DarkModeButton, Links, Notifications, Search, User } from '$lib/components/index.js';
	import { SvelteBird } from '$lib/index.js';
	import '../app.css';
	//import 'svelte-bird/dist/css/svelte-bird.min.css'; // PRODUCTION
	import { arrayNotificationsData } from './data/arrayNotificationsData.js';
	import { arraySidebarData } from './data/arraySidebarData.js';
	import { arrayUserData } from './data/arrayUserData.js';
	import { iconNotification } from './icons/iconNotification.js';
</script>

<SvelteBird
	propLogoImage="images/logo.webp"
	propLogoWidth={30}
	propTitle={'SVELTE-BIRD'}
	propSidebarData={arraySidebarData}
	propExpandAllMenus={false}
	propLogoHref="/"
>
	<svelte:fragment slot="slotHeader">
		<div class="flex items-center space-x-3 ms-auto">
			<Search />
			<Notifications
				propData={arrayNotificationsData}
				propNewNotifications={true}
				propTitle="NOTIFICATIONS:"
				propIcon={iconNotification}
				propNotFoundMessage={'NO NOTIFICATION FOUND!'}
			/>
			<Links propTitle="CHOOSE YOUR LANGUAGE:" />
			<DarkModeButton />
			<hr class="w-px h-6 border-none bg-slate-200 dark:bg-slate-700" />
			<User
				propUserMenuArray={arrayUserData}
				propTitle="Joaquim"
				propInternalTitle="Joaquim"
				propButtonText="SIGN OUT"
				propButtonLink="/"
				propImage={undefined}
			/>
		</div>
	</svelte:fragment>
	<div class="px-4 py-4">
		<!-- <div class="h-auto min-h-full"> -->
		<!-- <div
				class="h-auto min-h-full px-4 py-4 dark:bg-[url('/images/backgrounds/header.png')] bg-[url('/images/backgrounds/clear.jpg')] bg-no-repeat bg-cover bg-center bg-fixed"
				> -->
		<slot />
		<!-- </div> -->
		<!-- </div> -->
	</div>
	<svelte-fragment slot="slotFooter">
		<div class="flex items-center justify-between h-8">
			<div>All Rights Reserved ©</div>
			<div>VERSION 0.0.19</div>
		</div>
	</svelte-fragment>
</SvelteBird>
