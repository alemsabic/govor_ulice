import { ThemedComponentThis } from '@connectv/jss-theme';
import { RendererLike } from '@connectv/html';
import { transport } from "@connectv/sdh/transport";

export function SeeTypo(
  this: ThemedComponentThis,
  _: any,
  renderer: RendererLike<any, any>,
) {
  const hrefPrefix = "https://github.com/alemsabic/alemsorg/blob/edit/master/docs/md"
  const pathname = window.location.pathname
  const hrefPostfix = ".md"
  const href = hrefPrefix + pathname + hrefPostfix
  return <p>See a typo? You can fix it by editing <a href={href}>this file</a> and then sending me a <a href="https://github.com/alemsabic/alemsorg/compare">pull request</a>.</p>
}

export const SeeTypo$ = transport(SeeTypo);