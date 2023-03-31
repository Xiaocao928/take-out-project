const header = document.querySelector(".header")
window.addEventListener("scroll", () => {
  //拖动滚动条到一定的距离的时候 给header加上一个类名
  if (scrollY > 300) {
    header.classList.add("active")
  } else {
    header.classList.remove("active")
  }
})
//过渡动画由3个 分别从下方 左方 右方进入页面
//动画(transion):默认状态下 透明度0 在下 左 右 放个方向 加载状态 文档中的默认位置
const items = document.querySelectorAll("[data-reveal]")

function revealCB() {
  // 这里要做一个判断 满足某个条件才添加
  //item距离文档顶部的距离<一屏的高度
  items.forEach((item) => {
    // item距离窗口顶部的距离？
    if (item.getBoundingClientRect().top < window.innerHeight-100) {
      item.classList.add("revealed")
    }
  })
}
window.addEventListener("load", revealCB)
window.addEventListener("scroll", revealCB)
