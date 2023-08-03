/**
 * Default exported composable example.
 *
 * - Results in `Identifier '.default' has already been declared`
 *
 * - Because it compiles to (two default exports):
 *
 * ```
 * export default () => {
 *   return "something!";
 * };
 *
 * export default _sfc_main;_sfc_main.__docgenInfo = {"exportName":"default","displayName":"useSomething","type":2,"props":[],"events":[],"slots":[],"exposed":[],"sourceFiles":"{dir}/src/stories/useSomething.ts"}
 * ```
 */
export default () => {
  return "something!";
};
