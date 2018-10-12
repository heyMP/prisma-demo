SHELL := /usr/bin/env bash
include .env
export $(shell sed 's/=.*//' .env)
USER=$(shell whoami)

start-prod:
	docker-compose up -d --build

start-dev:
	docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

build-frontend:
	docker-compose run node npm run parcel:build

prisma-update:
	docker-compose run node npm run prisma:update