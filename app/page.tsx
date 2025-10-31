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
    title: "高效检索",
    description: "融合语义、标签与多模态搜索，让团队快速定位海量知识，响应关键信息请求。",
    icon: Sparkles,
  },
  {
    title: "多终端协同",
    description: "桌面端、Web 与移动端无缝协同，知识随时随地可得，保障业务连续性。",
    icon: Network,
  },
  {
    title: "智能分析",
    description: "实时洞察知识使用情况，助力内容治理与持续优化，驱动决策提效。",
    icon: BarChart3,
  },
];

const capabilityCards = [
  {
    title: "结构化知识管理",
    description:
      "支持三级知识库分区、细粒度权限与版本记录，帮助企业构建可信任的知识体系。",
    icon: Layers3,
  },
  {
    title: "安全合规保障",
    description:
      "企业级安全架构覆盖账号、权限、数据与日志，满足金融、政企等严苛要求。",
    icon: ShieldCheck,
  },
  {
    title: "协作共享中心",
    description:
      "借助笔记系统与共享空间，团队成员可以共同沉淀内容并持续迭代知识成果。",
    icon: Users,
  },
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

const heroStats = [
  {
    label: "知识架构",
    value: "三级分区",
    description: "灵活规划知识空间层级，确保内容有序沉淀。",
  },
  {
    label: "适用场景",
    value: "个人 · 团队",
    description: "同时支持个人创作与企业协同的知识沉淀。",
  },
  {
    label: "访问方式",
    value: "桌面 + Web",
    description: "提供桌面软件与网页端，满足不同设备使用。",
  },
];

export default function Home() {
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

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-32 pt-24 sm:px-10 md:gap-28 lg:px-12">
        <section className="relative isolate overflow-hidden rounded-3xl border border-sky-100 bg-white/90 p-10 shadow-[0_40px_120px_-60px_rgba(29,78,216,0.35)] backdrop-blur-sm sm:p-16">
          <div className="absolute right-0 top-0 h-full w-[65%] bg-[radial-gradient(circle_at_top_right,rgba(191,219,254,0.35)_0%,rgba(219,234,254,0.22)_42%,transparent_85%)] opacity-60" />
          <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <Badge className="w-fit rounded-full bg-linear-to-r from-sky-200 via-blue-200 to-indigo-200 text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-900 ring-1 ring-sky-300">
                  运幄 AI 知识库 · 智能知识中枢
                </Badge>
                <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  以 AI 驱动知识流动，让组织判断更快、行动更准
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  运幄以数据智能、语义洞察与安全治理为底座，将分散知识资产汇聚成高价值的企业大脑，帮助团队实现从信息到决策的全程提效。
                </p>
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
                  <Link href="https://doc.yunwoai.com" target="_blank" rel="noopener noreferrer">
                    📖 查看教程
                  </Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-sky-100/60"
                  >
                    <p className="text-2xl font-semibold text-sky-600 sm:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                    <p className="mt-3 text-sm text-slate-500">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="flex w-full max-w-md flex-col gap-6 border border-sky-100 bg-white p-8 shadow-[0_35px_80px_-50px_rgba(37,99,235,0.45)]">
              <CardContent className="flex flex-col gap-6 p-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <Network className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-sky-600/80">Knowledge Workspace</p>
                    <h3 className="text-xl font-semibold text-slate-900">多端协同的知识中枢</h3>
                  </div>
                </div>
                <p className="text-sm leading-7 text-slate-600">
                  集合智能搜索、笔记系统与知识库分区能力，在桌面端与网页端之间保持统一体验，帮助团队随时记录并分享信息。
                </p>
                <div className="grid gap-4">
                  {featureHighlights.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{feature.title}</p>
                        <p className="text-xs text-slate-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Badge variant="success" className="w-fit rounded-full bg-linear-to-r from-sky-200 to-blue-300 text-sky-900 ring-sky-200/60">
                  Enterprise Ready · Zero Trust
                </Badge>
              </CardContent>
            </Card>
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
          <div className="space-y-4 text-center">
            <Badge className="mx-auto w-fit rounded-full bg-linear-to-r from-sky-200 via-blue-200 to-indigo-200 text-[11px] uppercase tracking-[0.3em] text-sky-900 ring-1 ring-sky-300">
              PLATFORM COVERAGE
            </Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">全端覆盖，随时随地唤醒知识能力</h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600">
              Windows、macOS 与 Web 端提供完整体验，配合 API 与私有化部署策略，帮助企业在安全合规的前提下快速激活知识网络。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {osMatrix.map((os) => (
              <Card key={os.name} className="flex h-full flex-col justify-between border border-sky-100 bg-white p-6 shadow-sm">
                <CardHeader className="p-0">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold text-slate-900">{os.name}</CardTitle>
                    {os.status === "available" ? (
                      <Badge variant="success" className="text-[10px] uppercase tracking-[0.32em] rounded-full bg-linear-to-r from-sky-200 to-blue-300 text-sky-900 ring-sky-200/60">
                        已支持
                      </Badge>
                    ) : (
                      <Badge variant="neutral" className="text-[10px] uppercase tracking-[0.32em] rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200">
                        研发中
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="mt-3 text-sm leading-7 text-slate-600">
                    {os.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 p-0 pt-6">
                  {os.status === "available" ? (
                    <>
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
                        <span>最新版本</span>
                        <span className="text-sm font-semibold text-sky-600">{os.version}</span>
                      </div>
                      <Button
                        className="gap-2 rounded-full bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500 text-white hover:from-sky-400 hover:via-blue-400 hover:to-indigo-400"
                        onClick={() => {
                          if (typeof os.action === "function") {
                            os.action();
                          }
                        }}
                      >
                        <CloudDownload className="h-4 w-4" /> {os.action_str}
                      </Button>
                    </>
                  ) : (
                    <p className="text-sm text-slate-500">{os.note ?? "即将推出更多适配方案，欢迎订阅更新。"}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
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
              与运幄专家团队共创知识运营蓝图，打造安全可信、持续进化的企业知识大脑。
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
