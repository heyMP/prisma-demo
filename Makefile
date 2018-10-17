SHELL := /usr/bin/env bash
include .env
export $(shell sed 's/=.*//' .env)
USER=$(shell whoami)

start-prod:
	docker-compose build
	make build-frontend
	docker-compose build
	docker-compose up -d
	make prisma-update

start-dev:
	docker-compose build
	docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d
	make prisma-update

build-frontend:
	docker-compose run --rm node npm run parcel:build

prisma-update:
	docker-compose run --rm node npm run prisma:update

# Forces an update
prisma-update-force:
	docker-compose run --rm node npm run prisma:update:force