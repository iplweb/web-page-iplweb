# iplweb Makefile
# Manage Next.js project tasks

# Variables
PNPM := pnpm
PORT := 3000
BUILD_DIR := .next
OUT_DIR := out

# Colors for output
RED := \033[0;31m
GREEN := \033[0;32m
YELLOW := \033[1;33m
NC := \033[0m # No Color

# Default target
.DEFAULT_GOAL := help

# Help command
.PHONY: help
help: ## Show this help message
	@echo "$(GREEN)iplweb Project Commands$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(YELLOW)%-20s$(NC) %s\n", $$1, $$2}'
	@echo ""
	@echo "Usage: make [command]"

# Installation
.PHONY: install
install: ## Install project dependencies
	@echo "$(GREEN)Installing dependencies...$(NC)"
	$(PNPM) install

.PHONY: clean-install
clean-install: clean ## Clean install (remove node_modules and reinstall)
	@echo "$(GREEN)Performing clean install...$(NC)"
	rm -rf node_modules pnpm-lock.yaml
	$(PNPM) install

# Development
.PHONY: dev
dev: ## Start development server (port 3000)
	@echo "$(GREEN)Starting development server on http://localhost:$(PORT)...$(NC)"
	$(PNPM) dev

.PHONY: dev-port
dev-port: ## Start dev server on custom port (usage: make dev-port PORT=4000)
	@echo "$(GREEN)Starting development server on http://localhost:$(PORT)...$(NC)"
	$(PNPM) dev --port $(PORT)

# Building
.PHONY: build
build: ## Build for production
	@echo "$(GREEN)Building for production...$(NC)"
	$(PNPM) build

.PHONY: build-static
build-static: ## Build static export
	@echo "$(GREEN)Building static export...$(NC)"
	$(PNPM) build
	$(PNPM) next export

.PHONY: start
start: ## Start production server
	@echo "$(GREEN)Starting production server...$(NC)"
	$(PNPM) start

.PHONY: preview
preview: build start ## Build and preview production build

# Code Quality
.PHONY: lint
lint: ## Run ESLint
	@echo "$(GREEN)Running ESLint...$(NC)"
	$(PNPM) lint

.PHONY: lint-fix
lint-fix: ## Run ESLint with auto-fix
	@echo "$(GREEN)Running ESLint with auto-fix...$(NC)"
	$(PNPM) lint --fix

.PHONY: type-check
type-check: ## Run TypeScript type checking
	@echo "$(GREEN)Checking TypeScript types...$(NC)"
	$(PNPM) tsc --noEmit

.PHONY: format
format: ## Format code with Prettier (if configured)
	@echo "$(GREEN)Formatting code...$(NC)"
	@if [ -f ".prettierrc" ] || [ -f "prettier.config.js" ]; then \
		$(PNPM) prettier --write . ; \
	else \
		echo "$(YELLOW)Prettier not configured$(NC)"; \
	fi

# Cleaning
.PHONY: clean
clean: ## Clean build artifacts
	@echo "$(GREEN)Cleaning build artifacts...$(NC)"
	rm -rf $(BUILD_DIR) $(OUT_DIR) .turbo

.PHONY: clean-all
clean-all: clean ## Clean all generated files and dependencies
	@echo "$(GREEN)Cleaning all generated files...$(NC)"
	rm -rf node_modules pnpm-lock.yaml

# Dependencies
.PHONY: update
update: ## Update dependencies to latest versions
	@echo "$(GREEN)Updating dependencies...$(NC)"
	$(PNPM) update

.PHONY: outdated
outdated: ## Check for outdated dependencies
	@echo "$(GREEN)Checking for outdated dependencies...$(NC)"
	$(PNPM) outdated || true

.PHONY: audit
audit: ## Run security audit
	@echo "$(GREEN)Running security audit...$(NC)"
	$(PNPM) audit

.PHONY: audit-fix
audit-fix: ## Fix security vulnerabilities
	@echo "$(GREEN)Fixing security vulnerabilities...$(NC)"
	$(PNPM) audit --fix

# Git helpers
.PHONY: status
status: ## Show git status
	@git status

.PHONY: commit
commit: ## Commit changes (usage: make commit MSG="your message")
	@if [ -z "$(MSG)" ]; then \
		echo "$(RED)Error: Please provide a commit message using MSG=\"your message\"$(NC)"; \
		exit 1; \
	fi
	@echo "$(GREEN)Committing changes...$(NC)"
	git add .
	git commit -m "$(MSG)"

# Deployment
.PHONY: deploy-vercel
deploy-vercel: build ## Deploy to Vercel
	@echo "$(GREEN)Deploying to Vercel...$(NC)"
	vercel --prod

# Analysis
.PHONY: analyze
analyze: ## Analyze bundle size
	@echo "$(GREEN)Analyzing bundle size...$(NC)"
	ANALYZE=true $(PNPM) build

.PHONY: lighthouse
lighthouse: ## Run Lighthouse performance audit (requires Chrome)
	@echo "$(GREEN)Running Lighthouse audit...$(NC)"
	@if command -v lighthouse >/dev/null 2>&1; then \
		lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html --view; \
	else \
		echo "$(YELLOW)Lighthouse not installed. Install with: npm i -g lighthouse$(NC)"; \
	fi

# Quick commands
.PHONY: up
up: install dev ## Install dependencies and start dev server

.PHONY: fresh
fresh: clean-install dev ## Fresh start (clean install + dev)

.PHONY: check
check: lint type-check ## Run all checks (lint + type-check)

# Docker support (if needed in future)
.PHONY: docker-build
docker-build: ## Build Docker image
	@echo "$(GREEN)Building Docker image...$(NC)"
	docker build -t iplweb:latest .

.PHONY: docker-run
docker-run: ## Run Docker container
	@echo "$(GREEN)Running Docker container...$(NC)"
	docker run -p 3000:3000 iplweb:latest

# Utility
.PHONY: tree
tree: ## Show project structure (requires tree command)
	@if command -v tree >/dev/null 2>&1; then \
		tree -I 'node_modules|.next|out|.git' -L 2; \
	else \
		echo "$(YELLOW)tree command not installed$(NC)"; \
	fi

.PHONY: size
size: ## Check project size
	@echo "$(GREEN)Project size breakdown:$(NC)"
	@du -sh node_modules 2>/dev/null || echo "node_modules: not installed"
	@du -sh .next 2>/dev/null || echo ".next: not built"
	@du -sh out 2>/dev/null || echo "out: not exported"
	@echo "---"
	@du -sh . 2>/dev/null

# Show current environment
.PHONY: env
env: ## Show environment info
	@echo "$(GREEN)Environment Information:$(NC)"
	@echo "Node version: $$(node -v)"
	@echo "pnpm version: $$(pnpm -v)"
	@echo "Next.js version: $$(cat package.json | grep '"next"' | cut -d'"' -f4)"
	@echo "Current directory: $$(pwd)"
	@echo "Git branch: $$(git branch --show-current 2>/dev/null || echo 'not a git repo')"