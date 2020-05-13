VERSION:=12.16.3

.PHONY:build
build:
	docker build -t scmmanager/node-build:${VERSION} .

.PHONY:publish
publish: build
	docker push scmmanager/node-build:${VERSION}
