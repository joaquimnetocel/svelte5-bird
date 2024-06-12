export type typeSubmenu<T> = {
	stringName: T;
	stringText: string;
	stringHref: string;
	stringTarget?: '_blank' | '_parent' | '_self' | '_top';
	stringBadge?: string;
};

export type typeMenuWithSubmenus<T> = {
	stringName: T;
	stringIcon: string;
	stringText: string;
	arraySubmenus: typeSubmenu<T>[];
};

export type typeMenuWithoutSubmenus<T> = {
	stringName: T;
	stringIcon: string;
	stringText: string;
	stringHref: string;
	stringTarget?: '_blank' | '_parent' | '_self' | '_top';
	stringBadge?: string;
};

type typeSection<T> = {
	stringSection?: string;
	arrayMenus: (typeMenuWithSubmenus<T> | typeMenuWithoutSubmenus<T>)[];
};

export type typeSidebarData<T> = typeSection<T>[];
