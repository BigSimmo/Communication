---
name: comprehensive-review-full-review
description: "Use when working with comprehensive review full review"
risk: unknown
source: community
date_added: "2026-02-27"
---

## Use this skill when

- Working on comprehensive review full review tasks or workflows
- Needing guidance, best practices, or checklists for comprehensive review full review

## Do not use this skill when

- The task is unrelated to comprehensive review full review
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- This local adaptation uses the workflow below; no additional playbook is bundled.

Orchestrate comprehensive multi-dimensional code review using specialized review agents

[Extended thinking: This workflow performs an exhaustive code review by orchestrating multiple specialized agents in sequential phases. Each phase builds upon previous findings to create a comprehensive review that covers code quality, security, performance, testing, documentation, and best practices. The workflow integrates modern AI-assisted review tools, static analysis, security scanning, and automated quality metrics. Results are consolidated into actionable feedback with clear prioritization and remediation guidance. The phased approach ensures thorough coverage while maintaining efficiency through parallel agent execution where appropriate.]

## Review Configuration Options

- **--security-focus**: Prioritize security vulnerabilities and OWASP compliance
- **--performance-critical**: Emphasize performance bottlenecks and scalability issues
- **--tdd-review**: Include TDD compliance and test-first verification
- **--ai-assisted**: Enable AI-powered review tools (Copilot, Codium, Bito)
- **--strict-mode**: Fail review on any critical issues found
- **--metrics-report**: Generate detailed quality metrics dashboard
- **--framework [name]**: Apply framework-specific best practices (React, Spring, Django, etc.)

## Supported execution and authority

The role names below describe review questions, not installed agent types. Inspect the host's callable tools and applicable delegation permission first. If permitted agents are available, assign bounded roles with the relevant diff, ownership and expected evidence using that tool's supported schema. Otherwise perform the same roles directly in sequence. Do not request invented agent types or claim independent review when one agent performed every role. If a project requires an independent reviewer and none is available, report that gate as unmet.

External scanners, AI services, profilers and model choices in role prompts are optional examples, not installed dependencies or permission to install, transmit source, spend money or contact services. Use existing authorised tools; record unavailable evidence. The listed options are workflow preferences rather than a bundled CLI. They do not override mandatory project gates. Prepare recommendations and draft text within the user's scope; committing, pushing, merging, enabling automation, contacting people and deploying each require the applicable authority.

## Phase 1: Code Quality & Architecture Review

Review quality and architecture; parallelize only independent permitted roles:

### 1A. Code Quality Analysis
- Perform this role directly, or assign it through an available permitted agent tool using the role prompt below.
- Prompt: "Perform comprehensive code quality review for: $ARGUMENTS. Analyze code complexity, maintainability index, technical debt, code duplication, naming conventions, and adherence to Clean Code principles. Integrate with SonarQube, CodeQL, and Semgrep for static analysis. Check for code smells, anti-patterns, and violations of SOLID principles. Generate cyclomatic complexity metrics and identify refactoring opportunities."
- Expected output: Quality metrics, code smell inventory, refactoring recommendations
- Context: Initial codebase analysis, no dependencies on other phases

### 1B. Architecture & Design Review
- Perform this role directly, or assign it through an available permitted agent tool using the role prompt below.
- Prompt: "Review architectural design patterns and structural integrity in: $ARGUMENTS. Evaluate microservices boundaries, API design, database schema, dependency management, and adherence to Domain-Driven Design principles. Check for circular dependencies, inappropriate coupling, missing abstractions, and architectural drift. Verify compliance with enterprise architecture standards and cloud-native patterns."
- Expected output: Architecture assessment, design pattern analysis, structural recommendations
- Context: Runs parallel with code quality analysis

## Phase 2: Security & Performance Review

Review security and performance using relevant Phase 1 findings:

### 2A. Security Vulnerability Assessment
- Perform this role directly, or assign it through an available permitted agent tool using the role prompt below.
- Prompt: "Execute comprehensive security audit on: $ARGUMENTS. Perform OWASP Top 10 analysis, dependency vulnerability scanning with Snyk/Trivy, secrets detection with GitLeaks, input validation review, authentication/authorization assessment, and cryptographic implementation review. Include findings from Phase 1 architecture review: {phase1_architecture_context}. Check for SQL injection, XSS, CSRF, insecure deserialization, and configuration security issues."
- Expected output: Vulnerability report, CVE list, security risk matrix, remediation steps
- Context: Incorporates architectural vulnerabilities identified in Phase 1B

