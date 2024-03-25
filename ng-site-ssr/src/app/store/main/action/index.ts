import { createAction, props } from '@ngrx/store';
import { FooterInterface, MenuItemInterface } from '../../../models';


export const getMenus = createAction('Get Menu')
export const setMenus = createAction('Get Menu', props<{ menus: MenuItemInterface[] }>())
export const getFooter = createAction('Get Footer')
export const setFooter = createAction('Get Footer', props<{ footer: FooterInterface }>)