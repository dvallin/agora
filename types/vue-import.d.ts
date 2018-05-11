declare module "*.vue" {
    import Vue, { ComponentOptions } from "vue"
    const value: ComponentOptions<Vue>
    export default value
}
