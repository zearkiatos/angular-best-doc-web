docker_local_up(){
  docker compose -f docker-compose.local.yaml up --build
}

docker_local_down(){
  docker compose -f docker-compose.local.yaml down
}

docker_up(){
  docker-compose build --no-cache
	docker-compose up
}

docker_down(){
  docker-compose down
}

podman_local_up(){
  podman compose -f docker-compose.local.yaml up --build
}

podman_local_down(){
  podman compose -f docker-compose.local.yaml down
}

podman_up(){
  podman compose build --no-cache
	podman compose up
}

podman_down(){
  podman compose down
}