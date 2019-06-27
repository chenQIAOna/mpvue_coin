
// 获取页面参数
const getQuery = () => {
    /* 获取当前路由栈数组 */
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const options = currentPage.options
    return options
  } 

  export { getQuery }