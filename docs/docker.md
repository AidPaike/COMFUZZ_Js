
# Deploying docker

1. Go to the `Comfort_Docker_Release` folder

2. `docker-compose up-d` : Use docker compose to create 2 containers: 1 main system container and 1 database
```
Main system container:
    ssh port number :10086
    ssh password :comfuzz

Database:
    Port :8888
    User name :root
    Password :mysql
```

3. `docker exec -it comfort_container bash`enters the container

4. `bash /root/Comfort_all/initialize.sh`: Create database, restore initial seed pool and differential engine database (may take half an hour). If it fails because mysql isn't starting, Wait a minute.