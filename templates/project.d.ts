import {List, Property} from './$types';

export function $keyof<T, K extends keyof T>(keys: List<K>, list: List<T>): Pick<T, K>[];
export function $record<K extends string, T extends Record<K, any>>(keys: List<K>, list: List<T>): Pick<T, K>[];
export function $manual<V>(keys: Property[], object: any): V;
