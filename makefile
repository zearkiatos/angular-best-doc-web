docker-local-up:
	docker-compose -f docker-compose.local.yaml up --build

docker-local-down:
	docker-compose -f docker-compose.local.yaml down

docker-up:
	docker-compose build --no-cache
	docker-compose up

docker-down:
	docker-compose down

podman-local-up:
	podman compose -f docker-compose.local.yaml up --build

podman-local-down:
	podman compose -f docker-compose.local.yaml down

podman-up:
	podman compose build --no-cache
	podman compose up

podman-down:
	podman compose down
