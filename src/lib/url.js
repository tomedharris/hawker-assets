import { trim } from 'lodash';
const base = document.head.querySelector('meta[name="app-url"]').content;

export default function (path) {
  path = trim(path, '/');
  if (!path) {
    return base;
  }

  return `${base}/${path}`;
}
