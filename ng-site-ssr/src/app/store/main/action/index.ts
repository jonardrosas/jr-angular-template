import { createAction, props } from '@ngrx/store';
import { FooterInterface, MenuItemInterface } from '../../../models';


export const getMenus = createAction('[Main] Get Menu')
export const setMenus = createAction('[Main] Get Menu', props<{ menus: MenuItemInterface[] }>())
export const getFooter = createAction('[Main] Get Footer')
export const setFooter = createAction('[Main] Get Footer', props<{ footer: FooterInterface }>)