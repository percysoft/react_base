.DEFAULT_GOAL := help
.PHONY : resources

image: ## Construir la imagen de node: make image
	docker build -t "crm_frontend_react/node:10.15.3" container/node

install: ## Instalar dependencias: make install
	COMMAND='npm install' docker-compose -f container/docker-compose.yml up

start: ## Levantar el prooyecto en el puerto 3000: make start
	COMMAND='npm start' docker-compose -f container/docker-compose.yml up

buildLocal: ## Construir el compilado en Local: make buildLocal
	COMMAND='npm run build:local' docker-compose  -f container/docker-compose.yml up

buildQa: ## Construir el compilado en QA: make buildQa
	COMMAND='npm run build:qa' docker-compose -f container/docker-compose.yml up

buildProduction: ## Construir el compilado en produccion: make buildProduction
	COMMAND='npm run build:production' docker-compose  -f container/docker-compose.yml up

test: ## Test Unitarios Frontend: make test
	COMMAND='npm test' docker-compose -f container/docker-compose.yml up

storybook: ## Test Unitarios Frontend: make test
	COMMAND='npm run storybook' docker-compose -f container/docker-compose.yml up

icons:
	COMMAND='npm run icons' docker-compose -f container/docker-compose.yml up
## Target Help ##
help:
	@printf "\033[31m%-22s %-59s %s\033[0m\n" "Target" " Help" "Usage"; \
	printf "\033[31m%-22s %-59s %s\033[0m\n"  "------" " ----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-22s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
