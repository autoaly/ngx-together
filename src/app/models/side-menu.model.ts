export interface SideMenuItems {
    /**
     * menu title
     */
    title: string;
    /**
     * css icon class
     */
    icon?: string;

    /**
     * url for navigate
     */
    url: string;

    expand?: SideMenuItems
};