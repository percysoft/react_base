# include ./Makefile.local.mk
include ./Makefile.local.mk

.DEFAULT_GOAL := help
.PHONY : resources

## Build firebase ##
build-firebase:  ## Build and prepare to deploy to firebase: make build-firebase env=develop|staging|production
	cd application/ && yarn install && yarn build
	cd deploy/ && rm -rf dist/
	mv application/dist/ deploy/dist/

## Deploy firebase ##
deploy-firebase: ## Deploy to firebase: make deploy-firebase env=develop|staging|production
	@make build-firebase
	cd deploy/ && firebase deploy --only hosting:${env}
## Target Help ##
help:
	@printf "\033[31m%-16s %-59s %s\033[0m\n" "Target" "Help" "Usage"; \
	printf "\033[31m%-16s %-59s %s\033[0m\n" "------" "----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-16s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'



