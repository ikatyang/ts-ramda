import {List, Property} from './$types';

export function $keyof<D, T, K extends keyof T>(defaults: D, key: K, object: T): T[K] | D;
export function $record<D, K extends string, T extends Record<K, any>>(defaults: D, key: K, object: T): T[K] | D;
export function $general(defaults: any, key: Property, object: object): any;
