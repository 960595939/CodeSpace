export default {
    entry:"./src/index.jsx",
    esm:"babel",
    extraBabelPlugins: [
        ['babel-plugin-import', {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        }],
      ],
}