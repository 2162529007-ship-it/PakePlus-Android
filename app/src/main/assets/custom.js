window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }const hookClick = (e) => {
  // 向上查找点击源头是否是a标签
  const origin = e.target.closest('a')
  // 查找页面全局base标签配置target=_blank（整站默认新页打开）
  const isBaseTargetBlank = document.querySelector('head base[target="_blank"]')

  console.log('origin', origin, isBaseTargetBlank)
  // 两个满足其一就拦截：①a标签自身target=_blank ②页面base全局默认新页
  if (
    (origin && origin.href && origin.target === '_blank') ||
    (origin && origin.href && isBaseTargetBlank)
  ) {
    e.preventDefault() // 阻止原生新开页面
    console.log('handle origin', origin)
    location.href = origin.href // 当前页面直接跳转链接
  } else {
    console.log('not handle origin', origin)
  }
}
// 补充：需要挂载全局点击事件才能生效，原代码缺绑定，补上这句：
document.addEventListener('click', hookClick, true)
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })
