"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  BadgeCheck,
  BarChart3,
  CloudDownload,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";

type osMatrix = {
  name: string
  description: string
  status: "available" | "upcoming"
  version?: string
  note?: string
  action?: () => void
  action_str?: string
}

const featureHighlights = [
  {
    title: "精准检索",
    description: "语义 + 深度检索 + 联网搜索，锁定所选文件夹或文件，引用出处一目了然。",
    icon: Sparkles,
  },
  {
    title: "多端无缝",
    description: "桌面、Web 即开即用，移动端规划中，保持知识随身可达。",
    icon: Network,
  },
  {
    title: "智能治理",
    description: "自动分析热度、缺口与权限风险，给出可执行优化建议，持续提升命中率。",
    icon: BarChart3,
  },
  {
    title: "智能体模式",
    description: "执行前自动规划步骤与所需资料，按计划调用工具，输出更稳健的答案。",
    icon: BadgeCheck,
  },
];

const capabilityCards = [
  {
    title: "三级知识架构",
    description:
      "行业 / 企业 / 个人分区清晰，支持细粒度权限与版本记录，沉淀可复用的知识资产。",
    icon: Layers3,
  },
  {
    title: "安全与合规",
    description:
      "账号、权限、审计全链路可控，可私有部署或专属 VPC，满足金融政企要求。",
    icon: ShieldCheck,
  },
  {
    title: "协作与工具箱",
    description:
      "笔记共享 + 收藏标签 + AI 工具箱（绘图、文档处理等），让团队协同与产出更轻松。",
    icon: Users,
  },
];

const workspaceTags = [
  "深度检索",
  "多端协同",
  "权限审计",
  "AI 工具箱",
  "智能体模式",
];

const plans = [
  {
    name: "个人版",
    price: "联系我们",
    description: "适合独立顾问、自由职业者，快速体验智能知识整理与检索。",
    highlights: [
      "单人使用",
      "可选增值工具",
      "内置 AI 助手与全文检索",
      "支持导入常见 Office、PDF 文档等",
    ],
    cta: "联系我们",
  },
  {
    name: "团队版",
    price: "联系我们",
    description: "覆盖跨部门协同场景，助力团队构建共享知识资产。",
    highlights: [
      "个人版全部功能",
      "自定义成员数，支持角色与权限管理",
      "企业知识库支持, 可选行业知识库",
      "企业共享备忘录支持",
    ],
    cta: "联系我们",
  },
  {
    name: "私有部署",
    price: "联系我们",
    description: "满足金融、政企行业的安全与合规需求，提供专属定制能力。",
    highlights: [
      "专属 VPC 或本地化部署架构",
      "可定制的安全策略与审计报表",
      "专属成功经理, 计划支持服务",
    ],
    cta: "联系我们",
  },
];

const osMatrix: osMatrix[] = [
  {
    name: "Windows",
    description: "适配 Windows 10 及以上版本，覆盖主流企业桌面环境。",
    status: "available",
    version: "v0.1.0",
    action_str: "下载 Windows 版",
    action: () => {
      window.open("https://dl.yunwoai.com/yunwo/%E8%BF%90%E5%B9%84AI%E7%9F%A5%E8%AF%86%E5%BA%93%20Setup%200.1.0.exe")
    }
  },
  {
    name: "macOS",
    description: "兼容 Apple Silicon 与 Intel 芯片，为创意与研发团队提供一致体验。",
    status: "available",
    version: "v0.1.0",
    action_str: "下载 macOS 版",
    action: () => {
      window.open("https://dl.yunwoai.com/yunwo/%E8%BF%90%E5%B9%84AI%E7%9F%A5%E8%AF%86%E5%BA%93-0.1.0-arm64.dmg")
    }
  },
  {
    name: "Web",
    description: "通过浏览器访问，具备完整功能，可与桌面端同步协作。",
    status: "available",
    version: "即时访问",
    action_str: "打开 Web 端",
    action: () => {
      window.open("http://production.knowledge.zhengcloud.ltd")
    }
  },
  {
    name: "Linux",
    description: "覆盖主流桌面发行版的构建计划已在进行中。",
    status: "upcoming",
    note: "研发中", // 预计 Q4 发布
  },
  {
    name: "Android",
    description: "移动端体验正在优化中，以适配更多业务场景。",
    status: "upcoming",
    note: "敬请期待",
  },
  {
    name: "iOS",
    description: "原生客户端设计中，确保移动办公与安全策略的一致。",
    status: "upcoming",
    note: "敬请期待",
  },
];

const availableOS = osMatrix.filter((item) => item.status === "available");
const upcomingOS = osMatrix.filter((item) => item.status === "upcoming");

const readyPlatforms = availableOS.map((os) => ({
  name: os.name,
  description: os.description,
  version: os.version ?? "即时访问",
  cta: os.action_str ?? "立即访问",
  action: os.action,
}));

const roadmapPlatforms = upcomingOS.map((os) => ({
  name: os.name,
  note: os.note ?? "研发中",
}));

const heroStats = [
  {
    label: "知识架构",
    value: "三级分区",
    description: "灵活规划知识空间层级，确保内容有序沉淀。",
  },
  {
    label: "适用场景",
    value: "个人 · 团队 · 行业",
    description: "覆盖个人整理、企业协同与行业知识订阅。",
  },
];

export default function Home() {

  type Plat = "windows" | "macos";

  const getPlatform = (): Plat | "unknown" => {
    if (typeof window === "undefined") return "unknown"

    const ua = window.navigator.userAgent.toLowerCase();
    const isMac = ua.includes("mac os");
    const mac = availableOS.find((item) => item.name === "macOS");
    const win = availableOS.find((item) => item.name === "Windows");
    if (isMac && mac?.action) {
      return "macos";
    }
    if (!isMac && win?.action) {
      return "windows";
    }
    return "unknown";
  }

  const downloadDesktop = () => {
    const platform = getPlatform();

    const mac = availableOS.find((item) => item.name === "macOS");
    const win = availableOS.find((item) => item.name === "Windows");

    if (platform === "macos" && mac?.action) {
      mac.action();
      return;
    }
    if (platform === "windows" && win?.action) {
      win.action();
      return;
    }
    // fallback to Web if desktop actions missing
    const web = availableOS.find((item) => item.name === "Web");
    web?.action?.();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-sky-50 via-sky-50/40 to-indigo-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 -top-72 flex justify-center opacity-70">
          <div className="h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,197,253,0.38)_0%,rgba(191,219,254,0.2)_45%,transparent_78%)] blur-3xl" />
        </div>
        <div className="absolute inset-x-0 top-1/3 flex justify-center opacity-60">
          <div className="h-[480px] w-[820px] rounded-[42%] bg-[radial-gradient(circle_at_center,rgba(165,215,252,0.28)_0%,rgba(191,219,254,0.16)_50%,transparent_82%)] blur-3xl" />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <div className="h-[360px] w-full bg-linear-to-t from-sky-100/70 via-transparent" />
        </div>
      </div>

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 pb-32 pt-24 sm:px-10 md:px-12 lg:px-16 xl:px-20 md:gap-28">
        <section className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-0 h-80 w-80 rounded-full" />
            <div className="absolute -right-24 top-12 h-96 w-96 rounded-[36%]" />
          </div>

          <div className="relative flex flex-col gap-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div className="space-y-8 lg:space-y-10">
              <div className="space-y-3">
                <Badge className="w-fit rounded-full bg-linear-to-r from-sky-100 via-blue-100 to-indigo-100 text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-900 ring-1 ring-sky-200">
                  运幄 AI 知识库 · 纵览
                </Badge>
                <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-5xl">
                  <span className="block text-sky-700">把零散资料变成</span>
                  <span className="block text-slate-900">可执行的企业大脑</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  笔记系统与 AI 工具箱合力，配合深度检索、联网搜索与智能分析，确保知识高效、安全、可复用；已沉淀 15+ 行业知识库并持续更新。
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {featureHighlights.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3 rounded-xl border border-sky-100 bg-white/80 px-4 py-3 shadow-[0_10px_40px_-30px_rgba(37,99,235,0.45)]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                      <feature.icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-slate-900">{feature.title}</p>
                      <p className="text-xs text-slate-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="gap-2 rounded-full bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500 px-8 text-white shadow-[0_18px_45px_-28px_rgba(37,99,235,0.55)] hover:from-sky-400 hover:via-blue-400 hover:to-indigo-400"
                  onClick={() => {
                    window.location.href = "mailto:mengwj12345@163.com";
                  }}
                >
                  <Sparkles className="h-4 w-4" /> 预约演示
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 rounded-full border-sky-200 bg-sky-50/80 px-8 text-sky-700 hover:bg-sky-100"
                  asChild
                >
                  <Link href="https://yunwo-ai.feishu.cn/wiki/Rd4Qw0qmriogkLkDqZRc5mctnBg" target="_blank" rel="noopener noreferrer">
                    📖 查看教程
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="relative w-full border border-sky-100/80 bg-white/80">
                <CardContent className="flex h-full flex-col gap-6 p-8">
                  <div className="flex flex-wrap gap-2">
                    {workspaceTags.map((tag) => (
                      <Badge key={tag} className="rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-sky-100/80 bg-sky-50/70 p-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sky-600 shadow-inner">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-slate-900">智能体检索工作台</p>
                          <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">规划 · 深度 · 联网</span>
                        </div>
                        <p className="text-xs text-slate-500">
                          选择文件夹后，先生成执行计划再逐步检索与调用工具，自动输出摘要并标注引用；可随时切换联网搜索补足最新信息。
                        </p>
                        <div className="h-2 rounded-full bg-white/80 shadow-inner">
                          <div className="h-full w-[78%] rounded-full bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500" />
                        </div>
                        <p className="text-[11px] text-slate-400">
                          建议勾选行业/企业分区并上传关键模板，智能体会在计划中优先引用，提升命中率与完整度。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {heroStats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">{stat.label}</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">{stat.value}</p>
                        <p className="text-xs text-slate-500">{stat.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-sky-50/80 px-4 py-3 text-sm text-slate-700">
                    <span className="flex items-center gap-2 text-slate-700">
                      <Network className="h-4 w-4 text-sky-500" />
                      <span>桌面 / Web</span>
                    </span>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Badge variant="success" className="rounded-full bg-linear-to-r from-sky-200 to-blue-300 text-sky-900 ring-sky-200/60">
                        Enterprise Ready
                      </Badge>
                      <Badge className="rounded-full bg-white text-sky-700 ring-1 ring-sky-100">
                        深度检索 · 联网搜索
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <Badge className="w-fit rounded-full bg-linear-to-r from-sky-200 via-blue-200 to-indigo-200 text-[11px] uppercase tracking-[0.3em] text-sky-900 ring-1 ring-sky-300">
                INTELLIGENT WORKFLOWS
              </Badge>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">让知识治理更简洁、流程更透明</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-600">
                运幄围绕高效检索、协作共享、数据驱动优化与系统集成等核心优势，帮助团队在完整的知识生命周期内保持内容更新与价值延展。
              </p>
            </div>
            <Button variant="outline" className="h-11 rounded-full border-sky-200 bg-white px-6 text-sky-700 hover:bg-sky-100" asChild>
              <Link href="#platform">查看全端支撑</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {capabilityCards.map((capability) => (
              <Card
                key={capability.title}
                className="group relative h-full overflow-hidden border border-sky-100 bg-white p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-45px_rgba(37,99,235,0.45)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-30">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.22)_0%,transparent_70%)]" />
                </div>
                <div className="relative flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    <capability.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{capability.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{capability.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden border border-sky-100 bg-white">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-sky-100 via-transparent to-blue-100" />
            <CardContent className="relative flex flex-col gap-10 p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <Badge variant="success" className="w-fit rounded-full bg-linear-to-r from-sky-200 to-blue-300 text-sky-900 ring-sky-200/60">
                  数据驱动 · 持续进化
                </Badge>
                <h3 className="text-3xl font-semibold text-slate-900">将知识资产化，实时洞察业务反馈</h3>
                <p className="text-base leading-7 text-slate-600">
                  内建指标矩阵洞察内容热度、知识缺口与检索命中率；结合自动化治理策略，驱动知识库在每一次反馈中自我优化。
                </p>
              </div>
              <div className="grid w-full gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CloudDownload className="h-8 w-8 text-sky-500" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">多端同步</p>
                      <p className="text-lg font-semibold text-slate-900">桌面端 / 网页端</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">
                    桌面软件与网页方式并行提供，保持知识库在不同设备间的同步体验。
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-sky-500" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">协同效率</p>
                      <p className="text-lg font-semibold text-slate-900">共享与协作</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">
                    多人协作与知识共享能力，让团队能够在同一空间持续沉淀与传递内容。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="platform" className="space-y-12">
          <Card className="overflow-hidden border border-sky-100 bg-linear-to-br from-white via-sky-50/70 to-blue-50 shadow-[0_24px_80px_-60px_rgba(37,99,235,0.45)]">
            <CardContent className="grid gap-6 p-8 sm:p-10 lg:grid-cols-2 lg:items-stretch">
              <div className="flex flex-col gap-6">
                <div className="space-y-3">
                  <Badge className="w-fit rounded-full bg-linear-to-r from-sky-200 via-blue-200 to-indigo-200 text-[11px] uppercase tracking-[0.3em] text-sky-900 ring-1 ring-sky-300">
                    PLATFORM COVERAGE
                  </Badge>
                  <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">全端覆盖，随时随地唤醒知识能力</h2>
                  <p className="max-w-2xl text-base leading-7 text-slate-600">
                    桌面、Web 即刻可用，API 与私有化部署随时接入；智能体模式在各端保持一致体验，保障安全合规与统一引用。
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex gap-3 rounded-xl border border-sky-100 bg-white/85 px-4 py-3 shadow-sm">
                    <CloudDownload className="mt-0.5 h-5 w-5 text-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-slate-900">桌面/Web 即开即用</p>
                      <p className="text-xs text-slate-500">同步知识分区与引用，智能体计划保持一致。</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl border border-sky-100 bg-white/85 px-4 py-3 shadow-sm">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-slate-900">私有部署 / API</p>
                      <p className="text-xs text-slate-500">专属 VPC 或本地化，API 协同内部系统。</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                  <span className="rounded-full bg-white px-3 py-1 ring-1 ring-sky-100 text-sky-700">Windows</span>
                  <span className="rounded-full bg-white px-3 py-1 ring-1 ring-sky-100 text-sky-700">macOS</span>
                  <span className="rounded-full bg-white px-3 py-1 ring-1 ring-sky-100 text-sky-700">Web</span>
                  <span className="rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200 text-slate-500">Linux / Android / iOS · 研发中</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    className="gap-2 rounded-full bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500 px-7 text-white hover:from-sky-400 hover:via-blue-400 hover:to-indigo-400"
                    onClick={downloadDesktop}
                  >
                    <CloudDownload className="h-4 w-4" /> 下载 {getPlatform()} 版
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 rounded-full border-sky-200 bg-white px-7 text-sky-700 hover:bg-sky-50"
                    onClick={() => {
                      const web = availableOS.find((item) => item.name === "Web");
                      if (web?.action) web.action();
                    }}
                  >
                    <Network className="h-4 w-4" /> 打开 Web 端
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Card className="flex flex-1 flex-col border border-sky-100 bg-white/85 shadow-sm">
                  <Tabs defaultValue="ready" className="flex h-full flex-col">
                    <CardHeader className="flex items-center justify-between gap-3 border-b border-sky-50 pb-3">
                      <div className="flex gap-2 items-center justify-between">
                        <div className="flex flex-row gap-2 justify-baseline items-center">
                          <p className="text-sm font-semibold text-slate-900">端点状态</p>
                          <Badge variant="success" className="rounded-full bg-linear-to-r from-sky-200 to-blue-300 text-[10px] uppercase tracking-[0.28em] text-sky-900 ring-sky-200/60">
                            更新中
                          </Badge>
                        </div>
                        <TabsList className="h-7 rounded-full bg-sky-50/90 px-1 py-0.5 shadow-inner">
                          <TabsTrigger value="ready" className="h-5 min-w-0 rounded-full px-1.5 py-0.5 text-[9px] font-medium leading-none sm:min-w-0 sm:px-1.5 sm:py-0.5 sm:text-[9px] data-[state=active]:bg-white data-[state=active]:text-sky-700">
                            已上线
                          </TabsTrigger>
                          <TabsTrigger value="roadmap" className="h-5 min-w-0 rounded-full px-1.5 py-0.5 text-[9px] font-medium leading-none sm:min-w-0 sm:px-1.5 sm:py-0.5 sm:text-[9px] data-[state=active]:bg-white data-[state=active]:text-sky-700">
                            待上线
                          </TabsTrigger>
                        </TabsList>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 p-0">
                      <TabsContent value="ready" className="flex h-full flex-col">
                        <div className="flex flex-col divide-y divide-sky-100">
                          {readyPlatforms.map((item) => (
                            <div key={item.name} className="flex flex-wrap items-center gap-4 px-4 py-4 sm:flex-nowrap">
                              <div className="min-w-[180px] flex-1 space-y-1">
                                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                                <p className="text-xs text-slate-500">{item.description}</p>
                              </div>
                              <div className="flex items-center gap-3 self-start sm:self-center">
                                <div className="w-20 text-right text-[10px] uppercase tracking-[0.24em] text-slate-400 leading-tight">
                                  <span className="block">版本</span>
                                  <span className="block text-sm font-semibold text-sky-600">{item.version}</span>
                                </div>
                                <Button
                                  size="sm"
                                  className="min-w-[150px] justify-center gap-2 rounded-full bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500 px-3 text-white hover:from-sky-400 hover:via-blue-400 hover:to-indigo-400"
                                  onClick={() => item.action?.()}
                                >
                                  <CloudDownload className="h-3 w-3" /> {item.cta}
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="roadmap" className="flex h-full flex-col">
                        <div className="grid gap-3 px-4 py-4 sm:grid-cols-2">
                          {roadmapPlatforms.map((item) => (
                            <div key={item.name} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-slate-900">{item.name}</span>
                                <Badge variant="neutral" className="rounded-full bg-white text-[10px] uppercase tracking-[0.26em] text-slate-600 ring-1 ring-slate-200">
                                  研发中
                                </Badge>
                              </div>
                              <p className="mt-2 text-xs text-slate-500">{item.note}</p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </CardContent>
                  </Tabs>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-12" id="plans">
          <div className="space-y-4 text-center">
            <Badge className="mx-auto w-fit rounded-full bg-linear-to-r from-sky-200 via-blue-200 to-indigo-200 text-[11px] uppercase tracking-[0.3em] text-sky-900 ring-1 ring-sky-300">
              FLEXIBLE PLANS
            </Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">契合成长节奏的知识能力组合</h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600">
              从敏捷试用到深度私有化部署，运幄提供自适应的服务包与成功策略，伴随组织知识化转型的每一步。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className="flex h-full flex-col justify-between border border-sky-100 bg-white p-7 shadow-[0_30px_80px_-55px_rgba(37,99,235,0.45)]"
              >
                <CardHeader className="space-y-4 p-0">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-semibold text-slate-900">{plan.name}</CardTitle>
                    <Badge variant="neutral" className="text-xs uppercase tracking-[0.32em] rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200">
                      {plan.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm leading-7 text-slate-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-5 p-0 pt-4">
                  <ul className="space-y-3 text-sm text-slate-600">
                    {plan.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-sky-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-auto gap-2 rounded-full px-8 text-sm ${plan.name === "私有部署" ? "bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500 text-white hover:from-sky-400 hover:via-blue-400 hover:to-indigo-400" : "border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-100"}`}
                    variant={plan.name === "私有部署" ? "default" : "outline"}
                    onClick={() => {
                      window.location.href = "mailto:mengwj12345@163.com";
                    }}
                  >
                    <Sparkles className="h-4 w-4" /> {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-sky-100 bg-white/90">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <Badge className="w-fit rounded-full bg-linear-to-r from-sky-200 via-blue-200 to-indigo-200 text-[11px] uppercase tracking-[0.34em] text-sky-900 ring-1 ring-sky-300">
              TAKE ACTION
            </Badge>
            <h3 className="text-3xl font-semibold text-slate-900">即刻开启组织知识的智能跃迁</h3>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              与运幄专家共创知识蓝图，打造安全可信、持续进化的企业知识大脑。
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <Button
              asChild
              aria-label="立即体验运幄 AI 知识库"
              className="min-w-[220px] gap-2 rounded-full bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500 text-white hover:from-sky-400 hover:via-blue-400 hover:to-indigo-400"
            >
              <Link href="mailto:mengwj12345@163.com">预约咨询</Link>
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 md:justify-end">
              <span>Copyright © 2025 运幄知识库</span>
              <span>·</span>
              <Link href="https://beian.miit.gov.cn/" className="hover:text-sky-600">浙ICP备20029288号-2</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
