docker-local-up:
	docker-compose -f docker-compose.local.yaml up --build

docker-local-down:
	docker-compose -f docker-compose.local.yaml down

docker-up:
	docker-compose build --no-cache
	docker-compose up

docker-down:
	docker-compose down
