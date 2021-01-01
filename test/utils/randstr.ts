// https://github.com/Alex1990/randstr/blob/master/randstr.js

export function randstr (len: number = 32, chars: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz') {
  let str = '';
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.random() * chars.length);
  }
  return str;
}