(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{369:function(t,e,r){"use strict";r.r(e);var s=r(42),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"快速上手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),r("p",[t._v("开始之前，鄙人希望您能认识到以下几点")]),t._v(" "),r("p",[t._v("1.我是Hexo用户【或者Hugo、vuepress "),r("strong",[t._v("|")]),t._v(" Typecho和Wordpress用户请点击右上角×】")]),t._v(" "),r("p",[t._v("2.我已经实现了"),r("a",{attrs:{href:"https://hexo.io/zh-cn/docs/github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("集成部署"),r("OutboundLink")],1),t._v(" 【GithubAction、Vercel、Travis-CI、GitlabCI、CodingCI "),r("strong",[t._v("|")]),t._v(" 依旧是通过本机上传生成静态网页的用户请点击右上角×】")]),t._v(" "),r("p",[t._v("为什么一定要集成部署？你不集成部署那能叫Hexo吗？")]),t._v(" "),r("p",[t._v("集成部署分三步：\n1.博客源文件传Github上去【"),r("strong",[t._v("不是hexo d生成的静态文件！而是源文件！")]),t._v("】\n2.选择集成部署服务商\n3.创建集成部署，绑定集成部署")]),t._v(" "),r("p",[t._v("一些给小白的参考链接：")]),t._v(" "),r("p",[t._v("GithubAction："),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/170563000",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.cyfan.top/p/e626cb30.html"),r("OutboundLink")],1),t._v("\nTravis-CI："),r("a",{attrs:{href:"https://blog.cyfan.top/p/e626cb30.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("鄙人早年经历-ChenYFan的博客"),r("OutboundLink")],1),t._v("\nVercel："),r("strong",[t._v("暂无")]),t._v(" 【鄙人使用Vercel是Clone生成后的静态文件实现CDN加速】\nCodingCI："),r("a",{attrs:{href:"https://colsrch.cn/posts/df35c5b1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coding持续集成实现Hexo自动化部署"),r("OutboundLink")],1),t._v(" 【"),r("strong",[t._v("此处源代码不能存储在Coding上，只能存在Github上")]),t._v("】")]),t._v(" "),r("p",[t._v("3.我的源代码部署在Github上【这里指的是博客源代码存储于Github，与最终集成部署服务商、CDN无关，如果你将原代码存储在Gtihub，然后用其他的CI部署到CodingPages，这也是允许的】")]),t._v(" "),r("p",[t._v("4.HexoPlusPlus诞生的意义就是为了解决文件存储在Github上不方便更改的问题，并不是Hexo生成器，所以还是需要集成部署来生成静态文件。")]),t._v(" "),r("p",[t._v("5.HexoPlusPlus版本命名遵循Semantic Versioning 3.0.0，格式为"),r("code",[t._v("X.Y.Z")]),t._v("。在仅修订版本更新的情况下，不必重新配置。如"),r("code",[t._v("1.0.0")]),t._v("-"),r("code",[t._v("1.0.99")]),t._v("的更新都不需要重新配置。")]),t._v(" "),r("p",[t._v("6.本站所需要的平台是"),r("a",{attrs:{href:"https://cloudflare.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CloudFlare"),r("OutboundLink")],1),t._v("，如果你当前网络不适合使用，可以用"),r("a",{attrs:{href:"https://github.com/badafans/better-cloudflare-ip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Better Cloudflare IP"),r("OutboundLink")],1),t._v(" 获取最适合当前网络环境的CloudFlareIP(如"),r("code",[t._v("1.0.0.1")]),t._v(")，然后修改hosts文件重定向：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("1.0.0.1 cloudflare.com\n1.0.0.1 dash.cloudflare.com\n1.0.0.1 sparrow.cloudflare.com\n1.0.0.1 cloudflareworkers.com\n1.0.0.1 assets.hcaptcha.com\n1.0.0.1 hcaptcha.com\n1.0.0.1 imgs.hcaptcha.com\n1.0.0.1 {your_workers_name}.{your_domain_name}.workers.dev\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br")])]),r("blockquote",[r("p",[t._v("自行替换"),r("code",[t._v("{your_workers_name}")]),t._v("、"),r("code",[t._v("{your_domain_name}")])])]),t._v(" "),r("h2",{attrs:{id:"部署代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署代码"}},[t._v("#")]),t._v(" 部署代码")]),t._v(" "),r("p",[t._v("先下载，你可以直接从"),r("a",{attrs:{href:"https://raw.githubusercontent.com/HexoPlusPlus/HexoPlusPlus/main/dist/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),r("OutboundLink")],1),t._v(" 上下载，也可以用"),r("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@main/dist/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSdelivr"),r("OutboundLink")],1),t._v(" 加速下载，复制里面的内容。")]),t._v(" "),r("p",[t._v("进入"),r("a",{attrs:{href:"https://cloudflare.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("CloudFlare"),r("OutboundLink")],1),t._v(",注册账户，开通workers不再阐述。")]),t._v(" "),r("p",[t._v("点击KV选项，进入并创建一个KV桶，命名空间名称随意")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/2.png",alt:""}})]),t._v(" "),r("p",[t._v("新建一个Worker，将获得的源代码直接复制到里头，修改左上角三级域名【可选】，点击保存并部署。\n"),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/1.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"配置账户"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置账户"}},[t._v("#")]),t._v(" 配置账户")]),t._v(" "),r("p",[t._v("返回，先配置变量，"),r("code",[t._v("hpp_username")]),t._v("和"),r("code",[t._v("hpp_password")]),t._v("，这将分别为你的登录用户名和密码.")]),t._v(" "),r("blockquote",[r("p",[t._v("强烈建议两者加密保护安全。")])]),t._v(" "),r("blockquote",[r("p",[t._v("0.1.3版本及以上支持了多用户登录，多个用户名和密码请用英文符号"),r("code",[t._v(",")]),t._v("分割，并且一一对应")])]),t._v(" "),r("blockquote",[r("p",[t._v("例如：")])]),t._v(" "),r("blockquote",[r("p",[t._v("hpp_username：A,B,C")])]),t._v(" "),r("blockquote",[r("p",[t._v("hpp_password：A'sPassword,B'sPassword,C'sPassword")])]),t._v(" "),r("p",[t._v("再划到底下-KV 命名空间绑定-编辑变量-新增变量绑定-变量名称：KVNAME【此处不可更改】，KV命名空间：您之前写的空间名字，如图所示")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/5.png",alt:""}})]),t._v(" "),r("p",[t._v("绑定域名【可选】")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/11.png",alt:""}})]),t._v(" "),r("blockquote",[r("p",[t._v("此处域名后面必须加"),r("code",[t._v("/*")])])]),t._v(" "),r("blockquote",[r("p",[t._v("如果你直接将HPP绑定在博客以下，并且您的博客是由CloudFlare作为CDN的，那么请将绑定路由设置为"),r("code",[t._v("yourdomain/hpp/*")])])]),t._v(" "),r("h2",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("注意！")]),t._v(" HexoPlusPlus安装时所有配置都没有默认值，请不要偷懒。如果实在没有所需的键值或不需要此功能，可以留空")])]),t._v(" "),r("p",[t._v("直接进入域名会得到错误页面，请在后面加上"),r("code",[t._v("/hpp/admin/login")]),t._v("再登录。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/3.png",alt:""}}),t._v(" "),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/4.png",alt:""}})]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("注意！")]),t._v(" HexoPlusPlus默认以HTTPS格式传输，外部链接也必须以HTTPS，否则会加载失败")])]),t._v(" "),r("h3",{attrs:{id:"域名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[t._v("#")]),t._v(" "),r("code",[t._v("域名")])]),t._v(" "),r("p",[t._v("指HexoPlusPlus绑定的域名，可以是上一步自定义的域名，也可以是CloudFlare分配的三级域名")]),t._v(" "),r("h3",{attrs:{id:"头像地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#头像地址"}},[t._v("#")]),t._v(" "),r("code",[t._v("头像地址")])]),t._v(" "),r("p",[r("s",[t._v("就是头像地址呗")])]),t._v(" "),r("h3",{attrs:{id:"标题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标题"}},[t._v("#")]),t._v(" "),r("code",[t._v("标题")])]),t._v(" "),r("p",[r("s",[t._v("同上")])]),t._v(" "),r("h3",{attrs:{id:"跨域请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#跨域请求"}},[t._v("#")]),t._v(" "),r("code",[t._v("跨域请求")])]),t._v(" "),r("p",[t._v("默认为"),r("code",[t._v("*")]),t._v("，如果担心盗链，可以将其设置为博客域名")]),t._v(" "),r("h3",{attrs:{id:"owojson地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#owojson地址"}},[t._v("#")]),t._v(" "),r("code",[t._v("OwOJSON地址")])]),t._v(" "),r("p",[t._v("表情功能，请填写OwO的JSON地址，向上兼容Twikoo的表情格式。")]),t._v(" "),r("h3",{attrs:{id:"面板背景图片"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面板背景图片"}},[t._v("#")]),t._v(" "),r("code",[t._v("面板背景图片")])]),t._v(" "),r("p",[t._v("背景图片地址")]),t._v(" "),r("h3",{attrs:{id:"github文档-图片仓库token"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github文档-图片仓库token"}},[t._v("#")]),t._v(" "),r("code",[t._v("Github文档/图片仓库Token")])]),t._v(" "),r("p",[t._v("获得Token的用户至少能够修改github上存储文档/图片的Token，至少具有写入权和读取权，留空则导致文档功能无法使用.\n"),r("a",{attrs:{href:"https://github.com/settings/tokens/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Token获取"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("此处不建议全选。")]),t._v(" "),r("h3",{attrs:{id:"github文档-图片仓库用户名-、github文档-图片仓库仓库名-、github文档-图片仓库路径、github文档-图片仓库分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github文档-图片仓库用户名-、github文档-图片仓库仓库名-、github文档-图片仓库路径、github文档-图片仓库分支"}},[t._v("#")]),t._v(" "),r("code",[t._v("Github文档/图片仓库用户名")]),t._v(" 、"),r("code",[t._v("Github文档/图片仓库仓库名")]),t._v(" 、"),r("code",[t._v("Github文档/图片仓库路径")]),t._v("、"),r("code",[t._v("Github文档/图片仓库分支")])]),t._v(" "),r("p",[t._v("如果我存储文档的Github完整路径是"),r("code",[t._v("https://github.com/ChenYFan/blog/tree/master/source/_posts")]),t._v("，那么以上配置分别为"),r("code",[t._v("ChenYFan")]),t._v("、"),r("code",[t._v("blog")]),t._v("、"),r("code",[t._v("/source/_posts/")]),t._v("、"),r("code",[t._v("master")]),t._v(".")]),t._v(" "),r("p",[t._v("这一切的前提都是您愿意将图片和文件存储在Github上。")]),t._v(" "),r("blockquote",[r("p",[t._v("一般来说，Hexo的仓库路径是"),r("code",[t._v("/source/_posts/")]),t._v("，此处无需更改")])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("请注意！！！路径前后必须带"),r("code",[t._v("/")]),t._v("。")])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("如果存在"),r("code",[t._v("abc")]),t._v("文件夹下,那么路径为"),r("code",[t._v("/abc/")]),t._v(",若存在根目录下,则为"),r("code",[t._v("/")])])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("这个地方大小写敏感！点名表扬Lete")])])]),t._v(" "),r("h3",{attrs:{id:"global-api-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#global-api-key"}},[t._v("#")]),t._v(" "),r("code",[t._v("Global API Key")])]),t._v(" "),r("p",[t._v("CloudFlare的Global API Key，用于修改Worker代码以实现自动更新，在"),r("a",{attrs:{href:"https://dash.cloudflare.com/profile/api-tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("API 密钥"),r("OutboundLink")],1),t._v("获取")]),t._v(" "),r("blockquote",[r("p",[t._v("注意！这地方不是"),r("strong",[t._v("API 令牌")]),t._v("，而是"),r("strong",[t._v("API 密钥")])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/16.png",alt:""}})]),t._v(" "),r("p",[t._v("点击查看，输入密码，复制即可")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Global API Key是您账户中权限最高的token，请不要泄露")])])]),t._v(" "),r("h3",{attrs:{id:"目标workers名称"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目标workers名称"}},[t._v("#")]),t._v(" "),r("code",[t._v("目标Workers名称")])]),t._v(" "),r("p",[t._v("在"),r("a",{attrs:{href:"#%E9%83%A8%E7%BD%B2%E4%BB%A3%E7%A0%81"}},[t._v("部署代码")]),t._v("这一步中填写的三级域名名称，文档中的例子是"),r("code",[t._v("white-feather-f3eb")])]),t._v(" "),r("blockquote",[r("p",[t._v("这地方不是你"),r("strong",[t._v("绑定的域名")]),t._v("，这一步的用处是帮你更新源代码")])]),t._v(" "),r("h3",{attrs:{id:"workers账户id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workers账户id"}},[t._v("#")]),t._v(" "),r("code",[t._v("Workers账户ID")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/17.png",alt:""}})]),t._v(" "),r("p",[t._v("Worker界面中的账户ID")]),t._v(" "),r("h3",{attrs:{id:"账户登录邮箱"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#账户登录邮箱"}},[t._v("#")]),t._v(" "),r("code",[t._v("账户登录邮箱")])]),t._v(" "),r("p",[t._v("指您CloudFlare登陆时所需的邮箱")]),t._v(" "),r("h3",{attrs:{id:"是否自动签到"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#是否自动签到"}},[t._v("#")]),t._v(" "),r("code",[t._v("是否自动签到")])]),t._v(" "),r("p",[t._v("指自动记录博主最近登录时间，开启会大量损耗KV写入限额，"),r("strong",[t._v("不建议开启")]),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"twikooenvid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#twikooenvid"}},[t._v("#")]),t._v(" "),r("code",[t._v("TwikooEnvId")])]),t._v(" "),r("p",[t._v("Twikoo加强版需要，指Twikoo配置中EnvId。")]),t._v(" "),r("p",[t._v("填写完毕，提交即可！现在，你将进入主页。"),r("RouterLink",{attrs:{to:"/faq/#a2"}},[t._v("刷新之后还停留在配置页面？")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);