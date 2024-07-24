
> 注：当前项目为 Serverless Devs 应用，由于应用中会存在需要初始化才可运行的变量（例如应用部署地区、函数名等等），所以**不推荐**直接 Clone 本仓库到本地进行部署或直接复制 s.yaml 使用，**强烈推荐**通过 `s init ${模版名称}` 的方法或应用中心进行初始化，详情可参考[部署 & 体验](#部署--体验) 。

# fc-comfyui-couple-photo 帮助文档
<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc-comfyui-couple-photo&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=fc-comfyui-couple-photo" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc-comfyui-couple-photo&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=fc-comfyui-couple-photo" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc-comfyui-couple-photo&type=packageDownload">
  </a>
</p>

<description>

使用 ComfyUI 实现跨次元壁合照

</description>

<codeUrl>



</codeUrl>
<preview>



</preview>


## 前期准备

使用该项目，您需要有开通以下服务并拥有对应权限：


<service>


| 服务/业务 |  权限  | 相关文档 |
| --- |  --- | --- |
| 函数计算 |  创建函数 | [帮助文档](https://help.aliyun.com/product/2508973.html) [计费文档](https://help.aliyun.com/document_detail/2512928.html) |

</service>

<remark>



</remark>

<disclaimers>



</disclaimers>

## 部署 & 体验

<appcenter>
   
- :fire: 通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=fc-comfyui-couple-photo) ，
  [![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=fc-comfyui-couple-photo) 该应用。
   
</appcenter>
<deploy>
    
- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
  - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://docs.serverless-devs.com/fc/config) ；
  - 初始化项目：`s init fc-comfyui-couple-photo -d fc-comfyui-couple-photo`
  - 进入项目，并进行项目部署：`cd fc-comfyui-couple-photo && s deploy -y`
   
</deploy>

## 案例介绍

<appdetail id="flushContent">

本案例展示了如何将开源项目 ComfyUI 部署到阿里云函数计算上，并通过预置的工作流完成破次元壁合照。在云端快速部署 ComfyUI，实现文生图和图生图等 AIGC 创作活动。

ComfyUI 是一个为 Stable Diffusion 模型设计的，功能强大且高度模块化的图形用户界面（GUI）。它允许用户基于节点构建 AIGC 创作流程，非常适合那些想要摆脱传统编程方法、采用更直观操作流程的用户。该工具由 Comfyanonymous 在 2023 年 1 月创建，初衷是深入了解 Stable Diffusion 模型的运作机制。由于其易用性，Stable Diffusion 的开发者 Stability AI 也采用了 ComfyUI 进行内部测试，并聘请 Comfyanonymous 协助开发内部工具。目前，ComfyUI 在 Github 上的 Fork 数超过 3000，Star 数超过 30000。

Stable Diffusion 是一款由 CompVis、Stability AI 和 LAION 的研究人员及工程师共同开发的开源扩散模型，凭借其开源和高扩展性特点，赢得了全球众多 AIGC 爱好者的支持。据 Civital 模型网站统计，目前最热门的模型下载次数已超过 100 万，有超过 70 个模型下载次数超过 10 万，提供各种风格和功能的模型总数超过 12 万。

在国内，ComfyUI 也受到广泛欢迎。通过 ComfyUI 创作文生图的教程已多次在各大平台热搜榜和排行榜上出现，掀起一阵又一阵的热潮。通过 Serverless 开发平台，您只需要几步，就可以体验Comfyui，并享受Serverless 架构带来的降本提效的技术红利。

</appdetail>

## 使用流程

<usedetail id="flushContent">

只需要打开页面，点击开始创作！

![](https://img.alicdn.com/imgextra/i1/O1CN01QHYPqD1YpyLA6lkXc_!!6000000003109-0-tps-1928-1114.jpg)

![](https://img.alicdn.com/imgextra/i4/O1CN01RmRrA225lHbhYfoPc_!!6000000007566-0-tps-1788-2270.jpg)

</usedetail>

## 注意事项

<matters id="flushContent">
</matters>


<devgroup>


## 开发者社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">  

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="130px" > |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <center>微信公众号：`serverless`</center>                                                                                         | <center>微信小助手：`xiaojiangwh`</center>                                                                                        | <center>钉钉交流群：`33947367`</center>                                                                                           |
</p>
</devgroup>
