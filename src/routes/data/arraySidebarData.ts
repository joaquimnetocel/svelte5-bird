import type { typeSidebarData } from '$lib/types/index.js';
import { iconGoogle, iconHome, iconPackages, iconTeaching } from '../icons/index.js';
import type { typeMenuNames } from '../types/typeMenuNames.js';

export const arraySidebarData: typeSidebarData<typeMenuNames> = [
	{
		stringSection: 'PAGES:',
		arrayMenus: [
			{
				stringText: 'HOME',
				stringHref: '/',
				stringIcon: iconHome,
				stringName: 'menuHome',
			},
			{
				stringText: 'TEACHING',
				stringIcon: iconTeaching,
				arraySubmenus: [
					{
						stringText: 'COURSES',
						stringHref: 'routeCourses',
						stringName: 'menuCourses',
						stringBadge: 'NOVO',
					},
					{
						stringText: 'ARTICLES',
						stringHref: '/routeArticles',
						stringName: 'menuArticles',
					},
				],
				stringName: 'menuTeaching',
			},
			{
				stringName: 'menuPackages',
				stringIcon: iconPackages,
				stringText: 'PACKAGES',
				stringHref: '/routePackages',
			},
		],
	},
	{
		stringSection: 'LINKS:',
		arrayMenus: [
			{
				stringName: 'menuGoogle',
				stringText: 'GOOGLE',
				stringHref: 'http://www.google.com.br',
				stringIcon: iconGoogle,
				stringTarget: '_blank',
				stringBadge: 'NOVO',
			},
		],
	},
];
