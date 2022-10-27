
type GetElement = (target: string | HTMLElement, root?: HTMLElement | Document) => HTMLElement | null;

/**
 * 指定された要素が存在すれば返却する。なければnullを返却する。
 * @param target 要素の直接指定 or selectorの文字列
 * @param root 探索する範囲の指定。指定しなければdocument。
 */
export const getElement: GetElement = (target, root = document) => {
  let element: HTMLElement | null = null;
  if (target instanceof HTMLElement) {
    element = target;
  } else if (Object.prototype.toString.call(target) === '[object String]') {
    element = root.querySelector<HTMLElement>(target);
  }

  return element;
}
