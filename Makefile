WEB_ROOT:=src/web

${WEB_ROOT}/dist/index.html: $(shell find ${WEB_ROOT}/src -type f)
	cd ${WEB_ROOT} && npm run build

${WEB_ROOT}/dist/index.js: ${WEB_ROOT}/index.js
	cp ${WEB_ROOT}/index.js ${WEB_ROOT}/dist/index.js

.PHONY: build
build: ${WEB_ROOT}/dist/index.html ${WEB_ROOT}/dist/index.js

.PHONY: registry
registry: build
	s registry publish

.PHONY: dev
dev:
	cd ${WEB_ROOT} && npm run dev