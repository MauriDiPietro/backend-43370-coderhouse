import {dirname} from 'path'
import { fileURLToPath } from 'url'
export const __dirname = dirname(fileURLToPath(import.meta.url));

import { hashSync, compareSync, genSaltSync } from 'bcrypt';

/**
 * Método que recibe password sin hashear y retorna password hasheada
 * @param {*} password string
 * @returns password hasheada -> string
 * @example 
 * createHash('1234')
 */
export const createHash = password => hashSync(password, genSaltSync(10));

/**
 * Método que compara password hasheada con password de login
 * @param {*} user 
 * @param {*} password string
 * @returns boolean
 */
export const isValidPassword = (password, user) => compareSync(password, user.password);

