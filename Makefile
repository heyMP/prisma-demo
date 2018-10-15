SHELL := /usr/bin/env bash
include .env
export $(shell sed 's/=.*//' .env)
USER=$(shell whoami)

start-prod:
	make build-frontend
	docker-compose up -d --build
	make prisma-update

start-dev:
	docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d
	make prisma-update

build-frontend:
	docker-compose run --rm node npm run parcel:build

prisma-update:
	docker-compose run --rm node npm run prisma:update