VERSION:=26.2.0

.PHONY:build
build:
	docker build -t scmmanager/node-build:${VERSION} .

.PHONY:publish
publish: build
	docker push scmmanager/node-build:${VERSION}
