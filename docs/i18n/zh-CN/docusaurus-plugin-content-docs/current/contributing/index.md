---
sidebar_position: 6
sidebar_label: "Contributing"
---

# 为 `easy-dates` 贡献代码

首先，感谢您抽出时间参与贡献！🎉

以下是为 `easy-dates` 项目贡献代码的指南。这些主要是指导原则而非硬性规定，请根据实际情况灵活运用，也欢迎通过 Pull Request 提议修改本文档。

## 行为准则

本项目所有参与者均需遵守[行为准则](code-of-conduct)。如发现不当行为，请邮件举报至 [hello@sandypockets.dev](mailto:hello@sandypockets.dev)。

## 如何参与贡献？

### 提交错误报告

本部分将指导您提交错误报告。遵循这些指南有助于维护者和社区成员理解问题、复现现象并定位相关报告。

创建错误报告前，请先查阅[检查清单](#before-submitting-a-bug-report)，可能您无需提交新报告。

创建错误报告时，请[尽可能提供详细信息](#how-do-i-submit-a-good-bug-report)。填写模板要求的信息将加速问题解决。

> **注意：** 若发现已关闭的类似问题，请新建问题并在正文中附上原问题链接。

#### 提交错误报告前的检查

* 确认问题在最新版 `easy-dates` 中可复现。当前版本为 [![](https://img.shields.io/npm/v/easy-dates?color=%231eb319&label=)](https://www.npmjs.com/package/easy-dates)
* 检查现有开放/关闭的 issue，确保问题未被处理或已解决

#### 如何提交优质错误报告？

错误报告通过 [GitHub issues](https://guides.github.com/features/issues/) 跟踪。创建 issue 时请按模板回答以下问题：

* **使用清晰明确的标题**概括问题
* **详细描述问题复现步骤**（尽可能具体）
* **提供可演示步骤的示例**：可包含文件链接、GitHub 项目、可直接复用的代码片段（或 StackBlitz/CodeSandbox 示例）。若在 issue 中提供代码，请使用[Markdown代码块](https://help.github.com/articles/markdown-basics/#multiple-lines)
* **描述遵循步骤后观察到的异常行为**，明确指出问题所在
* **说明预期行为及其原因**
* **附上截图和动态GIF**展示操作步骤与问题现象

### 功能建议

提交功能建议时，请尽可能详细描述，包括假设该功能存在时您将如何使用的具体步骤。

#### 提交功能建议前的准备

* **初步搜索**确认该功能增强建议是否已被提出。若已存在，请在原有issue中添加评论而非新建issue。功能增强建议通过[GitHub issues](https://guides.github.com/features/issues/)进行追踪。请在仓库中创建issue并提供以下信息：
* **使用清晰明确的标题**来标识该建议
* **逐步详细描述建议的功能增强**，尽可能包含细节
* **提供具体示例来演示步骤**。包含可复用的代码片段，使用[Markdown代码块](https://help.github.com/articles/markdown-basics/#multiple-lines)格式
* **描述当前行为**并**说明期望行为及其原因**

### 拉取请求(Pull Requests)

在您的拉取请求被审核前，维护人员需要确认其完整性。审核者可能会要求您完成额外的设计工作、测试或其他修改后，才会最终接受您的拉取请求。

## 风格指南

### Git提交信息

* 使用现在时态（"添加功能"而非"已添加功能"）
* 使用祈使语气（"将光标移至..."而非"将光标移动至..."）
* 首行限制在72个字符以内

### JavaScript风格指南

所有JavaScript代码都使用[Prettier](https://prettier.io/)进行格式化

* 优先使用对象展开运算符(`{...anotherObj}`)而非`Object.assign()`
* 尽可能使用表达式内联`export`

## 自动化开发流程

如果您正在为库编写新函数，可以使用`createNewFunctionFiles`脚本生成新的函数文件和测试文件。运行以下命令（将`myNewFunctionName`替换为您要创建的实际函数名）：

```shell
yarn new myNewFunctionName
```

这将生成包含新函数文件和测试文件的新目录

```shell
src/myNewFunctionName/myNewFunctionName.js
src/myNewFunctionName/myNewFunctionName.test.js
```

同时会在`src/index.js`文件中生成导出语句，并在`docs/myNewFunctionName.md`文件中创建新的文档条目

### 测试新函数

当函数代码和测试编写完成后，运行`yarn test`。这将执行代码检查、构建脚本运行及测试。若存在错误，修复后可再次运行`yarn test`重新测试。所有测试通过后即可提交拉取请求