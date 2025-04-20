/**
 * 파라미터가 Generic 으로 전달된 타입인지 검증합니다.
 *
 * @template T - 의도한 타입
 * @param {any} obj - 점검하고자 하는 변수
 * @returns {obj is T} - 변환 가능하다면 true, 아니면 false
 */
export function isObjectOfType<T>(obj: any): obj is T {
  const result = <T>obj;
  return result !== undefined || result !== null;
}

/**
 * 파라미터가 Generic 으로 전달된 타입일 경우
 *
 * @template T - 의도한 타입
 * @param {any} obj - 변환하고자 하는 변수
 * @returns {obj is T} - 의도한 타입 혹은 null
 */
export function getObjectOfType<T>(obj: any) {
  const isSuccess = isObjectOfType<T>(obj);
  if (isSuccess) {
    return obj;
  } else {
    return null;
  }
}