### 2B. Performance & Scalability Analysis
- Perform this role directly, or assign it through an available permitted agent tool using the role prompt below.
- Prompt: "Conduct performance analysis and scalability assessment for: $ARGUMENTS. Profile code for CPU/memory hotspots, analyze database query performance, review caching strategies, identify N+1 problems, assess connection pooling, and evaluate asynchronous processing patterns. Consider architectural findings from Phase 1: {phase1_architecture_context}. Check for memory leaks, resource contention, and bottlenecks under load."
- Expected output: Performance metrics, bottleneck analysis, optimization recommendations
- Context: Uses architecture insights to identify systemic performance issues

## Phase 3: Testing & Documentation Review

Review test and documentation quality:

### 3A. Test Coverage & Quality Analysis
- Perform this role directly, or assign it through an available permitted agent tool using the role prompt below.
- Prompt: "Evaluate testing strategy and implementation for: $ARGUMENTS. Analyze unit test coverage, integration test completeness, end-to-end test scenarios, test pyramid adherence, and test maintainability. Review test quality metrics including assertion density, test isolation, mock usage, and flakiness. Consider security and performance test requirements from Phase 2: {phase2_security_context}, {phase2_performance_context}. Verify TDD practices if --tdd-review flag is set."
- Expected output: Coverage report, test quality metrics, testing gap analysis
- Context: Incorporates security and performance testing requirements from Phase 2

### 3B. Documentation & API Specification Review
- Perform this role directly, or assign it through an available permitted agent tool using the role prompt below.
- Prompt: "Review documentation completeness and quality for: $ARGUMENTS. Assess inline code documentation, API documentation (OpenAPI/Swagger), architecture decision records (ADRs), README completeness, deployment guides, and runbooks. Verify documentation reflects actual implementation based on all previous phase findings: {phase1_context}, {phase2_context}. Check for outdated documentation, missing examples, and unclear explanations."
- Expected output: Documentation coverage report, inconsistency list, improvement recommendations
- Context: Cross-references all previous findings to ensure documentation accuracy

## Phase 4: Best Practices & Standards Compliance

Review framework-specific and industry practices:

### 4A. Framework & Language Best Practices
- Perform this role directly, or assign it through an available permitted agent tool using the role prompt below.
- Prompt: "Verify adherence to framework and language best practices for: $ARGUMENTS. Check modern JavaScript/TypeScript patterns, React hooks best practices, Python PEP compliance, Java enterprise patterns, Go idiomatic code, or framework-specific conventions (based on --framework flag). Review package management, build configuration, environment handling, and deployment practices. Include all quality issues from previous phases: {all_previous_contexts}."
- Expected output: Best practices compliance report, modernization recommendations
- Context: Synthesizes all previous findings for framework-specific guidance

### 4B. CI/CD & DevOps Practices Review
- Perform this role directly, or assign it through an available permitted agent tool using the role prompt below.
- Prompt: "Review CI/CD pipeline and DevOps practices for: $ARGUMENTS. Evaluate build automation, test automation integration, deployment strategies (blue-green, canary), infrastructure as code, monitoring/observability setup, and incident response procedures. Assess pipeline security, artifact management, and rollback capabilities. Consider all issues identified in previous phases that impact deployment: {all_critical_issues}."
- Expected output: Pipeline assessment, DevOps maturity evaluation, automation recommendations
- Context: Focuses on operationalizing fixes for all identified issues

## Consolidated Report Generation

Compile all phase outputs into comprehensive review report:

### Critical Issues (P0 - Must Fix Immediately)
- Security vulnerabilities with CVSS > 7.0
- Data loss or corruption risks
- Authentication/authorization bypasses
- Production stability threats
- Compliance violations (GDPR, PCI DSS, SOC2)

### High Priority (P1 - Fix Before Next Release)
- Performance bottlenecks impacting user experience
- Missing critical test coverage
- Architectural anti-patterns causing technical debt
- Outdated dependencies with known vulnerabilities
- Code quality issues affecting maintainability

### Medium Priority (P2 - Plan for Next Sprint)
- Non-critical performance optimizations
- Documentation gaps and inconsistencies
- Code refactoring opportunities
- Test quality improvements
- DevOps automation enhancements

### Low Priority (P3 - Track in Backlog)
- Style guide violations
- Minor code smell issues
- Nice-to-have documentation updates
- Cosmetic improvements

## Success Criteria

Review is complete for the stated scope when each applicable role has findings or a recorded limitation, each finding has source evidence and a reachable consequence, and the report lists checks actually run. Distinguish measured performance and coverage from source inspection. Do not claim every vulnerability was found or unavailable metrics were measured. Preserve any unmet mandatory gate in the result.

Target: $ARGUMENTS

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
