/**
 * Name exported composable example.
 *
 * - Results in `defineComponent is not defined`
 *
 * - Because it compiles to:
 * ```
 * export const useSomething = ()=>{
 *   return "something!";
 * }
 * ;
 *
 * export const _sfc_main = defineComponent({});
 * useSomething.__docgenInfo = {
 *   "exportName": "useSomething",
 *   "displayName": "useSomething",
 *   "type": 2,
 *   "props": [],
 *   "events": [],
 *   "slots": [],
 *   "exposed": [],
 *   "sourceFiles": "{dir}/src/stories/useSomething.ts"
 * };
 * _sfc_main.__docgenInfo = {
 *   "exportName": "useSomething",
 *   "displayName": "useSomething",
 *   "type": 2,
 *   "props": [],
 *   "events": [],
 *   "slots": [],
 *   "exposed": [],
 *   "sourceFiles": "{dir}/src/stories/useSomething.ts"
 * }
 * ```
 */
export const useSomething = () => {
  return "something!";
};
