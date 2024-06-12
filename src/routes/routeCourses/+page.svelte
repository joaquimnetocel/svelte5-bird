<script lang="ts">
	import { functionSetMenuStates } from '$lib/functions/index.js';
	import type { typeMenuNames } from '../types/typeMenuNames.js';

	functionSetMenuStates<typeMenuNames>({
		parActiveMenu: 'menuCourses',
		parExpandedMenu: 'menuTeaching',
	});
</script>

THIS IS THE COURSES ROUTE
