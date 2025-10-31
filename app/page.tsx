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
  Boxes,
  CloudDownload,
  Layers3,
  Link2,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

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
    title: "生态级集成",
    description:
      "开放 API 与插件，快速串联现有 IM、工单、CRM 等系统，打通业务链路。",
    icon: Link2,
  },
];

const metrics = [
  { label: "知识命中率", value: "98%" },
  { label: "部署周期", value: "< 2 周" },
  { label: "知识贡献增长", value: "3.6x" },
  { label: "满意度", value: "4.9/5" },
];

const osMatrix = [
  {
    name: "Windows",
    description: "适配 Windows 10 及以上版本，覆盖主流企业桌面环境。",
    status: "available",
    version: "v2.3.1",
    action: "下载 Windows 版",
  },
  {
    name: "macOS",
    description: "兼容 Apple Silicon 与 Intel 芯片，为创意与研发团队提供一致体验。",
    status: "available",
    version: "v2.3.1",
    action: "下载 macOS 版",
  },
  {
    name: "Linux",
    description: "覆盖主流桌面发行版的构建计划已在进行中。",
    status: "upcoming",
    note: "预计 Q4 发布",
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
    note: "研发中",
  },
  {
    name: "Web",
    description: "通过浏览器访问，具备完整功能，可与桌面端同步协作。",
    status: "available",
    version: "即时访问",
    action: "打开 Web 端",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 sm:px-12">
        <Tabs defaultValue="overview" className="w-full">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <Badge className="px-4 py-1 text-sm font-medium">
                运幄 AI 知识库 · 企业级智能知识中枢
              </Badge>
              <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                让组织的知识触手可及，协作智能、生长不息
              </h1>
              <p className="max-w-2xl text-balance text-lg text-muted-foreground">
                运幄 AI 知识库通过高效检索、多层级知识体系与智能分析，帮助团队将经验资产化，
                实现跨部门协作与业务决策的持续优化。
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" className="gap-2">
                  <Sparkles className="h-4 w-4" /> 立即体验 Demo
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Users className="h-4 w-4" /> 预约专属方案
                </Button>
              </div>
              <TabsList className="mt-2">
                <TabsTrigger value="overview">产品总览</TabsTrigger>
                <TabsTrigger value="download">客户端下载</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-16">
              <section className="grid gap-6 md:grid-cols-3">
                {featureHighlights.map((feature) => (
                  <Card key={feature.title} className="relative overflow-hidden">
                    <CardHeader className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-7">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </section>

              <section className="grid gap-6 rounded-3xl border border-dashed border-primary/20 bg-white/70 p-8 shadow-sm backdrop-blur-sm md:grid-cols-[2fr,3fr] md:p-12">
                <div className="flex flex-col gap-4">
                  <Badge variant="success" className="self-start px-3 py-1">
                    智能知识运营中心
                  </Badge>
                  <h2 className="text-3xl font-semibold tracking-tight text-primary">
                    面向全业务场景的知识协同引擎
                  </h2>
                  <p className="text-lg leading-8 text-muted-foreground">
                    从知识沉淀、到流转分发、再到数据洞察，运幄 AI 知识库打通知识生命全周期，助力企业实现知识可见、可用、可增长。
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 text-primary" />
                      <span>多角色工作台覆盖知识管理员、领域专家与普通成员。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <LockKeyhole className="mt-0.5 h-5 w-5 text-primary" />
                      <span>细粒度权限与审计追踪，保障敏感知识安全可控。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Boxes className="mt-0.5 h-5 w-5 text-primary" />
                      <span>开放式插件市场，支持将知识快速嵌入现有业务流程。</span>
                    </li>
                  </ul>
                </div>
                <Card className="grid grid-cols-2 gap-4 border-none bg-slate-900 text-slate-100">
                  {metrics.map((metric) => (
                    <CardContent
                      key={metric.label}
                      className="flex flex-col items-start justify-center gap-2 rounded-2xl bg-white/10 p-6"
                    >
                      <span className="text-sm uppercase tracking-wide text-white/70">
                        {metric.label}
                      </span>
                      <span className="text-3xl font-semibold">{metric.value}</span>
                    </CardContent>
                  ))}
                </Card>
              </section>

              <section className="grid gap-6 md:grid-cols-3">
                {capabilityCards.map((capability) => (
                  <Card key={capability.title} className="flex flex-col gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <capability.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      {capability.title}
                    </h3>
                    <p className="text-base leading-7 text-muted-foreground">
                      {capability.description}
                    </p>
                  </Card>
                ))}
              </section>

              <Card className="overflow-hidden border-0 bg-primary text-primary-foreground">
                <CardContent className="flex flex-col gap-8 p-10 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-col gap-3">
                    <Badge variant="success" className="w-fit bg-white/10 text-primary-foreground">
                      数据驱动 · 决策加速
                    </Badge>
                    <h2 className="text-3xl font-semibold">
                      以数据洞察优化知识策略，释放组织潜力
                    </h2>
                    <p className="max-w-2xl text-lg text-primary-foreground/80">
                      内置仪表盘实时呈现内容热度、检索命中率、知识空白等关键指标，帮助运营团队动态迭代知识结构，保持业务领先。
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 rounded-3xl bg-white/10 p-6 text-primary-foreground">
                    <div className="flex items-center gap-3">
                      <CloudDownload className="h-10 w-10" />
                      <div>
                        <p className="text-sm text-primary-foreground/70">多端无缝</p>
                        <p className="text-xl font-semibold">桌面 & Web 同步</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-10 w-10" />
                      <div>
                        <p className="text-sm text-primary-foreground/70">协作效率</p>
                        <p className="text-xl font-semibold">平均提升 45%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="download" className="space-y-10">
              <section className="rounded-3xl border border-primary/10 bg-white/80 p-8 backdrop-blur-sm">
                <div className="flex flex-col gap-4 text-center">
                  <Badge variant="success" className="mx-auto w-fit px-3 py-1">
                    全端覆盖 · 一键部署
                  </Badge>
                  <h2 className="text-3xl font-semibold text-primary">
                    选择适配的客户端，快速接入运幄 AI 知识库
                  </h2>
                  <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                    当前提供 Windows、macOS 与 Web 端完整能力，其他平台正在加速适配中。
                    我们将第一时间通知您新版本发布。
                  </p>
                </div>
              </section>

              <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {osMatrix.map((os) => (
                  <Card key={os.name} className="flex h-full flex-col justify-between">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-primary">{os.name}</CardTitle>
                        {os.status === "available" ? (
                          <Badge variant="success" className="text-xs">
                            已支持
                          </Badge>
                        ) : (
                          <Badge variant="neutral" className="text-xs">
                            待支持
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-base leading-7">
                        {os.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      {os.status === "available" ? (
                        <>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>最新版本</span>
                            <span className="font-medium text-primary">{os.version}</span>
                          </div>
                          <Button className="gap-2" variant="default">
                            <CloudDownload className="h-4 w-4" /> {os.action}
                          </Button>
                        </>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {os.note ?? "即将推出更多适配方案，欢迎订阅更新。"}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </section>

              <Card className="border-dashed border-primary/20 bg-muted/60">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold text-primary">
                      想优先体验移动端？
                    </h3>
                    <p className="max-w-2xl text-muted-foreground">
                      填写企业信息即可加入共创计划，获取 Android 与 iOS 客户端的内测资格，并与产品团队共同定义最佳实践。
                    </p>
                  </div>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Users className="h-4 w-4" /> 申请加入共创计划
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  );
}
