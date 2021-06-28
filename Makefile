start-docker:
	sudo systemctl start docker

build:
	sudo docker-compose build

up:
	sudo docker-compose up

serve:
	sudo docker-compose up --build