
> 注：当前项目为 Serverless Devs 应用，由于应用中会存在需要初始化才可运行的变量（例如应用部署地区、函数名等等），所以**不推荐**直接 Clone 本仓库到本地进行部署或直接复制 s.yaml 使用，**强烈推荐**通过 `s init ${模版名称}` 的方法或应用中心进行初始化，详情可参考[部署 & 体验](#部署--体验) 。

# fc-ai-character 帮助文档
<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc-ai-character&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=fc-ai-character" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc-ai-character&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=fc-ai-character" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc-ai-character&type=packageDownload">
  </a>
</p>

<description>

通过 Stable Diffusion Serverless API，进行艺术字创作

</description>

<codeUrl>

- [:smiley_cat: 代码](https://github.com/devsapp/fc-ai-character)

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
   
- :fire: 通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=fc-ai-character) ，
  [![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=fc-ai-character) 该应用。
   
</appcenter>
<deploy>
    
- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
  - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://docs.serverless-devs.com/fc/config) ；
  - 初始化项目：`s init fc-ai-character -d fc-ai-character`
  - 进入项目，并进行项目部署：`cd fc-ai-character && s deploy -y`
   
</deploy>

## 案例介绍

<appdetail id="flushContent">

本案例将基于 [Stable Diffusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) Serverless API 进行封装，实现 AI 艺术字的绘制项目，并将其快速创建并部署到阿里云函数计算 FC。

Stable Diffusion 模型，已经成为 AI 行业从传统深度学习时代走向 AIGC 时代的标志性里程碑。越来越多的开发者借助 stable-diffusion-webui （以下简称 SDWebUI) 能力进行 AI 绘画领域创业或者业务上新，获得高流量及商业价值，但是面对多客户、高并发的复杂场景，使用原生 Stable Diffusion API 会面临以下挑战：

1. 显卡资源昂贵且难以购买，GPU卡池管理技术门槛高：高性能的 GPU 资源不仅价格昂贵，而且往往难以大规模采购。此外，GPU 卡池的有效管理和维护需要复杂的技术支持，也带来了额外的挑战。
2. 难以应对高并发：原生的 Stable Diffusion API 采用单实例推理模式，其并发处理能力有限。在面对高并发场景时，尤其是并发请求具有大的波动性时，资源配置难以精确预测，从而可能导致系统错误和业务中断。
3. 多模型切换难度大：当不同模型的请求在高并发条件下同时发送到同一实例时，频繁的模型切换成为一个显著的瓶颈。这种切换不仅消耗巨大，而且影响了推理效率，使得多模型部署在实际应用中变得复杂和低效。  

为了帮助用户高效率、低成本应对企业级复杂场景，函数计算团队正式推出 Stable Diffusion API Serverless 版解决方案，通过使用该方案，用户可以充分利用 Stable Diffusion +Serverless 技术优势快速开发上线 AI 绘画应用，期待为广大开发者 AI 绘画创业及变现提供思路。

</appdetail>

## 使用流程

<usedetail id="flushContent">

通过 [控制台创建应用](https://fcnext.console.aliyun.com/applications/ai/create?template=30) 可参考下述文档


1. 使用 AI 艺术字应用，需要先部署 [Stable Diffusion 应用](https://fcnext.console.aliyun.com/applications/ai/create?template=29)。  
 **注意** 绘图类型需要选择 **艺术字**
![创建 Stable Diffusion](https://img.alicdn.com/imgextra/i3/O1CN01Nv3PRT1zFKFAXFzgK_!!6000000006684-0-tps-1241-1219.jpg)
2. 部署完成后，开通 Serverless API 功能  
**注意** Serverless API 功能依赖于 表格存储 OTS 和 对象存储 OSS，相关云产品可能会产生额外的费用
![开通 Serverless API](https://img.alicdn.com/imgextra/i2/O1CN01zyko3a26nP1TsjS8r_!!6000000007706-0-tps-782-320.jpg)
3. 复制 Serverless API 地址  
**注意** 该域名由社区提供，默认只允许使用 30 天。您可以点击下方图片中的 Proxy，跳转到 proxy 函数，创建 HTTP 触发器，使用触发器域名；也可以绑定自己的域名到 proxy 函数
![Serverless API 地址](https://img.alicdn.com/imgextra/i3/O1CN01aJn6Un1pjQ6sEorMZ_!!6000000005396-0-tps-1324-623.jpg)
4. 创建艺术字应用时，填写，填写 Serverless API 的地址
![](https://img.alicdn.com/imgextra/i2/O1CN01W6ofno1UL36Uejal8_!!6000000002500-2-tps-1350-446.png)
5. 进入应用页面，开始出图
![](https://img.alicdn.com/imgextra/i3/O1CN01JkCyuy1YvvSJLqAoH_!!6000000003122-0-tps-1382-1310.jpg)
6. 您可以选择内置的模板进行出图，也可以根据需要自己调整参数。发挥想象力，制作自己的 AI 艺术字 🚀

</usedetail>

## 注意事项

<matters id="flushContent">

- 当前项目仅支持 Stable Diffusion Serverless API 模式调用
- 当前项目为案例展示，实际使用中需要自行修改代码
- 该项目通过加载本地字体及部分网络字体生成双色字体图片，通过 Stable Diffusion 接口调用 ControlNet Tail 模型进行 AI 绘图，字体及模型版权将由用户提供。

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
