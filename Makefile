THIS_DIR := $(CURDIR)

start-docker:
	systemctl start docker

build:
	docker-compose build

up:
	docker-compose up

serve:
	docker-compose up --build

yarn:
	cd app && yarn && cd .. && cd server && yarn